artist_list = [];
artist_dict = [];

class artist_lite {
	constructor(list) {
		this.name = list[0];
		this.url = list[1];
	}

	load_artist(){
		artist_profile = $.ajax.({
			method: "GET",
			url: this.url,
			error: function(xhr) {
				console.log("Getting " + this.name + "'s profile. Error code:", xhr.status);
			}
		})
		profile = artist_profile.responseText;
		this.name = new artist_full(profile)
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
		for (var i = 0; i < object["art"].length; i++) {
			this.arts.push(object["art"][i]["title"]);
		}
	}


	print_art(name) {

	}
}

function make_data_list(artist_dict) {
	for (var i = 0; i < artist_dict.length; i++) {
		$("#artist_list").html([artist_dict[i]].map(autocomplete_template).join(""));
	}
}

function sort(artist_dict, artist_list, search) {
	for (var i = 0; i < artist_list.length; i++) {
		if (artist_list[i].includes(search)) {
			print_artist(artist_dict[i], i);
		}
	}
}

function print_artist(object, index) {
	object = $.ajax({
		method: "GET",
		url: artist_list[index][1]
		error: function(xhr){
			console.log("Getting " + artist_list[index][0] + "'s profile. Error: " + xhrstatus);
		}
	});
	object = object.responseText;

	$(".main").html()
}
