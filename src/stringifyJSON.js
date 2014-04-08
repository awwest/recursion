// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  
  var type = typeof obj;
  var result = '';

  if(type=="boolean"){
  	result = obj.toString();
  }else if(type=="string"){
  	result = '"' + obj + '"';
  }else if(type == "number"){
  	result = '' + obj + '';
  //}else if(type == "function"){
  	//result = '{}';
  }else if(type == "undefined"){
  	result = "";
  }else if(type == "object"){
  	if(Array.isArray(obj)){
  		result = '['
  		for(var x in obj){
        if((typeof obj[x]== 'function')||(typeof obj[x] == 'undefined')){
          result += '';
        }else{
  			 result = result + stringifyJSON(obj[x]) + ',';
        }
  		}
  		if(result.length > 1){
  			result = result.slice(0, -1);
  		}
  		result += ']';	
  	}else if(obj==null){
  		result = 'null';
  	}else{
  		result = '{'
  		
  		for(var y in obj){
  			var keyType = typeof obj[y];
  			if((keyType == 'function')||(keyType == 'undefined')){
  				result += '';
  			}else{
  			 result += stringifyJSON(y) + ':' + stringifyJSON(obj[y]) + ',';
  			}
  		}
  		if(result.length > 1){
  			result = result.slice(0, -1);
  		}
  		result += '}';
  	}
  }else{
  	result = obj.toString();
  }

  return result;
};
