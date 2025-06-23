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
  // In production, integrate with your email service (SendGrid, AWS SES, etc.)
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing Stripe signature' },
        { status: 400 }
      );
    }

    // In production, verify the webhook signature
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (webhookSecret) {
      const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
      
      try {
        const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
        
        switch (event.type) {
          case 'checkout.session.completed':
            const session = event.data.object;
            const orderId = session.metadata?.orderId;
            
            if (orderId) {
              await updateOrderStatus(orderId, 'completed', {
                stripeSessionId: session.id,
                paymentIntentId: session.payment_intent,
                amountTotal: session.amount_total,
                currency: session.currency,
                customerEmail: session.customer_email,
              });
              
              // Send confirmation email
              if (session.customer_email) {
                await sendConfirmationEmail(session.customer_email, {
                  orderId,
                  productName: session.metadata?.productName,
                  amount: session.amount_total,
                });
              }
              
              console.log('Stripe payment completed for order:', orderId);
            }
            break;

          case 'checkout.session.expired':
            const expiredSession = event.data.object;
            const expiredOrderId = expiredSession.metadata?.orderId;
            
            if (expiredOrderId) {
              await updateOrderStatus(expiredOrderId, 'expired', {
                stripeSessionId: expiredSession.id,
              });
            }
            break;

          case 'invoice.payment_succeeded':
            const invoice = event.data.object;
            console.log('Subscription payment succeeded:', invoice.id);
            break;

          case 'invoice.payment_failed':
            const failedInvoice = event.data.object;
            console.log('Subscription payment failed:', failedInvoice.id);
            break;

          case 'customer.subscription.deleted':
            const subscription = event.data.object;
            console.log('Subscription cancelled:', subscription.id);
            break;

          default:
            console.log(`Unhandled Stripe event type: ${event.type}`);
        }
      } catch (err) {
        console.error('Stripe webhook signature verification failed:', err);
        return NextResponse.json(
          { error: 'Webhook signature verification failed' },
          { status: 400 }
        );
      }
    } else {
      // For development/testing without webhook secret
      const event = JSON.parse(body);
      console.log('Processing Stripe webhook (no signature verification):', event.type);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    );
  }
}