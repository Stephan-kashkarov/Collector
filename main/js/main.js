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
		var item = items[i];
		var id = i;
		var i = new post(item.title, item.desc, item.img, item.tags)
		console.log(i);
		appendlist(i);
		print(i);
	}
	generate_dropdown(articles);



	$(".refresh-posts").click(function(e){
		console.log("refrshing posts");
		console.log(articles);
		tag = $(".tagoptions").val();
		if (tag == "*"){
			print_all()
		}
		else {
			sort_tag(tag)
		}
	});
});
