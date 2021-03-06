'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Review = use('App/Models/Review')
const Database = use('Database')

/**
 * Resourceful controller for interacting with reviews
 */
class ReviewController {
  /**
   * Show a list of all reviews.
   * GET reviews
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const reviews = await Review.all();
    return reviews;
  }

  /**
   * Show a filtred list of reviews.
   * POST reviews
   *
   * @param {Request} ctx.request
   */
  async search({ request }) {
    const config = request.only(['filter', 'page', 'limit'])
    if (config.filter) {
      const reviews = await Database
        .from('reviews')
        .where('title', 'ILIKE', '%' + config.filter + '%')
        .orWhere('description', 'ILIKE', '%' + config.filter + '%')
        .paginate(config.page, config.limit)
      return reviews
    } else {
      const reviews = await Review
        .query()
        .paginate(config.page, config.limit)
      return reviews
    }
  }

  /**
   * Render a form to be used for creating a new review.
   * GET reviews/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {

  }

  /**
   * Create/save a new review.
   * POST reviews
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(['title', 'description', 'start_review', 'end_review']);
    const review = await Review.create(data)

    return review;
  }

  /**
   * Display a single review.
   * GET reviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing review.
   * GET reviews/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update review details.
   * PUT or PATCH reviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const review = await Review.findOrFail(params.id);
    const data = request.only(['title', 'description', 'start_review', 'end_review']);

    review.merge(data);

    await review.save();

    return review;
  }

  /**
   * Delete a review with id.
   * DELETE reviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const review = await Review.findOrFail(params.id);

    await review.delete();
  }
}

module.exports = ReviewController
