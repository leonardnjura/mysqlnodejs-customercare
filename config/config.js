require('dotenv').config();
// to access .env
const {
  DATABASE_USER,
  DATABASE_PASSWORD,
  HOST,
  DATABASE_NAME,
  DIALECT
} = process.env;

module.exports = {
  development: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: 'this_db',
    host: HOST,
    dialect: DIALECT,
    define: {
      timestamps: false
    }
  },
  test: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: 'this_db_test',
    host: HOST,
    dialect: DIALECT,
    define: {
      timestamps: false
    }
  },
  production: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: HOST,
    dialect: DIALECT,
    define: {
      timestamps: false
    }
  }
};
