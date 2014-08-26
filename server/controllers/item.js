'use strict';

var route = require('koa-route'),
    parse = require('co-body'),
    _ = require('lodash'),
    itemsService = require('../services/item-service');

// ROUTES

exports.init = function (app) {
  app.use(route.get('/api/items', listItems));
  app.use(route.post('/api/items', createItem));
  app.use(route.put('/api/items/:id', updateItem));
  app.use(route.del('/api/items/:id', deleteItem));
};

// ROUTE FUNCTIONS

function *listItems() {
  // get items
  var items = yield itemsService.getItems();

  // return
  this.body = items;
}

function *createItem() {
  // get new item
  var item = yield parse(this);
  item.createdTime = new Date();

  // create record
  var results = yield itemsService.createItem(item);
  
  // return
  this.status = 201;
  this.body = results[0]._id.toString();
}

function *updateItem(id) {
  // get item to update
  var item = yield parse(this);
  item = {
    updatedTime: new Date(), 
    property1: item.property1, 
    property2: item.property2
  };

  // update record
  yield itemsService.updateItem(id, item);

  // return
  this.status = 201;
}

function *deleteItem(id) {
  // set item to inactive
  yield itemsService.deleteItem(id);

  // return
  this.status = 201;
}