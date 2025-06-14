import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Github, Calendar, Users, TrendingUp, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'Portfolio - CognifyAI',
  description: 'Explore our successful AI implementations and case studies. See how we\'ve transformed businesses across various industries with cutting-edge AI solutions.',
};

const projects = [
  {
    id: 'healthcare-ai',
    title: 'Medical Imaging AI for RadiologyTech',
    category: 'Healthcare',
    description: 'Advanced computer vision system for automated medical image analysis, reducing diagnosis time by 75% while improving accuracy to 99.2%.',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['Computer Vision', 'Healthcare', 'Deep Learning'],
    metrics: [
      { label: 'Accuracy Improvement', value: '99.2%' },
      { label: 'Time Reduction', value: '75%' },
      { label: 'Cost Savings', value: '$2.3M' },
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'AWS'],
    duration: '8 months',
    team: '12 specialists',
    featured: true,
  },
  {
    id: 'fintech-fraud',
    title: 'Real-time Fraud Detection for SecureBank',
    category: 'Finance',
    description: 'Machine learning system that detects fraudulent transactions in real-time, preventing $15M in potential losses annually.',
    image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['Machine Learning', 'Real-time Processing', 'Security'],
    metrics: [
      { label: 'Fraud Detection Rate', value: '98.7%' },
      { label: 'False Positives', value: '<0.1%' },
      { label: 'Annual Savings', value: '$15M' },
    ],
    technologies: ['Python', 'Apache Kafka', 'Redis', 'Docker'],
    duration: '6 months',
    team: '8 specialists',
    featured: true,
  },
  {
    id: 'retail-optimization',
    title: 'Supply Chain Optimization for GlobalRetail',
    category: 'Retail',
    description: 'Predictive analytics platform that optimizes inventory management and demand forecasting across 500+ stores.',
    image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['Predictive Analytics', 'Supply Chain', 'Optimization'],
    metrics: [
      { label: 'Inventory Reduction', value: '30%' },
      { label: 'Forecast Accuracy', value: '94%' },
      { label: 'Cost Savings', value: '$8.5M' },
    ],
    technologies: ['Python', 'Scikit-learn', 'PostgreSQL', 'Tableau'],
    duration: '10 months',
    team: '15 specialists',
    featured: false,
  },
  {
    id: 'manufacturing-qc',
    title: 'Quality Control AI for TechManufacturing',
    category: 'Manufacturing',
    description: 'Computer vision system for automated quality inspection, reducing defect rates by 85% in electronics manufacturing.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['Computer Vision', 'Quality Control', 'Manufacturing'],
    metrics: [
      { label: 'Defect Reduction', value: '85%' },
      { label: 'Inspection Speed', value: '10x faster' },
      { label: 'ROI', value: '340%' },
    ],
    technologies: ['OpenCV', 'TensorFlow', 'Edge Computing', 'IoT'],
    duration: '7 months',
    team: '10 specialists',
    featured: false,
  },
  {
    id: 'nlp-customer-service',
    title: 'AI Customer Service for ServiceCorp',
    category: 'Customer Service',
    description: 'Natural language processing system that handles 80% of customer inquiries automatically with 95% satisfaction rate.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['NLP', 'Chatbots', 'Customer Service'],
    metrics: [
      { label: 'Automation Rate', value: '80%' },
      { label: 'Satisfaction Score', value: '95%' },
      { label: 'Response Time', value: '<2 seconds' },
    ],
    technologies: ['BERT', 'GPT', 'Node.js', 'MongoDB'],
    duration: '5 months',
    team: '6 specialists',
    featured: false,
  },
  {
    id: 'energy-optimization',
    title: 'Smart Grid Optimization for PowerCorp',
    category: 'Energy',
    description: 'AI-powered energy distribution system that optimizes power grid efficiency and reduces energy waste by 25%.',
    image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    tags: ['IoT', 'Optimization', 'Smart Grid'],
    metrics: [
      { label: 'Energy Savings', value: '25%' },
      { label: 'Grid Efficiency', value: '92%' },
      { label: 'Cost Reduction', value: '$12M' },
    ],
    technologies: ['Python', 'Apache Spark', 'InfluxDB', 'Grafana'],
    duration: '12 months',
    team: '18 specialists',
    featured: false,
  },
];

const categories = ['All', 'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Customer Service', 'Energy'];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '500+', label: 'AI Models Deployed' },
  { number: '$250M+', label: 'Client Savings Generated' },
  { number: '99.2%', label: 'Average Model Accuracy' },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-electric-500/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span className="text-sm font-medium text-electric-400">Our Work</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI Solutions That <span className="gradient-text">Deliver Results</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Explore our portfolio of successful AI implementations across diverse industries. 
                Each project showcases our commitment to delivering measurable business value.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-800">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured <span className="gradient-text">Case Studies</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Dive deep into our most impactful projects and discover how we've 
                transformed businesses with innovative AI solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <AnimatedSection 
                key={project.id} 
                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={index * 200}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-6 left-6">
                        <span className="bg-electric-500/20 text-electric-400 px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-xl text-white/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center glass-card p-4 rounded-xl">
                          <div className="text-lg font-bold gradient-text">{metric.value}</div>
                          <div className="text-sm text-white/60">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-white/60">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button className="btn-primary">
                      View Case Study
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-24 bg-navy-800">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                All <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Browse our complete portfolio of AI solutions across various industries and use cases.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={project.id} 
                animation="fade-up" 
                delay={index * 100}
              >
                <div className="glass-card rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-electric-500/20 text-electric-400 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-electric-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-white/60">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-electric-600 to-teal-600">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your AI Project?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how we can create a custom AI solution that delivers 
                measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  asChild 
                  className="bg-white text-electric-600 hover:bg-white/90 font-semibold text-lg px-8 py-4"
                >
                  <Link href="/contact">
                    Start Your Project
                    <ExternalLink className="ml-2 w-5 h-5" />
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