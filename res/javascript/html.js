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