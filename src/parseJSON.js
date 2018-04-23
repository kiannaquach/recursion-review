// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var firstChar = json[0];
  console.log('firstChar', firstChar);
  var index = 1;


  const innerFunction = function(json){
    console.log(json[index]);
    if (firstChar === '"') {
      let str = '';
      if(json[index] === '"') {
        return str;
      } else {
        str += json[index];
      }
      index++;
    }

    if (firstChar === '[') {
      index++;
      let arr = [];
      while(json[index] !== ']') {
        arr.push(innerFunction(json))
      }
      return arr; 
    }

    if (firstChar === '{') {
    }

    if (/[0-9]/.test(firstChar)) {
      //do stuff
    }
    // if (firstChar === 't') {
    // }
  }
  return innerFunction(json);
};
