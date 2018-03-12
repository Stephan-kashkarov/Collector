var articles = [];

class article {
	constructor(id, title, desc, img = "") {
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.img = img;
	};
	listify() {
		return {
			title: this.title,
			img: this.img,
			desc: this.desc
		};
	};
	append_article() {
		var formatted = this.listify();
		articles.push(formatted);
	};
	id() {
		return this.id
	};
};

function print_posts(list) {
	$(".article").remove();
	if(list != "") {
		for(var i = 0; i < list.length; i++) {
			$(".main").append([articles[i]].map(article_template).join(""));
			console.log(articles[i], "Printed");
		};
	};
};

function prepareUpload(event) {
	files = event.target.files;
};

class database {
	constructor(ajaxdb) {
		this.db = ajaxdb;
	};
};
