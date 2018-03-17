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
        artist_cache["last_name"] = line[0][1:]
        artist_cache["first_name"] = line[1][1:-1]
        artist_cache["born"] = [line[3][1:], line[2][5:]]
        artist_cache["died"] = [line[5][1:-2], line[4][3:]]
        artist_cache["school"] = line[-2]
        art_profile(line, art_cache)
    except:  # IF ERROR ARTIST IS ADDED TO THE UNFORMATTED BLACKLIST
        black_list.append(last_name)


# CREATES A DICTIONARY FOR THE SPECIFIC WORK OF ART
def art_profile(line, art_cache):
    try:  # RUNS EXEPTION FOR INDEX ERROR
        # ALL OF THE DATA IS SEPARATED INTO CATAGORIES
        art_cache["piece"] = line[6]
        art_cache["date"] = line[7]
        art_cache["technique"] = line[8][1:] + line[9][:-1]
        art_cache["location"] = line[10][1:] + line[11][:-1]
        art_cache["url"] = line[12]
        art_cache["type"] = line[13]
        art_cache["theme"] = line[14]
    except:  # IF ERROR ARTIST IS ADDED TO THE UNFORMATTED BLACKLIST
        black_list.append(last_name)


with open("../data/artist.tsv", "r") as data:
    for line in csv.reader(data, dialect="excel-tab"):
        if x != 1:
            print(line)
            for data in line:
                data = data.split("\t")
                if x == 10:
                    break
                else:
                    x += 1
                # if last_name == "":
                #     last_name
                #

print(data)
