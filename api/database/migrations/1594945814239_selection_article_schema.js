'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SelectionArticleSchema extends Schema {
  up () {
    this.create('selection_article', (table) => {
      table.integer('selection_id').unsigned().index('selection_id')
      table.integer('article_id').unsigned().index('article_id')
      table.foreign('selection_id').references('selections.id').onDelete('cascade')
      table.foreign('article_id').references('articles.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('selection_article')
  }
}

module.exports = SelectionArticleSchema
