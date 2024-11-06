import json
import os
from typing import Dict


def convert_json_to_txt(json_file_path, txt_file_path):
    # Открываем и читаем JSON-файл
    with open(json_file_path, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)
    s = dict()

    s.values()

    texxt = ""
    for i in data:
        for k, v in i.items():
            texxt += f"{k}:{v}\n"
    else:
        texxt += "\n"

    with open(txt_file_path, 'w', encoding='utf-8') as txt_file:
        txt_file.write(texxt)


def main():
    json_s = os.listdir(os.path.join(os.getcwd(), 'json'))
    for i in json_s:
        convert_json_to_txt(f"json/{i}", rf"txt/{i}.txt")


if __name__ == '__main__':
    main()
