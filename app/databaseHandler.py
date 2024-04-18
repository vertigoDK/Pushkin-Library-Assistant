import re

class DataBaseParser: #Класс превращающий путь к базе данных (.txt , ...) в текст разбитый на чанки 

    def __init__(self, data_base_path: str):
        self.__data_base_path = data_base_path #Инициализация пути к базе данных

    def load_text(self): #Чтение текста из файла
        with open(self.__data_base_path, 'r', encoding='utf-8') as file:
            text = file.read()
        return text

    def split_text(self, text: str): #Расспличивание самого текста
        split_text = re.split('\n \n', text)
        return [i for i in split_text if i != ""]
    
    