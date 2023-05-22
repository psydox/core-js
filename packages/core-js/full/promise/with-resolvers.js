'use strict';
require('../../modules/es.promise');
require('../../modules/esnext.promise.with-resolvers');
var call = require('../../internals/function-call');
var isCallable = require('../../internals/is-callable');
var path = require('../../internals/path');

var Promise = path.Promise;
var promiseWithResolvers = Promise.withResolvers;

module.exports = { withResolvers: function withResolvers() {
  return call(promiseWithResolvers, isCallable(this) ? this : Promise);
} }.withResolvers;
