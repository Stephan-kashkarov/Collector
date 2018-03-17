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

writer = open('../data/processed.txt', 'w')
artist_index = 0
with open('../data/artistcsvdata.csv', newline='\n', encoding='utf-8') as f:
    data = f.read()
    lines = data.split('\n')

for line in lines:
    fields = line.split(',')
    num_fields=len(fields) 
    pos=0
    name, pos = next_field(fields, pos)
    if len(name) == 0:
        continue

    artist_index += 1
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

    # Extracted artist's name
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

    info = "INDEX: " + str(artist_index) + "\n\tARTIST: " + name + "\n\tBORN-DIED: " + dates + "\n\tTITLE: " + title + "\n\tDATE: " + date + "\n\tTECHNIQUE: " + technique + "\n\tLOCATION: " + location + "\n\tURL: " + url + "\n\tFORM: " + form + "\n\tTYPE: " + painting_type + "\n\tSCHOOL:" + school + "\n\tTIMEFRAME: " + timeframe
    writer.write(info)
    print(info)