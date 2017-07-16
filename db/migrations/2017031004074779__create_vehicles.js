'use strict';

const Nodal = require('nodal');

class CreateVehicles extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017031004074779;
  }

  up() {

    return [
      this.createTable("vehicles", [
        {"name":"client_id","type":"int"},
        {"name":"plate","type":"string"},
        {"name":"vin","type":"string"},
        {"name":"make","type":"string"},
        {"name":"model_year","type":"int"},
        {"name":"exp_date","type":"datetime"},
        {"name":"engine","type":"string"},
        {"name":"case_type","type":"string"},
        {"name":"case_status","type":"string"},
        {"name":"comments","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("vehicles")
    ];

  }

}

module.exports = CreateVehicles;
