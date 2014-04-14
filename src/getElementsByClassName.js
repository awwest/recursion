// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, node) {
  // your code here
  var results = [];

  node = node || document.body;

  if (node.classList.contains(className)){
    results.push(node);
  }

  if(node.children){
    for(var i = 0; i < node.children.length; i++){
      results = results.concat(getElementsByClassName(className ,node.children[i]));
    }
  }

  return results;
};
