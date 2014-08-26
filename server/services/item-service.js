'use strict';

var mongo = require('../config/mongo'),
    ObjectID = mongo.ObjectID;

// EXPORTS

module.exports.getItems = getItems;
module.exports.createItem = createItem;
module.exports.updateItem = updateItem;
module.exports.deleteItem = deleteItem;

// EXPORTED FUNCTIONS

function *getItems() {
  var items = yield mongo.items.find({"deletedTime": {"$exists": false}}).sort({property1: 1}).toArray();
  items.forEach(function (item) {
    item.id = item._id;
    delete item._id;
  });

  return items;
}

function *createItem(item) {
  return yield mongo.items.insert(item);
}

function *updateItem(id, item) {
  return yield mongo.items.update({_id: ObjectID(id)}, item);
}

function *deleteItem(id) {
  return yield mongo.items.update({_id: ObjectID(id)}, {$set: {deletedTime: Date()}});
}