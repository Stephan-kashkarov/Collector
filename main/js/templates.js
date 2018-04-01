// Template for Artist Profile
const artist_template = ({
	author,
	life,
	school,
	timeframe
}) =>
`
<li class="artist">
	<span class="author-title">
		${author}
	</span>
	<p>Life: ${life} School: ${school} Time-Frame: ${timeframe}</p>
	<ul class="art-container">
	</ul>
</li>
`;

const artist_lite_template = ({
	name,
	school,
	timeframe
}) =>
`
<li class="name article artist-lite">
	<a class="artist_lite name">
		${name}
	</a>
	<a class="artist_lite school">
		${school}
	</a>
	<a class="artist_lite timeframe">
		${timeframe}
	</a>
</li>
`;

const art_list_template = ({
	title,
	date,
	index
}) =>
`
<li class="art-contained">
	<a class="art">
		<span class="art-title">
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
	img
}) =>
`
<li class="art_article">
	<span>
		${title}
	</span>
	<p class="date">
		${date}
	</p>
	<img src="${img}">
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
	<br>
</li>
<li class="art_article back_full">
	<a class="back_full">
		BACK!
	</a>
</li>
`
const auto_complete = ({
	name
}) =>
`
<option>
	${name}
<option>
`
