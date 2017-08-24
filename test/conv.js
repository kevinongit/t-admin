
var data = require('./engphrase.json');

var res = data.map(function(item) {
	var val = {};
	val.speaker = "idiom";
	val.phrase = item.phrase;
	val.desc = item.desc;
	//val["name"] = item.name;
	//val["uid"] = item.uid;
	//val["area"] = item.area;
	return val;

});

console.log(JSON.stringify(res));
