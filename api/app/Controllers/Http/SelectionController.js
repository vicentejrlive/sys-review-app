'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Selection = use('App/Models/Selection')
const Database  = use('Database')

/**
 * Resourceful controller for interacting with selections
 */
class SelectionController {
  /**
   * Show a list of all selections.
   * GET selections
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const selections = await Selection.all()
    return selections
  }

  /**
   * Render a form to be used for creating a new selection.
   * GET selections/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new selection.
   * POST selections
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(['name', 'start_selection', 'end_selection', 'review_id'])
    const selection = await Selection.create(data)
    return selection
  }

  /**
   * Display a single selection.
   * GET selections/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

    /**
   * Display a all selection by Review.
   * GET selections/review/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async showByReview({ params, request, respons }) {
    const selections = await Database
    .from('selections')
    .where('review_id', params.id)
    return selections
  }

  /**
   * Render a form to update an existing selection.
   * GET selections/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update selection details.
   * PUT or PATCH selections/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const selection = await Selection.findOrFail(params.id)
    const data = request.only(['name', 'start_selection', 'end_selection', 'review_id'])
    selection.merge(data)
    await selection.save()
    return selection
  }

  /**
   * Delete a selection with id.
   * DELETE selections/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const selection = await Selection.findOrFail(params.id)
    await selection.delete()
  }
}

module.exports = SelectionController
