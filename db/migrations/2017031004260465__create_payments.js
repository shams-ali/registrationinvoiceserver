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
        {"name":"cash","type":"int"},
        {"name":"debit","type":"int"},
        {"name":"credit","type":"int"},
        {"name":"check","type":"int"},
        {"name":"total_paid","type":"int"},
        {"name":"total_outstanding","type":"int"}
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
