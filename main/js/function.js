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
			desc: this.desc,
			id: this.id
		};
	};

	append_article() {
		var formatted = this.listify();
		articles.push(formatted);
		console.log("Article Pushed");
	};
	id() {
		return this.id;
	};
};
