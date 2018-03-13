const article_template = ({
	title,
	img,
	desc
}) => `
<li class="${title} article">
	<span>
		${title}
	</span>
	<img src="${img}" width="100px" height="100px">
	<p>${desc}</p>
</li>
`;

const option_template = ({
	title
}) =>`
<option value="${title}">
	${title}
</option>
`
