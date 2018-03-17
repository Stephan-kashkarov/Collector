# MODULE IMPORTS
import json
import csv

# VARIABLE DEFINITION
x = 0
parsed_data = {}
artist_cache = {}
art_cache = {}
art_list = []
last_name = ""
current_name = ""
black_list = []

# ADD ART PEICE TO THE LIST OF ART
def cascade_art(art_list, art_cache):
	art_list.append(art_cache) # APPEND DICTIONARY OF ARTWORK TO LIST
	art_cache = {} # CLEARS ART CACHE BEFORE IT GETS FILLED AGAIN

# PUT EVERYTHING TOGETHER AND ADD IT TO PARSED DATA
def cascade_all(last_name, line, artist_cache, parsed_data, art_cache, art_list):
	cascade_art(art_list, art_cache) # APPEND THE LAST ARTWORK
	artist_cache["art"] = art_list # ADDS ART LIST AS A ATTRIBUTE OF THE ARTIST
	parsed_data[last_name] = artist_cache # ADDS THE ARTIST TO THE FINAL LIST
	# CLEARING OF ALL CACHES
	# print("Art Cache:", art_cache)
	# print("Artist Cache:", artist_cache)
	# print("Art list:", art_list)
	art_cache = {}
	artist_cache = {}
	art_list = []

# CREATES THE ARTIST'S PROFILE EXCULDING ART
def artist_profile(line, artist_cache, last_name):
	try: # RUNS EXEPTION FOR INDEX ERROR
		# ALL OF THE DATA IS SEPARATED INTO CATEGORIES
		artist_cache["last_name"] = line[0][1:]
		artist_cache["first_name"] = line[1][1:-1]
		artist_cache["born"] = [line[3][1:], line[2][5:]]
		artist_cache["died"] = [line[5][1:-2], line[4][3:]]
		artist_cache["school"] = line[-2]
		art_profile(line, art_cache)
	except: # IF ERROR ARTIST IS ADDED TO THE UNFORMATTED BLACKLIST
		black_list.append(last_name)

# CREATES A DICTIONARY FOR THE SPECIFIC WORK OF ART
def art_profile(line, art_cache):
	try: # RUNS EXEPTION FOR INDEX ERROR
		# ALL OF THE DATA IS SEPARATED INTO CATAGORIES
		art_cache["piece"] = line[6]
		art_cache["date"] = line[7]
		art_cache["technique"] = line[8][1:] + line[9][:-1]
		art_cache["location"] = line[10][1:] + line[11][:-1]
		art_cache["url"] = line[12]
		art_cache["type"] = line[13]
		art_cache["theme"] = line[14]
	except: # IF ERROR ARTIST IS ADDED TO THE UNFORMATTED BLACKLIST
		black_list.append(last_name)

#MAIN LOOP
with open("../data/artistcsvdata.csv", newline="") as data: # OPENS THE CSV FILE
	linereader = csv.reader(data, delimiter=",", quotechar="|") # FORMATS THE CSV FILE
	for line in linereader: # LOOPS THROUGH CSV FILE
		print(x)
		if x == 420:
			break
		if last_name == "": # FIRST LOOP CHECK
			last_name = line[0][1:]+ " " + line[1][1:-1] # LAST NAME DEFINED
		current_name = line[0][1:]+ " " + line[1][1:-1] # FIRST NAME DEFINED
		if current_name != last_name: # CHECKS FOR NEW AUTHOR
			if current_name not in black_list: #CHECKS FOR BLACKLIST
				old_name = last_name # STORES OLD LAST NAME
				last_name = current_name # CHANGES LAST ARTIST
				cascade_all(last_name, line, artist_cache, parsed_data, art_cache, art_list) # WHIPES CACHE
				if artist_cache != {} or art_cache != {} or art_list != []:
					artist_cache = {}
					art_cache = {}
					art_list = []
				artist_profile(line, artist_cache, last_name) # MAKES AN ARTIST PROFILE
				if last_name not in black_list: # CHECKS IF ARTIST PROFILE TRIGGERED INDEX ERROR
					art_profile(line, art_cache) # MAKES A POST FOR CURRENT ART
					if last_name not in black_list: # CHECKS IF ARTIST PROFILE TRIGGERED INDEX ERROR
						cascade_art(art_list, art_cache) # ADDS THAT PIECE TO LIST
						if artist_cache != {} or art_cache != {} or art_list != []:
							art_cache = {}
					else: # SKIPS BLACKLISTED AUTHOR
						last_name = old_name
				else: # SKIPS BLACKLISTED AUTHOR
					last_name = old_name
		else: # IF SAME USER AS LAST TIME
			art_profile(line, art_cache) # MAKES AN ART PROFILE
			cascade_art(art_list, art_cache) # COMMITS IT TO LIST
			if artist_cache != {} or art_cache != {} or art_list != []:
				art_cache = {}
		x += 1

with open("../data/artists.json", "w") as outfile: # SETS JSON FILE AS WRITE
	json.dump(parsed_data, outfile) # DUMPS DATA TO JSON FILE
