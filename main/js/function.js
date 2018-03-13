var articles = [];

class post {
	constructor(title, desc, img = "", tags, id) {
		this.title = title
		this.desc = desc
		this.img = img
		this.tags = tags
		this.id = id
	}

	function listform() {
		objform = {
			"title": this.title,
			"img": this.img,
			"desc": this.desc
		}
		return objform;
	}
}
