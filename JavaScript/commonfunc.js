function goBack() {
	window.history.back();
}

function capitalizeName(name) {
	var newname;
	if (typeof name == 'string') {
		if(name.includes(" ")) {
			var x = name.split(" ");
			var a = x[0].slice(0,1).toUpperCase();
			var b = x[0].slice(1);
			var c = a + b + " ";
			var d = x[1].slice(0,1).toUpperCase();
			var e = x[1].slice(1);
			var f = d + e;
			newname =  c.concat(f);
		}
		
		else {
			var a = name.slice(0,1).toUpperCase();
			var b = name.slice(1);
			newname = a + b;
		}
		return newname;
	}
}