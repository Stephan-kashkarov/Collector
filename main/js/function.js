artist_list;

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
