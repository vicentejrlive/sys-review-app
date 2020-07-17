'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('resume')
      table.string('year').notNullable()
      table.string('isbn')
      table.string('url')
      table.string('doi')
      table.timestamps()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticleSchema
