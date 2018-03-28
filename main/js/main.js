$(document).ready(function () {
	if (window.localStorage.key(0) != "artist_list") {
		if (window.localStorage.length == 0) {
			artist_list = $.ajax({
				url: "database/artists.json",
				method: "GET",
				async: false,
				done: function(xhr){
					console.log("Ajax completed. Status:",xhr.status);
				}
			});
			console.log(artist_list);
			artist_list = artist_list.repsonseText;
			console.log(artist_list);
			artist_list = JSON.parse(artist_list);
			console.log(artist_list);
			artist_lite_dict = JSON.stringify(artist_lite_dict);
			artist_list = JSON.stringify(artist_list);
			window.localStorage.setItem("artist_list", artist_list);
			window.localStorage.setItem("artist_lite_dict", artist_lite_dict);
			artist_list = JSON.parse(artist_list);
			artist_lite_dict = JSON.parse(artist_lite_dict);

		} else {
			artist_list = window.localStorage.getItem(window.localStorage.key(0));
			artist_lite_dict = window.localStorage.getItem(window.localStorage.key(1));
			artist_list = JSON.parse(artist_list);
			artist_lite_dict = JSON.parse(artist_lite_dict);
		}
	} else {
		window.localStorage.clear();
		location.reload();
	}
	if (artist_lite_dict.length != artist_list.length){
		regen = true;
		artist_lite_dict = {}
	}
	for (var i = 0; i < artist_list.length; i++) {
		console.log("generating:", artist_list[i]["name"]);
		var index = i.toString();
		var index2 = i.toString();
		index = new artist_lite(artist_lite[i]);
		index.print()
		if (regen == true){
			artist_lite_dict[index2] = index
		}
	}
});
