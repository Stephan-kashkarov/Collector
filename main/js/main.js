$(document).ready(function(e) {
	$(".edit").submit(function(e){
		event.preventDefault();

		var new_img = $(".img").val();
		var new_title = $(".new-title").val();
		var new_desc = $(".new-desc").val();
		articles.push({title: new_title, img: new_img, desc: new_desc});
		console.log(articles)
	});
});
