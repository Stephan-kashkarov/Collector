$(document).ready(function () {
	if (window.localStorage.key(0) != "artist_list") {
		console.log("localStorage currupted");
		if (window.localStorage.length == 0) {
			console.log("localStorage empty");
			artist_list = $.ajax({
				url: "database/artists.json",
				method: "GET",
				async: false,
				done: function(xhr){
					console.log("Ajax completed. Status:",xhr.status);
				}
			});
			artist_list = artist_list.responseText;
			artist_list = JSON.parse(artist_list);

			console.log("doing localStorage suff");
			artist_lite_dict = JSON.stringify(artist_lite_dict);
			artist_list = JSON.stringify(artist_list);
			window.localStorage.setItem("artist_list", artist_list);
			window.localStorage.setItem("artist_lite_dict", artist_lite_dict);
			artist_list = JSON.parse(artist_list);
			artist_lite_dict = JSON.parse(artist_lite_dict);

		} else {
			console.log("Lists cached in localStorage");
			artist_list = window.localStorage.getItem(window.localStorage.key(0));
			artist_lite_dict = window.localStorage.getItem(window.localStorage.key(1));
			artist_list = JSON.parse(artist_list);
			artist_lite_dict = JSON.parse(artist_lite_dict);
		}
	} else {
		console.log("localStorage was cleared");
		window.localStorage.clear();
		location.reload();
	}
	if (artist_lite_dict.length != artist_list.length){
		regen = true;
		artist_lite_dict = {}
	}
	console.log("starting generation of artists");
	var size = Object.size(artist_list);
	for (var i in artist_list) {
		if (artist_list.hasOwnProperty(i)) {
			console.log("generating:", artist_list[i][0]);
			var index = i.toString();
			var index2 = i.toString();
			index = new artist_lite(artist_list[i]);
			index.print()
			if (regen == true){
				artist_lite_dict[index2] = index
			}
		}
	}

	$("#sorter").click(function(e){
		var cat = $(".sortby").val();
		if (cat == "Name") {

		}
	})
});
