'use strict';

var utils = require('../utils/writer.js');
var Products = require('./ProductsDBService');

module.exports.productsGET = function productsGET (req, res, next) {
  var $top = req.swagger.params['$top'].value;
  var $skip = req.swagger.params['$skip'].value;
  Products.productsGET($top,$skip)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsIdDELETE = function productsIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Products.productsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsIdGET = function productsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Products.productsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsPOST = function productsPOST (req, res, next) {
  var payload = req.swagger.params['payload'].value;
  Products.productsPOST(payload)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
