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



	console.log(db.responseText);
	var items = JSON.parse(db.responseText);
	console.log(items);
	console.log(items.lenght);
	console.log(items[1]);
	for (var i in items) {
		console.log("Appending and printing:", items[i]);
		var articleid = "article" + String(items[i].id);
		console.log("Id of article:", articleid);
		var articleid = new article (item[i].id, item[i].title, item[i].desc, item[i].img);
		console.log(id, id.list_format());
		id.append_article();
		print_posts(articles);
	}

	if(localStorage.lenght) {
		for(var i=0; i < localStorage.length; i++) {
			console.log("localStorage: " + localStorage.key(i));
		}
	}
	$(".edit").submit(function (e) {
		event.preventDefault();
		var id = articles.length + 1;
		var idnum = articles.length + 1;
		var articleid = "article" + String(id);
		var new_img = $(".img").val();
		var new_title = $(".new-title").val();
		var new_desc = $(".new-desc").val();
		var id = new article (id, new_title, new_desc, new_img);
		console.log(id, id.list_format());
		id.append_article();
		print_posts();
		$(".new-desc").val("");
		$(".new-title").val("");
		$(".new-img").val("");
		window.localStorage.clear();
		window.localStorage.setItem(1, "articles");
	});
	$(".refresh-posts").click(function(e){
		print_posts();
	});
});
