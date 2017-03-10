'use strict';

const Nodal = require('nodal');

class Client extends Nodal.Model {}

Client.setDatabase(Nodal.require('db/main.js'));
Client.setSchema(Nodal.my.Schema.models.Client);

module.exports = Client;
