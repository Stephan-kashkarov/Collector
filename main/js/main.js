function Article(tag, title, img, desc) {
	$(tag).append(<h1>title</h1>);
	$(tag).append(<img>img</img>);
	$(tag).append(<p>desc</p>);

}

$(document).ready(function(e) {
	$(".edit").submit(function(e){
		event.preventDefault();
		
		var new_img = $(".img").val()
		var new_title = $(".new-title").val()
		var new_desc = $(".new-desc").val()
		Article()
	});
});
