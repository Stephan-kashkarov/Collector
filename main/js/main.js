$(document).ready(function () {

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

	$("#sorter").click(function (e) {
		event.preventDefault();
		name = look_for_index($("#artist_input").val(), artist_lite_dict, "name");
		global.load_artist();
	});

	// Done with vanilla JS beause jquery dosent support this uses
	$(document).on("click","li.art", function(){
		console.log(this);
		console.log(this.parentElement.parentElement);
		name = this.parentElement.parentElement.firstElementChild.innerHTML.trim();
		title = this.firstElementChild.firstElementChild.innerHTML.trim();
		console.log("name", name, "title", title);
		look_for_index(name, artist_full_dict, "name")
		console.log(global);
		global.print_art(title);
	});

	// This code was found @ https://leaverou.github.io/awesomplete/
	var input = document.getElementById("artist_input");
	new Awesomplete(input, {list: document.querySelector("#artist_list")});
});
