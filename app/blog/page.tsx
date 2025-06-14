import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'Blog - CognifyAI',
  description: 'Stay updated with the latest AI trends, insights, and best practices. Expert articles on machine learning, artificial intelligence, and business transformation.',
};

const featuredPost = {
  id: 'future-of-ai-2024',
  title: 'The Future of AI in Business: 2024 Trends and Predictions',
  excerpt: 'Explore the transformative AI trends that will shape business landscapes in 2024, from generative AI adoption to ethical AI frameworks.',
  content: 'As we advance through 2024, artificial intelligence continues to reshape how businesses operate, compete, and deliver value to customers...',
  author: 'Dr. Sarah Chen',
  authorRole: 'CEO & Co-Founder',
  authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  publishedAt: '2024-01-15',
  readTime: '8 min read',
  category: 'AI Trends',
  image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
  featured: true,
};

const blogPosts = [
  {
    id: 'implementing-ai-strategy',
    title: 'How to Implement an AI Strategy That Actually Works',
    excerpt: 'A practical guide to developing and executing AI strategies that deliver measurable business results.',
    author: 'Marcus Rodriguez',
    authorRole: 'CTO & Co-Founder',
    authorImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    publishedAt: '2024-01-10',
    readTime: '6 min read',
    category: 'Strategy',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
  },
  {
    id: 'nlp-customer-service',
    title: 'Revolutionizing Customer Service with Natural Language Processing',
    excerpt: 'Discover how NLP is transforming customer interactions and creating more personalized experiences.',
    author: 'Dr. Emily Watson',
    authorRole: 'Head of Research',
    authorImage: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    publishedAt: '2024-01-08',
    readTime: '7 min read',
    category: 'NLP',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
  },
  {
    id: 'computer-vision-manufacturing',
    title: 'Computer Vision in Manufacturing: Quality Control Revolution',
    excerpt: 'Learn how computer vision is revolutionizing quality control processes in modern manufacturing.',
    author: 'James Thompson',
    authorRole: 'VP of Engineering',
    authorImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    publishedAt: '2024-01-05',
    readTime: '5 min read',
    category: 'Computer Vision',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
  },
  {
    id: 'ethical-ai-frameworks',
    title: 'Building Ethical AI: Frameworks for Responsible Development',
    excerpt: 'Essential guidelines and frameworks for developing AI systems that are ethical, fair, and transparent.',
    author: 'Dr. Raj Patel',
    authorRole: 'Lead Data Scientist',
    authorImage: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    publishedAt: '2024-01-03',
    readTime: '9 min read',
    category: 'Ethics',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
  },
  {
    id: 'predictive-analytics-retail',
    title: 'Predictive Analytics: Transforming Retail Operations',
    excerpt: 'How predictive analytics is helping retailers optimize inventory, forecast demand, and improve customer satisfaction.',
    author: 'Lisa Zhang',
    authorRole: 'Head of Product',
    authorImage: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    publishedAt: '2024-01-01',
    readTime: '6 min read',
    category: 'Analytics',
    image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
  },
  {
    id: 'ai-security-best-practices',
    title: 'AI Security: Best Practices for Protecting Your Models',
    excerpt: 'Essential security measures to protect your AI models from threats and ensure data privacy.',
    author: 'Dr. Sarah Chen',
    authorRole: 'CEO & Co-Founder',
    authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    publishedAt: '2023-12-28',
    readTime: '8 min read',
    category: 'Security',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
  },
];

const categories = ['All', 'AI Trends', 'Strategy', 'NLP', 'Computer Vision', 'Ethics', 'Analytics', 'Security'];

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-electric-500/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span className="text-sm font-medium text-electric-400">AI Insights</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI <span className="gradient-text">Knowledge Hub</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Stay ahead of the curve with expert insights, industry trends, and practical 
                guidance on artificial intelligence and machine learning.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-navy-900">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured <span className="gradient-text">Article</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="max-w-6xl mx-auto">
              <div className="glass-card rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-electric-500/20 text-electric-400 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-electric-400 transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-white">{featuredPost.author}</div>
                        <div className="text-sm text-white/60">{featuredPost.authorRole}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-white/60 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <Button className="btn-primary w-fit group">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-navy-800">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Latest <span className="gradient-text">Articles</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Explore our collection of in-depth articles covering the latest developments 
                in artificial intelligence and machine learning.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection 
                key={post.id} 
                animation="fade-up" 
                delay={index * 100}
              >
                <article className="glass-card rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group h-full flex flex-col">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-electric-500/20 text-electric-400 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-electric-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm mb-4 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-white">{post.author}</div>
                        <div className="text-xs text-white/60">{post.authorRole}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-white/60">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={600}>
            <div className="text-center mt-12">
              <Button className="btn-secondary">
                Load More Articles
                <TrendingUp className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-electric-600 to-teal-600">
        <div className="container-width section-padding">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated with AI Insights
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Subscribe to our newsletter and get the latest AI trends, insights, 
                and best practices delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                />
                <Button className="bg-white text-electric-600 hover:bg-white/90 font-semibold px-8 py-3 rounded-xl whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Join 10,000+ AI professionals who trust our insights
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}