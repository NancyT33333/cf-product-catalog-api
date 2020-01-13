'use strict';
var entityModel = require("../database/db.js").product;
function validate(res, validateFunc) {
    const error = validateFunc();
    if (error != null) {
    setErrorResponse(res, 400, error.code,
    error.message);
    return false;
    }
    return true;
 }
 function validTopSkip(text, queryName) {
    let error = null;
    try {
    const value = parseInt(text);
    if (isNaN(value) || value < 0) {
    error = getError("INVALID_INPUT",
   "Incorrect format for " + queryName + " argument   '" + text + "'. Provide a value positive integer value");
    }
    } catch (e) {
    error = getError("INVALID_INPUT",   "Incorrect format for " + queryName + " argument   '" + text + "'. Provide a value positive integer value");
    }
    return error
   }
   
   function getError(code, message) {
    return {
    code: code,
    message: message
    };
   }
   
   function setResponse(res, data, status) {
    res.setHeader('Content-Type',
   'application/json');
    res.statusCode = status || 200;
    res.end(JSON.stringify(data));
   }
   function setErrorResponse(res, status, code, message) {
    setResponse(res, getError(code, message),
    status);
   }
   
   
   exports.productsGET = (args, res, next) => {
    let skip = args.$skip;
    var query = {};

    
    if (skip && skip.value) {
        if (!validate(res,
    validTopSkip.bind(null, skip.value, "$skip"))) {
        return;
        }
        query.offset = parseInt(skip.value);
        }
        let top = args.$top;
        if (top && top.value) {
        if (!validate(res,
    validTopSkip.bind(null, top.value, "$top"))) {
        return;
        }
        query.limit = parseInt(top.value);
        }
    
        entityModel.findAll(query)
        .then(entity => setResponse(res,entity,200))
        .catch(error =>
    setErrorResponse(res,500,"READ_FAILURE",
    error.message));
   }


   exports.productsPOST = (args, res, next) => {
    entityModel.create(args.payload.value)
    .then(entity => setResponse(res,entity,201))
    .catch(error =>
   setErrorResponse(res,500,"CREATE_FAILURE",
   error.message));
   }


   exports.productsIdGET = (args, res, next) => {
    entityModel.findById(args.id.value)
    .then(entity => {
    if(!entity){
    setErrorResponse(res, 404,
   "RESOURCE_NOT_FOUND", "Requested Product " + id +
   " not found.");
    } else {
    setResponse(res,entity,200);
    }
    })
    .catch(error => setErrorResponse(res,500,"READ_FAILURE",
    error.message));
    }
    exports.productsIdDELETE = (args, res, next) => {
     entityModel.findById(args.id.value)
     .then(entity => {
     if(!entity){
     setErrorResponse(res, 404,    "RESOURCE_NOT_FOUND", "Requested Product " + id +    " not found.");
     } else {
     entity.destroy()
     .then(() => {
     res.statusCode = 204;
     res.end();
     })
     .catch(error =>
    setResponse(res,500,"DELETE_FAILURE",
    error.message));
     }
     })
     .catch(error =>
    setErrorResponse(res,500,"DELETE_FAILURE",
    error.message));
    }