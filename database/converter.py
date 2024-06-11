from enum import Enum
import os
from typing import List


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


class Converter:
    none = "Null"
    lst_keyL = list(KeyL)

    symbols = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&apos;"
    }

    def __init__(self, type_file: str = 'txt', file_name: str = "output", file_input: str = "booktest.xml",
                 limit_book: int = -1):
        self.type_file = type_file
        if file_name.find(".") == -1:
            self.file_name = f'{file_name}.{type_file}'
        else:
            self.file_name = file_name
        self.file_input = file_input
        self.limit_book = limit_book

    def convert_format_txt(self, s: dict) -> str:
        return "|".join([f"{i}: {s.get(i, self.none)}" for i in self.lst_keyL])

    def convert_format_json(self, s):
        result = []
        for i in self.lst_keyL:
            result.append(f'\t\t"{i}": "{s.get(i, self.none)}"')
        return '\t{\n' + ',\n'.join(result) + '\n\t}'

    def get_dict(self, s):
        result = {}

        # if s.get(KeyL.title, self.none) == self.none:
        #     return ""

        for i in self.lst_keyL:
            result[i] = self.replace_symbols(s.get(i, self.none))
        return result

    def replace_symbols(self, text: str):
        for i, k in self.symbols.items():
            text = text.replace(i, k)
        return text

    @staticmethod
    def get_text(s, *r) -> str:
        result = s.replace("\n", "")
        for i in r:
            result = result.replace(i, "")
        return result

    def read_irbis(self) -> List[dict]:
        result = []
        with open(self.file_input, mode='r+', encoding='utf8', errors="ignore") as file_read:
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
                    if count_book > self.limit_book > 0:
                        break
                    print(f"Книга #{count_book}")
                    result.append(self.get_dict(subfield))
                    subfield = dict()
                else:

                    if 102 == tag:
                        subfield[KeyL.lang] = self.get_text(content, '<field tag="102">')

                    if 101 == tag:
                        subfield[KeyL.country] = self.get_text(content, '<field tag="101">')
                    if 200 == tag:
                        if 'code="A"' in content:
                            title = self.get_text(content, '<subfield code="A">', '</subfield>')
                            subfield[KeyL.title] = title
                        elif 'code="F"' in content:
                            author = self.get_text(content, '<subfield code="F">', '</subfield>')
                            subfield[KeyL.author] = author
                    if 331 == tag:
                        subfield[KeyL.description] = content.replace('<field tag="101">', "").replace('\n', '')
                    if 610 == tag and not content.startswith("<field"):
                        subfield[KeyL.keywords] = subfield.get(KeyL.keywords, "") + self.get_text(content,
                                                                                                  '<field tag="610">') + ", "

            print(f"Всего книг:{len(result)}")
            return result

    def export_txt(self):
        data = self.read_irbis()
        write_text: List[str] = []
        for i in data:
            if i:
                write_text.append(self.convert_format_txt(i))
        self.save('\n'.join(write_text))

    def export_json(self, ):
        data = self.read_irbis()
        result = []
        for i in data:
            if i:
                result.append(f'{self.convert_format_json(i)}')
        write_text = "[\n" + ',\n'.join(result) + '\n]'
        self.save(write_text)

    def save(self, write_text: str):
        with open(self.file_name, 'a+', encoding='utf8', errors="ignore") as file_write:
            file_write.write(write_text)


def start_settings():
    type_file = input('Введите тип файла: json, txt (default: txt) >> ')
    if type_file != 'json':
        type_file = 'txt'
    file_name = input(f'Введите название файла (default: output_books.{type_file}) >> ')
    if not file_name:
        file_name = f'output_books.{type_file}'
    file_input = input('Введите название файла (default: booktest.xml) >> ')
    file_input = r'C:\Users\Riffaells\Downloads\kz.xml'
    if not file_input:
        file_input = 'booktest.xml'
    limit_book = input('Ограничить число книг? (default: -1 (нет)) >> ')
    if not limit_book:
        limit_book = -1
    else:
        limit_book = int(limit_book)

    return type_file, file_name, file_input, limit_book


def parsing():
    pass


if __name__ == '__main__':
    type_file, output_file, input_file, limit_book = start_settings()

    c = Converter(type_file, output_file, input_file, limit_book)
    c.export_txt()
