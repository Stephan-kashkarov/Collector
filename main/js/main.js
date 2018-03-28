$(document).ready(function () {
	if (window.localStorage.key(0) != artist_list) {
		if (window.localStorage.length == 0) {
			artist_list = $.ajax({
				url: "database/artist.json",
				method: "GET",
				async: false,
				done: function(xhr){
					console.log("Ajax completed. Status:",xhr.status);
				}
			});
			console.log(artist_list);

			artist_list = JSON.parse(artist_list);
			console.log(artist_list);
			for (var i = 0; i < artist_list.length; i++) {

			}
		} else {
			artist_list = window.localStorage.getItem(window.localStorage.key(0));
			artist_full_dict = window.localStorage.getItem(window.localStorage.key(1));
		}
	} else {
		window.localStorage.clear();
		location.reload();
	}
}
