$(document).ready(function () {
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
		if(cat != "All") {
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

	$(document).on("click", ".article", function (e) {
		name = $(this).children(".name").text().trim();
		console.log(name, "was clicked");
		for(var i in artist_lite_list) {
			console.log("checking", name, "vs", artist_lite_list[i]["name"]);
			if(artist_lite_list[i]["name"] == name) {
				loaded = []
				console.log("we found:", name + "'s profile!");
				artist_lite_list[i].load();
				artist_lite_list[i].full.print();
				loaded.push(artist_lite_list[i])
				break
			}
		}
	});

	$(document).on("click", ".art", function (e) {
		var title = $(this).find("span").text().trim();
		loaded[0].full.load_art(title)
	});

	$(document).on("click", ".back_full", function (e) {
		loaded[0].full.print()
	})

	$("#artist_input").focus(function(e){
		$("nav").animate({"height": "20%"})
		$("main").animate({"padding-top": "60%"})
	})

	$("#artist_input").blur(function(e){
		$("nav").animate({
			"height": "25px"
		})
		$("main").animate({
			"padding-top": "10%"
		})
	});
});
