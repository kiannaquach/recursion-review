// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (obj === undefined || typeof obj === 'function') {
    return {};
  }

  if (typeof obj === 'number') {
    return '' + obj;
  }

  if (obj === null) {
    return '' + null;
  }

  if (typeof obj === 'boolean') {
    return '' + obj;
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"'
  }
  
  if (Array.isArray(obj)) {
    var arrayResult = [];
    obj.forEach(function(item) {
      arrayResult.push(stringifyJSON(item));
    })
    
    return '[' + arrayResult + ']';

  } else {
    var objResult = [];
    for (let key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      objResult.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    // console.log(objResult);
    return '{' + objResult.join() + '}';
  }

  
};
