import json
import re
import time
from pathlib import Path
from tqdm import tqdm

from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import JsonOutputParser
from pydantic import Field, BaseModel
from langchain_core.prompts import ChatPromptTemplate

class Legend(BaseModel):
    legend_url: str = Field(description="Ссылка на легенду")
    keywords: str = Field(description="Ключевые слова легенды 20 штук")
    content: str = Field(description="Полный текст легенды")
    title: str = Field(description="название легенды")
    file_name: str = Field(description="Название для файла, не должно содержать никаких символов кроме букв английского алфавита")

class ParseLegends:

    def __init__(self, legends_path: str = "knowledgebase/anyz.kz/data.txt"):
        self.legends_path = legends_path
        self._model = ChatGoogleGenerativeAI(model="gemini-1.5-flash")
        
    def ai_query(self, user_message: str):
        prompt = ChatPromptTemplate([
            ("system", """
             Внимательно прочитай текст и выполни следующие действия:

            1. **Извлеки ссылку на легенду.** Ссылка находится в конце текста после "URL:". 
            2. **извлекай название легенды.** 
            3. **Извлеки контент.** 
            4. **Извлеки 20 НАИБОЛЕЕ ПОДХОДЯЩИХ ключевых слов.** Ключевые слова должны быть релевантными содержанию легенды и подходить для поиска с помощью RAG-системы.
            5. **Сгенерируй название легенды на основе содержания.** Оно должно быть кратким, ёмким и привлекательным.
            6. Так же дай file_name, английские буквы и ничего более.
            Formatting Instructions: {format_instructions}"""),
            ("human", "{phrase}")
        ])
        
        parser = JsonOutputParser(pydantic_object=Legend)
        
        chain = prompt | self._model | parser
        
        return chain.invoke({
            "phrase": user_message,
            "format_instructions": parser.get_format_instructions()
        })
        
    def parse_and_save(self):
        # Получаем общее количество легенд
        total_legends = self.get_file_length()
        processed_legends = 0

        with open(self.legends_path, "r", encoding="utf-8") as f:
            # Используем tqdm для отображения прогресса
            for line in tqdm(f, total=total_legends, desc="Обработка легенд"):  
                try:
                    data = json.loads(line)
                    content = data["content"]

                    start_time = time.time()  # Засекаем время начала обработки
                    llm_result = self.ai_query(content)  # Получаем результат от LLM
                    end_time = time.time()  # Засекаем время окончания обработки

                    # Создаем объект Legend из результата LLM
                    legend = Legend(**llm_result)

                    # Очистка имени файла от недопустимых символов
                    file_name_clean = re.sub(r'[\\/*?:"<>|]', "", legend.file_name)
                    file_path = Path(self.legends_path).parent / f"{file_name_clean}.txt"

                    # Сохранение легенды в файл
                    with open(file_path, "w", encoding="utf-8") as outfile:
                        outfile.write(f"{legend.legend_url}\n")
                        outfile.write(f"Название: {legend.title}\n")  # Используем file_name как название
                        outfile.write(f"Ключевые слова: {legend.keywords}\n")
                        outfile.write("Содержание: \n\n")
                        outfile.write(legend.content)

                    processed_legends += 1
                    remaining_legends = total_legends - processed_legends
                    processing_time = round(end_time - start_time, 2)

                    print(
                        f"Легенда '{legend.title}' сохранена в файл {file_path}. "
                        f"Время обработки: {processing_time} сек. "
                        f"Осталось: {remaining_legends} легенд."
                    )

                    time.sleep(6)

                except Exception as e:
                    print(f"Ошибка: {e}")

    def get_file_length(self):
        with open(self.legends_path, "r", encoding="utf-8") as f:
            return sum(1 for _ in f)


if __name__ == "__main__":
    load_dotenv()
    parser = ParseLegends()
    parser.parse_and_save()
