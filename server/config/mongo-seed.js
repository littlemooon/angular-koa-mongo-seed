'use strict';

var mongo = require('./mongo'),
    ObjectID = mongo.ObjectID;

// EXPORTS

module.exports = function *(overwrite) {
  var count = yield mongo.items.count({}, {limit: 1});
  if (overwrite || count === 0) {

    // clear database
    for (var collection in mongo) {
      if (mongo[collection].drop) {
        try {
          yield mongo[collection].drop();
        } catch (err) {
          if (err.message !== 'ns not found') { // indicates 'collection not found' error in mongo which is ok
            throw err;
          }
        }
      }
    }

    // populate with seed data
    yield mongo.items.insert(items);
  }
};

// SEED DATA

var items = [
  {
    property1: 'This is',
    property2: 'a test'
  },
  {
    property1: 'This',
    property2: 'is another test'
  }
];