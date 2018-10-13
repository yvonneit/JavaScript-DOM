
function prepareSlideshow(){
	//创建div元素
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    //创建img元素
    var preview = document.createElement("img");
    preview.setAttribute("src","images/topics.gif");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    //将新创建的元素放在链接清单之后
    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);	
	//取得列表中的所有链接
    var links = list.getElementsByTagName("a");
	//为mouseover事件添加动画效果
	links[0].onmouseover = function(){
		moveElement("preview",-100,0,10);
	}
	links[1].onmouseover = function(){
		moveElement("preview",-200,0,10);
	}
	links[2].onmouseover = function(){
		moveElement("preview",-300,0,10);
	}
}

addLoadEvent(prepareSlideshow);

