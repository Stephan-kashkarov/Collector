$(document).ready(function (e) {
	artist_list = $.ajax({
		method: "GET",
		url: "/database/artists.json",
		error: function (xhr) {
			console.log("AJAX error:", xhr.status);
		}
	});
	artist_list = artist_list.responseText;
	console.log("Parsing artist list");
	JSON.parse(artist_list);
	console.log("Artist list parsed");
	for(var i = 0; i < artist_list.length; i++) {
		console.log("generating artist,", i);
		index = parseInt(i);
		index = new artist_lite(artist_list[i]);
		artist_lite_dict.push(index);
	}
	make_data_list(artist_lite_dict);
	artist_lite_list(artist_lite_dict);

	$(".artist_lite").click(function(e){
		console.log(e);
		$(".artist_lite").val();
		name.print();
	});

});
