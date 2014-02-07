"use strict";
jQuery.base64 = ( function($) {
        var _PADCHAR = "=", _ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _VERSION = "1.0";
        function _getbyte64(s, i) {
            var idx = _ALPHA.indexOf(s.charAt(i));
            if (idx === -1) {
                throw "Cannot decode base64"
            }
            return idx
        }

        function _decode(s) {
            var pads = 0, i, b10, imax = s.length, x = [];
            s = String(s);
            if (imax === 0) {
                return s
            }
            if (imax % 4 !== 0) {
                throw "Cannot decode base64"
            }
            if (s.charAt(imax - 1) === _PADCHAR) {
                pads = 1;
                if (s.charAt(imax - 2) === _PADCHAR) {
                    pads = 2
                }
                imax -= 4
            }
            for ( i = 0; i < imax; i += 4) {
                b10 = (_getbyte64(s, i) << 18) | (_getbyte64(s, i + 1) << 12) | (_getbyte64(s, i + 2) << 6) | _getbyte64(s, i + 3);
                x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255, b10 & 255))
            }
            switch(pads) {
                case 1:
                    b10 = (_getbyte64(s, i) << 18) | (_getbyte64(s, i + 1) << 12) | (_getbyte64(s, i + 2) << 6);
                    x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255));
                    break;
                case 2:
                    b10 = (_getbyte64(s, i) << 18) | (_getbyte64(s, i + 1) << 12);
                    x.push(String.fromCharCode(b10 >> 16));
                    break
            }
            return x.join("")
        }

        function _getbyte(s, i) {
            var x = s.charCodeAt(i);
            if (x > 255) {
                throw "INVALID_CHARACTER_ERR: DOM Exception 5"
            }
            return x
        }

        function _encode(s) {
            if (arguments.length !== 1) {
                throw "SyntaxError: exactly one argument required"
            }
            s = String(s);
            var i, b10, x = [], imax = s.length - s.length % 3;
            if (s.length === 0) {
                return s
            }
            for ( i = 0; i < imax; i += 3) {
                b10 = (_getbyte(s, i) << 16) | (_getbyte(s, i + 1) << 8) | _getbyte(s, i + 2);
                x.push(_ALPHA.charAt(b10 >> 18));
                x.push(_ALPHA.charAt((b10 >> 12) & 63));
                x.push(_ALPHA.charAt((b10 >> 6) & 63));
                x.push(_ALPHA.charAt(b10 & 63))
            }
            switch(s.length-imax) {
                case 1:
                    b10 = _getbyte(s, i) << 16;
                    x.push(_ALPHA.charAt(b10 >> 18) + _ALPHA.charAt((b10 >> 12) & 63) + _PADCHAR + _PADCHAR);
                    break;
                case 2:
                    b10 = (_getbyte(s, i) << 16) | (_getbyte(s, i + 1) << 8);
                    x.push(_ALPHA.charAt(b10 >> 18) + _ALPHA.charAt((b10 >> 12) & 63) + _ALPHA.charAt((b10 >> 6) & 63) + _PADCHAR);
                    break
            }
            return x.join("")
        }

        return {
            decode : _decode,
            encode : _encode,
            VERSION : _VERSION
        }
    }(jQuery));

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
/*This should be safe to use with URLs*/

function hide64(str) {
    return str.replace(/=/g, "_").replace(/\//g, ",").replace(/\+/g, "-");
};

function show64(str) {
    return str.replace(/_/g, "=").replace(/,/g, "/").replace(/-/g, "+");
}

//Base64 encode image
//<input id="base64File" type="file" />
//<button id="base64Button">blah</button>

//IT HAS PROBLEMS AS CHROME REFUSES TO DISPLAY URL IN APPS, IT SHOWS "BLOB"
//SO WE NEED TO USE CANVAS AND CONVERT IT TO PNG

//$("#base64Button").on("click", function() {

function encodeimgbase64() {
    var file = $("#base64File")[0].files[0]
    var fileknd = $("#base64File")[0].files[0].name.toLowerCase().slice(-3);
    var reader = new FileReader();
    var ftype = 0;

    switch(fileknd) {
        case 'gif':
            ftype:"image/gif";
            break;
        case 'pge':
            ftype:"image/jpge";
            break;
        case 'jpg':
            ftype:"image/jpge";
            break;
        case 'png':
            ftype:"image/png";
            break;
        default:
            ftype:"image/png";
    }

    // callback for readAsDataURL
    reader.onload = function(encodedFile) {
         try{
            base64Image = encodedFile.srcElement.result;
        var binaryImg = atob(base64Image);
        var length = binaryImg.length;
        var ab = new ArrayBuffer(length);
        var ua = new Uint8Array(ab);
        for (var i = 0; i < length; i++) {
            ua[i] = binaryImg.charCodeAt(i);
        }
        var blob = new Blob([ab], {
            type : ftype
        });
        URL.createObjectURL(blob);
        } catch (err){
             throw "IMG_ERROR_ELEMENT: RESOURCE NOT AVALIABLE"
        }
    };

    reader.readAsDataURL(file);

    reader.onloadend = function() {
        // $("#freturn").html('<img src="' + URL.createObjectURL(file) + '" id="generatedimage">');

        $("#generateImage64").html('<div id="loadingImage64"></div><img src="' + URL.createObjectURL(file) + '" id="generatedimage">').show();

        $("#generatedimage").on("load", function() {
            $("#freturn").text(getBase64ImageById('generatedimage', ftype));
            $("#generateImage64").fadeOut('slow');
        });

        $("#loadingImage64").on("click", function() {

            $("#generateImage64").fadeOut('slow');
            $("#freturn").text('User aborted.');
            soundalert();

        });
            $("#generatedimage").on("error", function() {
            $("#generateImage64").fadeOut('fast');
            $("#freturn").text('Invalid image.');
            soundalert();
            });
    }
}

function getBase64ImageById(id, ftype) {
    return getBase64Image(document.getElementById(id, ftype));
}

function getBase64Image(img, ftype) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL(ftype);
    return dataURL;
}