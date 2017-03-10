'use strict';

const Nodal = require('nodal');
const router = new Nodal.Router();

/* Middleware */
/* executed *before* Controller-specific middleware */

const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
// const CORSAuthorizationMiddleware = Nodal.require('middleware/cors_authorization_middleware.js');
// const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
// const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

router.middleware.use(CORSMiddleware);
// router.middleware.use(CORSAuthorizationMiddleware);
// router.middleware.use(ForceWWWMiddleware);
// router.middleware.use(ForceHTTPSMiddleware);

/* Renderware */
/* executed *after* Controller-specific renderware */

const GzipRenderware = Nodal.require('renderware/gzip_renderware.js')

router.renderware.use(GzipRenderware);

/* Routes */

const IndexController = Nodal.require('app/controllers/index_controller.js');

/* generator: begin imports */

const V1VehiclesController = Nodal.require('app/controllers/v1/vehicles_controller.js');
const V1FeesController = Nodal.require('app/controllers/v1/fees_controller.js');
const V1PaymentsController = Nodal.require('app/controllers/v1/payments_controller.js');
const V1UsersController = Nodal.require('app/controllers/v1/users_controller.js');
const V1ClientsController = Nodal.require('app/controllers/v1/clients_controller.js');

/* generator: end imports */

router.route('/').use(IndexController);

/* generator: begin routes */

router.route('/v1/vehicles/{id}').use(V1VehiclesController);
router.route('/v1/fees/{id}').use(V1FeesController);
router.route('/v1/payments/{id}').use(V1PaymentsController);
router.route('/v1/users/{id}').use(V1UsersController);
router.route('/v1/clients/{id}').use(V1ClientsController);

/* generator: end routes */

module.exports = router;
