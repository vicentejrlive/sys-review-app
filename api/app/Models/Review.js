'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Review extends Model {
    selections(){
        return this.hasMany('App/Models/Selection')
    }
}

module.exports = Review
