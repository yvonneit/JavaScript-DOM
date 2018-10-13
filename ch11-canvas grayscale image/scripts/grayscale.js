function convertToGS(img){
	if(!Modernizr.canvas) return;
	//存储原始的彩色版
	img.color = img.src;
	//创建灰度版
	img.grayscale = createGSCanvas(img);
	//在mouseover/out事件发生时切换图片
	img.onmouseover = function(){
		this.src = this.color;
	}
	img.onmouseout = function(){
		this.src = this.grayscale;
	}

	img.onmouseout();
}

function createGSCanvas(img){
	//创建新的canvas元素，绘制彩色图片
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
    //变量ctx引用画布的绘图空间context
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img,0,0);
    
    //取得原始的图像数据，循环遍历其中每一个元素，将每个彩色像素的红、绿、蓝彩色成分求平均值，得到对应彩色值的灰度值
    //执行报错原因：图片存储在本地默认没有域名，用getImageData方法时，浏览器会判定为跨域而报错
    //解决措施：1.图片放在服务器中，通过服务器返回给客户端；2.用firefox浏览器
	var c = ctx.getImageData(0,0,img.width,img.height);
	for(i=0; i<c.height; i++){
		for(j=0; j<c.width; j++){
		//imagedata读取的像素数据存储在data属性里，每个像素占用4位数据，分别是r(red)，g(green)，b(blue)，alpha透明通道
			var x = (i*4) * c.width + (j*4);//？？？
			var r = c.data[x];
			var g = c.data[x+1];
			var b = c.data[x+2];
			//通过平均值法，gray=(r+g+b)/3，r=g=b就能得到灰度图像
			c.data[x] = c.data[x+1] = c.data[x+2] = (r+g+b)/3;
		}
	}
    //把灰度数据再放回到画布的绘图环境中，并返回原始图像数据作为新灰度图片的源
	ctx.putImageData(c,0,0,0,0, c.width, c.height);
	return canvas.toDataURL();

}

window.onload = function(){
	convertToGS(document.getElementById('avatar'));
}