var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log("In getConfig() call");
  var cfg = require("config.js");
  return callback(null, {config: cfg.config});
};

/*
$fh.web
$fh.cache
$fh.feed
$fh.log
$fh.push
$fh.session
$fh.db
$fh.act
$fh.stats
*/

exports.web = function (params, callback) {
  $fh.web({
    url: "http://www.google.com",
    method: "GET",
    contentType: "text/html",
    charset: "UTF-8",
    period: 60000 //cache for 1 min
  }, function(err, result) {
    if (err) {
      return callback({
        "error": err
      });
    }
    return callback(null, {
      "status": "ok",
      "res": "web response body length:" + result.body.length
    })
  });
};

/*
 * http://docs.feedhenry.com/v2/fhserver.html#$fh.cache
 */
exports.cacheput = function (params, callback) {
  //save a value to cache
  var key = "cachetest";
  var value = params.val
  $fh.cache({
    act: "save",
    key: key,
    value: value
  }, function(err, res) {
    if (err) {
      return callback({
        "error": err
      });
    }
    return callback(null, {
      "status": "ok",
      "res": "Value saved in cache"
    })
  });
};
exports.cacheget = function (params, callback) {
  //load value from cache
  var key = "cachetest";
  $fh.cache({
    act: "load",
    key: key
  }, function(err, res) {
    if (err) {
      return callback({
        "error": err
      });
    }
    return callback(null, {
      "status": "ok",
      "res": "Value retrieved from cache: " + res.toString()
    })
  });
};

exports.feed = function (params, callback) {
  
};

/*
 * http://docs.feedhenry.com/v2/fhserver.html#$fh.log
 */
exports.log = function (params, callback) {
  // log a simple object depth 1
  $fh.log({
    "testkey": "testval"
  });
  
  // log a deep object, force depth 3
  $fh.log({
    "testkey1": {
      "testkey2a": {
        "testkey3a": {
          "testkey4": "testval4"
        },
        "testKey3b": "testVal3b"
      },
      "testKey2b": "testVal2b"
    }
  });
  
  callback(null, {
    "status": "ok",
    "res": "Check Cloud logs (under Cloud Management or using fhc) for logging output."
  });
};

exports.push = function (params, callback) {
  
};

exports.session = function (params, callback) {
  
};

exports.dbcreate = function (params, callback) {
  $fh.db({
    "act": "create",
    "type": "myFirstEntity",
    "fields": {
      "firstName": "Joe",
      "lastName": "Bloggs+" + Date.now()
    }
  }, function(err, data) {
    if (err) {
      return callback({
        "error": err
      });
    }
    return callback(null, {
      "status": "ok",
      "res": "db entry created: " + JSON.stringify(data)
    })
  });
};

exports.dblist = function (params, callback) {
  $fh.db({
    "act": "list",
    "type": "myFirstEntity",
  }, function(err, data) {
    if (err) {
      return callback({
        "error": err
      });
    }
    return callback(null, {
      "status": "ok",
      "res": "db entries: " + JSON.stringify(data)
    })
  });
};

exports.act = function (params, callback) {
  
};

exports.stats = function (params, callback) {
  
};