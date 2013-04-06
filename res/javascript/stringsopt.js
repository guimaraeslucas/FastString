/*!
##############################################################
#. . . . . . . . . . LUCASGUIMARAES.COM. . . . . . . . . . . #
#. . . . . . . . . . (C) COPYRIGHT 2013. . . . . . . . . . . #
##############################################################
*
* @copyright 2012-2013 LucasGuimaraes.com
* @link <contato@lucasguimaraes.com>
* @link http://www.lucasguimaraes.com
* @generator LGPowerWeb/2.0.0 LGGM/6.0.2 (4.0.0)
*
* The above copyright notice shall be included in all
* copies or substantial portions of the Software.
*
*/

function rot13(rot13str) {
 return rot13str.replace(/[a-zA-Z]/g, function(c) {
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
  });
}

/**
 * lgcomma2dot
 * changes a , to a .
 * @param {str} str
 */
function lgcomma2dot(str) {
     if (str.indexOf(",") > -1) {
        str = str.replace(/,/g, ".");
     return str;
    }else{
	return 0;
	}
}

/**
 * lgstrlen
 * length of string
 * @param {str} str
 */
function lgstrlen(str){
return str.length;
}


function strip_tags (input, allowed) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
}

function strrev(string){
// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	var ret = '', i = 0;
	for ( i = string.length-1; i >= 0; i-- ){
	   ret += string.charAt(i);
	}
	return ret;
}

function addslashes (str) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Ates Goral (http://magnetiq.com)
  // +   improved by: marrtins
  // +   improved by: Nate
  // +   improved by: Onno Marsman
  // +   input by: Denny Wardhana
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // +   improved by: Oskar Larsson Högfeldt (http://oskar-lh.name/)
  // *     example 1: addslashes("kevin's birthday");
  // *     returns 1: 'kevin\'s birthday'
  return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

function stripslashes(str) {
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Ates Goral (http://magnetiq.com)
  // +      fixed by: Mick@el
  // +   improved by: marrtins
  // +   bugfixed by: Onno Marsman
  // +   improved by: rezna
  // +   input by: Rick Waldron
  // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
  // +   input by: Brant Messenger (http://www.brantmessenger.com/)
  // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: stripslashes('Kevin\'s code');
  // *     returns 1: "Kevin's code"
  // *     example 2: stripslashes('Kevin\\\'s code');
  // *     returns 2: "Kevin\'s code"
  return (str + '').replace(/\\(.?)/g, function (s, n1) {
    switch (n1) {
    case '\\':
      return '\\';
    case '0':
      return '\u0000';
    case '':
      return '';
    default:
      return n1;
    }
  });
}

function strtolower (str) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Onno Marsman
  // *     example 1: strtolower('Kevin van Zonneveld');
  // *     returns 1: 'kevin van zonneveld'
  return (str + '').toLowerCase();
}

function strtoupper (str) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Onno Marsman
  // *     example 1: strtoupper('Kevin van Zonneveld');
  // *     returns 1: 'KEVIN VAN ZONNEVELD'
  return (str + '').toUpperCase();
}

function ucwords (str) {
  // http://kevin.vanzonneveld.net
  // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // +   improved by: Waldo Malqui Silva
  // +   bugfixed by: Onno Marsman
  // +   improved by: Robin
  // +      input by: James (http://www.james-bell.co.uk/)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // *     example 1: ucwords('kevin van  zonneveld');
  // *     returns 1: 'Kevin Van  Zonneveld'
  // *     example 2: ucwords('HELLO WORLD');
  // *     returns 2: 'HELLO WORLD'
  return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) {
    return $1.toUpperCase();
  });
}

function str_shuffle (str) {
  // http://kevin.vanzonneveld.net
  // +   original by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: shuffled = str_shuffle("abcdef");
  // *     results 1: shuffled.length == 6
  if (arguments.length === 0) {
    throw 'Wrong parameter count for str_shuffle()';
  }

  if (str == null) {
    return '';
  }

  str += '';

  var newStr = '', rand, i = str.length;

  while (i) {
    rand = Math.floor(Math.random() * i);
    newStr += str.charAt(rand);
    str = str.substring(0, rand) + str.substr(rand + 1);
    i--;
  }
  return newStr;
}

function str_repeat (input, multiplier) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // +   improved by: Ian Carter (http://euona.com/)
  // *     example 1: str_repeat('-=', 10);
  // *     returns 1: '-=-=-=-=-=-=-=-=-=-='

  var y = '';
  while (true) {
    if (multiplier & 1) {
      y += input;
    }
    multiplier >>= 1;
    if (multiplier) {
      input += input;
    }
    else {
      break;
    }
  }
  return y;
}