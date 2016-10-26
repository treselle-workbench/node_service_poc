'use strict';

const Hapi = require('hapi');

//const server = new Hapi.Server();
const server = new Hapi.Server({ debug: { request: ['error'] } });

server.connection({ host: '0.0.0.0', port: 3001 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('==>Hello, world!<==');
    }
});

server.route({
    method: 'GET',
    path: '/breeddetails',
    handler: function (request, reply) {
      var responseData = {'response' : ['Breed 1', 'Breed 2', 'Breed 3', 'Breed 4', 'Breed 5']};
        reply(responseData);
    }
});

server.start((err) => {

    /*if (err) {
        throw err;
    }*/
    console.log(`Server running at: ${server.info.uri}`);
});

server.log(['error', 'database', 'read']);
