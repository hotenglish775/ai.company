-- Revolution AI Automations - Contact Form Database Schema
-- This file creates the necessary tables for storing contact form submissions

CREATE DATABASE IF NOT EXISTS revolution_ai_contacts;
USE revolution_ai_contacts;

-- Bookings/Contact submissions table
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    service VARCHAR(255),
    budget VARCHAR(100),
    timeline VARCHAR(255),
    message TEXT NOT NULL,
    honeypot VARCHAR(255) DEFAULT NULL, -- Anti-spam field
    ip_address VARCHAR(45),
    user_agent TEXT,
    status ENUM('new', 'contacted', 'qualified', 'converted', 'closed') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Indexes for better performance
    INDEX idx_email (email),
    INDEX idx_created_at (created_at),
    INDEX idx_status (status)
);

-- Admin users table (optional - for future admin panel)
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'manager', 'viewer') DEFAULT 'viewer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL
);

-- Email templates table (for customizable email templates)
CREATE TABLE IF NOT EXISTS email_templates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    template_name VARCHAR(100) UNIQUE NOT NULL,
    subject VARCHAR(255) NOT NULL,
    html_content TEXT NOT NULL,
    text_content TEXT NOT NULL,
    variables JSON, -- Store available template variables
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default email templates
INSERT INTO email_templates (template_name, subject, html_content, text_content, variables) VALUES 
(
    'booking_confirmation',
    'Thank you for contacting Revolution AI Automations',
    '<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Booking Confirmation</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #38bdf8, #2dd4bf); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
            .button { display: inline-block; background: #38bdf8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Thank You for Your Interest!</h1>
                <p>We\'ve received your inquiry and will respond within 24 hours</p>
            </div>
            <div class="content">
                <h2>Hello {{first_name}},</h2>
                <p>Thank you for reaching out to Revolution AI Automations. We\'re excited to learn about your project and discuss how our AI solutions can transform your business.</p>
                
                <h3>Your Submission Details:</h3>
                <ul>
                    <li><strong>Name:</strong> {{first_name}} {{last_name}}</li>
                    <li><strong>Email:</strong> {{email}}</li>
                    <li><strong>Company:</strong> {{company}}</li>
                    <li><strong>Service Interest:</strong> {{service}}</li>
                    <li><strong>Budget Range:</strong> {{budget}}</li>
                    <li><strong>Timeline:</strong> {{timeline}}</li>
                </ul>
                
                <h3>What Happens Next?</h3>
                <ol>
                    <li>Our team will review your requirements within 24 hours</li>
                    <li>We\'ll schedule a consultation call to discuss your needs</li>
                    <li>We\'ll provide a customized proposal for your project</li>
                </ol>
                
                <a href="https://revolution-ai.co.uk/services" class="button">Explore Our Services</a>
                
                <p>If you have any immediate questions, feel free to reply to this email or call us at +44 (0) 20 7946 0958.</p>
                
                <p>Best regards,<br>The Revolution AI Team</p>
            </div>
            <div class="footer">
                <p>Revolution AI Automations | London, United Kingdom<br>
                <a href="https://revolution-ai.co.uk">revolution-ai.co.uk</a></p>
            </div>
        </div>
    </body>
    </html>',
    'Hello {{first_name}},

Thank you for reaching out to Revolution AI Automations. We\'re excited to learn about your project and discuss how our AI solutions can transform your business.

Your Submission Details:
- Name: {{first_name}} {{last_name}}
- Email: {{email}}
- Company: {{company}}
- Service Interest: {{service}}
- Budget Range: {{budget}}
- Timeline: {{timeline}}

What Happens Next?
1. Our team will review your requirements within 24 hours
2. We\'ll schedule a consultation call to discuss your needs
3. We\'ll provide a customized proposal for your project

If you have any immediate questions, feel free to reply to this email or call us at +44 (0) 20 7946 0958.

Best regards,
The Revolution AI Team

Revolution AI Automations | London, United Kingdom
https://revolution-ai.co.uk',
    '["first_name", "last_name", "email", "company", "service", "budget", "timeline", "message"]'
),
(
    'admin_notification',
    'New Contact Form Submission - Revolution AI',
    '<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New Contact Submission</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1e1b4b; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .urgent { background: #fee2e2; border-left: 4px solid #ef4444; padding: 15px; margin: 20px 0; }
            .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .button { display: inline-block; background: #38bdf8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 5px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚨 New Contact Form Submission</h1>
                <p>A potential client has submitted an inquiry</p>
            </div>
            <div class="content">
                <div class="urgent">
                    <strong>Action Required:</strong> New lead requires follow-up within 24 hours
                </div>
                
                <div class="details">
                    <h3>Contact Information</h3>
                    <ul>
                        <li><strong>Name:</strong> {{first_name}} {{last_name}}</li>
                        <li><strong>Email:</strong> <a href="mailto:{{email}}">{{email}}</a></li>
                        <li><strong>Phone:</strong> <a href="tel:{{phone}}">{{phone}}</a></li>
                        <li><strong>Company:</strong> {{company}}</li>
                    </ul>
                    
                    <h3>Project Details</h3>
                    <ul>
                        <li><strong>Service Interest:</strong> {{service}}</li>
                        <li><strong>Budget Range:</strong> {{budget}}</li>
                        <li><strong>Timeline:</strong> {{timeline}}</li>
                    </ul>
                    
                    <h3>Message</h3>
                    <p style="background: #f1f5f9; padding: 15px; border-radius: 6px; font-style: italic;">
                        "{{message}}"
                    </p>
                    
                    <h3>Technical Details</h3>
                    <ul>
                        <li><strong>Submitted:</strong> {{created_at}}</li>
                        <li><strong>IP Address:</strong> {{ip_address}}</li>
                        <li><strong>User Agent:</strong> {{user_agent}}</li>
                    </ul>
                </div>
                
                <div style="text-align: center;">
                    <a href="mailto:{{email}}?subject=Re: Your AI Automation Inquiry" class="button">Reply to Lead</a>
                    <a href="tel:{{phone}}" class="button">Call Now</a>
                </div>
            </div>
        </div>
    </body>
    </html>',
    'NEW CONTACT FORM SUBMISSION - REVOLUTION AI

Contact Information:
- Name: {{first_name}} {{last_name}}
- Email: {{email}}
- Phone: {{phone}}
- Company: {{company}}

Project Details:
- Service Interest: {{service}}
- Budget Range: {{budget}}
- Timeline: {{timeline}}

Message:
{{message}}

Technical Details:
- Submitted: {{created_at}}
- IP Address: {{ip_address}}

ACTION REQUIRED: Follow up within 24 hours
Reply to: {{email}}
Call: {{phone}}',
    '["first_name", "last_name", "email", "phone", "company", "service", "budget", "timeline", "message", "created_at", "ip_address", "user_agent"]'
);