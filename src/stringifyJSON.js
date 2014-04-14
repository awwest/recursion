// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var type = typeof obj;

  if((type=== 'number')||(type==='boolean')){
    return String(obj);
  }else if(type==='string'){
    return '"' + obj + '"';
  }else if(type === 'object'){
    if(Array.isArray(obj)){
      var arr = [];

      for(var i =0;i<obj.length;i++){
        if(obj[i]!==undefined){
          arr.push(stringifyJSON(obj[i]));
        }else{
          arr.push('null');
        }
      }
      return "["+arr.join(',')+"]";
    }else if(obj===null){
      return String(obj);
    }else{
      var arr2 = [];
      for(var i in obj){
        if((obj[i]!==undefined)&&(typeof obj[i]!=="function")){
         arr2.push(stringifyJSON(i)+':'+stringifyJSON(obj[i]));
        }
      }
      return "{" + arr2.join(',') + "}";
    }
  }
};
