'use strict';

const Nodal = require('nodal');
const Fee = Nodal.require('app/models/fee.js');

class V1FeesController extends Nodal.Controller {

  index() {

    Fee.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Fee.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Fee.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Fee.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Fee.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1FeesController;
