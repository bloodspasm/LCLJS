/**
 * 对数据进行 AES 加密
 * 依赖于：jquery.MD5.js、crypto-js、EncryptDecrypt.js
 *
 * @param  params
 * @return object 返回加密好的JSON数据
 */
function encode(keyStr, params) {
	var aesKey = "Hi0I2XI+GEQRkLcM";
	var ivStr = "ZH9NC3Y5K9D0M7QL";
	var key = (keyStr + aesKey).substring(0, 16);
	var JSONObject;
	if(typeof params == 'string') {
		JSONObject = ("{'" + params.replace(/=/g, "':'").replace(/&/g, "','") + "'}");
	} else // JSON时
	{
		var _params = '{';
		for(var i in params) {
			if(_params != '{') {
				_params += ',';
			}
			_params += ("'" + i + "':'" + params[i] + "'");
		}
		_params += '}';
		JSONObject = _params;
	}
	var EncryptStr = aesEncrypt(JSONObject, key, ivStr);
	var md5Str = CryptoJS.MD5(EncryptStr).toString().toUpperCase();
	// alert(EncryptStr)
	var data = {
		encodeString: EncryptStr,
		md5: md5Str,
		platType: 3
	};
	return data;
}

/**
 * muiAjax向服务端请求
 * @param 作者:廖晨亮 
 * @param url         要请求的协议名称
 * @param data      请求参数
 * @param success 请求成功时执行的回调函数
 * @param error         请求不成功时执行的回调函数
 */
function muiAjax(opt) {
	var type = opt.type || 'GET';　
	type = type.toUpperCase() || 'GET';　
	urls = 'http://120.27.142.24:8011/userapp-ui-war-1.0/' + 　opt.url || '';

	var data = opt.data || null;　
	// 默认属性
	data['sign'] = '';
	data['appVer'] = '1';
	data['channelId'] = '10086';
	data['platType'] = '10086';
	data['clienIp'] = '192.168.1.1';

	var success = opt.success || function() {};
	var errorfun = opt.error || function() {};
	//var service_name = urls.match(/(\w+)\.cgi$/i);
	//console.log(service_name);
	//	if(!service_name[1]) {
	//		alert('加密 key 错误。');
	//		return false;
	//	}
	console.log("-----------HTTP------------");
	console.log(urls);
	//alert(urls);
	console.log(opt.data);
	console.log("---------------------------");
	//data = encode(service_name[1], opt.data);
	mui.ajax(urls, {
		data: data,
		dataType: 'json',
		type: type,
		timeout: 10000,
		success: function(datas) {
			console.log(JSON.stringify(datas));
			success(datas);
		},
		error: function(xhr, type, errorThrown) {
			errorfun(type);
		}
	});
}