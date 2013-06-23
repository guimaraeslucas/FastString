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

function htmlEscape(lgstr) {
    return String(lgstr).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function htmlUnescape(lgstr) {
    return String(lgstr).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

//Escape Javascript code
//Original by: http://www.htmlescape.net/stringescape_tool.html
//Adapted by: LucasGuimaraes(http://lucasguimaraes.com)

var hex = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');
function JAVASstringEncode(x) {
    var preescape = "" + x;
    var escaped = "";
    var i = 0;
    for ( i = 0; i < preescape.length; i++) {
        escaped = escaped + JAVASencodeCharx(preescape.charAt(i));
    }
    return escaped;
}

function JAVASencodeCharx(original) {
    var found = true;
    var thecharchar = original.charAt(0);
    var thechar = original.charCodeAt(0);
    switch(thecharchar) {
        case '\n':
            return "\\n";
            break;
        //newline
        case '\r':
            return "\\r";
            break;
        //Carriage return
        case '\'':
            return "\\'";
            break;
        case '"':
            return "\\\"";
            break;
        case '\&':
            return "\\&";
            break;
        case '\\':
            return "\\\\";
            break;
        case '\t':
            return "\\t";
            break;
        case '\b':
            return "\\b";
            break;
        case '\f':
            return "\\f";
            break;
        case '/':
            return "\\x2F";
            break;
        case '<':
            return "\\x3C";
            break;
        case '>':
            return "\\x3E";
            break;
        default:
            found = false;
            break;
    }
    if (!found) {
        if (thechar > 127) {
            var c = thechar;
            var a4 = c % 16;
            c = Math.floor(c / 16);
            var a3 = c % 16;
            c = Math.floor(c / 16);
            var a2 = c % 16;
            c = Math.floor(c / 16);
            var a1 = c % 16;
            return "\\u" + hex[a1] + hex[a2] + hex[a3] + hex[a4] + "";
        } else {
            return original;
        }
    }
}

//Original by:
//© 2004 by 2M.Studio M.Weidemann
//By M.Weidemann (http://www.2mstudio.de)
//Adapted by: LucasGuimaraes(http://lucasguimaraes.com)

function fhtml2js(data) {
    var randomname = Math.floor((Math.random() * 1000) + 1);
    var comment = "JQuery example: $('#divname').html(fshtml_" + randomname + "());";
    var br = "%0D%0A";
    var dataArr = JAVASstringEncode(data).split(br);
    var retvar = "";
    for ( i = 0; i < dataArr.length; i++) {
        retvar += (i == 0) ? "<script>\n\/* " + comment + " *\/\nfunction fshtml_" + randomname + "(){\nvar fs_s=\"" : "fs_s+=\""
        retvar += "" + dataArr[i];
        retvar += (i != dataArr.length - 1) ? "\"; \n" : "\";\n";
    };
    retvar += "return fs_s;\n}\n<\/script>";
    return retvar;
}

//Original by:
//About.com - http://javascript.about.com/library/blipconvert.htm
//Adapted by: LucasGuimaraes(http://lucasguimaraes.com)

function Kdot2num(dot) {
    try {
        var d = dot.split('.');
        return ((((((+d[0]) * 256) + (+d[1])) * 256) + (+d[2])) * 256) + (+d[3]);
    } catch(e) {
    }
}

function Knum2dot(num) {
    var d = num % 256;
    ;
    for (var i = 3; i > 0; i--) {
        num = Math.floor(num / 256);
        d = num % 256 + '.' + d;
    }
    return d;
}

function IPconvert(ip) {
    try {
        var dotted = /^(\d|[01]?\d\d|2[0-4]\d|25[0-5])\.(\d|[01]?\d\d|2[0-4]\d|25[0-5])\.(\d|[01]?\d\d|2[0-4]\d|25[0-5])\.(\d|[01]?\d\d|2[0-4]\d|25[0-5])$/;
        var num = /^\d+$/;
        if (ip.match(dotted))
            ip = Kdot2num(ip);
        else if (ip.match(num) && +ip < 4294967296)
            ip = Knum2dot(ip);
        return ip;
    } catch(e) {
    };
}

//Original by:
//http://linnertmedia.de/
//Adapted by: LucasGuimaraes(http://lucasguimaraes.com)

// XLS HTML TABLE CONVERTER
function xls2html(xlscontent) {

            var inputText = xlscontent,  inputLineArray = inputText.split('\n'), inputCellsArray = [], maxColumns = 0, currentColumns = 0, outputText = "";

            for (var i in inputLineArray) {
                inputCellsArray[i] = inputLineArray[i].split('\t');
            }

            for (var i in inputCellsArray) {
                currentColumns = inputCellsArray[i].length;
                maxColumns = currentColumns > maxColumns ? currentColumns : maxColumns;
            }

            for (var i in inputCellsArray) {
                outputText += "<tr>\n";
                for (var j = 0; j < maxColumns; j++) {
                    if ( typeof inputCellsArray[i][j] !== "undefined" && inputCellsArray[i][j] !== "") {
                        outputText += "<td>" + inputCellsArray[i][j] + "</td>";
                    } else {
                        outputText += "<td>&nbsp;</td>";
                    }
                }
                outputText += "</tr>\n";
            }

            return "<table>\n"+outputText+"</table>";



    // XLS HTML TABLE CONVERTER END
}