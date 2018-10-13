//在IE中创建XMLHttpRequest对象，js可以通过这个对象自己发送请求，同时也自己处理响应。
function getHTTPObject(){
	if (typeof XMLHttpRequest == "undefined")
		XMLHttpRequest = function(){
			//不同IE版本中使用的XMLHTTP对象也不完全相同
			try{ return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
			 catch (e){}
			try{ return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
			 catch (e){}
			try{ return new ActiveXObject("Msxml2.XMLHTTP");}
			 catch (e){}
			 return false;
		}
		return new XMLHttpRequest();
}