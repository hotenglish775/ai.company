# Revolution AI Automations - Contact Form Setup Instructions

## 📋 Overview
This implementation provides a complete contact form solution with database storage, email notifications, and security features.

## 🗄️ Database Setup

### 1. Create MySQL Database
```bash
# Connect to MySQL
mysql -u root -p

# Run the schema file
source database/schema.sql
```

### 2. Configure Database Connection
Copy `.env.example` to `.env` and update with your database credentials:
```bash
cp .env.example .env
```

Update the database settings in `.env`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=revolution_ai_contacts
DB_USER=your_username
DB_PASSWORD=your_password
```

## 📧 Email Configuration

### Option 1: Gmail SMTP
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Update `.env` with Gmail settings:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Option 2: Other SMTP Providers
Update `.env` with your provider's settings:
```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```

### Email Addresses Configuration
```env
FROM_EMAIL=hello@revolution-ai.co.uk
FROM_NAME=Revolution AI Automations
ADMIN_EMAIL=admin@revolution-ai.co.uk
REPLY_TO_EMAIL=hello@revolution-ai.co.uk
```

## 🔧 Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Additional Packages
```bash
npm install mysql2 nodemailer validator
npm install --save-dev @types/nodemailer @types/validator
```

### 3. Test Database Connection
Create a test script to verify database connectivity:
```javascript
// test-db.js
const { testConnection } = require('./lib/database');
testConnection();
```

### 4. Test Email Configuration
Create a test script to verify email setup:
```javascript
// test-email.js
const { testEmailConfig } = require('./lib/email');
testEmailConfig();
```

## 🚀 Running the Application

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## 🔒 Security Features

### 1. Honeypot Field
- Hidden field `honeypot` catches spam bots
- Form submission rejected if honeypot is filled

### 2. Rate Limiting
- Limits submissions per IP address
- Default: 5 submissions per 15 minutes
- Configurable via environment variables

### 3. Input Validation
- Server-side validation for all fields
- Email format validation
- Phone number format validation
- XSS protection via input sanitization

### 4. Spam Detection
- Keyword filtering
- Link count analysis
- User agent validation

## 📊 Database Schema

### Bookings Table
- `id` - Auto-increment primary key
- `first_name` - Customer first name
- `last_name` - Customer last name
- `email` - Customer email address
- `phone` - Customer phone number (optional)
- `company` - Customer company (optional)
- `service` - Service of interest
- `budget` - Budget range
- `timeline` - Project timeline
- `message` - Customer message
- `honeypot` - Spam detection field
- `ip_address` - Client IP address
- `user_agent` - Client user agent
- `status` - Booking status (new, contacted, qualified, converted, closed)
- `created_at` - Timestamp of submission
- `updated_at` - Last update timestamp

### Email Templates Table
- Stores customizable email templates
- Supports HTML and text versions
- Variable substitution system

## 📧 Email Templates

### Customer Confirmation Email
- Professional branded template
- Includes submission details
- Next steps information
- Contact information

### Admin Notification Email
- Urgent notification styling
- Complete customer information
- Quick action buttons (reply, call)
- Technical details for tracking

## 🛠️ Customization

### Modifying Email Templates
1. Update templates in the database:
```sql
UPDATE email_templates 
SET html_content = 'your-new-template', 
    text_content = 'your-new-text-template'
WHERE template_name = 'booking_confirmation';
```

2. Available template variables:
- `{{first_name}}` - Customer first name
- `{{last_name}}` - Customer last name
- `{{email}}` - Customer email
- `{{company}}` - Customer company
- `{{service}}` - Service interest
- `{{budget}}` - Budget range
- `{{timeline}}` - Project timeline
- `{{message}}` - Customer message
- `{{created_at}}` - Submission timestamp

### Adding New Form Fields
1. Update the database schema
2. Modify the form component
3. Update validation rules
4. Update email templates

## 🔍 Monitoring & Analytics

### Database Queries for Analytics
```sql
-- Submissions by day
SELECT DATE(created_at) as date, COUNT(*) as submissions
FROM bookings 
GROUP BY DATE(created_at) 
ORDER BY date DESC;

-- Popular services
SELECT service, COUNT(*) as count
FROM bookings 
WHERE service IS NOT NULL
GROUP BY service 
ORDER BY count DESC;

-- Conversion funnel
SELECT status, COUNT(*) as count
FROM bookings 
GROUP BY status;
```

### Log Monitoring
- Check application logs for email delivery status
- Monitor database connection health
- Track spam detection triggers

## 🚨 Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Verify database credentials in `.env`
   - Ensure MySQL server is running
   - Check firewall settings

2. **Email Not Sending**
   - Verify SMTP credentials
   - Check spam folders
   - Test with email provider's test tools

3. **Form Validation Errors**
   - Check browser console for JavaScript errors
   - Verify API endpoint is accessible
   - Check server logs for detailed error messages

4. **Rate Limiting Issues**
   - Adjust rate limit settings in `.env`
   - Clear rate limit cache if needed
   - Check IP address detection

### Debug Mode
Enable detailed logging by setting:
```env
NODE_ENV=development
```

## 📈 Performance Optimization

### Database Optimization
- Indexes on frequently queried columns
- Connection pooling for better performance
- Regular database maintenance

### Email Optimization
- Asynchronous email sending
- Email queue for high volume
- Template caching

### Security Best Practices
- Regular security updates
- Input validation on all fields
- Rate limiting and spam protection
- Secure environment variable storage

## 🔄 Backup & Recovery

### Database Backup
```bash
mysqldump -u username -p revolution_ai_contacts > backup.sql
```

### Email Template Backup
```sql
SELECT * FROM email_templates INTO OUTFILE 'email_templates_backup.csv'
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n';
```

## 📞 Support

For technical support or questions about this implementation:
- Email: hello@revolution-ai.co.uk
- Phone: +44 (0) 20 7946 0958

---

**Revolution AI Automations** - Transforming businesses with intelligent automation solutions.