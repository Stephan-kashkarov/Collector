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
});
