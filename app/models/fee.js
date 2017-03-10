'use strict';

const Nodal = require('nodal');

class Fee extends Nodal.Model {}

Fee.setDatabase(Nodal.require('db/main.js'));
Fee.setSchema(Nodal.my.Schema.models.Fee);

module.exports = Fee;
