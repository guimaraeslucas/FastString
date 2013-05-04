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
        return String.fromCharCode((c <= 'Z' ? 90 : 122) >= ( c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}

/**
 * lgcomma2dot
 * changes a , to a .
 * @param {str} str
 */
function lgcomma2dot(str) {
    return str.replace(/,/g, ".");
}

/**
 * lgstrlen
 * length of string
 * @param {str} str
 */
function lgstrlen(str) {
    return str.length;
}

function vcountWords(s) {
    //FROM http://www.mediacollege.com/internet/javascript/text/count-words.html
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n");
    return s.split(' ').length;
}

function vcountChars(vl) {
    //FROM web_bert
    // http://www.webdeveloper.com/forum/showthread.php?197897-Character-count-minus-spaces
    vl = vl.replace(/\s+/g, '');
    return vl.length;
}

function strip_tags(input, allowed) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
    // making sure the allowed arg is a string containing only tags in lowercase
    // (<a><b><c>)
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, function($0, $1) {
        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}

function strrev(string) {
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    var ret = '', i = 0;
    for ( i = string.length - 1; i >= 0; i--) {
        ret += string.charAt(i);
    }
    return ret;
}

function addslashes(str) {
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
    return (str + '').replace(/\\(.?)/g, function(s, n1) {
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

function strtolower(str) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Onno Marsman
    // *     example 1: strtolower('Kevin van Zonneveld');
    // *     returns 1: 'kevin van zonneveld'
    return (str + '').toLowerCase();
}

function strtoupper(str) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Onno Marsman
    // *     example 1: strtoupper('Kevin van Zonneveld');
    // *     returns 1: 'KEVIN VAN ZONNEVELD'
    return (str + '').toUpperCase();
}

function ucwords(str) {
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
    return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
        return $1.toUpperCase();
    });
}

function str_shuffle(str) {
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

function str_repeat(input, multiplier) {
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
        } else {
            break;
        }
    }
    return y;
}

function generateUUID(uuidt) {
    //Original by: http://stackoverflow.com/users/109538/broofa
    return uuidt.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}

function checkUUID(uuid) {
    //Original by: http://stackoverflow.com/users/1014748/ryanb
    return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(uuid);
}

function fulltrim(str) {
    return str.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
}

function stripcomments(str) {
    return str.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '').replace(/<!--.*?-->/g, '').replace("(?s)<!--\\[if(.*?)\\[endif\\] *-->", '');
}

/**
 * lgstripnonenglish
 * Strips all non-english chars.
 * @param {str} str
 */
function lgstripnonenglish(str) {
    return str.replace(/[^0-9A-Za-z\s]+/g, '');
}

function latin2e(palavra) {
    //Original by:
    // http://www.pietrogaiao.com.br/blog/retirar-acentos-com-javascript/
    com_acento = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇñÑ';
    sem_acento = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUCnN';
    nova = '';
    for ( i = 0; i < palavra.length; i++) {
        if (com_acento.search(palavra.substr(i, 1)) >= 0) {
            nova += sem_acento.substr(com_acento.search(palavra.substr(i, 1)), 1);
        } else {
            nova += palavra.substr(i, 1);
        }
    }
    return nova;
}

/*
 Original by: Mathias Baynes
 https://github.com/mathiasbynens/mothereff.in/blob/master/binary-ascii/eff.js
 */
regexBinaryGroup = /\s*[01]{8}\s*/g;
regexAnyCharacter = /[\s\S]/g;
regexBinary = /^(\s*[01]{8}\s*)*$/;
regexExtendedASCII = /^[\x00-\xff]*$/;
stringFromCharCode = String.fromCharCode;

function zeroPad(number) {
    return '00000000'.slice(String(number).length) + number;
}

function toASCII(string) {
    return string.replace(regexBinaryGroup, function(group) {
        return stringFromCharCode(parseInt(group, 2));
    });
}

function toBinary(string) {
    return string.replace(regexAnyCharacter, function(character) {
        return zeroPad(character.charCodeAt().toString(2)) + ' ';
    });
}

/*
 Original by:
 http://www.java2s.com/Code/JavaScript/Security/AsciitoHexandHextoAsciiinJavaScript.htm
 CryptoMX Tools
 Copyright (C) 2004 - 2006 Derek Buitenhuis
 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License.
 */
function DoAsciiHex(x, dir) {
    hex = "0123456789ABCDEF";
    almostAscii = ' !"#$%&' + "'" + '()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[' + '\\' + ']^_`abcdefghijklmnopqrstuvwxyz{|}';
    r = "";
    if (dir == "A2H") {
        for ( i = 0; i < x.length; i++) {
            let = x.charAt(i);
            pos = almostAscii.indexOf(let) + 32;
            h16 = Math.floor(pos / 16);
            h1 = pos % 16;
            r += hex.charAt(h16) + hex.charAt(h1);
        };
    };
    if (dir == "H2A") {
        for ( i = 0; i < x.length; i++) {
            let1 = x.charAt(2 * i);
            let2 = x.charAt(2 * i + 1);
            val = hex.indexOf(let1) * 16 + hex.indexOf(let2);
            r += almostAscii.charAt(val - 32);
        };
    };
    return r;
};

var MCarr = new Array("*", "|", ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.");
var ABC012arr = "*|ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function DoMorseDecrypt(x) {
    mess = "";
    apos = 0;
    bpos = 0;
    while (bpos < x.length) {
        bpos = x.indexOf(" ", apos);
        if (bpos < 0) {
            bpos = x.length
        };
        dits = x.substring(apos, bpos);
        apos = bpos + 1;
        let = "";
        for ( j = 0; j < MCarr.length; j++) {
            if (dits == MCarr[j]) {
                let = ABC012arr.charAt(j)
            }
        };
        if (let == "") {
            let = "*"
        };
        mess += let;
    };
    return mess;
};

function DoMorseEncrypt(x) {
    mess = "";
    for ( i = 0; i < x.length; i++) {
        let = x.charAt(i).toUpperCase();
        for ( j = 0; j < MCarr.length; j++) {
            if (let == ABC012arr.charAt(j)) {
                mess += MCarr[j]
            }
        };
        mess += " ";
    };
    mess = mess.substring(0, mess.length - 1);
    return mess;
};

function javascript_escape(str) {
    //Original by: @mathias <http://mathiasbynens.be>
    var checkboxOnlyASCII = 0;
    var checkboxStringBody = 1;
    var cache = {
        // http://es5.github.com/#x7.8.4
        // Table 4 — String Single Character Escape Sequences
        '\b' : '\\b',
        '\t' : '\\t',
        '\n' : '\\n',
        '\v' : '\\x0B', // In IE < 9, '\v' == 'v'
        '\f' : '\\f',
        '\r' : '\\r',
        // escape double quotes, \u2028, and \u2029 too, as they break input
        '\"' : '\\\"',
        '\u2028' : '\\u2028',
        '\u2029' : '\\u2029',
        // we’re wrapping the string in single quotes, so escape those too
        '\'' : '\\\''
    };

    function encode(string) {
        // URL-encode some more characters to avoid issues when using permalink
        // URLs in Markdown
        return encodeURIComponent(string).replace(/['()_*]/g, function(character) {
            return '%' + character.charCodeAt().toString(16);
        });
    }

    function unicodeEscape(str) {
        return str.replace(/[\s\S]/g, function(character) {
            var charCode = character.charCodeAt(), hexadecimal = charCode.toString(16).toUpperCase(), longhand = hexadecimal.length > 2, escape;
            if (checkboxOnlyASCII.checked && /[\x20-\x26\x28-\x7E]/.test(character)) {
                // it’s a printable ASCII character that is not `'`; don’t escape
                // it
                return character;
            }
            if (cache[character]) {
                return cache[character];
            }
            escape = cache[character] = '\\' + ( longhand ? 'u' : 'x') + ('0000' + hexadecimal).slice( longhand ? -4 : -2);
            return escape;
        });
    }

    return unicodeEscape(str);
}