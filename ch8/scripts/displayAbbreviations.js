function displayAbbreviations(){
	//检查兼容性：检查以下方法是否存在
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//节点集合就是一个由节点构成的数组
	var abbreviations = document.getElementsByTagName("abbr");
	//检查当前文档是否包含缩略语
	if (abbreviations.length < 1) return false;
	var defs = new Array();
	for (var i=0; i<abbreviations.length; i++){
		var current_abbr = abbreviations[i];
		//保证该函数在IE浏览器中能够平稳退化：如果当前元素没有子节点，就立刻开始下一次循环
		if(current_abbr.childNodes.length < 1) continue;
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		//保存缩略语和其解释
		defs[key] = definition;
	}
	//创建定义列表
	var dlist = document.createElement("dl");
	for (key in defs){
		var definition = defs[key];
		//创建定义标题
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//将它们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false;
	//插入定义列表
	//插入标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//将标题和定义列表添加到页面主体
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);