'use client';

import { useState } from 'react';
import { X, CreditCard, Bitcoin, Shield, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

type PaymentMethod = 'stripe' | 'cryptomus';

export function PaymentModal({ isOpen, onClose, product }: PaymentModalProps) {
  const [step, setStep] = useState<'info' | 'payment' | 'processing'>('info');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('stripe');
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Partial<CustomerInfo>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen || !product) return null;

  const validateForm = (): boolean => {
    const newErrors: Partial<CustomerInfo> = {};
    
    if (!customerInfo.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!customerInfo.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!customerInfo.phone.trim()) newErrors.phone = 'Phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleContinueToPayment = () => {
    if (validateForm()) {
      setStep('payment');
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    setStep('processing');
    setErrorMessage('');

    try {
      const response = await fetch('/api/payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product,
          customer: customerInfo,
          paymentMethod,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Payment creation failed');
      }

      if (data.success) {
        if (paymentMethod === 'stripe' && data.checkoutUrl) {
          window.location.href = data.checkoutUrl;
        } else if (paymentMethod === 'cryptomus' && data.paymentUrl) {
          window.location.href = data.paymentUrl;
        } else {
          throw new Error('Invalid payment response');
        }
      } else {
        throw new Error(data.error || 'Payment creation failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
      setIsProcessing(false);
      setStep('payment');
    }
  };

  const resetModal = () => {
    setStep('info');
    setPaymentMethod('stripe');
    setCustomerInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
    setErrors({});
    setIsProcessing(false);
    setErrorMessage('');
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal - Much Wider */}
      <div className="relative w-full max-w-4xl bg-navy-900/95 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-10"
        >
          <X className="w-6 h-6 text-white/70" />
        </button>

        {/* Content */}
        <div className="p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Complete Your Purchase</h2>
            <p className="text-xl text-white/70">Secure checkout powered by Stripe & Cryptomus</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-8">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${
                step === 'info' ? 'bg-electric-500 text-white' : 
                step === 'payment' || step === 'processing' ? 'bg-electric-500/20 text-electric-400' : 
                'bg-white/10 text-white/50'
              }`}>
                {step === 'payment' || step === 'processing' ? <CheckCircle className="w-6 h-6" /> : '1'}
              </div>
              <div className={`w-24 h-1 rounded-full ${
                step === 'payment' || step === 'processing' ? 'bg-electric-500' : 'bg-white/20'
              }`} />
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${
                step === 'payment' ? 'bg-electric-500 text-white' : 
                step === 'processing' ? 'bg-electric-500/20 text-electric-400' : 
                'bg-white/10 text-white/50'
              }`}>
                {step === 'processing' ? <CheckCircle className="w-6 h-6" /> : '2'}
              </div>
              <div className={`w-24 h-1 rounded-full ${
                step === 'processing' ? 'bg-electric-500' : 'bg-white/20'
              }`} />
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${
                step === 'processing' ? 'bg-electric-500 text-white' : 'bg-white/10 text-white/50'
              }`}>
                {step === 'processing' && isProcessing ? <Loader2 className="w-6 h-6 animate-spin" /> : '3'}
              </div>
            </div>
          </div>

          {/* Product Summary */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl mb-8">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-white/70 text-lg">{product.description}</p>
              </div>
              <div className="text-right ml-8">
                <div className="text-3xl font-bold gradient-text">{product.price}</div>
                <div className="text-white/60 text-lg">per month</div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-8 p-6 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center space-x-4">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-lg">{errorMessage}</p>
            </div>
          )}

          {/* Step Content */}
          {step === 'info' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Customer Information</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-white/80 mb-3">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full px-6 py-4 text-lg bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-500 transition-all ${
                      errors.firstName ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-2">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-lg font-medium text-white/80 mb-3">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full px-6 py-4 text-lg bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-500 transition-all ${
                      errors.lastName ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-2">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium text-white/80 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-6 py-4 text-lg bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-500 transition-all ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-lg font-medium text-white/80 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-6 py-4 text-lg bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-500 transition-all ${
                    errors.phone ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                )}
              </div>

              <Button 
                onClick={handleContinueToPayment}
                className="w-full btn-primary text-xl py-6"
              >
                Continue to Payment
              </Button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Choose Payment Method</h3>
              
              {/* Payment Method Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  onClick={() => setPaymentMethod('stripe')}
                  className={`p-8 rounded-2xl border-2 transition-all text-left ${
                    paymentMethod === 'stripe'
                      ? 'border-electric-500 bg-electric-500/10'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <CreditCard className="w-8 h-8 text-electric-400" />
                    <span className="font-semibold text-xl">Credit/Debit Card</span>
                  </div>
                  <p className="text-white/70 text-lg">
                    Secure payment via Stripe. Supports all major credit and debit cards worldwide.
                  </p>
                </button>

                <button
                  onClick={() => setPaymentMethod('cryptomus')}
                  className={`p-8 rounded-2xl border-2 transition-all text-left ${
                    paymentMethod === 'cryptomus'
                      ? 'border-electric-500 bg-electric-500/10'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <Bitcoin className="w-8 h-8 text-electric-400" />
                    <span className="font-semibold text-xl">Cryptocurrency</span>
                  </div>
                  <p className="text-white/70 text-lg">
                    Pay with Bitcoin, USDT, Ethereum, and other popular cryptocurrencies.
                  </p>
                </button>
              </div>

              {/* Security Notice */}
              <div className="flex items-center space-x-4 p-6 bg-white/5 rounded-xl">
                <Shield className="w-6 h-6 text-teal-400" />
                <div>
                  <p className="text-white font-medium text-lg">Secure Payment</p>
                  <p className="text-white/70">Your payment information is encrypted and secure. We never store your payment details.</p>
                </div>
              </div>

              <div className="flex space-x-6">
                <Button 
                  onClick={() => setStep('info')}
                  className="flex-1 btn-secondary text-xl py-6"
                >
                  Back
                </Button>
                <Button 
                  onClick={handlePayment}
                  className="flex-1 btn-primary text-xl py-6"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-3" />
                      Processing...
                    </>
                  ) : (
                    `Pay ${product.price}/month`
                  )}
                </Button>
              </div>
            </div>
          )}

          {step === 'processing' && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-electric-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Loader2 className="w-10 h-10 text-white animate-spin" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Processing Payment</h3>
              <p className="text-white/70 text-lg">
                Please wait while we redirect you to the secure payment processor...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}