'use strict';

const Nodal = require('nodal');

class Payment extends Nodal.Model {}

Payment.setDatabase(Nodal.require('db/main.js'));
Payment.setSchema(Nodal.my.Schema.models.Payment);

module.exports = Payment;
