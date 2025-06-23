// Contact form API endpoint
const { NextResponse } = require('next/server');
const { insertBooking } = require('../../../lib/database');
const { sendBookingConfirmation, sendAdminNotification } = require('../../../lib/email');
const { validateRequiredFields, sanitizeInput, checkForSpam, checkRateLimit } = require('../../../lib/validation');

// Get client IP address
function getClientIP(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  return request.ip || 'unknown';
}

export async function POST(request) {
  try {
    // Get client information
    const ipAddress = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || '';
    
    // Check rate limiting
    const rateLimitCheck = checkRateLimit(ipAddress);
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again later.',
          resetTime: rateLimitCheck.resetTime
        },
        { status: 429 }
      );
    }
    
    // Parse request body
    const body = await request.json();
    
    // Sanitize all input fields
    const sanitizedData = {
      firstName: sanitizeInput(body.firstName),
      lastName: sanitizeInput(body.lastName),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
      company: sanitizeInput(body.company),
      service: sanitizeInput(body.service),
      budget: sanitizeInput(body.budget),
      timeline: sanitizeInput(body.timeline),
      message: sanitizeInput(body.message),
      honeypot: sanitizeInput(body.honeypot || ''), // Hidden field for spam detection
    };
    
    // Validate required fields
    const validation = validateRequiredFields(sanitizedData);
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          errors: validation.errors
        },
        { status: 400 }
      );
    }
    
    // Check for spam
    const spamCheck = checkForSpam(sanitizedData, ipAddress, userAgent);
    if (spamCheck.isSpam) {
      console.log('🚫 Spam detected:', spamCheck.indicators);
      // Log spam attempt but don't reveal to user
      return NextResponse.json(
        { 
          success: false, 
          error: 'Your submission could not be processed. Please try again.'
        },
        { status: 400 }
      );
    }
    
    // Prepare booking data
    const bookingData = {
      ...sanitizedData,
      ipAddress,
      userAgent
    };
    
    // Insert into database
    const dbResult = await insertBooking(bookingData);
    if (!dbResult.success) {
      throw new Error('Failed to save booking to database');
    }
    
    // Send emails asynchronously
    const emailPromises = [
      sendBookingConfirmation(bookingData),
      sendAdminNotification(bookingData)
    ];
    
    try {
      await Promise.all(emailPromises);
      console.log('✅ All emails sent successfully');
    } catch (emailError) {
      console.error('⚠️ Email sending failed:', emailError);
      // Don't fail the request if emails fail, but log the error
    }
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We\'ll be in touch within 24 hours.',
      bookingId: dbResult.id
    });
    
  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again or contact us directly.'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}