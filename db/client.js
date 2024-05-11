// require('dotenv').config()
// const { Sequelize } = require('sequelize')
// const is_prod = process.env.NODE_ENV

// const client = is_prod ? new Sequelize(process.env.DATABASE_URL,
//     {
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false
//             }
//         }
//     }) :
//     new Sequelize(
//         process.env.DB_NAME,
//         process.env.DB_USERNAME,
//         process.env.DB_PASSWORD,
//         {
//             host: 'localhost',
//             dialect: 'postgres',
//             logging: false
//         }
//     )

// module.exports = client

require('dotenv').config();
const { Sequelize } = require('sequelize');
const is_prod = process.env.NODE_ENV;

const client = is_prod
  ? new Sequelize(process.env.DATABASE_URL, {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      logging: console.log, // Enable logging to see SQL queries
    })
  : new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      logging: console.log, // Enable logging to see SQL queries
    });

module.exports = client;