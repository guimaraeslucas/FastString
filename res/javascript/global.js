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

//Set true if running as chrome app
var chromeapp = false;

function lgt(line) {
    if (chromeapp) {
        return chrome.i18n.getMessage(line);
    } else {

        if (line == "@@extension_id") {
            return 'WebApp@' + document.domain;
        }

        //Try to get key or return empty
        try {
            gett = window.translationfile;
            t = gett[line].message;
        } catch(e) {
            t = '';
        }
        return t;
    }
}

function lgtt(elementId, txt) {
    $(elementId).html(lgt(txt));
}

function lgte(elementId, txt) {
    $(elementId).html(txt);
}

function hero_hide() {
    $('#doit').unbind('click');
    $("#shaopt").hide();
    $("#rptstr").hide();
    //$("#hero").fadeOut(100);
    $("#hero").slideUp();
}

function soundalert() {
    $("#sound").html('<audio autoplay="autoplay" preload="auto" src="res/sounds/mp3/tumtum.mp3"></audio>');
}

function soundinvalid() {
    $("#sound").html('<audio autoplay="autoplay" preload="auto" src="res/sounds/mp3/tum.mp3"></audio>');
}

function lgloadapp() {

    //Hides loader
    $(".loader").fadeOut();

    if (!chromeapp) {
        //If is Chrome offers the app
        var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        if (is_chrome) {
            lgte("#ischrome",lgt('chromebanner')+' <a href="https://chrome.google.com/webstore/detail/faststring-by-lg/gpknmoniniacaobkeclmiiaekniaddnd" id="clickhere">'+lgt('clickhere')+'</a>.</p>');
            $("#ischrome").show();
        }
    }

    //Sets <title> appname
    var lgappname = lgt("appname");
    document.title = lgappname;
    //Sets #brand appname
    var lgshortappname = lgt("shortappname");
    lgte("#brand", lgshortappname + ' <img src="res/images/png/fs16.png">');

    //Set errormessages
    invalid = lgt('invalid');

    //Set submenus
    //convert
    lgtt("#convert", "convert");
    //menu title
    lgtt("#b64e", "b64e");
    lgtt("#b64d", "b64d");
    lgtt("#b64eu", "b64eu");
    lgtt("#b64du", "b64du");
    lgtt("#b64diu", "b64diu");
    lgtt("#emED", "emED");
    lgtt("#dmED", "dmED");

    //HASHS
    lgtt("#hashs", "hashs");
    //menu title
    lgtt("#crc32", "crc32");
    lgtt("#md5h", "md5h");
    lgtt("#md564", "md564");
    lgtt("#sha1", "sha1");
    lgtt("#sha224", "sha224");
    lgtt("#sha256", "sha256");
    lgtt("#sha384", "sha384");
    lgtt("#sha512", "sha512");

    //WEB
    lgtt("#urle", "urle");
    lgtt("#urld", "urld");
    lgtt("#htmle", "htmle");
    lgtt("#htmld", "htmld");
    lgtt("#htmlcolors", "htmlcolors");
    lgtt("#enti", "enti");
    lgtt("#checkxml", "checkxml");
    lgtt("#escapejavas", "escapejavas");
    lgtt("#html2js", "html2js");

    //String operations
    lgtt("#others", "others");
    //menu title
    lgtt("#c2d", "c2d");
    lgtt("#reve", "reve");
    lgtt("#rot13", "rot13");
    lgtt("#stgs", "stgs");
    lgtt("#strlen", "strlen");
    lgtt("#strlen", "strlen");
    lgtt("#addslashes", "addslashes");
    lgtt("#stripslashes", "stripslashes");
    lgtt("#strtolower", "strtolower");
    lgtt("#strtoupper", "strtoupper");
    lgtt("#ucwords", "ucwords");
    lgtt("#str_shuffle", "str_shuffle");
    lgtt("#str_repeat", "str_repeat");
    lgtt("#trim", "trim");
    lgtt("#stripcomments", "stripcomments")
    lgtt("#checkUUID", "checkUUID");
    lgtt("#generateUUID", "generateUUID");

    //ABOUT
    lgtt("#about", "about");

    //Sets Welcome message
    lgte("#welcomemsg", lgt("welcome") + ' <strong id="appname">' + lgshortappname + '</strong>');
    lgtt("#selectoption", "selectoption");

    //Sets buttons and fields names
    lgtt("#doit", "doit");
    lgtt("#result", "result");
    lgtt("#copy", "copy");
    lgtt("#paste", "paste");
    lgtt("#view", "view");
    lgtt("#rptinfo", "rptinfo");

    //Sets Modal
    lgtt("#modalabout_title", "modalabout_title");
    lgtt("#modalabout_eid", "@@extension_id");
    lgtt("#modalabout_close", "modalabout_close");

    lgtt("#modalhtml_close", "modalabout_close");

    lgtt("#modalcolors_title", "htmlcolors");
    lgtt("#modalcolors_color", "color");
    lgtt("#modalcolors_name", "name");
    lgtt("#modalcolors_hexvalue", "hexvalue");
    lgtt("#modalcolors_close", "modalabout_close");
    $("#modalcolors_table").html(rmodalcolors_table());

    lgtt("#modalenti_title", "enti");
    lgtt("#modalenti_character", "character");
    lgtt("#modalenti_enumber", "enumber");
    lgtt("#modalenti_ename", "ename");
    lgtt("#modalenti_close", "modalabout_close");
    $("#modalenti_table").html(rmodalenti_table());

    //BUTTONS ACTIONS

    if (chromeapp) {
        //PASTE BUTTON
        $("#paste").click(function() {
            $("#eandd").val(pasteTextFromClipboard());
            return false;
            //Should be here as if we set type=button chrome ignores it - why ?
        });

        //COPY BUTTON
        $("#copy").click(function() {
            var freturn = $("#freturn").text();
            copyTextToClipboard(freturn);
        });
    } else {
        //Hide buttons if not in chrome
        $("#paste").hide();
        $("#copy").hide();
    }

    //VIEW BUTTON
    $("#view").click(function() {
        var freturn = $("#freturn").html();
        $("#modalhtmlcontent").html(htmlUnescape(freturn));
        $('#modalhtml').modal('show');
    });

    //ABOUT BUTTON
    $("#about").click(function() {
        var freturn = $("#freturn").html();
        $("#modalabout_license").html(iabout());
        $('#modalabout').modal('show');
    });

    //BRAND
    $("#brand").click(function() {
        $("#hero").delay(300).fadeIn();
        $("#dyn").slideUp(300);
        $("#eandd").val('');
        $("#freturn").text('');
    });

    //B64E
    $("#b64e").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "b64e");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            var enc = $.base64.encode(eandd);
            if (enc) {
                $("#freturn").text(enc);
            }
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);

    });

    //B64D
    $("#b64d").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "b64d");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            try {
                var dec = $.base64.decode(eandd);
            } catch(err) {
                var dec = invalid;
                soundalert();
            };
            $("#freturn").text(dec);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //B64EU
    $("#b64eu").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "b64eu");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            var ec = $.base64.encode(eandd);
            $("#freturn").text(hide64(ec));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //B64DU
    $("#b64du").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "b64du");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            try {
                var dec = show64(eandd);
                var dec2 = $.base64.decode(dec);
            } catch(err) {
                var dec2 = invalid;
                soundalert();
            };
            $("#freturn").text(dec2);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //B64DIU
    $("#b64diu").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "b64diu");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").html('<img src="' + eandd + '" border="0">');
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //CRC32
    $("#crc32").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "crc32");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(fcrc32(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //MD5H
    $("#md5h").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "md5h");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(hex_md5(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //MD564
    $("#md564").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "md564");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(b64_md5(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //SHA-1
    $("#sha1").click(function() {
        hero_hide();

        //Defines action name
        lgtt("#action", "sha1");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            var shaObj = new jsSHA(eandd, "TEXT");

            var opt = $("#shaopt").val();
            var hash = shaObj.getHash("SHA-1", opt);

            $("#freturn").text(hash);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
        $("#shaopt").show();
    });

    //SHA-224
    $("#sha224").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "sha224");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            var shaObj = new jsSHA(eandd, "TEXT");
            var opt = $("#shaopt").val();
            var hash = shaObj.getHash("SHA-224", opt);
            $("#freturn").text(hash);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
        $("#shaopt").show();
    });

    //SHA-256
    $("#sha256").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "sha256");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            var shaObj = new jsSHA(eandd, "TEXT");
            var opt = $("#shaopt").val();
            var hash = shaObj.getHash("SHA-256", opt);
            $("#freturn").text(hash);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
        $("#shaopt").show();
    });

    //SHA-384
    $("#sha384").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "sha384");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            var shaObj = new jsSHA(eandd, "TEXT");
            var opt = $("#shaopt").val();
            var hash = shaObj.getHash("SHA-384", opt);
            $("#freturn").text(hash);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
        $("#shaopt").show();
    });

    //SHA-512
    $("#sha512").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "sha512");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            var shaObj = new jsSHA(eandd, "TEXT");
            var opt = $("#shaopt").val();
            var hash = shaObj.getHash("SHA-512", opt);
            $("#freturn").text(hash);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
        $("#shaopt").show();
    });

    //URLE
    $("#urle").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "urle");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(encodeURIComponent(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //URLD
    $("#urld").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "urld");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(decodeURIComponent(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //HTMLE
    $("#htmle").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "htmle");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(htmlEscape(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //HTMLD
    $("#htmld").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "htmld");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(htmlUnescape(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //EMED
    $("#emED").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "emED");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            try {
                var dec = femED(eandd);
            } catch(err) {
                var dec = invalid;
                soundalert();
            }
            $("#freturn").text(dec);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //DEMED
    $("#dmED").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "dmED");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            try {
                var dec = fdmED(eandd);
            } catch(err) {
                var dec = invalid;
                soundalert();
            }
            $("#freturn").text(dec);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //ROT13
    $("#rot13").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "rot13");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(rot13(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //REVE
    $("#reve").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "reve");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(strrev(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //C2D
    $("#c2d").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "c2d");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            var check = lgcomma2dot(eandd);
            $("#freturn").text(check);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //STGE
    $("#stgs").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "stgs");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(strip_tags(eandd, ''));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //STRLEN
    $("#strlen").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "strlen");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(lgstrlen(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //ADDSLASHES
    $("#addslashes").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "addslashes");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(addslashes(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //ADDSLASHES
    $("#stripslashes").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "stripslashes");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(stripslashes(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //STRTOLOWER
    $("#strtolower").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "strtolower");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(strtolower(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //STRTOUPPER
    $("#strtoupper").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "strtoupper");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(strtoupper(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //UCWORDS
    $("#ucwords").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "ucwords");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(ucwords(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //STR_SHUFFLE
    $("#str_shuffle").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "str_shuffle");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(str_shuffle(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //CHECKXML
    $("#checkxml").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "checkxml");
        //Defines click action
        $("#doit").click(function() {
            var sMessage = [lgt('validxml'), // 0
            lgt('noroot'), // 1
            lgt('unfinalizedcomment'), // 2
            lgt('unfinalizedcdata'), // 3
            lgt('unexpectedinstruction'), // 4
            lgt('unexpecteddoctype'), // 5
            lgt('text1stag'), // 6
            lgt('textlastag'), // 7
            lgt('unexpectedentity'), // 8
            lgt('morerootnode'), // 9
            lgt('unclodesdtag'), // 10
            lgt('duplicatedattributes')];
            // 11

            var eandd = $("#eandd").val();
            var my_oXmlValidator = new oXmlValidator.Object(eandd);
            my_oXmlValidator.hParams.bFragment = false;
            if (my_oXmlValidator.valid()) {
                $("#freturn").text(lgt('validxml'));
            } else {
                soundinvalid();
                $("#freturn").text(lgt('invalidxml') + ' ' + sMessage[my_oXmlValidator.nCode] + '.');
            }
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //STR_REPEAT
    $("#str_repeat").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "str_repeat");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            var t2r = $("#t2r").val();
            $("#freturn").text(str_repeat(eandd, t2r));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
        $("#rptstr").show();
    });

    //encodejavascript
    $("#escapejavas").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "escapejavas");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(JAVASstringEncode(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //HTML2JS
    $("#html2js").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "html2js");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(fhtml2js(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //checkUUID
    $("#checkUUID").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "checkUUID");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            if (checkUUID(eandd)) {
                var result = lgt("validUUID");
            } else {
                var result = lgt("invalidUUID");
                soundinvalid();
            }
            $("#freturn").text(result);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //generateUUID
    $("#generateUUID").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "generateUUID");
        $("#eandd").val("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(generateUUID(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //TRIM
    $("#trim").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "trim");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(fulltrim(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //stripcomments
    $("#stripcomments").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "stripcomments");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(stripcomments(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

}//END LOAD

//only for chrome
// Copy provided text to the clipboard.
//From:
function copyTextToClipboard(text) {
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}

//Paste text from clipboard
//Modified from:
//http://stackoverflow.com/questions/7144702/the-proper-use-of-execcommandpaste-in-a-chrome-extension
function pasteTextFromClipboard() {
    var result = '';
    var sandbox = $('<textarea/>');
    $('body').append(sandbox);
    sandbox.select();
    if (document.execCommand('paste')) {
        result = sandbox.val();
    }
    sandbox.val('');
    sandbox.remove();
    return result;
}

//Starts app
$(document).ready(function() {
    //If is chrome, we already have the localization files loaded
    if (chromeapp) {
        lgloadapp();
        //Hide Ads we don't want them on chromeapp
        $("#ads").html('').hide();
    } else {
        //We should load the localization files first ! =)
        //Check user language
        try {
            var userlanguage = window.navigator.userLanguage || window.navigator.language;
            userlanguage = userlanguage.substring(0, 2).toLowerCase();
            var ula = ['en', 'es', 'pt'];
            if ($.inArray(userlanguage, ula) > -1) {
                if (userlanguage == 'pt') {
                    userlanguage = 'pt_BR'
                }
                ulocal = userlanguage;
            } else {
                ulocal = 'en';
            }
        } catch(e) {
            ulocal = 'en';
        }

        $.ajax({
            url : '_locales/' + ulocal + '/messages.json',
            cache : true,
            success : function(data) {
                window.translationfile = data;
                lgloadapp();
            },
            error : function() {
                alert("Fatal Error: Can't load or parse localization file for " + ulocal + ".");
            },
            headers : {
                "X-LGApps" : "true"
            }
        });
    }

});
