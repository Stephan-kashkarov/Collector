# MODULE IMPORTS
import json
import os.path
import urllib.request
import requests
import lxml
from lxml import etree
from lxml import html

# VARIABLE DEFINITION
x = 0
index = 0
parsed_data = []
artist_cache = {}
art_cache = {}
art_list = []
last_name = ""

def cascade_art(art_list, art_cache):
	art_list.append(art_cache)  # APPEND DICTIONARY OF ARTWORK TO LIST


def cascade_all(artist_cache, parsed_data, art_cache, art_list):
	# cascade_art(art_list, art_cache)  # APPEND THE LAST ARTWORK
	if len(art_list) > 0:
		artist_cache["art"] = art_list  # ADDS ART LIST AS A ATTRIBUTE OF THE ARTIST
		parsed_data.append(artist_cache)  # ADDS THE ARTIST TO THE FINAL LIST


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


def make_art(art_cache, title, date, technique, location, url, form, painting_type, index, img):
	art_cache["title"] = title
	art_cache["date"] = date
	art_cache["technique"] = technique
	art_cache["location"] = location
	art_cache["url"] = url
	art_cache["form"] = form
	art_cache["painting_type"] = painting_type
	art_cache["index"] = index
	art_cache["author"] = name
	art_cache["img"] = img

def scrape_img(url, name):
	filename1 = "../main/imgs/art/" + name + ".jpg"
	filename2= "imgs/art/" + name + ".jpg"
	if os.path.isfile(filename1):
		print("filename exists")
	else:
		print("file dosnet exist")
		try:
			site = urllib.request.urlopen(url).read()
			xhtml = lxml.html.document_fromstring(site)
			print("Making:", filename1)
			img = xhtml.xpath("//body//table[@cellpadding=5]//a/@href")
			imgurl = "https://www.wga.hu" + img[0]
			urllib.request.urlretrieve(imgurl, filename1)
		except:
			pass
	return filename2

art_index = 0
with open('../data/artist_lite.csv', newline='\n', encoding='utf-8') as f:
	data = f.read()
	lines = data.split('\r\n')

for line in lines:
	if art_index > 0:
		fields = line.split(',')
		num_fields = len(fields)
		pos = 0
		name, pos = next_field(fields, pos)
		if len(name) == 0:
			art_index += 1
			continue
		if name != last_name:
			print("making a new profile for artist:", name)
			cascade_all(artist_cache, parsed_data, art_cache, art_list)
			last_name = name
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

			index += 1

			fname = str(index)
			print("Scraping", name +"'s image from", url)
			img = scrape_img(url, fname)

			make_artist(artist_cache, name, dates, school, timeframe)
			make_art(art_cache, title, date, technique, location, url, form, painting_type, art_index, img)
			cascade_art(art_list, art_cache)
			art_cache = {}

		else:
			# print("adding to " + name + "'s profile")
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

			index += 1

			fname = str(index)
			img = scrape_img(url, fname)

			cascade_art(art_list, art_cache)
			make_art(art_cache, title, date, technique, location, url, form, painting_type, art_index, img)

			art_cache = {}
	art_index += 1

# Saving the last artist data
if len(artist_cache) > 0:
	cascade_all(artist_cache, parsed_data, art_cache, art_list)

print("Creating artists-master.json")
with open("../data/artists-master.json", "w") as outfile:  # SETS JSON FILE AS WRITE
	json.dump(parsed_data, outfile, indent=4)  # DUMPS DATA TO JSON FILE

name_dict = {}
name_index = 0
for name in parsed_data:
	print("creating file number " + str(name_index) + " for:", name['name'])
	name_index += 1
	filename = name['name'].replace(" ", "-").replace('.', '').lower()
	filename = filename + ".json"
	url = "../main/database/artists/" + filename
	name_dict[name_index] = [name["name"], name["school"], name["timeframe"], url[8:]]
	with open(url, "w") as file:
		json.dump(name, file, indent = 4)

with open("../main/database/artists.json", "w") as outfile:  # SETS JSON FILE AS WRITE
	json.dump(name_dict, outfile, indent=4)  # DUMPS DATA TO JSON FILE
