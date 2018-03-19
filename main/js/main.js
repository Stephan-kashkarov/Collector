$(document).ready(function (e) {

	artist_list = $.ajax({
		dataType: "json",
		async: false,
		method: "GET",
		url: "/database/artists.json",
		error: function (xhr) {
			console.log("AJAX error:", xhr.status);
		},
		success: function(xhr, responseText) {
			console.log("Ajax operation succseded the code was:", xhr.status);
			console.log("This is the output", responseText);
			response = responseText;
			console.log("Parsing artist list");
			JSON.parse(response);
			console.log("Artist list parsed");
		},
		done: function(data, textStatus, jqXHR){
			console.log("data:", data);
			console.log("Response text",jqXHR.responseText);
		}
	})


	artist_list = artist_list.responseText;
	JSON.parse(artist_list);
	console.log(artist_list);
	for(var i = 0; i < 1; i++) {
		console.log("generating artist,", i);
		console.log("which is:", artist_list[i]);
		index = parseInt(i);
		index = new artist_lite(artist_list[i]);
		artist_lite_dict.push(index);
	}

	make_data_list(artist_lite_dict);
	artist_lite_list(artist_lite_dict);

	$(".artist_lite").click(function (e) {
		console.log(e);
		$(".artist_lite").val();
		name.print();
	});

});
