var oXmlValidator={oTab:new RegExp(/[\n\t\r]+/g),oCommentAndCdata:new RegExp(/<!(?:--(?:[^-]|-[^-])*--|\[CDATA\[(?:[^\]]|\][^\]]|\]+[^\>\]])*]{2,})>/g),oInstruction:new RegExp(/<\?.*?\?>/),oDocType:new RegExp(/<\!DocType.*?>/i),oOutTagTextBegin:new RegExp(/^\s*[^<\s]+/),oEntityFull:new RegExp(/&(?:#(?:x[a-f\d]{1,4}|\d{2,5})|[a-z][\w\-]*);/gi),oAttribute:new RegExp(/(<[a-z_][\w:-]*)((?:\s+[a-z_][\w:-]*\s*=\s*(?:'[^<>']*'|"[^<>"]*"))*)\s*(\/?>)/gi),oAttributeUnique:new RegExp(/([a-z_][\w:-]*)\s*=\s*(?:'[^<>']*'|"[^<>"]*")/gi),oAttributeMatch:new RegExp(/[a-z_][\w:-]*/gi),oSingleTag:new RegExp(/<[a-z_][\w:-]*\/>/gi),oDoubleTag:new RegExp(/<([a-zA-Z_][\w:-]*)>[^<]*<\/\1\s*>/g)};oXmlValidator.Object=function(sValue){this.sValue=sValue;this.nCode=0;this.nBugPlace=0;this.hParams={bFragment:false}};oXmlValidator.Object.prototype={valid:function(){var sValue=this.sValue;var hParams=this.hParams;if(sValue){sValue=sValue.replace(oXmlValidator.oTab,' ');sValue=sValue.replace(oXmlValidator.oCommentAndCdata,'');if(sValue.indexOf('<!--')!=-1){this.nCode=2;return false;}
if(sValue.indexOf(']]>')!=-1){this.nCode=3;return false;}
if(!hParams.bFragment)
sValue=sValue.replace(oXmlValidator.oInstruction,'');if(sValue.search(oXmlValidator.oInstruction)!=-1){this.nCode=4;return false;}
if(!hParams.bFragment)
sValue=sValue.replace(oXmlValidator.oDocType,'');if(sValue.search(oXmlValidator.oDocType)!=-1){this.nCode=5;return false;}
if(!hParams.bFragment){if(sValue.search(oXmlValidator.oOutTagTextBegin)!=-1){this.nCode=6;return false;}
var nValueLength=sValue.length;var bIsSpace=true;do{nValueLength--;if(sValue.charAt(nValueLength)!=' ')bIsSpace=false;}while(bIsSpace&&nValueLength>0)
if(!bIsSpace&&sValue.charAt(nValueLength)!='>'){this.nCode=7;return false;}
else if(nValueLength==0){this.nCode=1;return false;}}
sValue=sValue.replace(oXmlValidator.oEntityFull,'');if(sValue.indexOf('&')!=-1){this.nCode=8;return false;}
var bAttributeUnique=true;sValue=sValue.replace(oXmlValidator.oAttribute,function a($0,$1,$2,$3){$2=$2.replace(oXmlValidator.oAttributeUnique,'$1');var aAttribute=$2.match(oXmlValidator.oAttributeMatch);if(aAttribute){var nMatchCount=aAttribute.length;if(nMatchCount>1){var i=0;var j;while(bAttributeUnique&&i<nMatchCount-1){j=i+1;while(bAttributeUnique&&j<nMatchCount){if(aAttribute[i]!=aAttribute[j]){j++;}else{bAttributeUnique=false;}}
i++;}}}
return $1+$3;});if(!bAttributeUnique){this.nCode=11;return false;}
var sTagReplaceTo='';if(!hParams.bFragment)sTagReplaceTo='&';sValue=sValue.replace(oXmlValidator.oSingleTag,sTagReplaceTo);var nPrevLen;var nLen=0;do{nPrevLen=nLen;sValue=sValue.replace(oXmlValidator.oDoubleTag,sTagReplaceTo);nLen=sValue.length;}while(nLen!=nPrevLen);if(!hParams.bFragment){if(sValue.indexOf(sTagReplaceTo)!=sValue.lastIndexOf(sTagReplaceTo)){this.nCode=9;return false;}}
if(sValue.indexOf('<')!=-1){this.nCode=10;return false;}
this.nCode=0;return true;}else{if(!hParams.bFragment){this.nCode=1;return false;}
else{this.nCode=0;return true;}}}};