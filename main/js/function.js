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

function create_articles(title, imgurl, desc, id) {
	var id = articles.length + 1;
	var idnum = articles.length + 1;
	var articleid = "article" + String(id);
	var new_img = $(".img").val();
	var new_title = $(".new-title").val();
	var new_desc = $(".new-desc").val();
	var id = new article (id, new_title, new_desc, new_img);
	window.localStorage.setItem(articleid, id);
	console.log(id, id.listify());
	id.append_article();
	print_posts();
	$(".new-desc").val("");
	$(".new-title").val("");
	$(".new-img").val("");
});

function db() {
	var database = window.localStorage.getItem("db");
	console.log("Unstringified DB:", database);
	var database = JSON.stringify(database);
	console.log("Stringified DB:", database);
	$.ajax({
		url: "database/posts.json",
		async: false,
		method: "POST",
		data: database
	});
};

function print_posts() {
	$(".article").remove();
	window.localStorage.setItem("db", articles);
	// db()
	console.log("Refreshing posts!");
	if(articles != "") {
		console.log("Articles not empty!");
		for(var i = 0; i < articles.length; i++) {
			$(".main").append([articles[i]].map(article_template).join(""));
			console.log(articles[i], "Printed");
		};
	};
	console.log("Posts refreshed!");
};
