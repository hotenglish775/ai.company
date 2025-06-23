// Email utilities using Nodemailer
const nodemailer = require('nodemailer');
const { getEmailTemplate } = require('./database');

// Create SMTP transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false // For development only
    }
  });
};

// Replace template variables
function replaceTemplateVariables(template, variables) {
  let content = template;
  
  Object.keys(variables).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    content = content.replace(regex, variables[key] || '');
  });
  
  return content;
}

// Send booking confirmation email to customer
async function sendBookingConfirmation(bookingData) {
  try {
    const template = await getEmailTemplate('booking_confirmation');
    if (!template) {
      throw new Error('Booking confirmation template not found');
    }

    const transporter = createTransporter();
    
    const templateVariables = {
      first_name: bookingData.firstName,
      last_name: bookingData.lastName,
      email: bookingData.email,
      company: bookingData.company || 'Not specified',
      service: bookingData.service || 'General inquiry',
      budget: bookingData.budget || 'Not specified',
      timeline: bookingData.timeline || 'Not specified',
      message: bookingData.message
    };

    const htmlContent = replaceTemplateVariables(template.html_content, templateVariables);
    const textContent = replaceTemplateVariables(template.text_content, templateVariables);

    const mailOptions = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: bookingData.email,
      subject: template.subject,
      html: htmlContent,
      text: textContent,
      replyTo: process.env.REPLY_TO_EMAIL
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Confirmation email sent:', result.messageId);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error);
    throw error;
  }
}

// Send admin notification email
async function sendAdminNotification(bookingData) {
  try {
    const template = await getEmailTemplate('admin_notification');
    if (!template) {
      throw new Error('Admin notification template not found');
    }

    const transporter = createTransporter();
    
    const templateVariables = {
      first_name: bookingData.firstName,
      last_name: bookingData.lastName,
      email: bookingData.email,
      phone: bookingData.phone || 'Not provided',
      company: bookingData.company || 'Not specified',
      service: bookingData.service || 'General inquiry',
      budget: bookingData.budget || 'Not specified',
      timeline: bookingData.timeline || 'Not specified',
      message: bookingData.message,
      created_at: new Date().toLocaleString('en-GB', { 
        timeZone: 'Europe/London',
        dateStyle: 'full',
        timeStyle: 'short'
      }),
      ip_address: bookingData.ipAddress || 'Unknown',
      user_agent: bookingData.userAgent || 'Unknown'
    };

    const htmlContent = replaceTemplateVariables(template.html_content, templateVariables);
    const textContent = replaceTemplateVariables(template.text_content, templateVariables);

    const mailOptions = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: template.subject,
      html: htmlContent,
      text: textContent,
      replyTo: bookingData.email
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Admin notification sent:', result.messageId);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('❌ Error sending admin notification:', error);
    throw error;
  }
}

// Test email configuration
async function testEmailConfig() {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email configuration is valid');
    return true;
  } catch (error) {
    console.error('❌ Email configuration error:', error.message);
    return false;
  }
}

module.exports = {
  sendBookingConfirmation,
  sendAdminNotification,
  testEmailConfig
};