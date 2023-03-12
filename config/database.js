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
      host: env('DATABASE_HOST', 'dpg-cg70o8g2qv28u2r1k2dg-a.singapore-postgres.render.com'),  
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'myshop_flml'),
      user: env('DATABASE_USERNAME', 'myshop_flml_user'),
      password: env('DATABASE_PASSWORD', '3N3Zqks97l7rvSNov3sVtFcKdMc8BHzy'),
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
