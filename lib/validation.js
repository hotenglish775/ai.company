// Form validation utilities
const validator = require('validator');

// Validate email format
function isValidEmail(email) {
  return validator.isEmail(email);
}

// Validate phone number (international format)
function isValidPhone(phone) {
  if (!phone) return true; // Phone is optional
  // Remove all non-digit characters except + and spaces
  const cleanPhone = phone.replace(/[^\d+\s()-]/g, '');
  return cleanPhone.length >= 10 && cleanPhone.length <= 20;
}

// Sanitize input to prevent XSS
function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return validator.escape(input.trim());
}

// Validate required fields
function validateRequiredFields(data) {
  const errors = {};
  
  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters long';
  }
  
  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters long';
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please provide a valid email address';
  }
  
  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Please provide a valid phone number';
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// Check for spam using honeypot and other indicators
function checkForSpam(data, ipAddress, userAgent) {
  const spamIndicators = [];
  
  // Honeypot field should be empty
  if (data.honeypot && data.honeypot.trim() !== '') {
    spamIndicators.push('Honeypot field filled');
  }
  
  // Check for suspicious patterns in message
  const message = data.message.toLowerCase();
  const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations', 'click here', 'free money'];
  
  spamKeywords.forEach(keyword => {
    if (message.includes(keyword)) {
      spamIndicators.push(`Spam keyword detected: ${keyword}`);
    }
  });
  
  // Check for excessive links
  const linkCount = (data.message.match(/https?:\/\//g) || []).length;
  if (linkCount > 2) {
    spamIndicators.push('Too many links in message');
  }
  
  // Check for suspicious user agent
  if (!userAgent || userAgent.length < 10) {
    spamIndicators.push('Suspicious user agent');
  }
  
  return {
    isSpam: spamIndicators.length > 0,
    indicators: spamIndicators
  };
}

// Rate limiting check (simple in-memory implementation)
const rateLimitStore = new Map();

function checkRateLimit(ipAddress) {
  const now = Date.now();
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW) || 900000; // 15 minutes
  const maxRequests = parseInt(process.env.RATE_LIMIT_MAX) || 5;
  
  const key = `rate_limit_${ipAddress}`;
  const requests = rateLimitStore.get(key) || [];
  
  // Remove old requests outside the window
  const validRequests = requests.filter(timestamp => now - timestamp < windowMs);
  
  if (validRequests.length >= maxRequests) {
    return {
      allowed: false,
      resetTime: Math.min(...validRequests) + windowMs
    };
  }
  
  // Add current request
  validRequests.push(now);
  rateLimitStore.set(key, validRequests);
  
  return {
    allowed: true,
    remaining: maxRequests - validRequests.length
  };
}

module.exports = {
  isValidEmail,
  isValidPhone,
  sanitizeInput,
  validateRequiredFields,
  checkForSpam,
  checkRateLimit
};