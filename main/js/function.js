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

class artist_lite {
	constructor(obj){
		this.obj = obj;
		this.name = obj["name"];
		this.school = obj["school"];
		this.timeframe = obj["timeframe"];
	}

	load() {
		get_url(this.name, artist_list)
	}
}

get_url(name, artist_list){
	for (var i = 0; i < artist_list.length; i++) {
		console.log("Are", name, "and", artist_list[i]["name"], "the same thing?");
		if (artist_list[i]["name"] == name) {
			console.log("Yes!");
			return artist_list[i]["url"];
		} else {
			console.log("No! ;(");
		}
	}
}

// STACKOVERFLOW PURE JS SOLUTION
function hasClass(elem, className) {
	return elem.classList.contains(className);
}
