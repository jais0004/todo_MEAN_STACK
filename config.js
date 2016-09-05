var connectionString = process.env.DATABASE_URL || 'postgres://jtailor:root@localhost:5432/todo';

module.exports = connectionString;
