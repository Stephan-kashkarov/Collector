// Template for Artist Profile
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
// Template for Art Profile
const art_profile = ({
	title,
	date,
	technique,
	location,
	form,
	painting_type,
	index
}) => `
<li>
	<span>
		${title}
	</span>
	<p class="date">
		${date}
	</p>
	<p class="block">
		Technique: ${technique}
		<br>
		Location: ${location}
		<br>
		Form: ${form}
		<br>
		Painting Type: ${painting_type}
		<br>
		Index: ${index}
	</p>
</li>
`

// MISC
const autocomplete_template = ({
	name
}) => `
<option>
	${name}
<option>
`
