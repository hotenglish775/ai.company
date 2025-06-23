'use client';

import Link from 'next/link';
import { XCircle, ArrowLeft, RefreshCw, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen bg-navy-900">
      <div className="container-width section-padding py-24">
        <AnimatedSection animation="fade-up">
          <div className="max-w-2xl mx-auto text-center">
            {/* Cancelled Icon */}
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <XCircle className="w-10 h-10 text-white" />
            </div>

            {/* Cancelled Message */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Payment <span className="text-red-400">Cancelled</span>
            </h1>
            <p className="text-xl text-white/70 mb-12">
              Your payment was cancelled. No charges have been made to your account. 
              You can try again or contact us if you need assistance.
            </p>

            {/* Reasons */}
            <div className="glass-card p-8 rounded-2xl mb-8 text-left">
              <h2 className="text-xl font-semibold mb-6 text-center">Common Reasons for Cancellation</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-400 rounded-full mt-2"></div>
                  <p className="text-white/70">Payment window closed or expired</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-400 rounded-full mt-2"></div>
                  <p className="text-white/70">Browser back button was used during payment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-400 rounded-full mt-2"></div>
                  <p className="text-white/70">Payment method was declined</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-400 rounded-full mt-2"></div>
                  <p className="text-white/70">Technical issue during processing</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <Button asChild className="btn-primary text-lg px-8 py-4">
                <Link href="/services">
                  <RefreshCw className="mr-2 w-5 h-5" />
                  Try Again
                </Link>
              </Button>
              
              <Button asChild className="btn-secondary text-lg px-8 py-4">
                <Link href="/pricing">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back to Pricing
                </Link>
              </Button>
            </div>

            {/* Help Section */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <p className="text-white/70 mb-4">
                If you're experiencing issues with payment or have questions about our services, 
                we're here to help.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button asChild className="btn-secondary">
                  <Link href="/contact">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    Contact Support
                  </Link>
                </Button>
                
                <div className="text-white/60">
                  or email us at{' '}
                  <a 
                    href="mailto:support@cognifyai.com" 
                    className="text-electric-400 hover:text-electric-300 underline"
                  >
                    support@cognifyai.com
                  </a>
                </div>
              </div>
            </div>

            {/* Alternative Options */}
            <div className="mt-12 p-6 bg-white/5 rounded-xl">
              <h4 className="font-semibold mb-3">Alternative Payment Methods</h4>
              <p className="text-white/70 text-sm mb-4">
                We accept both traditional payment methods (credit/debit cards) and cryptocurrencies. 
                You can also contact us for custom payment arrangements.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-white/60">
                <span>💳 Credit/Debit Cards</span>
                <span>₿ Cryptocurrency</span>
                <span>🏦 Bank Transfer</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}