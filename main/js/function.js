artist_list = [];
artist_dict = [];

class artist {
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
	}
}

function make_data_list(artist_dict) {
	for (var i = 0; i < artist_dict.length; i++) {
		$("#artist_list").html([artist_dict[i]].map(autocomplete_template).join(""));
	}
}
