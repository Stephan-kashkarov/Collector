import json
import csv
x = 0
parsed_data = {}
artist_cache = {}
art_cache = {}
last_name = ""
current_name = ""

def cascade_art():
	artist_cache["art"] = art_cache

def cascade_all(last_name, line):
	cascade_art()
	parsed_data[last_name] = artist_cache
	art_cache = {}
	artist_cache = {}

def artist_profile(line):
	artist_cache["last_name"] = line[0][1:]
	artist_cache["first_name"] = line[1][1:-1]
	artist_cache["born"] = [line[3][1:], line[2][5:]]
	artist_cache["died"] = [line[5][1:-2], line[4][3:]]
	artist_cache["school"] = line[-2]
	art_profile(line)

def art_profile(line):
	art_cache["piece"] = line[6]
	art_cache["date"] = line[7]
	art_cache["technique"] = line[8][1:] + line[9][:-1]
	art_cache["location"] = line[10][1:] + line[11][:-1]
	art_cache["url"] = line[12]
	art_cache["type"] = line[13]
	art_cache["theme"] = line[14]


with open("../data/artistcsvdata.csv", newline="") as data:
	linereader = csv.reader(data, delimiter=",", quotechar="|")
	for line in linereader:
		print(x)
		if x > 0:
			if last_name == "":
				last_name = line[0][1:], line[1][1:-1]
			current_name = line[0][1:], line[1][1:-1]
			if current_name != last_name:
				current_name = last_name
				cascade_all(last_name, line)
				artist_profile(line)
				art_profile(line)
				cascade_art()
			else:
				art_profile(line)
				cascade_art()

		if x == 20:
			break
		else:
			x+= 1

print(parsed_data)
