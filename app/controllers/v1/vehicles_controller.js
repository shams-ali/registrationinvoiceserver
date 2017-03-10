'use strict';

const Nodal = require('nodal');
const Vehicle = Nodal.require('app/models/vehicle.js');

class V1VehiclesController extends Nodal.Controller {

  index() {

    Vehicle.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Vehicle.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Vehicle.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Vehicle.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Vehicle.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1VehiclesController;
