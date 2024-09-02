import json
from typing import List
from aiohttp import ClientSession
from playwright.async_api import async_playwright
from links import anyz_links
from bs4 import BeautifulSoup


class AnyzLegendParser:

    async def _get_all_legend_links(self,
                                    class_for_search: str = "elementor-cta__button elementor-button elementor-size-sm") -> \
            List[str]:
        async with ClientSession() as session:
            async with session.get(anyz_links['ANYZ_LEGEND_LINK']) as response:
                if response.status != 200:
                    raise ValueError(f"Не удалось получить данные с URL: {anyz_links['ANYZ_LEGEND_LINK']}")
                html = await response.text()

        # Парсим HTML-код с помощью BeautifulSoup
        soup = BeautifulSoup(html, 'html.parser')

        # Ищем все теги <a> с указанным классом
        links = soup.find_all('a', class_=class_for_search)

        # Извлекаем значения атрибутов href
        hrefs = [link.get('href') for link in links if link.get('href')]

        return hrefs

    async def _extract_text_from_legend(self, legend_link: str,
                                        class_for_div: str = "elementor-widget-wrap elementor-element-populated") -> str:
        async with async_playwright() as p:
            browser = await p.chromium.launch(
                headless=False)  # Можно использовать .launch(headless=False) для отображения браузера
            page = await browser.new_page()
            await page.goto(legend_link)

            # Используем CSS-селектор для выбора нужного элемента
            div_selector = 'div.elementor-widget-wrap.elementor-element-populated'

            # Извлекаем все элементы <p> внутри выбранного <div>
            p_elements = await page.query_selector_all(f'{div_selector} p')

            # Перебираем все элементы <p> и собираем их текст
            content_list = [await p_element.inner_text() for p_element in p_elements]

            await browser.close()
            print(f'Сайт {legend_link} успешно обработан.')
            # Объединяем все тексты в одну строку
            return "\n".join(content_list)

    async def run_parser(self, save_method: str = 'jsonl', **kwargs):
        links: List[str] = await self._get_all_legend_links()
        all_contents = []
        f = 1
        for link in links:
            try:
                print(f)
                content = await self._extract_text_from_legend(link)
                all_contents.append({"content": content + f" URL: {link}"})
                f += 1
            except Exception as e:
                print("Error")

        # Сохранение в формате JSON Lines (JSONL)
        if save_method == 'jsonl':
            with open('output.jsonl', 'w', encoding='utf-8') as f:
                for item in all_contents:
                    f.write(json.dumps(item, ensure_ascii=False) + '\n')
