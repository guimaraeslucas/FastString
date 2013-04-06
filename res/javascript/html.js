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
    return String(lgstr)
            .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function htmlUnescape(lgstr){
    return String(lgstr).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

//Escape Javascript code
//Original by: http://www.htmlescape.net/stringescape_tool.html
//Adapted by: LucasGuimaraes(http://lucasguimaraes.com)

var hex=new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f');
function JAVASstringEncode(x){
var preescape="" + x;
var escaped="";
var i=0;
for(i=0;i<preescape.length;i++)	{
 escaped=escaped+JAVASencodeCharx(preescape.charAt(i));
 }			
 return escaped;
}
		
function JAVASencodeCharx(original)	{
var found=true;
var thecharchar=original.charAt(0);
var thechar=original.charCodeAt(0);
switch(thecharchar) {
				case '\n': return "\\n"; break; //newline
				case '\r': return "\\r"; break; //Carriage return
				case '\'': return "\\'"; break;
				case '"': return "\\\""; break;
				case '\&': return "\\&"; break;
				case '\\': return "\\\\"; break;
				case '\t': return "\\t"; break;
				case '\b': return "\\b"; break;
				case '\f': return "\\f"; break;
				case '/': return "\\x2F"; break;
				case '<': return "\\x3C"; break;
				case '>': return "\\x3E"; break;
				default:
					found=false;
					break;
}
if(!found)
{
if(thechar>127) {
var c=thechar;
var a4=c%16;
c=Math.floor(c/16); 
var a3=c%16;
c=Math.floor(c/16);
var a2=c%16;
c=Math.floor(c/16);
var a1=c%16;
return "\\u"+hex[a1]+hex[a2]+hex[a3]+hex[a4]+"";		
}else{
return original;
}
}
}

//Original by:
//© 2004 by 2M.Studio M.Weidemann
//By M.Weidemann (http://www.2mstudio.de)
//Adapted by: LucasGuimaraes(http://lucasguimaraes.com)

function fhtml2js(data){
var randomname=Math.floor((Math.random()*1000)+1);
var comment="JQuery example: $('#div').html(fshtml_"+randomname+"());";
var br = "%0D%0A";
var dataArr=JAVASstringEncode(data).split(br);
var retvar="";
for (i=0; i<dataArr.length; i++){
retvar+= (i==0) ? "<script>\n\/* "+comment +" *\/\nfunction fshtml_"+randomname+"(){\nvar fs_s=\"" : "fs_s+=\""
retvar+= "" + dataArr[i];
retvar+= (i!=dataArr.length-1) ? "\"; \n" : "\";\n";
};
retvar+="return fs_s;\n}\n<\/script>";
return retvar;
}