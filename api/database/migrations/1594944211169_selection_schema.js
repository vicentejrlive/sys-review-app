'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SelectionSchema extends Schema {
  up () {
    this.create('selections', (table) => {
      table.increments()
      table.string('name')
      table.date('start_selection').notNullable()
      table.date('end_selection')
      table.integer('review_id').unsigned().index('review_id')
      table.foreign('review_id').references('reviews.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('selections')
  }
}

module.exports = SelectionSchema
