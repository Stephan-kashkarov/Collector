$(document).ready(function (e) {

<<<<<<< HEAD
=======


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
		console.log(id, id.listify());
		id.append_article();
		print_posts();
		$(".new-desc").val("");
		$(".new-title").val("");
		$(".new-img").val("");
	});
	$(".refresh-posts").click(function(e){
		print_posts();
	});
>>>>>>> parent of b4baa65... did things
});
