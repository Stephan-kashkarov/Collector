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
			artist_list = JSON.stringify(artist_list);
			window.localStorage.setItem("artist_list", artist_list);
			artist_list = JSON.parse(artist_list);

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
		artist_lite_dict = {};
	}
	console.log("starting generation of artists");
	var size = Object.size(artist_list);
	for (var i in artist_list) {
		if (artist_list.hasOwnProperty(i)) {
			console.log("generating:", artist_list[i][0]);
			var index = i.toString();
			var index2 = i.toString();
			var name = artist_list[i][0];
			var school = artist_list[i][1];
			var timeframe = artist_list[i][2];
			name_list.push(name);
			$("#name-list").append([artist_list[i][0]].map(auto_complete).join(","));
			if(!school_list.includes(school)){
				school_list.push(school);
				$("#school-list").append([artist_list[i][1]].map(auto_complete).join(","));
			}
			if(!timeframe_list.includes(timeframe)){
				timeframe_list.push(timeframe);
				$("#timeframe-list").append([artist_list[i][2]].map(auto_complete).join(","));
			}
			name = new artist_lite(artist_list[i]);
			name.print();
			if (regen == true){
				artist_lite_dict[index2] = index
			}
		}
	}
	$(".sortby").change(function(e){
		new_cat = $(this).val();
		if (new_cat == "Name"){
			$(".sorter").attr("list", "name-list");
		} else if (new_cat == "School") {
			$(".sorter").attr("list", "school-list");
		} else {
			$(".sorter").attr("list", "timeframe-list");
		}
	});

	$("#sorter").on('click', function(e){
		clear()
		var cat = $(".sortby").val();
		var search = $("#artist_input").val();
		if (cat == "Name") {
			var search_num = 0;
		} else if (cat == "School") {
			var search_num = 1;
		} else {
			var search_num = 2;
		}
		for (var i in artist_list) {
			if (artist_list[i][search_num] == search) {
				artist_list[i][0].print()
			}
		}
	});
});
