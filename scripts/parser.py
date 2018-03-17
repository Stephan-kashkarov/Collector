import json
import csv
from parser_functions import *
x = 0
parsed_data = {}
artist_cache = {}
art_cache = []
last_name = ""
current_name = ""
with open("../data/artistcsvdata.csv", newline="") as data:
	linereader = csv.reader(data, delimiter=",", quotechar="|")
	for row in linereader:
		if x == 1:
			line = row
			break
		else:
			x+= 1
print(line[-2])
"""
print(line[0][1:])
print(line[1][1:-1])
"""
if last_name == "":
	last_name = line[0][1:], line[1][1:-1]
current_name = line[0][1:], line[1][1:-1]
if current_name != last_name:
	current_name = last_name
	cascade(last_name, line)
	artist_profile(line)
	art_profile(line)
