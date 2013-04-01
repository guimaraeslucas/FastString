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

function lgt(line){
 return chrome.i18n.getMessage(line);
}
function lgtt(elementId, txt) {
 $(elementId).html(lgt(txt));
}
function lgte(elementId, txt) {
 $(elementId).html(txt);
}

function hero_hide(){
 $('#doit').unbind('click');
 $("#hero").fadeOut(100);
}

function soundalert(){
$("#sound").html('<audio autoplay="autoplay" preload="auto" src="res/sounds/mp3/timtum.mp3"></audio>');
}

function lgloadapp(){
 //Sets <title> appname
 var lgappname = lgt("appname");
 document.title= lgappname;
 //Sets #brand appname
 var lgshortappname = lgt("shortappname");
 lgte("#brand",lgshortappname+' <img src="res/images/png/fs16.png">');

 //Set errormessages
 invalid = lgt('invalid');
 
 //Set submenus
 //B64
 lgtt(".specialitem","special");
 lgtt("#b64e","b64e");
 lgtt("#b64d","b64d");
 lgtt("#b64eu","b64eu");
 lgtt("#b64du","b64du");
 lgtt("#b64diu","b64diu");
 
 //HASHS
 lgtt("#hashs","hashs");//menu title
 lgtt("#crc32","crc32");
 lgtt("#md5h","md5h");
 lgtt("#md564","md564");
 lgtt("#sha1","sha1");
 lgtt("#sha224","sha224");
 lgtt("#sha256","sha256");
 lgtt("#sha384","sha384");
 lgtt("#sha512","sha512");
  
 //URL
 lgtt("#urle","urle");
 lgtt("#urld","urld");
 //HTML
 lgtt("#htmle","htmle");
 lgtt("#htmld","htmld");
  
 //Others
 lgtt("#others","others");
 lgtt("#emED","emED");
 lgtt("#dmED","dmED");
 lgtt("#c2d","c2d");
 lgtt("#sopt","sopt");
 lgtt("#reve","reve"); 
 lgtt("#rot13","rot13"); 
 lgtt("#stgs","stgs"); 
  
 //ABOUT
 lgtt("#about","about");
  
 //Sets Welcome message
 lgte("#welcomemsg",lgt("welcome")+' <strong id="appname">'+lgshortappname+'</strong>'); 
 lgtt("#selectoption","selectoption");
 
 //Sets fields names
 lgtt("#doit","doit");
 lgtt("#result","result");
 lgtt("#copy","copy");
 lgtt("#paste","paste");
 lgtt("#view","view");
 
 //Sets Modal
 lgtt("#modalabout_title","modalabout_title");
 lgtt("#modalabout_license","modalabout_license");
 lgtt("#modalabout_eid","@@extension_id");
 lgtt("#modalabout_close","modalabout_close");
 
 
 lgtt("#modalhtml_close","modalabout_close");
 
 //BUTTONS ACTIONS

//PASTE BUTTON
 $("#paste").click(function() {
 $("#eandd").val(pasteTextFromClipboard());
 return false; //Should be here as if we set type=button chrome ignores it
 }); 
 
 
//COPY BUTTON
 $("#copy").click(function() {
 var freturn=$("#freturn").text();
 copyTextToClipboard(freturn); 
 }); 
 
 
 //VIEW BUTTON
 $("#view").click(function() {
 var freturn=$("#freturn").html();
 $("#modalhtmlcontent").html(htmlUnescape(freturn)); 
 $('#modalhtml').modal('show');
 });
 

//BRAND
 $("#brand").click(function() { 
  $("#hero").fadeIn(900);
   $("#dyn").hide();
   $("#eandd").val('');
   $("#freturn").text('');
}); 
 
//B64E
$("#b64e").click(function() {
  hero_hide();
  //Defines action name
  lgtt("#action","b64e");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   var enc=$.base64.encode(eandd);
   if(enc){
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
  lgtt("#action","b64d");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   try{
   var dec=$.base64.decode(eandd);
   }catch(err){var dec=invalid;
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
  lgtt("#action","b64eu");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   var ec=$.base64.encode(eandd);
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
  lgtt("#action","b64du");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   try{
   var dec=show64(eandd);
   var dec2 = $.base64.decode(dec);
   }catch(err){
   var dec2=invalid;
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
  lgtt("#action","b64diu");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   $("#freturn").html('<img src="'+eandd+'" border="0">');
    return false;
  }); 
  //Show Dyn
  $("#dyn").fadeIn(900); 
}); 

//CRC32
$("#crc32").click(function() {
  hero_hide();
  //Defines action name
  lgtt("#action","crc32");
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
  lgtt("#action","md5h");
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
  lgtt("#action","md564");
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
  lgtt("#action","sha1");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   var shaObj = new jsSHA(eandd, "TEXT");
   var hash = shaObj.getHash("SHA-1", "HEX");
   
   $("#freturn").text(hash);
    return false;
  }); 
  //Show Dyn
  $("#dyn").fadeIn(900); 
}); 

//SHA-224
$("#sha224").click(function() {
  hero_hide();
  //Defines action name
  lgtt("#action","sha224");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   var shaObj = new jsSHA(eandd, "TEXT");
   var hash = shaObj.getHash("SHA-224", "HEX");
   $("#freturn").text(hash);
    return false;
  }); 
  //Show Dyn
  $("#dyn").fadeIn(900); 
}); 

//SHA-256
$("#sha256").click(function() {
  hero_hide();
  //Defines action name
  lgtt("#action","sha256");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   var shaObj = new jsSHA(eandd, "TEXT");
   var hash = shaObj.getHash("SHA-256", "HEX");   
   $("#freturn").text(hash);
    return false;
  }); 
  //Show Dyn
  $("#dyn").fadeIn(900); 
}); 

//SHA-384
$("#sha384").click(function() {
  hero_hide();
  //Defines action name
  lgtt("#action","sha384");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   var shaObj = new jsSHA(eandd, "TEXT");
   var hash = shaObj.getHash("SHA-384", "HEX");   
   $("#freturn").text(hash);
    return false;
  }); 
  //Show Dyn
  $("#dyn").fadeIn(900); 
}); 


//SHA-512
$("#sha512").click(function() {
  hero_hide();
  //Defines action name
  lgtt("#action","sha512");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   var shaObj = new jsSHA(eandd, "TEXT");
   var hash = shaObj.getHash("SHA-512", "HEX");   
   $("#freturn").text(hash);
    return false;
  }); 
  //Show Dyn
  $("#dyn").fadeIn(900); 
}); 

//URLE
$("#urle").click(function() {
  hero_hide();
  //Defines action name
  lgtt("#action","urle");
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
  lgtt("#action","urld");
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
  lgtt("#action","htmle");
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
  lgtt("#action","htmld");
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
  lgtt("#action","emED");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   $("#freturn").text(femED(eandd));
    return false;
  }); 
  //Show Dyn
  $("#dyn").fadeIn(900); 
}); 

//DEMED
$("#dmED").click(function() {
  hero_hide();
  //Defines action name
  lgtt("#action","dmED");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   $("#freturn").text(fdmED(eandd));
    return false;
  }); 
  //Show Dyn
  $("#dyn").fadeIn(900); 
}); 

//ROT13
$("#rot13").click(function() {
  hero_hide();
  //Defines action name
  lgtt("#action","rot13");
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
  lgtt("#action","reve");
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
  lgtt("#action","c2d");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   var check =lgcomma2dot(eandd);
   if (check==0){
   check=invalid;
   soundalert();
   }   
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
  lgtt("#action","stgs");
  //Defines click action
  $("#doit").click(function() {
   var eandd = $("#eandd").val();
   $("#freturn").text(strip_tags(eandd,''));
    return false;
  }); 
  //Show Dyn
  $("#dyn").fadeIn(900); 
}); 
 
}//END LOAD
 
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
lgloadapp();
}); 