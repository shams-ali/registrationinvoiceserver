'use strict';

const Nodal = require('nodal');

class CreatePayments extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017031004260465;
  }

  up() {

    return [
      this.createTable("payments", [
        {"name":"client_id","type":"int"},
        {"name":"vehicle_id","type":"int"},
        {"name":"type","type":"string"},
        {"name":"amount","type":"int"},
      ])
    ];

  }

  down() {

    return [
      this.dropTable("payments")
    ];

  }

}

module.exports = CreatePayments;
