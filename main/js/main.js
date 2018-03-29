$(document).ready(function () {
	if(window.localStorage.key(0) != "artist_list") {
		console.log("localStorage c0rrupted");
		if(window.localStorage.length == 0) {
			console.log("localStorage empty");
			artist_list = $.ajax({
				url: "database/artists.json",
				method: "GET",
				async: false,
				done: function (xhr) {
					console.log("Ajax completed, Status:", xhr.status);
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
			artist_lite_list = window.localStorage.getItem(window.localStorage.key(1));
			artist_list = JSON.parse(artist_list);
			artist_lite_list = JSON.parse(artist_lite_list);
		}
	} else {
		console.log("localStorage was cleared");
		window.localStorage.clear();
		location.reload();
	}
	if(artist_lite_list.length != artist_list.length) {
		regen = true;
		artist_lite_list = [];
	}
	console.log("starting generation of artists");
	for(var i in artist_list) {
		if(artist_list.hasOwnProperty(i)) {
			var name = artist_list[i][0];
			var school = artist_list[i][1];
			var timeframe = artist_list[i][2];
			var obj = {};
			name_list.push(name);
			obj["name"] = artist_list[i][0]
			$("#name-list").append([obj].map(auto_complete).join(","));
			if(!school_list.includes(school)) {
				obj["name"] = artist_list[i][1]
				school_list.push(school);
				$("#school-list").append([obj].map(auto_complete).join(","));
			}
			if(!timeframe_list.includes(timeframe)) {
				timeframe_list.push(timeframe);
				obj["name"] = artist_list[i][2]
				$("#timeframe-list").append([obj].map(auto_complete).join(","));
			}
			name = new artist_lite(artist_list[i]);
			name.print();
			if(regen == true) {
				artist_lite_list.push(name)
			}
		}
	}
	$(".sortby").change(function (e) {
		new_cat = $(this).val();
		if(new_cat == "Name") {
			console.log("sorting by name");
			$(".sorter").attr("list", "name-list");
		} else if(new_cat == "School") {
			console.log("sorting by school");
			$(".sorter").attr("list", "school-list");
		} else {
			console.log("sorting by timeframe");
			$(".sorter").attr("list", "timeframe-list");
		}
	});

	$("#sorter").on('click', function (e) {
		clear()
		var cat = $(".sortby").val();
		var search = $("#artist_input").val();
		$("#artist_input").val("");
		console.log("Searching for:", search, "in", cat + "s!");
		if (cat != "All"){
			if(cat == "Name") {
				var search_num = "name";
			} else if(cat == "School") {
				var search_num = "school";
			} else {
				var search_num = "timeframe";
			}
			for(var i in artist_lite_list) {
				if(artist_lite_list[i][search_num] == search) {
					console.log("this matched:", artist_lite_list[i]);
					artist_lite_list[i].print()
				}
			}
		} else {
			for(var i in artist_lite_list) {
				artist_lite_list[i].print()
			}
		}
	});

	$(".article").on("click", function(e){
		name = $(this).children(".name").text().trim();
		console.log(name, "was clicked");
		for (var i in artist_lite_list) {
			console.log("checking", name, "vs", artist_lite_list[i]["name"]);
			if (artist_lite_list[i]["name"] == name) {
				console.log("we found:", name +"'s profile!");
				artist_lite_list[i].load()
				artist_lite_list[i].full.print();
				break
			}
		}
	});
});
