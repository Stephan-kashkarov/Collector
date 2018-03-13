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



	console.log("Contents of ajaxed file(s):",db.responseText);
	var items = JSON.parse(db.responseText);
	for (var i in items) {
		console.log("Appending and printing:", items[i]);
		var articleid = "article" + String(items[i].id);
		console.log("Id of article:", articleid);
		var articleid = new article (items[i].id, items[i].title, items[i].desc, items[i].img);
		articleid.append_article();
		print_posts(articles);
	}


	$(".refresh-posts").click(function(e){
		print_posts();
	});
});
