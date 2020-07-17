'use strict'

const ReviewController = require('../app/Controllers/Http/ReviewController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.resource('reviews', 'ReviewController').apiOnly();
Route.post('reviews/search', 'ReviewController.search')

Route.resource('selections', 'SelectionController').apiOnly();
Route.get('selections/review/:id', 'SelectionController.showByReview')


