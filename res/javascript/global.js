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
var chromeapp = true;

//Stores the active function
activefunction = '?';

//Read JSON file and make translation
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

    $("#imgB64Alert").hide();
    $("#pophelp").popover('destroy');
    //We destroy any previus popover
    $('#doit').unbind('click');
    //We unbind any functions Do It button has
    $("#shaopt").hide();
    //We make sure SHA options field is hidden
    $("#rptstr").hide();
    //We make sure LoremImpsun options field is hidden
    $("#liopts").hide();
    //We make sure StringReplace options field is hidden
    $("#strrep").hide();
    //Hide bCrypt options
    $("#bCryptDiv").hide();
    //We make sure file field is hidden
    $("#encodeimgbase64f").hide();
    //We make sure repeat_srt field is hidden
    $("#hero").slideUp();
    //hide hero!
    $("#eandd").slideDown();
    $("#btns").show();
    //Show eandd that can be hidden because of base64 image encoder

    //Get the code that called hero_hide, so we know what to show in help button
    //ATTENTION: lgtt must always be on line number 4.
    activefunction = arguments.callee.caller.toString().split(/\r\n|\r|\n/)[3].replace('       lgtt("#action', '').replace('");', '').replace(' ", "', '').replace('lgtt("#action', '').replace(/\r\n|\r|\n/, '');
    //Sets help popover
    $("#pophelp").popover({
        title : lgt('htw'),
        html : true,
        content : returnafhelp(),
        trigger : 'click',
        placement : 'bottom'
    });

    //Store the number of times a function is used
    if (chromeapp) {
        chrome.storage.sync.get('mostusedfunctions', function(result) {
            var getfunctionsjson = result.mostusedfunctions;
            try {//Sometimes UNDEFINED alone just doesn't work on chrome -- ?
                if (getfunctionsjson == "" || getfunctionsjson === undefined || getfunctionsjson == 'undefined') {
                    getfunctionsjson = '{}';
                }
            } catch(e) {
            };

            var parsed = JSON.parse(getfunctionsjson);

            if ( typeof parsed[activefunction] === 'undefined') {
                parsed[activefunction] = 1;
            } else {
                parsed[activefunction] = parsed[activefunction] + 1;
            }
            var storejson = JSON.stringify(parsed);

            chrome.storage.sync.set({
                'mostusedfunctions' : storejson
            });
        });
    }

    //Total Chars in ResultBox - we must set the timeout to prevent it from
    // executing before the encode function
    $("#doit").click(function() {
        setTimeout(function() {
            countdatainfields("#freturn", "#frchartotal", 0);
        }, 50);
    });
}

//Play double beep
function soundalert() {
    $("#sound").html('<audio autoplay="autoplay" preload="auto" src="res/sounds/mp3/tumtum.mp3" id="sndc"></audio>');
    try {
        window.sndc.play();
    } catch(err) {
        console.log('sna');
    }
}

//Play only one beep
function soundinvalid() {
    $("#sound").html('<audio autoplay="autoplay" preload="auto" src="res/sounds/mp3/tum.mp3" id="sndc"></audio>');
    try {
        window.sndc.play();
    } catch(err) {
        console.log('sna');
    }
}

//Play happy beep
function soundhappy() {
    $("#sound").html('<audio autoplay="autoplay" preload="auto" src="res/sounds/mp3/timtum.mp3" id="sndc"></audio>');
    try {
        window.sndc.play();
    } catch(err) {
        console.log('sna');
    }
}

//Get the help for function
function returnafhelp() {
    try {//As in WebApp this returns an error if not avaliable
        var returnfhelp = lgt(activefunction + '_h');
        if (returnfhelp == '') {
            returnfhelp = lgt('helpnotfound');
        }
    } catch(e) {
        return lgt('helpnotfound');
    }
    return returnfhelp;
}

//Provide statistics about fields
function countdatainfields(who, where, ttype) {
    if (ttype == 'val') {
        var frtn = $(who).val();
    } else {
        var frtn = $(who).text();
    }
    var lines = frtn.split("\n");
    var totalchar = lgstrlen(frtn);
    var words = vcountWords(frtn);
    var totalcharswithoutspace = vcountChars(frtn);

    if (totalchar == 0) {
        $(where).text('');
    } else {
        $(where).html(' ' + lgt('charscount') + ': ' + totalchar + ' | ' + lgt('charswocount') + ': ' + totalcharswithoutspace + ' | ' + lgt('linescount') + ': ' + lines.length + ' | ' + lgt('wordscount') + ': ' + words);
    }
}

//Sort Object as Array so we can order its values
function sortObject(obj) {
    var arr = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key' : prop,
                'value' : obj[prop]
            });
        }
    }
    arr.sort(function(a, b) {
        return a.value - b.value;
    });
    return arr;
    // returns array
}

//Creates hero buttons
function herobuttons() {
    if (chromeapp) {

        chrome.storage.sync.get('mostusedfunctions', function(result) {
            var getfunctionsjson = result.mostusedfunctions;

            try {//Sometimes UNDEFINED alone just doesn't work on chrome -- ?
                if (getfunctionsjson != "" || getfunctionsjson !== undefined || getfunctionsjson != 'undefined') {

                    var parsed = JSON.parse(getfunctionsjson);
                    var i = 1;
                    var h = window.innerHeight;
                    var w = window.innerWidth;
                    if (h >= 910 && h <= 940) {
                        var totaltoshow = 16;
                    } else if (w >= 1400 && h >= 700) {
                        var totaltoshow = 20;
                    } else {
                        var totaltoshow = 10;
                    }
                    //Clean div so we don't keep adding buttons to it
                    $("#mostusedbuttons").html('');

                    var startanimation = 100;

                    $.each(sortObject(parsed).reverse(), function(key, value) {

                        var ch = this.key;

                        $("#mostusedbuttons").append('<button class="btn btn-inverse hidebt" id="' + ch + '_sp" type="button" style="margin-top:8px; height: 110px;width: 110px;">' + lgt(ch) + ' (' + this.value + ')</button> ');

                        $("#" + ch + "_sp").delay(startanimation).fadeIn();
                        startanimation = startanimation + 80;

                        $("#" + ch + "_sp").on('click', function() {
                            $("#" + ch).click();
                        });

                        i = i + 1;
                        if (i > totaltoshow) {
                            return false;
                        }
                    });

                }
            } catch(e) {
            };
        });
    } else {
        //If not chrome, lets hide the most used functions buttons and make
        // content small so we can show publicity
        $("#mufunctions").hide();
        $(".ucode").addClass('ucode_web');
        $(".freturn").addClass('freturn_web');
        $(".hero-unit").addClass('hero-unit_web');

    }
}

//Configure Alerts
bootstrap_alert = function() {
};
bootstrap_alert.success = function(message) {
    $('#navmenutop').after('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>' + message + '</span></div>');
};
//Start to render the App
function lgloadapp() {
    //Hide loader
    $(".loader").fadeOut();
    //Show menu and container
    $("#navmenutop").fadeIn();
    $("#cfluid").slideDown('slow');

    if (!chromeapp) {
        //If is Chrome offers the app
        var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        if (is_chrome) {
            lgte("#ischrome", lgt('chromebanner') + ' <a href="https://chrome.google.com/webstore/detail/faststring-by-lg/gpknmoniniacaobkeclmiiaekniaddnd" id="clickhere">' + lgt('clickhere') + '</a>.</p>');
            $("#ischrome").show();
        }
    }

    $(window).resize(function() {
        herobuttons();
    });

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
    lgtt("#encodeimgbase64", "encodeimgbase64");

    lgtt("#doascii", "doascii");
    lgtt("#dohex", "dohex");
    lgtt("#ascii2bin", "ascii2bin");
    lgtt("#bin2ascii", "bin2ascii");

    lgtt("#morsee", "morsee");
    lgtt("#morsed", "morsed");

    lgtt("#emED", "emED");
    lgtt("#dmED", "dmED");

    //HASHS
    lgtt("#hashs", "hashes");
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

    lgtt("#ipde", "ipde");
    lgtt("#urle", "urle");
    lgtt("#urld", "urld");
    lgtt("#htmle", "htmle");
    lgtt("#htmld", "htmld");
    lgtt("#htmlcolors", "htmlcolors");
    lgtt("#enti", "enti");
    lgtt("#checkxml", "checkxml");
    lgtt("#escapejavas", "escapejavas");
    lgtt("#javascript_escape", "javascript_escape");
    lgtt("#html2js", "html2js");
    lgtt("#Scolors", "Scolors");
    lgtt("#xls2html", "xls2html");

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
    lgtt("#str_replace", "str_replace");
    lgtt("#ucwords", "ucwords");
    lgtt("#str_shuffle", "str_shuffle");
    lgtt("#str_repeat", "str_repeat");
    lgtt("#trim", "trim");
    lgtt("#stripsc", "stripsc");
    lgtt("#latin2e", "latin2e");
    lgtt("#stripcomments", "stripcomments");
    lgtt("#checkUUID", "checkUUID");
    lgtt("#generateUUID", "generateUUID");
    lgtt("#loremipsun", "loremipsun");
    lgtt("#bCrypt", "bCrypt");

    //ABOUT
    lgtt("#about", "about");
    lgtt("#paylink", "paylink");
    lgtt("#reviewlink", "reviewlink");
    lgtt("#bugslink", "bugslink");

    //Sets Welcome message
    lgte("#welcomemsg", lgt("welcome") + ' <strong id="appname">' + lgshortappname + '</strong>');
    lgtt("#selectoption", "selectoption");
    //Set MostUsed in hero
    lgtt("#mufunctions", "mufunctions");

    //Sets buttons and fields names
    lgtt("#doit", "doit");
    lgtt("#result", "result");
    lgtt("#copy", "copy");
    lgtt("#paste", "paste");
    lgtt("#view", "view");
    lgtt("#rptinfo", "rptinfo");

    lgtt("#lichars", "lichars");
    lgtt("#lipar", "lipar");
    lgtt("#liwds", "liwds");
    lgtt("#lipt", "lipt");
    lgtt("#lipf", "lipf");

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

    lgtt("#modalScolors_title", "Scolors");
    lgtt("#modalScolors_close", "modalabout_close");

    lgtt("#modalfile_info", "modalfile_info");
    lgtt("#modalfiles_title", "modalfiles_title");
    lgtt("#modalfiles_open", "modalfiles_open");

    lgtt("#imgB64Alert", "imgB64Alert");

    lgtt("#replaceinfo", "replaceinfo");
    lgtt("#replaceflaginfo", "replaceflaginfo");
    lgtt("#replaceforinfo", "replaceforinfo");

    lgtt("#savebtn", "savebtn");
    lgtt("#btnAbort", "btnAbort");
    lgtt("#btnOpenFile", "modalfiles_open");

    //Configure Minicolors
    $(".minicolors").minicolors({
        control : 'brightness',
        swatchPosition : 'right',
        textfield : false,
        inline : true,
        change : function(hex, opacity) {
            text = "HEX: ";
            text += hex ? hex : 'transparent';
            if (opacity)
                text += ', ' + opacity;
            text += ' <br> RGBA: ' + $(this).minicolors('rgbaString');

            // Show text in console; disappear after a few seconds
            $('#minicolorsvalue').html(text);

        }
    });

    //Set HeroButtons
    herobuttons();

    //BUTTONS ACTIONS
    if (chromeapp) {
        //PASTE BUTTON
        $("#paste").click(function() {
            $("#eandd").val(pasteTextFromClipboard());
            return false;
            //Should be here as if we set type=button chrome ignores it don't
            // know why ?
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
        $("#modalhtmlcontent").html('<span class="htmlrender">' + htmlUnescape(freturn) + '</span>');
        $('#modalhtml').modal('show');
    });

    //SAVE BUTTON
    $("#savebtn").click(function() {
        saveFS();
    });

    //ABORT BUTTON
    $("#btnAbort").click(function() {
        aabortRead();
    });

    //Start to load file from Open File Modal
    $("#modalfiles_open").click(function() {
        setTimeout(function() {
            $("#btnAbort").show();
            handleFileSelect();
        }, 390);

    });

    //ABOUT BUTTON
    $("#about").click(function() {
        var freturn = $("#freturn").html();
        $("#modalabout_license").html(iabout());
        $('#modalabout').modal('show');
    });

    //Total Chars in TextBox
    $("#eandd").keyup(function() {
        countdatainfields("#eandd", "#tbchartotal", 'val');
    });

    //BRAND
    $("#brand").click(function() {
        $("#hero").delay(300).fadeIn();
        $("#dyn").slideUp(300);
        $("#eandd").val('');
        $("#freturn").text('');
        herobuttons();
    });

    //B64E
    $("#b64e").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "b64e");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            try {
                var enc = $.base64.encode(eandd);
            } catch(err) {
                var enc = invalid + " - " + err;
                soundalert();
            };
            $("#freturn").text(enc);
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
                var dec = invalid + " - " + err;
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
                var dec2 = invalid + " - " + err;
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

    //ENCODEIMGBASE64
    $("#encodeimgbase64").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "encodeimgbase64");
        //Defines click action
        $("#doit").click(function() {
            try {
                var dec2 = encodeimgbase64();
            } catch (err) {
                var dec2 = invalid + " - " + err;
                soundalert();
            }
            $("#freturn").text(dec2);
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
        $("#eandd").slideUp();
        $("#tbchartotal").text('');
        $("#encodeimgbase64f").show();
        $("#imgB64Alert").fadeIn();
        $("#btns").hide();
    });

    //DOASCII
    $("#doascii").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "doascii");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(DoAsciiHex(eandd, 'A2H'));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //DOHEX
    $("#dohex").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "dohex");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            eandd = eandd.replace(/\s/g, "");
            $("#freturn").text(DoAsciiHex(eandd, 'H2A'));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //ASCII2BIN
    $("#ascii2bin").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "ascii2bin");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(toBinary(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //BIN2ASCII
    $("#bin2ascii").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "bin2ascii");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(toASCII(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //MORSEE
    $("#morsee").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "morsee");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(DoMorseEncrypt(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //MORSED
    $("#morsed").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "morsed");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(DoMorseDecrypt(eandd));
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

    //bCrypt
    $("#bCrypt").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "bCrypt");
        //Defines click action
        $("#doit").click(function() {
            cryptB();
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
        $("#bCryptDiv").show();
        $("#eandd").hide();
        $("#btns").hide();
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

    //IPDE
    $("#ipde").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "ipde");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(IPconvert(eandd));
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

    //XLS2HTML
    $("#xls2html").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "xls2html");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(xls2html(eandd));
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

    //STR_REPLACE
    $("#str_replace").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "str_replace");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            var s2r = $("#strreplace").val();
            var s2f = $("#strflag").val();
            var s2s = $("#strfor").val();
            try {
                var myRegExp = new RegExp(s2r, s2f);
                $("#freturn").text(eandd.replace(myRegExp, s2s));
            } catch(e) {
                $("#freturn").text(lgt('invalidstr'));
                soundinvalid();
            }

            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
        $("#strrep").show();
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

    //HTML2JS
    $("#javascript_escape").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "javascript_escape");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(javascript_escape(eandd));
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

    //STRIPSC
    $("#stripsc").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "stripsc");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            $("#freturn").text(lgstripnonenglish(eandd));
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
    });

    //LATIN2E
    $("#latin2e").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "latin2e");
        //Defines click action
        $("#doit").click(function() {
            var eandd = $("#eandd").val();
            try {
                var dec = latin2e(eandd);
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

    //LOREMIPSUN
    $("#loremipsun").click(function() {
        hero_hide();
        //Defines action name
        lgtt("#action", "loremipsun");
        //Defines click action
        $("#doit").click(function() {
            var lir = $("#lir").val();
            var lip = $("#lipsel").val();
            var liopt = $("#liopt").val();
            $('#freturn').lorem({
                type : liopt,
                amount : lir,
                ptags : lip
            });
            return false;
        });
        //Show Dyn
        $("#dyn").fadeIn(900);
        $("#eandd").slideUp();
        $("#tbchartotal").text('');
        $("#liopts").show();
        $("#btns").hide();
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
        //Clear and hide Ads div as we don't want them on chromeapp
        $("#ads").html('').hide();

        //Check the number of access to the application. If =10 or =100 or =500 then we display a message asking for a review.
        chrome.storage.local.get('hmt', function(result) {
            var hmt = result.hmt;
            var addua = hmt + 1;
            if (hmt == 10 || hmt == 100 || hmt == 500) {
                var notification = webkitNotifications.createNotification('res/images/png/fs48.png',
                // // icon url - can be relative
                lgt("alert_Title_Review"), // notification title
                lgt("alert_Message_Review") // notification body text
                );
                notification.show();
            }
            chrome.storage.local.set({
                'hmt' : addua
            });
        });

        // Check if a new version is installed
        // Stores actual version
        chrome.storage.local.get('pvs', function(result) {
            var pvs = result.pvs;
            var thisVersion = chrome.runtime.getManifest().version;
            if (pvs !== thisVersion) {
                soundhappy();
                bootstrap_alert.success('<img src="res/images/gif/cat.gif"> ' + lgt("updated_b") + thisVersion + lgt("updated_a"));
            }
            chrome.storage.local.set({
                'pvs' : thisVersion
            });
        });

    } else {
        //We should load the localization files first ! =)
        //Check user language
        try {
            var userlanguage = window.navigator.userLanguage || window.navigator.language;
            userlanguage = userlanguage.substring(0, 2).toLowerCase();
            var ula = ['en', 'es', 'pt'];
            if ($.inArray(userlanguage, ula) > -1) {
                if (userlanguage == 'pt') {
                    userlanguage = 'pt_BR';
                }
                if (userlanguage == 'es') {
                    //Let's hide help button as is not avaliable in this idiom
                    $("#pophelp").hide();
                }
                ulocal = userlanguage;
            } else {
                ulocal = 'en';
            }
        } catch(e) {
            ulocal = 'en';
        }
        //Load the localization files and if everything ok, start the app
        $.ajax({
            url : '_locales/' + ulocal + '/messages.json',
            cache : false,
            success : function(data) {
                window.translationfile = data;
                lgloadapp();
            },
            error : function() {
                alert("FastString\r\nFatal Error: Can't load or parse localization file for " + ulocal + ".");
            },
            headers : {
                "X-LGApps" : "true"
            }
        });
    }
});