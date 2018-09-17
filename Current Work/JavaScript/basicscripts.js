var zoneNames = ["1L","2L","3L","4L","5L","6L","7L","8L","9L","10L","11L","12L","13L","1R","2R","3R","4R","5R","6R","7R","8R","9R","10R","11R","12R","13R"];
var zonecenterx = [0.4042, 0.2463, 0.1516, 0.1274, 0.4295, 0.2926, 0.2326, 0.2063, 0.4358, 0.3368, 0.2821, 0.4358, 0.3474, 0.5958, 0.7537, 0.8484, 0.8726, 0.5705, 0.7074, 0.7674, 0.7937, 0.5642, 0.6632, 0.7179, 0.5642, 0.6526];
var zonecentery = [0.6813, 0.5363, 0.3209, 0.1099, 0.5626, 0.4396, 0.2571, 0.0989, 0.4088, 0.3473, 0.1319, 0.1714, 0.1319, 0.6813, 0.5363, 0.3209, 0.1099, 0.5626, 0.4396, 0.2571, 0.0989, 0.4088, 0.3473, 0.1319, 0.1714, 0.1319]; 
var basicDataTitles = ["","Personal Foul","Technical Foul","Flagrant Foul","Defensive Rebound","Offensive Rebound","Blocks","Blocks Against","Steals","2pt Made","2pt Missed","3pt Made","3pt Missed","FT Made","FT Missed"];


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

const fs = window.nodeRequire("fs");