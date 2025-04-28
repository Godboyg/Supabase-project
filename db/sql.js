const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require("dotenv").config();

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, 
};

const pool = mysql.createPool(connectionConfig);

// async function createConnection() {
//   try {
    
//     console.log('Connected to the MySQL database');
//     return connection;
//   } catch (err) {
//     console.error('Error connecting to the database:', err);
//     throw err;
//   }
// }

async function applySchema() {
  const connection = await createConnection();
  const sqlFilePath = path.join(__dirname, ".." ,  'schema.sql');
  
  try {
    const schema = fs.readFileSync(sqlFilePath, 'utf8');
    await connection.query(schema);
    console.log('Schema applied successfully');
  } catch (err) {
    console.error('Error executing schema SQL:', err);
  } finally {
    await connection.end();
  }
}
// applySchema();
// createConnection();

module.exports = pool;