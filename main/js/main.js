$(document).ready(function (e) {
	var db = $.ajax({
		url: 'database/posts.json',
		async: false,
		success: function(text){
			console.log('Json loaded succsessfully!');
			console.log('Data:', text);
			var response = text;
		},
		fail: function(){
			console.log("Json failed to load!");
		},
		error: function(xhr){
			console.log("An error occured: " + xhr.status + " " + xhr.statusText);
		},
		done: function(){
			console.log("AJAX operation complete!");
		}

	});

	console.log(db.responseText);
	if(localStorage.lenght) {
		for(var i = 0; i < localStorage.length; i++) {
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
		var id = new article(id, new_title, new_desc, new_img);
		console.log(id, id.list_format());
		id.push_to_list();
		print_posts(articles);
		$(".new-desc").val("");
		$(".new-title").val("");
		$(".new-img").val("");
		window.localStorage.clear();
		window.localStorage.setItem(1, "articles");
	});
});
