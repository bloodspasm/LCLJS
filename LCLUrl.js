/**
 *
 * json转url去除null对象
 * muiPushView("xxx", jsonValue(dic));
 * @param 作者:廖晨亮 
 */
function jsonValue(obj) {
	return parseParam(valueObject(obj));
}

/**
 * 去除null对象
 * @param 作者:廖晨亮 
 */
function valueObject(obj) {
	var lclObject = new Object();
	for(var n in obj) {
		if(obj[n] == null) {
			lclObject[n] = 'null';
		} else {
			lclObject[n] = obj[n];
		}
	}
	return lclObject;
}

/**
 * 生成json转url
 * @param 作者:廖晨亮 
 */
var parseParam = function(param, key) {
	var paramStr = "";
	if(param instanceof String || param instanceof Number || param instanceof Boolean) {
		paramStr += "&" + key + "=" + encodeURIComponent(param);
	} else {
		$.each(param, function(i) {
			var k = key == null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);
			paramStr += '&' + parseParam(this, k);
		});
	}
	return paramStr.substr(1);
};

/**
 * getHttpRequest获取http传值
 * var request = getHttpRequest();
 * console.log("传递:" + JSON.stringify(request));
 * var qrHttp = decodeURIComponent(request.code_url);
 * @param 作者:廖晨亮 
 */
function getHttpRequest() {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if(url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
		}
	}
	return theRequest;
}