from app.services.llm.llm_handlers import BaseLLM
import json
from rapidfuzz import process
from pydantic import BaseModel, Field


CATEGORIES = {
    "100 новых имен": "https://esimder.pushkinlibrary.kz/ru/100-novykh-imen.html?limit=0",
    "Писатели и поэты": "https://esimder.pushkinlibrary.kz/ru/pisateli-i-poety.html?limit=0",
    "Деятели Алаш": "https://esimder.pushkinlibrary.kz/ru/d-alash.html?limit=0",
    "Ученые и просветители": "https://esimder.pushkinlibrary.kz/ru/ushiteli.html?limit=0",
    "Почетные граждане": "https://esimder.pushkinlibrary.kz/ru/pochetnye-grazhdane.html?limit=0",
    "Медицинские работники": "https://esimder.pushkinlibrary.kz/ru/mediki.html?limit=0",
    "Батыры": "https://esimder.pushkinlibrary.kz/ru/zashchitniki-otechestva/batyry.html?limit=0",
    "Воины, погибшие в Афганистане (1979-1989)": "https://esimder.pushkinlibrary.kz/ru/zashchitniki-otechestva/augan-ru.html?limit=0",
    "Военнослужащие": "https://esimder.pushkinlibrary.kz/ru/zashchitniki-otechestva/generaly.html?limit=0",
    "Герои Советского Союза": "https://esimder.pushkinlibrary.kz/ru/zashchitniki-otechestva/geroi.html?limit=0",
    "Полные Кавалеры Ордена Славы": "https://esimder.pushkinlibrary.kz/ru/zashchitniki-otechestva/kavalery.html?limit=0",
    "Партизаны": "https://esimder.pushkinlibrary.kz/ru/zashchitniki-otechestva/partizany.html?limit=0",
    "Представленные к присвоению звания \"Героя Советского Союза\"": "https://esimder.pushkinlibrary.kz/ru/zashchitniki-otechestva/predstavlennye-k-prisvoeniyu-zvaniya-geroya-sovetskogo-soyuza.html?limit=0",
    "Ветераны Великой Отечественной войны": "https://esimder.pushkinlibrary.kz/ru/zashchitniki-otechestva/veterany-velikoj-otechestvennoj-vojny.html?limit=0",    
    "Участники декабрьских событий": "https://esimder.pushkinlibrary.kz/ru/uchastniki-dekabrskikh-sobytii.html?limit=0",
    "Государственные деятели": "https://esimder.pushkinlibrary.kz/ru/gos-dei.html?limit=0",
    "Исследователи края": "https://esimder.pushkinlibrary.kz/ru/issledovateli-kraya.html?limit=0",
    "Геологи": "https://esimder.pushkinlibrary.kz/ru/issledovateli-kraya/geologi.html?limit=0",
    "Библиотеки и музеи": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/biblioteki-i-muzej.html?limit=0",
    "Архитекторы": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/izobrazitelnoe-iskusstvo/arkhitektory.html?limit=0",
    "Декоративно-прикладное искусство": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/izobrazitelnoe-iskusstvo/dekorativno-prikladnoe-iskusstvo.html?limit=0",
    "Художники": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/izobrazitelnoe-iskusstvo/khudozhniki.html?limit=0",
    "Скульпторы": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/izobrazitelnoe-iskusstvo/skulptory.html?limit=0",
    "Фотографы": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/izobrazitelnoe-iskusstvo/fotografy.html?limit=0",
    "Исскуствоведение": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/izobrazitelnoe-iskusstvo/isskustvovedenie.html?limit=0",
    "Кино и ТВ": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/kino-i-tv.html?limit=0",
    "Режиссеры": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/kino-i-tv/rezhissery.html?limit=0",
    "Актеры": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/kino-i-tv/aktery.html?limit=0",
    "Дикторы": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/kino-i-tv/diktory.html?limit=0",
    "Театр": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/teatr.html?limit=0",
    "Музыка": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/muzyka.html?limit=0",
    "Композиторы": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/muzyka/kompozitory.html?limit=0",
    "Исполнители": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/muzyka/ispolniteli.html?limit=0",
    "Дирижеры": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/muzyka/dirizhery.html?limit=0",
    "Балет": "https://esimder.pushkinlibrary.kz/ru/deyateli-kulyura-iskusstva/khoreografiya/balet.html?limit=0",
    "Педагоги": "https://esimder.pushkinlibrary.kz/ru/pedagogi.html?limit=0",
    "Герои Социалистического труда": "https://esimder.pushkinlibrary.kz/ru/social-hero-ru.html?limit=0",
    "Спортсмены": "https://esimder.pushkinlibrary.kz/ru/sportsmeny.html?limit=0"
    }

class EsimderSearch:

    def __init__(self, file_path: str='knowledge_base/esimder.json'):
        with open(file_path, 'r', encoding='utf-8') as file:
            self.records = json.load(file)    
        self.bLLM = BaseLLM(llm_presets='high_performance')

        

    def get_search_type(self, text_query: str):
        
        class SearchTypeEsimder(BaseModel):
            search_type: str = Field(description="Сюда нужно будет поместить search_type (person, category, Null)")
            content: str = Field(description="Сюда передаешь очищенные параметры, к примеру если это был поиск по людям то просто полное фамилия имя отчество (если есть) без ничего больше, если категория то передаешь категорию, если Null то ничего не передаешь", default=None)

        categories_list = ", ".join(CATEGORIES.keys())

        system_prompt: str = (f"""твоя задача определить категорию, к которой относится запрос человека, всего может быть 3 исхода:
        1) person - Если человек интересуется каким-то отдельным человеком, к примеру Акулов В.И, или же расскажи о Абае, или что-то в таком духе.
        2) category - Если человек ищет какую-то категорию людей. ВАЖНО: всего могут быть вот такие категории:
        ({categories_list}). ВСЕГДА ВОЗВРАЩАЙ ТОЛЬКО ИЗ ЭТИХ КАТЕГОРИЙ.
        3) Null - Если человек не знает, что он ищет или же ты не можешь понять, что он хочет. ЕСЛИ НИЧЕГО ИЗ ВЫШЕ ПЕРЕЧИСЛЕННОГО ВОЗВРАЩАЙ ЭТО

        Вот примеры:
        Акулов В.И 

        person
        Акулов В.И 



        Привет как у тебя дела?
        Null

        Медики
        category
        Медицинские работники
        """)

        result = self.bLLM.send_request_pydantic(text_query=text_query, pydantic_object=SearchTypeEsimder, system_prompt=system_prompt)

        return result


    def category_search(self, category_name: str):
        """
        Функция для точного поиска по категориям.
        Возвращает имя категории и ссылку на неё, если найдено точное совпадение.
        """
        # Приведение строки к единому формату
        category_name = category_name.strip().capitalize()

        # Поиск в словаре категорий
        if category_name in CATEGORIES:
            return category_name, CATEGORIES[category_name]
        else:
            return "Категория не найдена", None

        


    def execute_fuzzy_search(self, search_type: str, search_type_content: str):


        with open('knowledge_base/esimder.json', 'r', encoding='utf-8') as file:
            data = json.load(file)

        if search_type == 'person':

            all_names = [record['full_name'] for record in data]

            matches = process.extract(search_type_content, all_names, limit=30)
        
            names = '\n'.join([match[0] for match in matches])

            return names


        elif search_type == 'category':
            
            return self.category_search(category_name=search_type_content)


        else:
            return 'Всегда попадает вот сюда'


    def find_target_object_with_llm(self, objects: str, text_query: str):
        return self.bLLM.send_request(f'ВЕРНИ ПРОСТО ОДНО САМОЕ ПОХОЖЕЕ ИМЯ ИЗ ТОГО ЧТО ГОВОРИТ ЧЕЛОВЕК НИЧЕГО НЕ ВЫВОДИ КРОМЕ ИМЕНИ \n ИМЕНА {objects}\nuser_input {text_query}').content

    def get_record(self, name: str):
        for record in self.records:
            if record.get('full_name') == name:
                return record
        return None
        
if __name__ == '__main__':
    eSearch = EsimderSearch()
    result = eSearch.get_search_type('Абдеева Я. Б.')

    print(result)