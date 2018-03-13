var articles = [];

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

function sort_tag(tag) {
	clear()
	for(var i in articles){
		for(var j in articles[i].tags){
			if(articles[i].tags[j] == "tag"){
				print(article[i]);
			}
		}
	}
}
