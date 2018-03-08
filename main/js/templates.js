const article = ({title, img, desc})  => `
<li class="${title} article">
	<span>
		${title}
	</span>
	<img src="${img}">
	<p>${desc}</p>
</li>
`;
