'use strict';

const Nodal = require('nodal');
const Client = Nodal.require('app/models/client.js');

class Vehicle extends Nodal.Model {}

Vehicle.setDatabase(Nodal.require('db/main.js'));
Vehicle.joinsTo(Client, {multiple: true});

Vehicle.setSchema(Nodal.my.Schema.models.Vehicle);

module.exports = Vehicle;
