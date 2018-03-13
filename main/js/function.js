var articles = [];
var tag = [];

class post{
	constructor(title, desc, img = "", tags) {
		this.title = title
		this.desc = desc
		this.img = img
		this.tags = tags
	}

	listform() {
		objform = {
			"title": this.title,
			"img": this.img,
			"desc": this.desc
		}
		return objform;
	}
}

function appendlist(post){
	articles.push(post);
}

function print(_post) {
	$(".main").append([_post].map(article_template).join(""));
}

function clear(){
	$(".article").remove();
}

function generate_dropdown(articles){
	console.log("Generating Tags");
	for(var i = 0; i < articles.lenght; i++){
		for(var j = 0; j < articles.tags.length; j++){
			for (var k = 0; k < tag.length; k++){
				if (!articles[i].tags[j].includes(tag[k])){
					tag.push(tag[k]);
					console.log("Pushing tag", tag[k]);
				}
			}
		}
	}
	for (var i = 0; i < tag.length; i++) {
		console.log("adding tag to dropdown:", tags[i]);
		$(".tagoptions").append([tags[i]].map(options_template).join(""));
	}
}

function print_all(){
	clear()
	for(var i in articles){
		print(articles[i]);
	}
}

function sort_tag(tag) {
	clear()
	console.log("sorting by tag:", tag);
	for(var i = 0; i < articles.length; i++){
		for(var j in articles[i].tags){
			if(articles[i].tags[j] == tag){
				print(articles[i]);
			}
		}
	}
}
