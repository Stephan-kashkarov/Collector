# MODULE IMPORTS
import json

# VARIABLE DEFINITION
x = 0
parsed_data = {}
artist_cache = {}
art_cache = {}
art_list = []
last_name = ""

def cascade_art(art_list, art_cache):
	art_list.append(art_cache)  # APPEND DICTIONARY OF ARTWORK TO LIST


def cascade_all(last_name, line, artist_cache, parsed_data, art_cache,
				art_list):
	cascade_art(art_list, art_cache)  # APPEND THE LAST ARTWORK
	artist_cache[
		"art"] = art_list  # ADDS ART LIST AS A ATTRIBUTE OF THE ARTIST
	parsed_data[last_name] = artist_cache  # ADDS THE ARTIST TO THE FINAL LIST


def next_field(list, pos):
	curent_pos = pos
	their_title = ""
	if list[pos].startswith('\"'):
		their_title = their_title + list[pos]
		pos += 1
		while pos < len(list):
			if list[pos].endswith('\"'):
				their_title += list[pos]
				pos += 1
				their_title = their_title[1:-1]
				break
			else:
				their_title += list[pos]
				pos += 1
	else:
		their_title += list[pos]
		pos += 1

	return their_title, pos


def make_artist(artist_cache, name, dates, school, timeframe):
	artist_cache["name"] = name
	artist_cache["life"] = dates
	artist_cache["school"] = school
	artist_cache["timeframe"] = timeframe


def make_art(art_cache, title, date, technique, location, url, form, painting_type, index):
	art_cache["title"] = title
	art_cache["date"] = date
	art_cache["technique"] = technique
	art_cache["location"] = location
	art_cache["url"] = url
	art_cache["form"] = form
	art_cache["painting_type"] = painting_type
	art_cache["index"] = index


art_index = 0
with open('../data/artistcsvdata.csv', newline='\n', encoding='utf-8') as f:
	data = f.read()
	lines = data.split('\n')

for line in lines:
	if art_index > 0:
		fields = line.split(',')
		num_fields = len(fields)
		pos = 0
		name, pos = next_field(fields, pos)
		if last_name == "":
			last_name = name
		if len(name) == 0:
			continue
		if name != last_name:
			cascade_all(last_name, line, artist_cache, parsed_data, art_cache, art_list)
			name = last_name
			art_cache = {}
			art_list = []
			artist_cache = {}

			dates = ""
			title = ""
			date = ""
			technique = ""
			location = ""
			url = ""
			form = ""
			painting_type = ""
			school = ""
			timeframe = ""

			if (pos < num_fields):
				dates, pos = next_field(fields, pos)
			if (pos < num_fields):
				title, pos = next_field(fields, pos)
			if (pos < num_fields):
				date, pos = next_field(fields, pos)
			if (pos < num_fields):
				technique, pos = next_field(fields, pos)
			if (pos < num_fields):
				location, pos = next_field(fields, pos)
			if (pos < num_fields):
				url, pos = next_field(fields, pos)
			if (pos < num_fields):
				form, pos = next_field(fields, pos)
			if (pos < num_fields):
				painting_type, pos = next_field(fields, pos)
			if (pos < num_fields):
				school, pos = next_field(fields, pos)
			if (pos < num_fields):
				timeframe, pos = next_field(fields, pos)

			make_artist(artist_cache, name, dates, school, timeframe)
			make_art(art_cache, title, date, technique, location, url, form, painting_type, art_index)
			cascade_art(art_list, art_cache)
			art_cache = {}
			
		else:
			title = ""
			date = ""
			technique = ""
			location = ""
			url = ""
			form = ""
			painting_type = ""

			if (pos < num_fields):
				dates, pos = next_field(fields, pos)
			if (pos < num_fields):
				title, pos = next_field(fields, pos)
			if (pos < num_fields):
				date, pos = next_field(fields, pos)
			if (pos < num_fields):
				technique, pos = next_field(fields, pos)
			if (pos < num_fields):
				location, pos = next_field(fields, pos)
			if (pos < num_fields):
				url, pos = next_field(fields, pos)
			if (pos < num_fields):
				form, pos = next_field(fields, pos)
			if (pos < num_fields):
				painting_type, pos = next_field(fields, pos)
			if (pos < num_fields):
				school, pos = next_field(fields, pos)
			if (pos < num_fields):
				timeframe, pos = next_field(fields, pos)

			make_art(art_cache, title, date, technique, location, url, form, painting_type, art_index)
			cascade_art(art_list, art_cache)
			art_cache = {}
	art_index += 1

with open("../data/artists.json", "w") as outfile:  # SETS JSON FILE AS WRITE
	json.dump(parsed_data, outfile)  # DUMPS DATA TO JSON FILE
