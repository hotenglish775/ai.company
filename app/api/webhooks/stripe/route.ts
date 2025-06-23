import { NextRequest, NextResponse } from 'next/server';

// Mock database function (replace with your actual database)
async function updateOrderStatus(orderId: string, status: string, paymentData: any) {
  console.log('Updating order:', orderId, 'to status:', status);
  // This would update your database
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    // In a real implementation, you would verify the webhook signature
    // const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);

    // Mock event parsing
    const event = JSON.parse(body);

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
          });
          
          // Send confirmation email here
          console.log('Payment completed for order:', orderId);
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

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        // Handle failed payment
        console.log('Payment failed:', failedPayment.id);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
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