// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  
  var body = document.body;

  var innerFunction = function(element) {
    if (element.classList && element.classList.contains(className)) {
      results.push(element);
    }

    if (element.hasChildNodes()) {
      _.each(element.childNodes, function(node) {
        innerFunction(node);
      });
    } 
    return;
  };

  innerFunction(body);

  return results;
};
