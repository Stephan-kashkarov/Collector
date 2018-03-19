artist_list = [];
artist_lite_dict = [];
artist_full_dict = [];

class artist_lite {
	constructor(list) {
		this.name = list[0];
		this.url = list[1];
		this.loaded = false;
		this.full_profile = "";
	}

	load_artist() {
		artist_profile = $.ajax.({
			method: "GET",
			url: this.url,
			error: function (xhr) {
				console.log("Getting " + this.name + "'s profile. Error code:", xhr.status);
			}
		});
		profile = artist_profile.responseText;
		this.full_profile = new artist_full(profile)
		this.full_profile.print()
	}
}

class artist_full {
	constructor(object) {
		this.object = object
		this.name = object["name"];
		this.life = object["life"];
		this.school = object["school"];
		this.timeframe = object["timeframe"];
		this.arts = [];
		for(var i = 0; i < object["art"].length; i++) {
			this.arts.push(object["art"][i]["title"]);
		}
	}

	print() {
		clear()
		$(".main").html({[this].map(artist_template).join("")})
		for (var i = 0; i < this.object["art"].length; i++) {
			thing = this.object["art"][i]
			$(".art-container").html([thing].map(art_list_template).join(""));
		}
	}

	print_art(name) {
		for(var i = 0; i < object["art"].length; i++) {
			piece = object["art"][i]["title"];
			if piece == name {
				obj = new art(piece, this.name)
				obj.print()
				break
			}
		}
	}
}

class art {
	constructor(object, author) {
		this.author = author
		this.obj = object
		this.title = object["title"];
		this.date = object["date"];
		this.technique = object["technique"];
		this.location = object["url"];
		this.form = object["form"];
		this.painting_type = object["painting_type"];
		this.index = object["index"];
	}

	print() {
		clear();
		$(".main").html([this.obj].map(art_profile).join(""))
	}
}

function make_data_list(artist_lite_dict) {
	for(var i = 0; i < artist_lite_dict.length; i++) {
		$("#artist_list").html([artist_lite_dict[i]].map(autocomplete_template).join(""));
	}
}

function artist_lite_list(artist_lite_dict) {
	clear()
	for(var i = 0; i < artist_lite_dict.length; i++) {
		$("#artist_list").html([artist_lite_dict[i]].map(artist_lite_template).join(""));
	}
}

function clear() {
	$("main").remove(article);
}
