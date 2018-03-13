$(document).ready(function (e) {
	var db = $.ajax({
		url: 'database/posts.json',
		async: false,
		fail: function(){
			console.log("Json failed to load!");
		},
		error: function(xhr, text){
			console.log("Error log: " + xhr.status + " " + xhr.statusText);
		},
		done: function(){
			console.log("AJAX operation complete!");
		}
	});

	var items = JSON.parse(db.responseText);
	for (var i in items) {
		console.log(items[i]);
	}


	$(".refresh-posts").click(function(e){

	});
});
