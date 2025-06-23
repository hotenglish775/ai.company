'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Sparkles,
  MessageSquare,
  Calendar,
  Users,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch via email',
    contact: 'hello@revolution-ai.co.uk',
    action: 'mailto:hello@revolution-ai.co.uk',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our team',
    contact: '+44 (0) 20 7946 0958',
    action: 'tel:+442079460958',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our headquarters',
    contact: 'London, United Kingdom',
    action: '#',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Monday - Friday',
    contact: '9:00 AM - 6:00 PM GMT',
    action: '#',
  },
];

const services = [
  'AI Strategy Consulting',
  'Custom AI Model Development',
  'Natural Language Processing',
  'Computer Vision Solutions',
  'Predictive Analytics',
  'AI Security & Compliance',
  'Automation Workflows',
  'Other',
];

const budgetRanges = [
  'Under £25,000',
  '£25,000 - £50,000',
  '£50,000 - £100,000',
  '£100,000 - £250,000',
  '£250,000+',
  'Not sure yet',
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  honeypot: string; // Hidden spam prevention field
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    honeypot: '', // Hidden field
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !/^[\d+\s()-]{10,20}$/.test(formData.phone.replace(/[^\d+\s()-]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      if (data.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.error || 'Submission failed');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-electric-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Thank You for <span className="gradient-text">Reaching Out</span>!
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                We've received your message and our team will get back to you within 24 hours. 
                We're excited to discuss how we can help transform your business with AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      company: '',
                      phone: '',
                      service: '',
                      budget: '',
                      timeline: '',
                      message: '',
                      honeypot: '',
                    });
                    setErrors({});
                  }}
                  className="btn-primary"
                >
                  Send Another Message
                </Button>
                <Button 
                  asChild 
                  className="btn-secondary"
                >
                  <a href="/">Return Home</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-electric-400/10 rounded-full px-6 py-3 mb-6">
                <Sparkles className="w-5 h-5 text-electric-400" />
                <span className="text-sm font-medium text-electric-400">Get In Touch</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Let's Build the Future <span className="gradient-text">Together</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Ready to transform your business with AI? Our experts are here to help you 
                navigate your AI journey and create solutions that drive real results.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <AnimatedSection animation="slide-in-left">
                <div className="sticky top-8">
                  <h2 className="text-3xl font-bold mb-8">
                    Get in <span className="gradient-text">Touch</span>
                  </h2>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Have questions about our AI solutions? Want to discuss a project? 
                    Our team of experts is ready to help you explore the possibilities.
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={info.title} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-electric-400 to-teal-400 rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                          <p className="text-white/60 text-sm mb-1">{info.description}</p>
                          {info.action.startsWith('mailto:') || info.action.startsWith('tel:') ? (
                            <a 
                              href={info.action}
                              className="text-electric-400 hover:text-electric-300 transition-colors"
                            >
                              {info.contact}
                            </a>
                          ) : (
                            <span className="text-white/80">{info.contact}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-6 glass-card rounded-2xl border border-white/10">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-electric-400" />
                      Schedule a Call
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      Prefer to talk? Schedule a 30-minute consultation with our AI experts.
                    </p>
                    <Button className="btn-secondary w-full">
                      Book a Meeting
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="slide-in-right">
                <div className="glass-card p-8 rounded-3xl border border-white/10">
                  <div className="flex items-center space-x-3 mb-8">
                    <MessageSquare className="w-8 h-8 text-electric-400" />
                    <h2 className="text-3xl font-bold">Send us a Message</h2>
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <p className="text-red-400">{submitError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent transition-all ${
                            errors.firstName ? 'border-red-500' : 'border-white/20'
                          }`}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent transition-all ${
                            errors.lastName ? 'border-red-500' : 'border-white/20'
                          }`}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Email and Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent transition-all ${
                            errors.email ? 'border-red-500' : 'border-white/20'
                          }`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent transition-all ${
                          errors.phone ? 'border-red-500' : 'border-white/20'
                        }`}
                        placeholder="+44 20 7946 0958"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Service and Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent transition-all"
                        >
                          <option value="" className="bg-navy-800">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-navy-800">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent transition-all"
                        >
                          <option value="" className="bg-navy-800">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range} className="bg-navy-800">
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-white/80 mb-2">
                        Project Timeline
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent transition-all"
                        placeholder="e.g., 3-6 months, ASAP, Q2 2024"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-400 focus:border-transparent transition-all resize-none ${
                          errors.message ? 'border-red-500' : 'border-white/20'
                        }`}
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary text-lg py-4 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-white/60 text-sm text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-navy-800">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Have questions before reaching out? Here are some common questions 
                we receive from potential clients.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'How long does a typical AI project take?',
                  answer: 'Project timelines vary based on complexity, but most projects range from 3-12 months. We provide detailed timelines during our initial consultation.',
                },
                {
                  question: 'Do you work with small businesses?',
                  answer: 'Yes! We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and tailored to your specific needs.',
                },
                {
                  question: 'What industries do you serve?',
                  answer: 'We serve diverse industries including healthcare, finance, retail, manufacturing, and more. Our AI solutions are adaptable to various business contexts.',
                },
                {
                  question: 'Do you provide ongoing support?',
                  answer: 'Absolutely. We offer comprehensive support packages including monitoring, maintenance, updates, and optimization to ensure your AI solutions continue performing optimally.',
                },
              ].map((faq, index) => (
                <AnimatedSection key={faq.question} animation="fade-up" delay={index * 100}>
                  <div className="glass-card p-6 rounded-xl border border-white/10">
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
    </div>
  );
}