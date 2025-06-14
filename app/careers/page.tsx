import { Metadata } from 'next';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  Heart, 
  Lightbulb, 
  Target,
  ArrowRight,
  Sparkles,
  Coffee,
  Laptop,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'Careers - CognifyAI',
  description: 'Join our team of AI experts and help shape the future of artificial intelligence. Explore exciting career opportunities at CognifyAI.',
};

const openPositions = [
  {
    id: 'senior-ml-engineer',
    title: 'Senior Machine Learning Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead the development of cutting-edge ML models and systems that power our AI solutions.',
    requirements: [
      'MS/PhD in Computer Science, Machine Learning, or related field',
      '5+ years of experience in machine learning and deep learning',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Strong understanding of MLOps and model deployment',
    ],
    responsibilities: [
      'Design and implement scalable ML algorithms',
      'Optimize model performance and efficiency',
      'Collaborate with cross-functional teams',
      'Mentor junior engineers',
    ],
  },
  {
    id: 'ai-research-scientist',
    title: 'AI Research Scientist',
    department: 'Research',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Conduct cutting-edge research in AI and machine learning to advance our technology stack.',
    requirements: [
      'PhD in AI, Machine Learning, Computer Science, or related field',
      '3+ years of research experience in AI/ML',
      'Strong publication record in top-tier conferences',
      'Experience with NLP, Computer Vision, or Reinforcement Learning',
      'Excellent written and verbal communication skills',
    ],
    responsibilities: [
      'Conduct innovative AI research',
      'Publish research findings in top conferences',
      'Collaborate with engineering teams',
      'Stay current with latest AI developments',
    ],
  },
  {
    id: 'product-manager-ai',
    title: 'Product Manager - AI Solutions',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Drive product strategy and roadmap for our AI solutions, working closely with engineering and design teams.',
    requirements: [
      'Bachelor\'s degree in Engineering, Computer Science, or related field',
      '4+ years of product management experience',
      'Strong understanding of AI/ML technologies',
      'Experience with B2B SaaS products',
      'Excellent analytical and communication skills',
    ],
    responsibilities: [
      'Define product vision and strategy',
      'Manage product roadmap and priorities',
      'Work with customers to understand needs',
      'Collaborate with engineering and design teams',
    ],
  },
  {
    id: 'data-scientist',
    title: 'Senior Data Scientist',
    department: 'Data Science',
    location: 'London, UK',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Analyze complex datasets and build predictive models to drive business insights and decisions.',
    requirements: [
      'MS in Statistics, Mathematics, Computer Science, or related field',
      '4+ years of experience in data science',
      'Proficiency in Python, R, SQL',
      'Experience with statistical modeling and machine learning',
      'Strong business acumen and communication skills',
    ],
    responsibilities: [
      'Analyze large datasets to extract insights',
      'Build predictive models and algorithms',
      'Present findings to stakeholders',
      'Collaborate with product and engineering teams',
    ],
  },
  {
    id: 'ai-solutions-architect',
    title: 'AI Solutions Architect',
    department: 'Solutions',
    location: 'Singapore',
    type: 'Full-time',
    experience: '6+ years',
    description: 'Design and implement AI solutions for enterprise clients, ensuring scalability and performance.',
    requirements: [
      'Bachelor\'s degree in Computer Science or Engineering',
      '6+ years of experience in solution architecture',
      'Deep understanding of AI/ML technologies',
      'Experience with cloud architecture and microservices',
      'Strong client-facing and presentation skills',
    ],
    responsibilities: [
      'Design AI solution architectures',
      'Work with clients to understand requirements',
      'Lead technical implementation projects',
      'Ensure solution scalability and performance',
    ],
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer - AI Infrastructure',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build and maintain the infrastructure that powers our AI models and applications.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of DevOps/Infrastructure experience',
      'Experience with Kubernetes, Docker, CI/CD',
      'Knowledge of cloud platforms (AWS, GCP, Azure)',
      'Understanding of ML model deployment and monitoring',
    ],
    responsibilities: [
      'Manage AI infrastructure and deployments',
      'Implement CI/CD pipelines for ML models',
      'Monitor system performance and reliability',
      'Collaborate with ML engineers on deployment strategies',
    ],
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Learning',
    description: 'Continuous learning budget, conference attendance, and career development programs.',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible working hours, unlimited PTO, and remote work options.',
  },
  {
    icon: Laptop,
    title: 'Equipment & Tools',
    description: 'Top-tier equipment, software licenses, and home office setup allowance.',
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative environment, team events, and inclusive culture.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on projects that make a difference and shape the future of AI.',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push boundaries and explore new possibilities in AI.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We build trust through transparency and ethical practices.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in everything we do.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work together to achieve extraordinary results.',
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-electric-500/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span className="text-sm font-medium text-electric-400">Join Our Team</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Shape the Future of <span className="gradient-text">Artificial Intelligence</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Join a team of world-class AI experts and help build the next generation 
                of intelligent solutions that transform businesses worldwide.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why <span className="gradient-text">CognifyAI</span>?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We're not just building AI solutions – we're creating the future. 
                Join us in our mission to democratize artificial intelligence.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={index * 100}>
                <div className="text-center glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-electric-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-white/70">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-white/70">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-white/70">Projects Delivered</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-navy-800">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Benefits & <span className="gradient-text">Perks</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We believe in taking care of our team members with comprehensive 
                benefits and a supportive work environment.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} animation="fade-up" delay={index * 100}>
                <div className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Open <span className="gradient-text">Positions</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Explore exciting opportunities to work on cutting-edge AI projects 
                and make a real impact in the field of artificial intelligence.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <AnimatedSection key={position.id} animation="fade-up" delay={index * 100}>
                <div className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold group-hover:text-electric-400 transition-colors">
                          {position.title}
                        </h3>
                        <span className="bg-electric-500/20 text-electric-400 px-3 py-1 rounded-full text-sm font-medium">
                          {position.department}
                        </span>
                      </div>
                      <p className="text-white/70 mb-4">{position.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-8">
                      <Button className="btn-primary group">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3 text-electric-400">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="text-white/70 text-sm flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-electric-400">Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.slice(0, 3).map((resp, idx) => (
                          <li key={idx} className="text-white/70 text-sm flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={600}>
            <div className="text-center mt-12">
              <p className="text-white/70 mb-6">
                Don't see a position that fits? We're always looking for talented individuals.
              </p>
              <Button className="btn-secondary">
                Send Us Your Resume
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-electric-600 to-teal-600">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join Our Mission?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Be part of a team that's shaping the future of artificial intelligence. 
                Apply today and help us build tomorrow's AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  asChild 
                  className="bg-white text-electric-600 hover:bg-white/90 font-semibold text-lg px-8 py-4"
                >
                  <Link href="#open-positions">
                    View Open Positions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-600 font-semibold text-lg px-8 py-4"
                >
                  <Link href="/about">
                    Learn About Us
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