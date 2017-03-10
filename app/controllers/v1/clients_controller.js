'use strict';

const Nodal = require('nodal');
const Client = Nodal.require('app/models/client.js');

class V1ClientsController extends Nodal.Controller {

  index() {

    Client.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Client.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Client.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Client.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  del() {

    Client.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1ClientsController;
