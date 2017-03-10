'use strict';

const Nodal = require('nodal');

class CreateClients extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017031004355441;
  }

  up() {

    return [
      this.createTable("clients", [{"name":"dealer","type":"string"},{"name":"name","type":"string"},{"name":"phone","type":"int"},{"name":"email","type":"string"},{"name":"dl","type":"int"},{"name":"address","type":"int"},{"name":"city","type":"string"},{"name":"state","type":"string"},{"name":"zip","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("clients")
    ];

  }

}

module.exports = CreateClients;
