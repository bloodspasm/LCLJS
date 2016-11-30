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

//$.isEmptyObjec({})