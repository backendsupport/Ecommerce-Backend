// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),  
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'myshop'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'dhRuvP@tel!6o9'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ch7sn7msi8uhth2tialg-a.singapore-postgres.render.com'),  
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ecommerce_database_upjt'),
      user: env('DATABASE_USERNAME', 'ecommerce_database_upjt_user'),
      password: env('DATABASE_PASSWORD', 'uga0sCM9f9KVdSCjv2fpuET0VM8cvxYU'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
