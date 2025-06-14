import { Metadata } from 'next';
import Link from 'next/link';
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'Pricing - CognifyAI',
  description: 'Transparent pricing for AI consulting, custom models, and enterprise solutions. Choose the plan that fits your business needs.',
};

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses exploring AI',
    price: '$5,000',
    period: '/month',
    popular: false,
    features: [
      'AI Strategy Consultation (4 hours)',
      'Basic chatbot implementation',
      'Data analysis report',
      'Email support',
      'Basic dashboard access',
      '1 AI model deployment',
      'Monthly performance review'
    ],
    limitations: [
      'Up to 1,000 API calls/month',
      'Standard support response',
      'Basic integrations only'
    ],
    cta: 'Start Free Trial',
    href: '/contact?plan=starter'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing companies ready to scale',
    price: '$15,000',
    period: '/month',
    popular: true,
    features: [
      'Everything in Starter',
      'Custom AI model development',
      'Advanced NLP capabilities',
      'Computer vision solutions',
      'Priority support',
      'Advanced analytics dashboard',
      'API integrations',
      'Bi-weekly strategy calls',
      'Performance optimization'
    ],
    limitations: [
      'Up to 10,000 API calls/month',
      'Business hours support',
      'Standard SLA'
    ],
    cta: 'Get Started',
    href: '/contact?plan=professional'
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for large organizations',
    price: 'Custom',
    period: 'pricing',
    popular: false,
    features: [
      'Everything in Professional',
      'Dedicated AI team',
      'Custom model architecture',
      'Multi-cloud deployment',
      '24/7 priority support',
      'Advanced security features',
      'Compliance consulting',
      'On-premise deployment option',
      'Executive reporting',
      'Custom integrations',
      'Training & workshops'
    ],
    limitations: [
      'Unlimited API calls',
      '24/7 dedicated support',
      'Enterprise SLA'
    ],
    cta: 'Contact Sales',
    href: '/contact?plan=enterprise'
  }
];

const addOns = [
  {
    name: 'Additional AI Models',
    description: 'Deploy extra specialized models',
    price: '$2,500/model/month'
  },
  {
    name: 'Data Engineering',
    description: 'Advanced data pipeline setup',
    price: '$5,000/month'
  },
  {
    name: 'Training & Workshops',
    description: 'Team training sessions',
    price: '$1,500/session'
  },
  {
    name: 'Compliance Audit',
    description: 'AI ethics and compliance review',
    price: '$7,500/audit'
  }
];

const faqs = [
  {
    question: 'What\'s included in the free trial?',
    answer: 'The free trial includes access to our basic AI consultation, sample dashboard, and limited API calls to test our services.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.'
  },
  {
    question: 'Do you offer custom pricing for specific needs?',
    answer: 'Absolutely! We understand every business is unique. Contact our sales team for custom pricing based on your specific requirements.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer different levels of support based on your plan, from email support to 24/7 dedicated support with enterprise SLA.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Implementation timelines vary based on complexity. Simple solutions can be deployed in 2-4 weeks, while custom enterprise solutions may take 2-6 months.'
  },
  {
    question: 'Do you provide training for our team?',
    answer: 'Yes, we offer comprehensive training programs and workshops to ensure your team can effectively use and maintain AI solutions.'
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-electric-500/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span className="text-sm font-medium text-electric-400">Transparent Pricing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Choose Your <span className="gradient-text">AI Journey</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Flexible pricing options designed to scale with your business. 
                Start small and grow into enterprise-level AI capabilities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <AnimatedSection 
                key={plan.name} 
                animation="fade-up" 
                delay={index * 150}
              >
                <div className={`relative glass-card rounded-3xl p-8 h-full flex flex-col ${
                  plan.popular 
                    ? 'ring-2 ring-electric-500 bg-card-gradient' 
                    : 'hover:bg-white/10'
                } transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-electric-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-white/70 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl md:text-5xl font-bold gradient-text">
                        {plan.price}
                      </span>
                      <span className="text-white/60 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {plan.limitations.length > 0 && (
                      <div className="border-t border-white/10 pt-6 mb-8">
                        <h4 className="text-sm font-semibold text-white/60 mb-3">Plan Limits:</h4>
                        <div className="space-y-2">
                          {plan.limitations.map((limitation) => (
                            <div key={limitation} className="text-sm text-white/60">
                              • {limitation}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <Button 
                    asChild 
                    className={`w-full ${
                      plan.popular 
                        ? 'btn-primary' 
                        : 'btn-secondary'
                    }`}
                  >
                    <Link href={plan.href}>
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-navy-800">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Add-on <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Enhance your AI capabilities with additional services 
                tailored to your specific business needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <AnimatedSection 
                key={addon.name} 
                animation="fade-up" 
                delay={index * 100}
              >
                <div className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-3">{addon.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{addon.description}</p>
                  <div className="text-electric-400 font-semibold">{addon.price}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Have questions about our pricing? Here are the most common 
                questions we receive from our clients.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <AnimatedSection 
                  key={faq.question} 
                  animation="fade-up" 
                  delay={index * 100}
                >
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-3 text-electric-400">
                      {faq.question}
                    </h3>
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-electric-600 to-teal-600">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Start your AI journey today with a free consultation. 
                Our experts will help you choose the right plan for your needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  asChild 
                  className="bg-white text-electric-600 hover:bg-white/90 font-semibold text-lg px-8 py-4"
                >
                  <Link href="/contact">
                    Start Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-600 font-semibold text-lg px-8 py-4"
                >
                  <Link href="/services">
                    View Services
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}