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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="glass-card rounded-3xl p-8 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white/70" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Complete Your Purchase</h2>
            <p className="text-white/70">Secure checkout powered by Stripe & Cryptomus</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'info' ? 'bg-electric-500 text-white' : 
                step === 'payment' || step === 'processing' ? 'bg-electric-500/20 text-electric-400' : 
                'bg-white/10 text-white/50'
              }`}>
                {step === 'payment' || step === 'processing' ? <CheckCircle className="w-4 h-4" /> : '1'}
              </div>
              <div className={`w-16 h-0.5 ${
                step === 'payment' || step === 'processing' ? 'bg-electric-500' : 'bg-white/20'
              }`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'payment' ? 'bg-electric-500 text-white' : 
                step === 'processing' ? 'bg-electric-500/20 text-electric-400' : 
                'bg-white/10 text-white/50'
              }`}>
                {step === 'processing' ? <CheckCircle className="w-4 h-4" /> : '2'}
              </div>
              <div className={`w-16 h-0.5 ${
                step === 'processing' ? 'bg-electric-500' : 'bg-white/20'
              }`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'processing' ? 'bg-electric-500 text-white' : 'bg-white/10 text-white/50'
              }`}>
                {step === 'processing' && isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : '3'}
              </div>
            </div>
          </div>

          {/* Product Summary */}
          <div className="glass-card p-6 rounded-xl mb-8">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-white/70 text-sm mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold gradient-text">{product.price}</div>
              <div className="text-white/60">Monthly subscription</div>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-400">{errorMessage}</p>
            </div>
          )}

          {/* Step Content */}
          {step === 'info' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Customer Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-500 transition-all ${
                      errors.firstName ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-500 transition-all ${
                      errors.lastName ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-500 transition-all ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-500 transition-all ${
                    errors.phone ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <Button 
                onClick={handleContinueToPayment}
                className="w-full btn-primary text-lg py-4"
              >
                Continue to Payment
              </Button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Choose Payment Method</h3>
              
              {/* Payment Method Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('stripe')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === 'stripe'
                      ? 'border-electric-500 bg-electric-500/10'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <CreditCard className="w-6 h-6 text-electric-400" />
                    <span className="font-semibold">Credit/Debit Card</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Secure payment via Stripe. Supports all major cards.
                  </p>
                </button>

                <button
                  onClick={() => setPaymentMethod('cryptomus')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === 'cryptomus'
                      ? 'border-electric-500 bg-electric-500/10'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Bitcoin className="w-6 h-6 text-electric-400" />
                    <span className="font-semibold">Cryptocurrency</span>
                  </div>
                  <p className="text-white/70 text-sm">
                    Pay with Bitcoin, USDT, ETH, and other cryptocurrencies.
                  </p>
                </button>
              </div>

              {/* Security Notice */}
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl">
                <Shield className="w-5 h-5 text-teal-400" />
                <div>
                  <p className="text-white font-medium">Secure Payment</p>
                  <p className="text-white/70 text-sm">
                    Your payment information is encrypted and secure.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  onClick={() => setStep('info')}
                  className="flex-1 btn-secondary"
                >
                  Back
                </Button>
                <Button 
                  onClick={handlePayment}
                  className="flex-1 btn-primary"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    `Pay ${product.price}/mo`
                  )}
                </Button>
              </div>
            </div>
          )}

          {step === 'processing' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Processing Payment</h3>
              <p className="text-white/70">
                Please wait while we redirect you to the payment processor...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}