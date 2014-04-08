// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  
  var elements = [];
  var classNames = className.split(" ");

  var getElements = function(element){
  	var classes = element.classList;

  	for(var i=0; i<classNames.length; i++){
      if(element instanceof HTMLElement){
  		  if(classes.contains(classNames[i])){
  		  	elements.push(element);
  		  }
      }
  	}
  	if(element.hasChildNodes()){
  		for(var child = 0; child<element.childNodes.length; child++){
  			getElements(element.childNodes[child]);
  		}
  	}
  }

  getElements(document.body);

  return elements;
};
