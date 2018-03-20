$(document).ready(function (e) {

	artist_list = $.ajax({
		dataType: "json",
		async: false,
		method: "GET",
		url: "/database/artists.json",
		error: function (xhr) {
			console.log("AJAX error:", xhr.status);
		}
	});


	artist_list = artist_list.responseText;
	artist_list = JSON.parse(artist_list);
	console.log("artist_list", artist_list.lenght);
	for(var i = 0 in artist_list) {
		console.log("generating artist,", i);
		console.log("which is:", artist_list[i]);
		index = parseInt(i);
		index = new artist_lite(artist_list[index]);
		artist_lite_dict.push(index);
	}

	make_data_list(artist_lite_dict);
	artist_lite_list(artist_lite_dict);

	$(".artist_lite").click(function (e) {
		event.preventDefault();
		var name = $(this).text();
		console.log(name);
		name.load_artist();
	});

});
