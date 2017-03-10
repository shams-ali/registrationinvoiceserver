'use strict';

const Nodal = require('nodal');
const Payment = Nodal.require('app/models/payment.js');

class V1PaymentsController extends Nodal.Controller {

  index() {

    Payment.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Payment.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Payment.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Payment.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Payment.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1PaymentsController;
