$(document).ready(function (e) {
	$(".edit").submit(function (e) {
		event.preventDefault();
		var id = articles.length + 1;
		var articleid = "article" + String(id);
		var new_img = $(".img").val();
		var new_title = $(".new-title").val();
		var new_desc = $(".new-desc").val();
		var articleid = new article(id, new_title, new_desc, new_img);
		console.log(articleid, articleid.list_format());
		articleid.push_to_list();
		print_posts(articles);
		$(".new-desc").val("");
		$(".new-title").val("");
		$(".new-img").val("");
	});
});
