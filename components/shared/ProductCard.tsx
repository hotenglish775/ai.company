'use client';

import { useState } from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PaymentModal } from '@/components/payment/PaymentModal';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleBuyNow = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <div className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group h-full flex flex-col">
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-3 group-hover:text-electric-400 transition-colors">
            {product.name}
          </h4>
          <p className="text-white/70 text-sm mb-4 leading-relaxed">
            {product.description}
          </p>
          
          <div className="space-y-2 mb-6">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Zap className="w-3 h-3 text-electric-400" />
                <span className="text-xs text-white/60">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xl font-bold gradient-text">{product.price}</span>
              <span className="text-white/60 text-sm">/mo</span>
            </div>
          </div>
          <Button 
            onClick={handleBuyNow}
            className="btn-primary w-full text-sm group"
          >
            Buy Now
            <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        product={product}
      />
    </>
  );
}