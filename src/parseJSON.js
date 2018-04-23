// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var index = 0;

  const innerFunction = function(json) {
    
    if (json[index] === ' ') {      
      index++;
    }

    var firstChar = json[index];

    if (firstChar === '"') {
      let str = '';
      index++;
      while (json[index] !== '"') {
        str += json[index];
        index++;
      }
      return str;
    }

    if (/[-\.0-9]/.test(firstChar)) {
      let str = '';
 
      while (json[index] !== /[-\.0-9]/) {
        str += json[index];
        index++;
      }
      
      return Number(str);
    }

    if (firstChar === 't') {
      index += 4;
      return true;
    }

    if (firstChar === 'n') {
      index += 4;
      return null;
    }

    if (firstChar === 'f') {
      index += 5;
      return false;
    }

    if (firstChar === '[') {
      index++;
      let arr = [];
      while (json[index] !== ']') {
        if (json[index] === ',') { 
          index++; 
        }  
        // console.log(json[index])
        arr.push(innerFunction(json));
        index++;
      }
      return arr; 
    }

    // if (firstChar === '{') {
    // }

    // if (firstChar === 't') {
    // }
  };

  let result = innerFunction(json);
  console.log(result);
  return result;
};
