'use strict';


/**
 * Gets list of Products
 *
 * $top BigDecimal Limits the number of returned results (optional)
 * $skip BigDecimal Offset to the no of parameters to skip (optional)
 * returns List
 **/
exports.productsGET = function($top,$skip) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : {
    "currency" : "EUR",
    "value" : 33.99
  },
  "name" : "KittyFood",
  "description" : "Tasty Kitty food",
  "id" : "123",
  "availability" : {
    "availableAmount" : 530,
    "warehouseId" : "890"
  }
}, {
  "price" : {
    "currency" : "EUR",
    "value" : 33.99
  },
  "name" : "KittyFood",
  "description" : "Tasty Kitty food",
  "id" : "123",
  "availability" : {
    "availableAmount" : 530,
    "warehouseId" : "890"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete the selected product
 *
 * id String 
 * no response value expected for this operation
 **/
exports.productsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the product by id
 *
 * id String 
 * returns product
 **/
exports.productsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : {
    "currency" : "EUR",
    "value" : 33.99
  },
  "name" : "KittyFood",
  "description" : "Tasty Kitty food",
  "id" : "123",
  "availability" : {
    "availableAmount" : 530,
    "warehouseId" : "890"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Product
 *
 * payload Product Product payload
 * returns product
 **/
exports.productsPOST = function(payload) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : {
    "currency" : "EUR",
    "value" : 33.99
  },
  "name" : "KittyFood",
  "description" : "Tasty Kitty food",
  "id" : "123",
  "availability" : {
    "availableAmount" : 530,
    "warehouseId" : "890"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

