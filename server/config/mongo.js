'use strict';

var comongo = require('co-mongo'),
    connect = comongo.connect,
    config = require('./config');

// EXPORTS

// extending and exposing top co-mongo namespace like this is not optimal but it saves the user from one extra require();
module.exports = comongo;

// CONNECT

// open connection
comongo.connect = function *() {
  if (comongo.db) yield comongo.db.close();

  // export mongo db instance
  var db = comongo.db = yield connect(config.mongo.url);

  // export default collections
  comongo.items = yield db.collection('items');
};

// FUNCTIONS

// get next counter
comongo.getNextSequence = function *(counterName) {
  var results = yield comongo.counters.findAndModify(
      {_id: counterName},
      [],
      {$inc: {seq: 1}},
      {new: true}
  );
  return results[0].seq;
};