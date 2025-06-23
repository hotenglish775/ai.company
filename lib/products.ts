export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: 'ai-email-assistant',
    name: 'AI Email Assistant (Gmail+GPT)',
    description: 'Auto-reply and summarize Gmail using GPT-4',
    price: '$9',
    features: ['Unlimited emails', 'Smart replies', 'Email summarization', 'Gmail integration'],
    category: 'Communication & CRM'
  },
  {
    id: 'call-summary-crm',
    name: 'Call Summary → CRM Logger',
    description: 'Transcribe & log calls into Notion/HubSpot',
    price: '$14',
    features: ['20 calls/month', 'Auto transcription', 'CRM integration', 'Meeting summaries'],
    category: 'Communication & CRM'
  },
  {
    id: 'social-content-scheduler',
    name: 'Social Content Scheduler + AI',
    description: 'GPT-generated content posted across platforms',
    price: '$19',
    features: ['50 posts/month', 'Multi-platform', 'AI content generation', 'Auto scheduling'],
    category: 'Social Media Automation'
  },
  {
    id: 'whatsapp-chatbot',
    name: 'Chatbot for WhatsApp or Web',
    description: 'Lead gen & reply automation via GPT chatbot',
    price: '$25',
    features: ['1,000 messages/month', 'Lead capture', 'Auto responses', 'Multi-platform'],
    category: 'Communication & CRM'
  },
  {
    id: 'ai-proposal-generator',
    name: 'AI Proposal Generator',
    description: 'Custom PDF proposals with GPT & branding',
    price: '$12',
    features: ['10 proposals/month', 'Custom branding', 'PDF generation', 'Template library'],
    category: 'Sales & CRM'
  },
  {
    id: 'crm-enrichment-bot',
    name: 'Auto CRM Enrichment Bot',
    description: 'Add enriched contacts to your CRM',
    price: '$8',
    features: ['100 leads/month', 'Data enrichment', 'CRM integration', 'Real-time updates'],
    category: 'Sales & CRM'
  },
  {
    id: 'instagram-story-bot',
    name: 'Instagram Story Template Bot',
    description: 'Use AI templates to generate stories',
    price: '$6',
    features: ['25 images/month', 'AI templates', 'Brand consistency', 'Auto posting'],
    category: 'Social Media Automation'
  },
  {
    id: 'voice-task-automation',
    name: 'Voice Note → Task Automation',
    description: 'Turn voice notes into Notion or Trello tasks',
    price: '$5',
    features: ['50 tasks/month', 'Voice recognition', 'Task management', 'Multi-platform'],
    category: 'Unique AI Modules'
  },
  {
    id: 'support-ticket-summarizer',
    name: 'Support Ticket Summarizer',
    description: 'Auto-summarize help desk queries with AI',
    price: '$10',
    features: ['100 summaries/month', 'AI analysis', 'Priority scoring', 'Auto-assignment'],
    category: 'Sales & CRM'
  },
  {
    id: 'kpi-digest-slack',
    name: 'KPI Digest → Slack',
    description: 'Summary of KPIs from Stripe/GA sent to Slack',
    price: '$9',
    features: ['Weekly reports', 'Multi-source data', 'Slack integration', 'Custom metrics'],
    category: 'Internal Operations'
  },
  {
    id: 'content-repurposer',
    name: 'Content Repurposer (YT→Social)',
    description: 'Turn YouTube or blog into captions/posts',
    price: '$15',
    features: ['10 conversions/month', 'Multi-format', 'Platform optimization', 'SEO enhancement'],
    category: 'Social Media Automation'
  },
  {
    id: 'lead-nurturing-builder',
    name: 'AI Lead Nurturing Campaign Builder',
    description: 'Generate full AI sequences (email/SMS)',
    price: '$22',
    features: ['25 leads/month', 'Multi-channel', 'Personalization', 'Automated sequences'],
    category: 'Communication & CRM'
  },
  {
    id: 'background-remover',
    name: 'Background Remover (Image Tool)',
    description: 'Remove backgrounds using Replicate/Remove.bg',
    price: '$3',
    features: ['100 uses/month', 'High quality', 'Batch processing', 'API access'],
    category: 'Backend Utilities'
  },
  {
    id: 'ai-video-creator',
    name: 'AI Video Template Creator',
    description: 'Create AI avatars with voiceovers',
    price: '$29',
    features: ['10 videos/month', 'AI avatars', 'Voice synthesis', 'Custom templates'],
    category: 'Internal Operations'
  },
  {
    id: 'meeting-summarizer',
    name: 'Meeting Notes Summarizer',
    description: 'Zoom → transcript → GPT summary',
    price: '$7',
    features: ['20 summaries/month', 'Auto transcription', 'Action items', 'Meeting insights'],
    category: 'Internal Operations'
  },
  {
    id: 'comment-auto-reply',
    name: 'AI Comment & DM Auto-Reply',
    description: 'Respond across platforms with GPT tone control',
    price: '$12',
    features: ['500 replies/month', 'Tone control', 'Multi-platform', 'Smart responses'],
    category: 'Social Media Automation'
  },
  {
    id: 'pdf-image-converter',
    name: 'PDF → Image Post Converter',
    description: 'Turn PDFs into shareable image posts',
    price: '$5',
    features: ['10 PDFs/month', 'Social optimization', 'Custom branding', 'Multiple formats'],
    category: 'Backend Utilities'
  },
  {
    id: 'slack-task-tracker',
    name: 'Slack Task Tracker Bot',
    description: 'Convert Slack tasks into Sheets/Notion',
    price: '$4',
    features: ['50 messages/month', 'Task extraction', 'Project tracking', 'Team collaboration'],
    category: 'Internal Operations'
  },
  {
    id: 'business-intelligence-reporter',
    name: 'AI Business Intelligence Reporter',
    description: 'Summarize key business metrics with GPT',
    price: '$16',
    features: ['Daily reports', 'Multi-source data', 'Executive summaries', 'Custom insights'],
    category: 'Sales & CRM'
  },
  {
    id: 'brand-kit-manager',
    name: 'Brand Kit Manager (Add-on)',
    description: 'Manage brand assets and guidelines',
    price: '$6',
    features: ['Unlimited assets', 'Brand guidelines', 'Team access', 'Version control'],
    category: 'Backend Utilities'
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}