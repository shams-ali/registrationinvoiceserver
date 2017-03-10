'use strict';

const Nodal = require('nodal');

class CreateFees extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017031004162143;
  }

  up() {

    return [
      this.createTable("fees", [
        {"name":"vehicle_id","type":"int"},
        {"name":"dmv_fee","type":"int"},
        {"name":"dmv_fee2","type":"int"},
        {"name":"service_fee","type":"int"},
        {"name":"other_fee","type":"int"},
        {"name":"extra_discount","type":"int"},
        {"name":"old_post_fee","type":"int"},
        {"name":"ros_bos","type":"int"},
        {"name":"ros_num","type":"int"},
        {"name":"tax","type":"int"},
        {"name":"vehicle_tax","type":"int"},
        {"name":"total_amount","type":"int"},
        {"name":"total_outstanding","type":"int"}
      ])
    ];

  }

  down() {

    return [
      this.dropTable("fees")
    ];

  }

}

module.exports = CreateFees;
