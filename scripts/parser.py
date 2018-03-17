import json
import csv
x = 0
parsed_data = {}
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
"""
print(line[0][1:])
print(line[1][1:-1])
"""
last_name = line[0][1:], line[1][1:-1]
current_name = line[0][1:], line[1]{1:-1}
