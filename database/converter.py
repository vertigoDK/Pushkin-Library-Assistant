from enum import Enum
import os


class KeyL(Enum):
    lang = "lang",
    country = "country",
    title = "title",
    author = "author",
    description = "description",
    keywords = "keywords"

    def __str__(self):
        return str(self.name)

    def __repr__(self):
        return str(self)


none = "Null"
lst_keyL = list(KeyL)


def get_format_txt(s):
    result = []
    for j in s:

        for i in lst_keyL:
            result.append(f"{i}: {j.get(i, none)}")
    return result


def get_format_json(s):
    result = []

    for i in lst_keyL:
        result.append(f'\t\t"{i}": "{s.get(i, none)}"')
    return '\t{\n' + ',\n'.join(result) + '\n\t}'


def get_dict(s):
    result = {}

    if s.get(KeyL.title, none) == none:
        return ""

    for i in lst_keyL:
        result[i] = s.get(i, none)
    return result


def get_text(s, *r) -> str:
    result = s.replace("\n", "")
    for i in r:
        result = result.replace(i, "")
    return result


def read_irbis(path: str, limit_book: int):
    print(path)
    result = []
    with open(path, mode='r+', encoding='utf8', errors="ignore") as file_read:
        subfield = dict()
        tag = -1
        count_book = 0
        for i in file_read.readlines():
            content = " ".join(i.strip("\n").strip().split(' '))
            if content.startswith("<field"):
                tag = int("".join(
                    i if i.isdigit() else "" for i in list(content[content.index("<"): content.index(">")])))
            elif content.startswith("</field"):
                tag = -1
            elif content.startswith("</record>"):
                count_book += 1
                if count_book > limit_book > 0:
                    break
                print(f"Книга #{count_book}")
                result.append(get_dict(subfield))
                subfield = dict()
            else:

                if 102 == tag:
                    subfield[KeyL.lang] = get_text(content, '<field tag="102">')

                if 101 == tag:
                    subfield[KeyL.country] = get_text(content, '<field tag="101">')
                if 200 == tag:
                    if 'code="A"' in content:
                        title = get_text(content, '<subfield code="A">', '</subfield>')
                        subfield[KeyL.title] = title
                    elif 'code="F"' in content:
                        author = get_text(content, '<subfield code="F">', '</subfield>')
                        subfield[KeyL.author] = author
                if 331 == tag:
                    subfield[KeyL.description] = content.replace('<field tag="101">', "").replace('\n', '')
                if 610 == tag and not content.startswith("<field"):
                    subfield[KeyL.keywords] = subfield.get(KeyL.keywords, "") + get_text(content,
                                                                                         '<field tag="610">') + ", "

        print(len(result))
        return result


def export_txt(file_output: str, file_input: str, limit_book):
    data = read_irbis(file_input, limit_book)
    write_text = []
    for i in data:
        if i:
            write_text.append(f'{",".join(get_format_txt(data))}')
    with open(file_output, 'w+', encoding='utf8', errors="ignore") as file_write:
        file_write.write('\n'.join(write_text))


def export_json(file_output: str, file_input: str, limit_book):
    data = read_irbis(file_input, limit_book)
    result = []
    for i in data:
        if i:
            result.append(f'{get_format_json(i)}')
    write_text = "[\n" + ',\n'.join(result) + '\n]'
    with open(file_output, 'w+', encoding='utf8', errors="ignore") as file_write:
        file_write.write(write_text)


def start_settings():
    type_file = input('Введите тип файла: json, txt (default: json) >> ')
    if type_file != 'txt':
        type_file = 'json'
    file_name = input(f'Введите название файла (default: output_books.{type_file}) >> ')
    if not file_name:
        file_name = f'output_books.{type_file}'
    file_input = input('Введите название файла (default: booktest.xml) >> ')
    if not file_input:
        file_input = 'booktest.xml'

    limit_book = input('Ограничить число книг? (default: -1 (нет)) >> ')
    if not limit_book:
        limit_book = -1
    else:
        limit_book = int(limit_book)

    return type_file, file_name, file_input, limit_book


if __name__ == '__main__':
    type_file, output_file, input_file, limit_book = start_settings()
    if type_file == 'json':
        export_json(output_file, input_file, limit_book)
    else:
        export_txt(output_file, input_file, limit_book)
