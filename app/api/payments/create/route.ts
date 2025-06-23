import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Types
interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
}

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface PaymentRequest {
  product: Product;
  customer: Customer;
  paymentMethod: 'stripe' | 'cryptomus';
}

interface Order {
  id: string;
  productId: string;
  productName: string;
  productPrice: string;
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
}

// In-memory storage (replace with actual database in production)
const orders: Order[] = [];

// Database functions
async function createOrder(orderData: Omit<Order, 'id' | 'createdAt'>): Promise<Order> {
  const order: Order = {
    id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...orderData,
    createdAt: new Date().toISOString(),
  };
  
  orders.push(order);
  console.log('Order created:', order);
  return order;
}

// Stripe integration
async function createStripeCheckout(product: Product, customer: Customer, orderId: string) {
  const priceInCents = Math.round(parseFloat(product.price.replace(/[^0-9.]/g, '')) * 100);
  
  // In production, use actual Stripe SDK
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: priceInCents,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      customer_email: customer.email,
      metadata: {
        orderId,
        productId: product.id,
        customerName: `${customer.firstName} ${customer.lastName}`,
        customerPhone: customer.phone,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://revolution-ai.co.uk'}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://revolution-ai.co.uk'}/payment/cancelled`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    });

    return {
      id: session.id,
      url: session.url,
    };
  } catch (error) {
    console.error('Stripe error:', error);
    throw new Error('Failed to create Stripe checkout session');
  }
}

// Cryptomus integration
async function createCryptomusPayment(product: Product, customer: Customer, orderId: string) {
  const priceInUSD = parseFloat(product.price.replace(/[^0-9.]/g, ''));
  
  const merchantId = process.env.CRYPTOMUS_MERCHANT_ID;
  const apiKey = process.env.CRYPTOMUS_API_KEY;
  
  if (!merchantId || !apiKey) {
    throw new Error('Cryptomus credentials not configured');
  }

  const data = {
    amount: priceInUSD.toString(),
    currency: 'USD',
    order_id: orderId,
    url_return: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://revolution-ai.co.uk'}/payment/success`,
    url_callback: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://revolution-ai.co.uk'}/api/webhooks/cryptomus`,
    is_payment_multiple: false,
    lifetime: 7200, // 2 hours
    to_currency: 'USDT',
    additional_data: JSON.stringify({
      productId: product.id,
      customerName: `${customer.firstName} ${customer.lastName}`,
      customerEmail: customer.email,
      customerPhone: customer.phone,
    }),
  };

  // Create signature
  const dataString = Buffer.from(JSON.stringify(data)).toString('base64');
  const signature = crypto
    .createHash('md5')
    .update(dataString + apiKey)
    .digest('hex');

  try {
    const response = await fetch('https://api.cryptomus.com/v1/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'merchant': merchantId,
        'sign': signature,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Cryptomus API error: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.state !== 0) {
      throw new Error(result.message || 'Cryptomus payment creation failed');
    }

    return {
      uuid: result.result.uuid,
      url: result.result.url,
      qr_code: result.result.qr_code,
    };
  } catch (error) {
    console.error('Cryptomus error:', error);
    throw new Error('Failed to create Cryptomus payment');
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: PaymentRequest = await request.json();
    const { product, customer, paymentMethod } = body;

    // Validate input
    if (!product || !customer || !paymentMethod) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate customer data
    if (!customer.firstName || !customer.lastName || !customer.email || !customer.phone) {
      return NextResponse.json(
        { success: false, error: 'All customer fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customer.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create order in database
    const order = await createOrder({
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      customerFirstName: customer.firstName,
      customerLastName: customer.lastName,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      paymentMethod,
      status: 'pending',
    });

    if (paymentMethod === 'stripe') {
      const stripeSession = await createStripeCheckout(product, customer, order.id);
      
      return NextResponse.json({
        success: true,
        checkoutUrl: stripeSession.url,
        sessionId: stripeSession.id,
        orderId: order.id,
      });
    } else if (paymentMethod === 'cryptomus') {
      const cryptomusPayment = await createCryptomusPayment(product, customer, order.id);
      
      return NextResponse.json({
        success: true,
        paymentUrl: cryptomusPayment.url,
        paymentId: cryptomusPayment.uuid,
        orderId: order.id,
        qrCode: cryptomusPayment.qr_code,
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid payment method' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Internal server error' 
      },
      { status: 500 }
    );
  }
}