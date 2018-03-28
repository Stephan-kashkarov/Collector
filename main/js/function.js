artist_list = [];
artist_lite_dict = [];
artist_full_dict = [];
art_dict = [];
var global;
var artist_profile;
var profile;
var thing;
var piece;
var obj;
var regen;

class artist_lite {
	constructor(obj){
		this.obj = obj;
		this.name = obj[0];
		console.log("name:", obj[0]);
		this.school = obj[1];
		console.log("school:", obj[1]);
		this.timeframe = obj[2];
		console.log("timeframe:", obj[2]);
		this.url = obj[3];
		console.log("url:", obj[3]);
	}

	load() {
		get_url(this.name, artist_list)
	}

	print() {
		$(".main").append([this.obj].map(artist_lite_template).join(','));
	}

	get_url(name, artist_list){
		for (var i = 0; i < artist_list.length; i++) {
			console.log("Are", name, "and", artist_list[i]["name"], "the same thing?");
			if (artist_list[i]["name"] == name) {
				console.log("Yes! :)");
				return artist_list[i]["url"];
			} else {
				console.log("No! ;(");
			}
		}
	}
}

// STACKOVERFLOW PURE JS SOLUTION
function hasClass(elem, className) {
	return elem.classList.contains(className);
}
// STACKOVERFLOW OBJECT LENGTH FUNCTION
Object.size = function(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
return size;
};
