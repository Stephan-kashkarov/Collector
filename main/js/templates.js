const artist_template = ({
	name,
	life,
	school,
	timeframe
}) => `
<li class="${name} article">
	<span>
		${name}
	</span>
	<p>Life: ${life} School: ${school} Time-Frame: ${timeframe}</p>
	<ul class="art-container ${name}-list">
	</ul>
</li>
`;

const art_list_template = ({
	title,
	date,
	index
}) => `
<li class="${title}">
	<span>
		${title}
	</span>
	<p>
		Date: ${date}, Index: ${index}
	</p>
</li>
`

const autocomplete_template = ({
	name
}) => `
<option>
	${name}
<option>
`
