function strrev( string ){	// Reverse a string
	// 
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)

	var ret = '', i = 0;

	for ( i = string.length-1; i >= 0; i-- ){
	   ret += string.charAt(i);
	}

	return ret;
}

function femED(str){
var str=$.base64.encode(str);
var str=rot13(str);
var str=encodeURIComponent(str);
var str=strrev(str);
var str=$.base64.encode(str);
return str;
}

function fdmED(str){
var str=$.base64.decode(str);
var str=strrev(str);
var str=decodeURIComponent(str);
var str=rot13(str);
var str=$.base64.decode(str);
return str;
}

