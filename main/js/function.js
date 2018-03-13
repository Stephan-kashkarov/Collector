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
<<<<<<< HEAD
=======

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
	db()
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

function prepareUpload(event) {
	files = event.target.files;
};

class database {
	constructor(ajaxdb) {
		this.db = ajaxdb;
	};
};
>>>>>>> parent of b4baa65... did things
