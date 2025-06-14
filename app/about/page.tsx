import { Metadata } from 'next';
import { Target, Users, Award, TrendingUp, Lightbulb, Heart } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'About Us - CognifyAI',
  description: 'Learn about CognifyAI\'s mission to transform businesses through innovative AI solutions. Meet our expert team and discover our company values.',
};

const stats = [
  { number: '500+', label: 'AI Models Deployed' },
  { number: '150+', label: 'Happy Clients' },
  { number: '95%', label: 'Client Retention' },
  { number: '50+', label: 'Expert Team Members' },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push the boundaries of what\'s possible with AI, constantly exploring new technologies and methodologies.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We build trust through transparency, ethical AI practices, and honest communication with our clients.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in every project, delivering solutions that exceed expectations.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, ensuring solutions that truly fit their needs.',
  },
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    position: 'CEO & Co-Founder',
    bio: 'Former AI Research Lead at Google with 15+ years in machine learning and computer vision.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Marcus Rodriguez',
    position: 'CTO & Co-Founder',
    bio: 'Stanford PhD in Computer Science, former Principal Engineer at Tesla\'s Autopilot team.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Dr. Emily Watson',
    position: 'Head of Research',
    bio: 'MIT graduate with expertise in NLP and conversational AI, published 50+ research papers.',
    image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'James Thompson',
    position: 'VP of Engineering',
    bio: 'Former Engineering Manager at Microsoft Azure, expert in scalable AI infrastructure.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Dr. Raj Patel',
    position: 'Lead Data Scientist',
    bio: 'Harvard PhD in Statistics, specializes in predictive modeling and advanced analytics.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Lisa Zhang',
    position: 'Head of Product',
    bio: 'Former Product Manager at Uber, expert in AI product strategy and user experience.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    twitter: '#',
  },
];

const milestones = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'CognifyAI was founded with a mission to democratize AI for businesses of all sizes.',
  },
  {
    year: '2020',
    title: 'First Major Client',
    description: 'Secured partnership with Fortune 500 company, deploying first enterprise AI solution.',
  },
  {
    year: '2021',
    title: 'Series A Funding',
    description: 'Raised $15M Series A to expand our team and develop cutting-edge AI platforms.',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Opened offices in London and Singapore, serving clients across three continents.',
  },
  {
    year: '2023',
    title: 'AI Innovation Award',
    description: 'Recognized as "AI Company of the Year" by TechCrunch for breakthrough innovations.',
  },
  {
    year: '2024',
    title: 'Industry Leadership',
    description: 'Reached 500+ deployed models and established as leading AI consultancy worldwide.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="gradient-text">CognifyAI</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                We're on a mission to transform businesses through innovative AI solutions, 
                making artificial intelligence accessible, practical, and impactful for 
                organizations worldwide.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                  To democratize artificial intelligence by creating accessible, 
                  ethical, and impactful AI solutions that empower businesses to 
                  innovate, grow, and solve complex challenges.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-electric-500" />
                    <span className="text-white/80">Client-first approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-teal-500" />
                    <span className="text-white/80">Cutting-edge technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-electric-500" />
                    <span className="text-white/80">Measurable results</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Our Vision</h3>
                <p className="text-white/70 leading-relaxed">
                  To be the world's most trusted AI partner, leading the transformation 
                  of industries through responsible innovation and creating a future where 
                  AI enhances human potential and drives sustainable progress.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-800">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we 
                approach every client relationship and project.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-navy-800">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our world-class team combines decades of experience in AI research, 
                engineering, and business to deliver exceptional results.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} animation="fade-up" delay={index * 100}>
                <div className="glass-card rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-electric-400 font-medium mb-3">{member.position}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From startup to industry leader, here are the key milestones 
                that have shaped our company's growth and success.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-500 to-teal-500 rounded-full"></div>

              {milestones.map((milestone, index) => (
                <AnimatedSection 
                  key={milestone.year} 
                  animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                  delay={index * 150}
                >
                  <div className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="glass-card p-6 rounded-xl">
                        <div className="text-electric-400 font-bold text-lg mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                        <p className="text-white/70">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-electric-500 rounded-full border-4 border-navy-900"></div>
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