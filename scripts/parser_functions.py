def cascade(last_name, line):
	artist_cache["art"] = art_cache
	parsed_data[last_name] = artist_cache
	art_cache = []
	artist_cache = {}

def artist_profile(line):
	artist_cache["last_name"] = line[0][1:]
	artist_cache["first_name"] = line[1][1:-1]
	artist_cache[]
