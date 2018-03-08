var articles = [];

class article {
	constructor(id, title, desc, img = "") {
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.img = img;
	}
	list_format() {
		return {
			title: this.title,
			img: this.img,
			desc: this.desc
		};
	}
	push_to_list() {
		var formatted = this.list_format();
		articles.push(formatted);
	}
	id() {
		return this.id
	}
}

function print_posts(list) {
	if(list != "") {
		for(var i = 0; i < list.length; i++) {
			$(".main").html([articles[i]].map(article_template).join(""));
		}
	}
}
