$(document).ready(function (e) {
	artist_list = $.ajax({
		method: "GET",
		url: "/database/artists.json",
		error: function(xhr){
			console.log("AJAX error:", xhr.status);
		}
	});
	artist_list = artist_list.responseText;
	console.log("Parsing artist list");
	JSON.parse(artist_list);
	console.log("Artist list parsed");
	for (var i = 0; i < artist_list.length; i++) {
		console.log("adding artist,", i);
		index = parseInt(i);
		index = new artist(artist_list[i]);
		artist_dict.push(index);
	}
	make_data_list(artist_dict);

});
