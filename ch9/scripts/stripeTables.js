function stripeTables(){
	var tables = document.getElementsByTagName("table");  
    for(var i=0; i<tables.length; i++){
    	var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
    	//遍历表格中所有的数据行
    	for(var j=0; j<rows.length; j++){
    		if(odd == true){
    			//rows[j].style.backgroundColor = "#ffc";
    			addClass(rows[j],"odd");
    			odd = false;
    		}else{
    			odd = true;
    		}
    	}
    }
}

function addClass(element,value){
	if(!element.className){
		element.className = value;
	}
	//如果当前className属性不为null，则把一个空格和新的class设置值追加到className属性上
	else{
		newClassName = element.className;
		newClassName+= " ";
		newClassName+= value;
		element.className = newClassName;
	}
}

addLoadEvent(stripeTables);