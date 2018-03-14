var articles = [];
var tag = ["*"];

class post {
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

function appendlist(post) {
	articles.push(post);
}

function print(_post) {
	$(".main").append([_post].map(article_template).join(""));
}

function clear() {
	$(".article").remove();
}

function generate_dropdown(articles) {
	console.log("Generating Tags");
	for(var i = 0; i < articles.length; i++) {
		for(var j = 0; j < articles[i].tags.length; j++) {
			for(var k = 0; k < tag.length; k++) {
				if(!articles[i].tags[j].includes(tag[k])) {
					if(typeof articles[i].tags[j] != "undefined") {
						tag.push(articles[i].tags[j]);
						console.log("Pushing tag", articles[i].tags[j]);
					}
				}
			}
		}
	}
	console.log(tag);
	for(var i = 0; i < tag.length; i++) {
		console.log("adding tag to dropdown:", tag[i]);
		$(".tagoptions").append([tag[i]].map(option_template).join(""));
	}
}

function print_all() {
	clear()
	for(var i in articles) {
		print(articles[i]);
	}
}

function sort_tag(tag) {
	clear()
	console.log("sorting by tag:", tag);
	for(var i = 0; i < articles.length; i++) {
		for(var j in articles[i].tags) {
			if(articles[i].tags[j] == tag) {
				print(articles[i]);
			}
		}
	}
}
