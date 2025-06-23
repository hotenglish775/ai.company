'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PaymentModal } from '@/components/payment/PaymentModal';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface ServiceCardProps {
  service: Service;
  delay?: number;
  showBuyButton?: boolean;
}

export function ServiceCard({ service, delay = 0, showBuyButton = true }: ServiceCardProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Convert service to product format for payment modal
  const productForPayment = {
    id: service.id,
    name: service.title,
    description: service.description,
    price: service.price,
    features: service.features.slice(0, 4), // Limit to 4 features for display
  };

  const handleBuyNow = () => {
    setIsPaymentModalOpen(true);
  };

  const isCustomPricing = service.price.toLowerCase().includes('custom') || 
                         service.price.toLowerCase().includes('contact');

  return (
    <>
      <div className="glass-card p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
        <div className="flex-1">
          {service.icon && (
            <div className="w-14 h-14 bg-gradient-to-r from-electric-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300">
              <service.icon className="w-7 h-7 text-white" />
            </div>
          )}
          
          <h3 className="text-xl font-semibold mb-4 group-hover:text-electric-400 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-white/70 mb-6 leading-relaxed">
            {service.description}
          </p>
          
          <div className="space-y-3 mb-6">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {service.timeline && (
            <div className="text-sm text-white/60 mb-4">
              <span className="font-medium">Timeline:</span> {service.timeline}
            </div>
          )}
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold gradient-text">{service.price}</div>
          </div>
          
          {showBuyButton && (
            <Button 
              onClick={isCustomPricing ? undefined : handleBuyNow}
              asChild={isCustomPricing}
              className="btn-primary w-full group"
            >
              {isCustomPricing ? (
                <a href="/contact">
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <>
                  Buy Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {!isCustomPricing && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          product={productForPayment}
        />
      )}
    </>
  );
}