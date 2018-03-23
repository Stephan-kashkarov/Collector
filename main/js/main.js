$(document).ready(function () {
	if (window.localStorage.length != 0){
		if(window.localStorage.key(0) != artist_list){
			artist_list = JSON.parse(window.localStorage.getItem("artist_list"));
			artist_lite_dict = JSON.parse(window.localStorage.getItem("artist_lite_dict"));

		} else {
			window.localStorage.clear()
			location.reload();
		}
	} else {
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
		window.localStorage.setItem("artist_list!", JSON.stringify(artist_list));
		console.log("artist_list", artist_list.lenght);
		for(var i = 0 in artist_list) {
			console.log("generating artist,", i);
			console.log("which is:", artist_list[i]);
			index = parseInt(i);
			index = new artist_lite(artist_list[index]);
			artist_lite_dict.push(index);
		}
		window.localStorage.setItem("artist_lite_dict", JSON.stringify(artist_lite_dict));
	}
	make_data_list(artist_lite_dict);

	$("#sorter").click(function (e) {
		event.preventDefault();
		look_for_index($("#artist_input").val(), artist_lite_dict, "name");
		console.log(global);
		global.load_artist();
		$("#artist_input").val("");
	});

	// Done with vanilla JS beause jquery dosent support this uses
	$(document).on("click", "li.art", function (e) {
		name = this.parentElement.parentElement.firstElementChild.innerHTML.trim();
		title = this.firstElementChild.firstElementChild.innerHTML.trim();
		console.log("Opening", title + "!");
		look_for_index(name, artist_full_dict, "name");
		global.print_art(title);
	});

	// more vanillaish js for the same reason as above
	$(document).on("click", "a.back_full", function (e) {
		author = this.innerHTML.trim();
		look_for_index(author, artist_lite_dict, "name");
		global.load_artist();
	});

	// This code was found @ https://leaverou.github.io/awesomplete/
	var input = document.getElementById("artist_input");
	new Awesomplete(input, {
		list: document.querySelector("#artist_list")
	});
});
