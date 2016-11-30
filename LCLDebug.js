/**
 * DebugLog替换console.log
 * @param 作者:廖晨亮 
 */
function DebugLog(obj) {
	var description = "";
	if(typeof obj == "object") {
		for(var i in obj) {
			var property = obj[i];
			description += i + " = " + property + "\n";
		}
	} else {
		description = obj;
	}
	console.log(description);
}

/**
 * DebugLog替换console.log
 * @param 作者:廖晨亮 
 */
function DebugAlert(obj) {
	var description = "";
	if(typeof obj == "object") {
		for(var i in obj) {
			var property = obj[i];
			description += i + " = " + property + "\n";
		}
	} else {
		description = obj;
	}
	alert(description);
	console.log(description);
}
