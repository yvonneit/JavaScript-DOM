//函数发起一个GET请求，请求example.txt文件
function getNewContent() {
	var request = getHTTPObject();
	if (request){
		//open方法用来指定服务器上将要访问的文件，第三个参数用于指定请求是否以异步方式发送和处理
		request.open("GET","example.txt",true);
		request.onreadystatechange = function(){
			if (request.readyState == 4 ){
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
	}else{
		alert('sorry, your browser doesn\'t support XMLHttpRequest');
	}
}

addLoadEvent(getNewContent);