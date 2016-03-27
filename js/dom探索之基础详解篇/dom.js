	var img=new img();
var width=img.offsetWidth;
dom.style.width=100+"px";
parseInt(dom.style.left)+100+"px";

Name	Value

ELEMENT_NODE	1

ATTRIBUTE_NODE 	2

TEXT_NODE	3

CDATA_SECTION_NODE 	4

ENTITY_REFERENCE_NODE 	5

ENTITY_NODE 	6

PROCESSING_INSTRUCTION_NODE	7

COMMENT_NODE	8

DOCUMENT_NODE	9

DOCUMENT_TYPE_NODE	10

DOCUMENT_FRAGMENT_NODE	11

NOTATION_NODE 	12


if(node.nodeType==1){

}

<div id="r">hello<!--com--></div>
var s=document.getElementById("r");
s.nodeName//DIV
s.nameValue//null;
var sid=s.attributes[0];//
sid.nodeName;//id
sid.nodeValue;//r
var textNode=s.childNodes[0];
textNode.nodeName;//#text
textNode.nodeValue;//hello
var commentNode=s.attributes[1];
commentNode.nodeName;//#comment
commentNode.nodeValue;//com
document.doctype.nodeName;//thml
document.document.nodeValue;//null;
var fragmentNode=document.createDocumentFragment();
fragmentNode.nodeName;//#documnet-fragment
fragmentNode.nodeValue;//null

document.getElementById('id').style.color="red";

<meta name="viewport" content="width=divice-width,inital-scale=1">
<mate http-equiv="X-UA-Compatible" content="IE=edge">

//jquery中的ready方法
function domReady(fn){
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded",fn);
	}else{
		IEContentLoaded(fn);
	}

	function IEContentLoaded(fn){
		var notDone=true;
		function init(){
			if(notDone){
				fn();
				notDone=false;
			}
		}
		(function(){
			try{
				document.documentElement.doScroll("left");
			}catch(e){
				setTimeout(arguments.callee(),50);
			}
			init();
		})();
		document.onreadystatechange(){
			if(document.readyState=="complete"){
				document.onreadystatechange=null;
				init();
			}
		}
	}
}

//判断f是否是element节点
function isElement(f){
	var s=document.createElement("div");
	if(f&&f.nodeType==1){
		if(window.Node&&f instanceof Node){
			return true;
		}
		try{
			s.appendChild(f);
			s.removeChild(f);
			return true;
		}catch{

		}

	}else{
		return false;
	}
	return false;
}

//判断是否是XML
function isXML1(doc){
	var doc=getDocumentElement(doc);
	if(!!doc.xmlVersion||!!doc.xml||toString.call(doc)==="[object XMLDocument]"||(doc.nodeType==9&&doc.documentElement.nodeName!=="html"))
}

function getDocumentElement(doc){
	var documentElement=doc||doc.ownerDocument?doc.ownerDocument:doc;
}

function isXML2(doc){
	return doc.createElement("p").nodeName!==doc.createElement("P").nodeName;
}

function isXMLElement(doc){
	if(isElement(doc)){
		return isXML1(doc);
	}
	return false;
}

