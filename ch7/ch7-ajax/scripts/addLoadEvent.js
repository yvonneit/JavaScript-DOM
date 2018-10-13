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