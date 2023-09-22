/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
// npm init --y
// npm install nodemon --save-dev
// npm install eslint --save-dev
// npx eslint --init
// npm install @hapi/hapi
// npm install nanoid@3.x.x

const Hapi = require('@hapi/hapi');

const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();