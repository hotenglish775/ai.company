import { NextRequest, NextResponse } from 'next/server';

// Mock database function (replace with your actual database)
async function updateOrderStatus(orderId: string, status: string, paymentData: any) {
  console.log('Updating order:', orderId, 'to status:', status);
  // This would update your database
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // In a real implementation, you would verify the webhook signature
    // const signature = request.headers.get('sign');
    // const isValid = verifyCryptomusSignature(body, signature, process.env.CRYPTOMUS_API_KEY);
    
    const { order_id, status, uuid, amount, currency, txid } = body;

    switch (status) {
      case 'paid':
        await updateOrderStatus(order_id, 'completed', {
          cryptomusUuid: uuid,
          transactionId: txid,
          amount,
          currency,
        });
        
        // Send confirmation email here
        console.log('Crypto payment completed for order:', order_id);
        break;

      case 'fail':
      case 'cancel':
        await updateOrderStatus(order_id, 'failed', {
          cryptomusUuid: uuid,
          failureReason: status,
        });
        break;

      case 'process':
        await updateOrderStatus(order_id, 'processing', {
          cryptomusUuid: uuid,
        });
        break;

      case 'confirm_check':
        // Payment is being confirmed
        await updateOrderStatus(order_id, 'confirming', {
          cryptomusUuid: uuid,
        });
        break;

      default:
        console.log(`Unhandled Cryptomus status: ${status}`);
    }

    return NextResponse.json({ result: 0 }); // Cryptomus expects result: 0 for success
  } catch (error) {
    console.error('Cryptomus webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    );
  }
}