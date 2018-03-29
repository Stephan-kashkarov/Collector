var artist_list = [];
var artist_lite_list = [];
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
		var full = $.ajax({
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
		this.obj = obj;
		this.name = obj["name"];
		this.life = obj["life"];
		this.school = obj["school"];
		this.timeframe = obj["timeframe"];
		this.art = obj["art"];
	}

	print() {
		clear();
		$(".main").append([this].map(artist_template).join(","));
		for (var i in this.art) {
			$(".art-container").append([this.art[i]].map(art_list_template).join(","));
		}
	}

	load_art(name) {
		clear();
		for (var i in this.art) {
			if (this.art[i]["name"] == name) {
				$(".main").append([this.art[i]].map(art_profile).join(","));
			}
		}
	}
}

function clear() {
	console.log("clearing main container");
	$(".main").children().remove()
}
