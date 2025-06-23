// Database connection and utilities
const mysql = require('mysql2/promise');

// Create connection pool for better performance
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
});

// Test database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Database connected successfully');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
}

// Insert new booking/contact submission
async function insertBooking(bookingData) {
  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    service,
    budget,
    timeline,
    message,
    honeypot,
    ipAddress,
    userAgent
  } = bookingData;

  const query = `
    INSERT INTO bookings (
      first_name, last_name, email, phone, company, 
      service, budget, timeline, message, honeypot, 
      ip_address, user_agent
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    firstName, lastName, email, phone || null, company || null,
    service || null, budget || null, timeline || null, message,
    honeypot || null, ipAddress || null, userAgent || null
  ];

  try {
    const [result] = await pool.execute(query, values);
    console.log('✅ Booking inserted successfully:', result.insertId);
    return { success: true, id: result.insertId };
  } catch (error) {
    console.error('❌ Error inserting booking:', error);
    throw error;
  }
}

// Get booking by ID
async function getBookingById(id) {
  const query = 'SELECT * FROM bookings WHERE id = ?';
  
  try {
    const [rows] = await pool.execute(query, [id]);
    return rows[0] || null;
  } catch (error) {
    console.error('❌ Error fetching booking:', error);
    throw error;
  }
}

// Get email template
async function getEmailTemplate(templateName) {
  const query = 'SELECT * FROM email_templates WHERE template_name = ? AND is_active = TRUE';
  
  try {
    const [rows] = await pool.execute(query, [templateName]);
    return rows[0] || null;
  } catch (error) {
    console.error('❌ Error fetching email template:', error);
    throw error;
  }
}

// Update booking status
async function updateBookingStatus(id, status) {
  const query = 'UPDATE bookings SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
  
  try {
    const [result] = await pool.execute(query, [status, id]);
    return { success: true, affectedRows: result.affectedRows };
  } catch (error) {
    console.error('❌ Error updating booking status:', error);
    throw error;
  }
}

// Get recent bookings (for admin dashboard)
async function getRecentBookings(limit = 50) {
  const query = `
    SELECT id, first_name, last_name, email, company, service, 
           budget, status, created_at 
    FROM bookings 
    ORDER BY created_at DESC 
    LIMIT ?
  `;
  
  try {
    const [rows] = await pool.execute(query, [limit]);
    return rows;
  } catch (error) {
    console.error('❌ Error fetching recent bookings:', error);
    throw error;
  }
}

module.exports = {
  pool,
  testConnection,
  insertBooking,
  getBookingById,
  getEmailTemplate,
  updateBookingStatus,
  getRecentBookings
};