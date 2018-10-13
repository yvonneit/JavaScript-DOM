function showPic(whichPic) {
	if(!document.getElementById("placeholder")) return false;
	//var source = whichPic.href; 使用HTML-DOM更简短
	var source      = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName!= "IMG") return false;
	//placeholder.src = source;
	placeholder.setAttribute("src", source);
	//用text变量刷新id=“description”的<p>元素的第一个子节点的nodeValue值。
	if(document.getElementById("description")){
		//var text        = whichPic.getAttribute("title");
		var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
	    var description = document.getElementById("description");
	    //nodeType属性值：元素节点=1，属性节点=2，文本节点=3
	    if (description.firstChild.nodeType == 3){
	    	description.firstChild.nodeValue = text;
	    }
	}
	return true;
	
}

/*function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	//alert (body_element.childNodes.length);
	alert(body_element.nodeType);
	window.onload    = countBodyChildren;
}*/

function prepareGallery(){
	//检查当前浏览器是否理解getElementById...或者是否存在一个id=“imagegallery”的元素
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;

	var gallery = document.getElementById("imagegallery");
	//把数组（节点列表）赋值给一个短变量links
	var links   = gallery.getElementsByTagName("a");
    //把onclick事件绑定到id=“imagegallery”的元素内的各个链接元素上
    for(var i=0; i<links.length; i++){
    	links[i].onclick = function(){
    		/*showPic(this);  this代表links[i]
    	    return false;     如果showPic()函数执行成功，就不让浏览器执行某个链接被点击时的默认操作*/
    	    return showPic(this) ? false : true; //由showPic函数决定是否要返回false值以取消onclick事件的默认行为
		} 
		//links[i].onkeypress = links[i].onclick; //onkeypress专门处理键盘事件，慎用	
    }
    
}    


    function insertAfter(newElement,targetELement){
    	var parent = targetELement.parentNode;
    	if (parent.lastChile == targetELement) {
    		parent.appendChild(newElement);
    	}
    	else{
    		parent.insertBefore(newElement,targetELement.nextSibling);
    	}

    }

//创建一个img元素和一个p元素
    function preparePlaceholder(){
    	if(!document.createElement) return false;
    	if(!document.createTextNode) return false;
    	if(!document.getElementById) return false;
    	if(!document.getElementById("imagegallery")) return false;
    	var placeholder = document.createElement("img");
    	placeholder.setAttribute("id","placeholder");
    	placeholder.setAttribute("src","images/placeholder.jpg");
    	placeholder.setAttribute("alt","my image gallery");
    	var description = document.createElement("p");
    	description.setAttribute("id","description");
    	var desctext = document.createTextNode("choose an image");
    	description.appendChild(desctext);
    	var gallery = document.getElementById("imagegallery");
    	insertAfter(placeholder,gallery);
    	insertAfter(description,placeholder);
    }

//创建一个匿名函数容纳多个都需要在页面加载完毕时得到执行的函数
//然后把匿名函数绑定到onload事件上
function addLoadEvent(func){
    	var oldonload = window.onload;
    	//如果window.onload事件处理函数还没有绑定任何函数，把新函数添加给它
    	//如果已绑定，就把新函数追加到现有指令的末尾
    	if (typeof window.onload != 'function'){
			window.onload = func;
    	}else{
    		window.onload = function(){
    			oldonload();
    		    func();
    		}    		
    	}
    }

    //函数在网页加载完毕后需立即执行。网页加载完毕时会触发一个onload事件
    addLoadEvent(prepareGallery); //或者window.onload = prepareGallery;
    addLoadEvent(preparePlaceholder)
