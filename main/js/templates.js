const artist_template = ({
	title,
	img,
	desc
}) => `
<li class="${title} article">
	<span>
		${title}
	</span>
	<img src="${img}" width="100px" height="100">
	<p>${desc}</p>
</li>
`;

const autocomplete_template = ({
	name
}) => `
<option>
	${name}
<option>
`
