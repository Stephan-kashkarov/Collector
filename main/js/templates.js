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

const artist_lite_template = ({
	name
}) => `
<li class="${name} article">
	<a href="" class="artist_lite">
		${name}
	</a>
</li>
`;

const art_list_template = ({
	title,
	date,
	index
}) => `
<li class="${title} article art">
	<a class="art">
		<span class="title art">
			${title}
		</span>
		<p>
			Date: ${date}, Index: ${index}
		</p>
	</a>
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
	index,
	author
}) => `
<li class="article">
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
	<a href="" class="back_full">
		${author}
	</a>
</li>
`
