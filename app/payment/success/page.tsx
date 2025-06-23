'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Download, ArrowRight, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

interface OrderDetails {
  id: string;
  productName: string;
  productPrice: string;
  customerName: string;
  customerEmail: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
}

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (sessionId) {
        try {
          // Mock order details (replace with actual API call)
          const mockOrder: OrderDetails = {
            id: `order_${Date.now()}`,
            productName: 'AI Email Assistant (Gmail+GPT)',
            productPrice: '$9/mo',
            customerName: 'John Doe',
            customerEmail: 'john@example.com',
            paymentMethod: 'stripe',
            status: 'completed',
            createdAt: new Date().toISOString(),
          };
          
          setOrderDetails(mockOrder);
        } catch (error) {
          console.error('Error fetching order details:', error);
        }
      }
      setLoading(false);
    };

    fetchOrderDetails();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-electric-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Loading your order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900">
      <div className="container-width section-padding py-24">
        <AnimatedSection animation="fade-up">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-electric-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            {/* Success Message */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Payment <span className="gradient-text">Successful</span>!
            </h1>
            <p className="text-xl text-white/70 mb-12">
              Thank you for your purchase! Your AI automation module is being set up 
              and you'll receive access details shortly.
            </p>

            {/* Order Details */}
            {orderDetails && (
              <div className="glass-card p-8 rounded-2xl mb-8 text-left">
                <h2 className="text-2xl font-semibold mb-6 text-center">Order Details</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Order ID:</span>
                    <span className="font-mono text-electric-400">{orderDetails.id}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Product:</span>
                    <span className="font-semibold">{orderDetails.productName}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Price:</span>
                    <span className="font-semibold gradient-text">{orderDetails.productPrice}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Customer:</span>
                    <span>{orderDetails.customerName}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Email:</span>
                    <span>{orderDetails.customerEmail}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3">
                    <span className="text-white/70">Status:</span>
                    <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                      {orderDetails.status}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Next Steps */}
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold mb-6">What's Next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-electric-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Check Your Email</h4>
                    <p className="text-white/70 text-sm">
                      You'll receive a confirmation email with setup instructions within 5 minutes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Setup Call (Optional)</h4>
                    <p className="text-white/70 text-sm">
                      Schedule a free 30-minute setup call with our team to get you started.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-electric-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Download className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Access Your Dashboard</h4>
                    <p className="text-white/70 text-sm">
                      Your automation module will be ready within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button asChild className="btn-primary text-lg px-8 py-4">
                <Link href="/contact">
                  Schedule Setup Call
                  <Calendar className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild className="btn-secondary text-lg px-8 py-4">
                <Link href="/services">
                  Browse More Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Support */}
            <div className="mt-12 p-6 bg-white/5 rounded-xl">
              <p className="text-white/70 mb-2">Need help or have questions?</p>
              <p className="text-electric-400">
                Contact our support team at{' '}
                <a href="mailto:support@cognifyai.com" className="underline hover:text-electric-300">
                  support@cognifyai.com
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}