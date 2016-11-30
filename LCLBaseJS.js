/**
 * *
 *	PushView跳转
 * @param 作者:廖晨亮 
 * @param view      下一个页面的名称
 * muiPushView("xxx", jsonValue(dic));
 * @param data      请求参数url拼接
 */
function muiPushView(view, data) {
	var info = data || '';
	mui.openWindow({
		//  url: xxx.html?date='+str,
		url: view + ".html?" + info,
		id: view,
		show: {
			aniShow: 'zoom-fade-out', //'zoom-fade-out',
			duration: 300
		}
	});
	return;
}


function curentTime() {
	var now = new Date();
	var year = now.getFullYear(); //年
	var month = now.getMonth() + 1; //月
	var day = now.getDate(); //日
	var hh = now.getHours(); //时
	var mm = now.getMinutes(); //分
	var clock = year + "-";
	if(month < 10)
		clock += "0";
	clock += month + "-";
	if(day < 10)
		clock += "0";
	clock += day + " ";
	if(hh < 10)
		clock += "0";
	clock += hh + ":";
	if(mm < 10) clock += '0';
	clock += mm;
	return(clock);
}

//将URL中的UTF-8字符串转成中文字符串去除Emoji  
function getCharFromUtf8(str) {
	var cstr = "";
	var nOffset = 0;
	var eOffset = -1;
	if(str == "")
		return "";
	str = str.toLowerCase();
	nOffset = str.indexOf("%e");
	if(nOffset == -1) {
		//str = "";
		return str;
	}
	while(nOffset != -1 ) {
		
		
		if(eOffset == 0){
			str = str.substr(nOffset, str.length - nOffset);
			eOffset = str.indexOf("%f");
			nOffset = str.indexOf("%e");
			//console.log('2--'+nOffset +'---'+str +'----'+eOffset);
			continue;
		}
		
		
		cstr += str.substr(0, nOffset);
		//console.log(cstr);
		str = str.substr(nOffset, str.length - nOffset);
		if(str == "" || str.length < 9){
			return cstr;	
		}
		cstr += utf8ToChar(str.substr(0, 9));
		str = str.substr(9, str.length - 9);
		
		nOffset = str.indexOf("%e");
		eOffset = str.indexOf("%f");
		
	}
	return cstr;
}

//将编码转换成字符  
function utf8ToChar(str) {
	
	var iCode, iCode1, iCode2;
	iCode = parseInt("0x" + str.substr(1, 2));
	iCode1 = parseInt("0x" + str.substr(4, 2));
	iCode2 = parseInt("0x" + str.substr(7, 2));
	var string = String.fromCharCode(((iCode & 0x0F) << 12) | ((iCode1 & 0x3F) << 6) | (iCode2 & 0x3F));
	
	return string;
}
//$.isEmptyObjec({})