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
	article.append(post);
}

function print(_post) {
	$(".main").append([_post].map(article_template).join(""));
}

function sort_tag(tag) {

}
