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
		this.school = obj[1];
		this.timeframe = obj[2];
		this.url = obj[3];
	}

	load() {
		full = $.ajax({
			url: this.url,
			async: false,
			method: "GET"
		});
		full = full.responseText;
		full = JSON.parse(full)
		this.full = new artist(full)
	}

	print() {
		console.log("printing:", this.name);
		$(".main").append([this].map(artist_lite_template).join(','));
	}

}

class artist {
	constructor(obj) {
		this.obj = obj
	}
}

function clear() {
	console.log("clearing");
	$(".main").children().remove()
}
