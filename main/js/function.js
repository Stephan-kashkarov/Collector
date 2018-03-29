var artist_list = [];
var artist_lite_list = [];
var artist_full_dict = [];
var art_dict = [];
var name_list = [];
var school_list = [];
var timeframe_list = [];
var artist_profile;
var profile;
var thing;
var piece;
var obj;
var regen;

class artist_lite {
	constructor(obj) {
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

	}

	print() {
		console.log("printing:", this.name);
		$(".main").append([this].map(artist_lite_template).join(','));
	}

}

function clear() {
	console.log("clearing");
	$(".main").children().remove()
}

// STACKOVERFLOW PURE JS SOLUTION
function hasClass(elem, className) {
	return elem.classList.contains(className);
}
// STACKOVERFLOW OBJECT LENGTH FUNCTION
Object.size = function (obj) {
	var size = 0,
		key;
	for(key in obj) {
		if(obj.hasOwnProperty(key)) size++;
	}
	return size;
};
