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

	$("li").on("click", ".art", function(e){
		e.preventDefault()
		console.log("CLICK jquery");
		name = this.parent().sibling(".title").val()
		title = this.children(span).val();
		look_for_index(name, artist_full_dict, "name")
		global.print_art(title);
	});

	// STACK OVERFLOW SOLUTION PURE JS WITH EDITS BY ME !!?
	document.addEventListener('click', function (e) {
		if (hasClass(e.target, 'art')) {
			console.log("CLICK vanilla");
			console.log(e.target);
			name = e.target.parent().sibling(".title").val()
			title = this.children(span).val();
			look_for_index(name, artist_full_dict, "name")
			global.print_art(title);
		} else if (hasClass(e.target, 'test')) {
			// .test clicked
			// Do your other thing
		}
	}, false);
	// Misc

	// This code was found @ https://leaverou.github.io/awesomplete/
	var input = document.getElementById("artist_input");
	new Awesomplete(input, {list: document.querySelector("#artist_list")});
});
