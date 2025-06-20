'use strict'

const Client = require('./client')
const defaults = require('./defaults')
const Connection = require('./opengauss/connection')
const Result = require('./result')
const utils = require('./utils')
const Pool = require('./pg_packages/pg-pool')
const TypeOverrides = require('./type-overrides')
const { DatabaseError } = require('pg-protocol')
const { escapeIdentifier, escapeLiteral } = require('./utils')

const poolFactory = (Client) => {
  return class BoundPool extends Pool {
    constructor(options) {
      super(options, Client)
    }
  }
}

const PG = function (clientConstructor) {
  this.defaults = defaults
  this.Client = clientConstructor
  this.Query = this.Client.Query
  this.Pool = poolFactory(this.Client)
  this._pools = []
  this.Connection = Connection
  this.types = require('pg-types')
  this.DatabaseError = DatabaseError
  this.TypeOverrides = TypeOverrides
  this.escapeIdentifier = escapeIdentifier
  this.escapeLiteral = escapeLiteral
  this.Result = Result
  this.utils = utils
}

module.exports = new PG(Client)