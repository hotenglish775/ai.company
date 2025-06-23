import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Mock database function (replace with your actual database)
async function updateOrderStatus(orderId: string, status: string, paymentData: any) {
  console.log('Updating order:', orderId, 'to status:', status, 'with data:', paymentData);
  // In production, update your actual database
  return true;
}

async function sendConfirmationEmail(customerEmail: string, orderData: any) {
  console.log('Sending confirmation email to:', customerEmail);
  // In production, integrate with your email service
  return true;
}

function verifySignature(data: any, signature: string, apiKey: string): boolean {
  const dataString = Buffer.from(JSON.stringify(data)).toString('base64');
  const expectedSignature = crypto
    .createHash('md5')
    .update(dataString + apiKey)
    .digest('hex');
  
  return signature === expectedSignature;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const signature = request.headers.get('sign');
    
    // Verify webhook signature in production
    const apiKey = process.env.CRYPTOMUS_API_KEY;
    if (apiKey && signature) {
      const isValid = verifySignature(body, signature, apiKey);
      if (!isValid) {
        console.error('Cryptomus webhook signature verification failed');
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 400 }
        );
      }
    }
    
    const { order_id, status, uuid, amount, currency, txid, additional_data } = body;

    let customerData = {};
    if (additional_data) {
      try {
        customerData = JSON.parse(additional_data);
      } catch (e) {
        console.error('Failed to parse additional_data:', e);
      }
    }

    switch (status) {
      case 'paid':
        await updateOrderStatus(order_id, 'completed', {
          cryptomusUuid: uuid,
          transactionId: txid,
          amount,
          currency,
          ...customerData,
        });
        
        // Send confirmation email
        if (customerData.customerEmail) {
          await sendConfirmationEmail(customerData.customerEmail, {
            orderId: order_id,
            productName: customerData.productName,
            amount,
            currency,
          });
        }
        
        console.log('Cryptomus payment completed for order:', order_id);
        break;

      case 'fail':
      case 'cancel':
        await updateOrderStatus(order_id, 'failed', {
          cryptomusUuid: uuid,
          failureReason: status,
        });
        console.log(`Cryptomus payment ${status} for order:`, order_id);
        break;

      case 'process':
        await updateOrderStatus(order_id, 'processing', {
          cryptomusUuid: uuid,
        });
        console.log('Cryptomus payment processing for order:', order_id);
        break;

      case 'confirm_check':
        await updateOrderStatus(order_id, 'confirming', {
          cryptomusUuid: uuid,
        });
        console.log('Cryptomus payment confirming for order:', order_id);
        break;

      case 'wrong_amount':
        await updateOrderStatus(order_id, 'failed', {
          cryptomusUuid: uuid,
          failureReason: 'wrong_amount',
        });
        console.log('Cryptomus wrong amount for order:', order_id);
        break;

      case 'cancel_timeout':
        await updateOrderStatus(order_id, 'expired', {
          cryptomusUuid: uuid,
          failureReason: 'timeout',
        });
        console.log('Cryptomus payment timeout for order:', order_id);
        break;

      default:
        console.log(`Unhandled Cryptomus status: ${status} for order: ${order_id}`);
    }

    // Cryptomus expects result: 0 for success
    return NextResponse.json({ result: 0 });
  } catch (error) {
    console.error('Cryptomus webhook error:', error);
    return NextResponse.json(
      { result: 1, error: 'Webhook handler failed' },
      { status: 400 }
    );
  }
}