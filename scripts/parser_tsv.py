# MODULE IMPORTS
import json
#import csv
import unicodecsv as csv
#from io import BytesIO

# VARIABLE DEFINITION
x = 0
parsed_data = {}
artist_cache = {}
art_cache = {}
art_list = []
last_name = ""
current_name = ""
black_list = []

def cascade_art(art_list, art_cache):
	art_list.append(art_cache)  # APPEND DICTIONARY OF ARTWORK TO LIST
	art_cache = {}  # CLEARS ART CACHE BEFORE IT GETS FILLED AGAIN


# PUT EVERYTHING TOGETHER AND ADD IT TO PARSED DATA
def cascade_all(last_name, line, artist_cache, parsed_data, art_cache,
				art_list):
	cascade_art(art_list, art_cache)  # APPEND THE LAST ARTWORK
	artist_cache[
		"art"] = art_list  # ADDS ART LIST AS A ATTRIBUTE OF THE ARTIST
	parsed_data[last_name] = artist_cache  # ADDS THE ARTIST TO THE FINAL LIST
	# CLEARING OF ALL CACHES
	# print("Art Cache:", art_cache)
	# print("Artist Cache:", artist_cache)
	# print("Art list:", art_list)
	art_cache = {}
	artist_cache = {}
	art_list = []


# CREATES THE ARTIST'S PROFILE EXCULDING ART
def artist_profile(line, artist_cache, last_name):
	try:  # RUNS EXEPTION FOR INDEX ERROR
		# ALL OF THE DATA IS SEPARATED INTO CATEGORIES
		artist_cache["name"] = line[0]
		artist_cache["life"] = line[1]
		artist_cache["school"] = line[9]
		art_profile(line, art_cache)
	except:  # IF ERROR ARTIST IS ADDED TO THE UNFORMATTED BLACKLIST
		black_list.append(last_name)


# CREATES A DICTIONARY FOR THE SPECIFIC WORK OF ART
def art_profile(line, art_cache):
	try:  # RUNS EXEPTION FOR INDEX ERROR
		# ALL OF THE DATA IS SEPARATED INTO CATAGORIES
		art_cache["title"] = line[2]
		art_cache["date"] = line[3]
		art_cache["technique"] = line[4]
		artist_cache["location"] = line[5]
		artist_cache["url"] = line[6]
		art_cache["form"] = line[7]
		art_cache["type"] = line[8]
	except:  # IF ERROR ARTIST IS ADDED TO THE UNFORMATTED BLACKLIST
		black_list.append(last_name)

with open('../data/artist.tsv', newline='', encoding='utf-8') as f:
	r = csv.reader(f, dialect="excel-tab")
	for line in r:
		if x != 0:
			print(line)
			break
			x += 1
			current_name = line[0] + line[1]
			if last_name == "":
				current_name = last_name
			if current_name != last_name:
				cascade_all(last_name, line, artist_cache, parsed_data, art_cache)
				artist_profile(line, artist_cache, last_name)
			else:
				cascade_art(art_list, art_cache)
				art_profile(line, art_cache)

with open("../data/artists.json", "w") as outfile:  # SETS JSON FILE AS WRITE
	json.dump(parsed_data, outfile)  # DUMPS DATA TO JSON FILE
