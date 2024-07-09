import requests
from bs4 import BeautifulSoup


def write(data: list):
    with open('new/sacred-geography-of-east-kazakhstan-region.txt', 'w', encoding='utf-8') as file:
        text = "---\n".join(data)
        file.write(text)


url_link = 'https://olketanu.pushkinlibrary.kz/index.php/ru/sakralnaya-geografiya-vostochniy-qazaqstan/ashutas.html'
base_url = 'https://olketanu.pushkinlibrary.kz'
ter = 'Сакральная география ВКО'


def get_links() -> list:
    re = requests.get(url_link)

    soup = BeautifulSoup(re.text, 'html.parser')

    links = soup.find('dd', attrs={'class': 'level1 off-nav-1554 parent opened'})
    print(len(links.findAll('a')))
    return [i.get('href') for i in links.findAll('a')]


def get_parse(url: str, ter=ter) -> str:
    re = requests.get(url=url)
    if re.status_code != 200:
        return ""

    soup = BeautifulSoup(re.content, 'html.parser', )
    text = soup.find('div', attrs={'class', 'dd-article'}).text
    if not text:
        return ""
    text = " ".join(text.replace('\n', ' ').replace('\t', ' ').replace('"', '').split())
    text = text[:text.find('____')]
    content = f"""
url:{url}",
text:{ter} {text}" 
"""

    return content


def main():
    lst = get_links()

    texts = []
    for j, i in enumerate(lst):
        url = base_url + i
        print(f'{j + 1}/{len(lst)} {url}')
        texts.append(get_parse(url))
    write(texts)


def one_file(url, ter=''):
    re = requests.get(url=url)
    if re.status_code != 200:
        return ""

    soup = BeautifulSoup(re.content, 'html.parser', )
    text = soup.find('div', attrs={'class', 'dd-article'}).find('table').find_all('tr')
    s = []
    for i in text:
        t = " ".join(i.text.split()).replace('\n', ' ').replace('\t', ' ').replace('"', '')
        s.append(f"""
url:{url},
text:{ter} {t}
""")

    write(s)


def vko():
    s = """"""
    #     lst = []
    #     for i in s.split('\n'):
    #         print(i)
    #         if not i or i.find('-') == -1:
    #             continue
    #
    #         text, url = i.split(' -')
    #         t = text.strip()
    #         url = url.strip()
    #         lst.append(f"""
    # url:{url},
    # text:Культура и искусство ВКО {t}
    # """)
    t = ' '.join(s.replace('\n', '').split())
    write([f"""
# url:https://olketanu.pushkinlibrary.kz/index.php/ru/priroda/priroda.html,
# text:{t}
# """])


if __name__ == '__main__':
    # one_file('https://olketanu.pushkinlibrary.kz/index.php/ru/priroda/unikalnye-mesta.html', 'Уникальный Восточный Казахстан')

    s= """Скульптура 'Желтоксан алауы' Нурбол Калиев
Памятник Сагадату Нурмагамбетову - Нурбол Калиев и Сарсен Сеитов, открыт 11 сентября 2022 года. Герою Советского Союза.
Монумент ликвидаторам последствий аварии на Чернобыльской АЭС - автор Евгений Гайсин, открыт 27 апреля 2022 года.
Монумент Независимости - Сарсен Сеитов и Нурбол Калиев, открыт 11 декабря 2021 года.
Памятник Оралхану Бокею - Нурбол Калиев и Мейрам Баймуханов, открыт 22 сентября 2021 года.
Памятник Жамбылу Жабаеву - Сарсен Сеитов и Казыбек Дулатов, открыт 14 ноября 2019 года.
Стела «Нурлы жол» - концепция разработана в Астане, открыта в 2017 году.
Памятник Мусе Джалилю - автор Махмут Гасимов, открыт 20 июня 2015 года.
Памятник Багдату Шаяхметову - открыт 18 июля 2014 года.
Памятник Кабанбай батыру - скульптор Нурлан Далбай, открыт 8 мая 2014 года.
Памятник Ахату Куленову - автор Евгений Непьянов, открыт 15 сентября 2013 года.
Памятник Александру Протозанову - автор Владимир Самойлов, открыт 14 сентября 2013 года.
Памятник паровозу - установлен на станции Защита, открыт в августе 2013 года.
Памятник Ефиму Славскому - скульпторы Хамитби Кульчаев и Александр Лягин, открыт 25 августа 2011 года.
Памятник Касыму Кайсенову - автор Владимир Самойлов, открыт 8 мая 2010 года.
Памятник Рабиндранату Тагору - автор Гаутам Пал, открыт 19 октября 2009 года.
Памятник Абаю - Ескен Сергебаев и Бакитжан Абишев, открыт 29 августа 2009 года.
Памятник Пушкину А. С. - автор Владимир Самойлов, открыт 29 августа 2009 года.
Скульптура «Охотник» - автор Валерий Иванович Дранишников, открыт в 2009 году.
Памятник Сарсену Аманжолову - Ескен Сергебаев и Бакитжан Абишев, открыт 23 января 2007 года.
Надпись «Оскемен» - автор Анастасия Ермакова, установлена на въезде в город.
Мемориальный комплекс, посвященный памяти воинов-интернационалистов - открыт 16 ноября 2004 года.
Декоративный монумент работникам УМЗ с изображением В. Н. Потанина - открыт в 1997 году.
Памятник Лихареву И. М. - В. С. Раппопорт и М. В. Козлов, открыт в 1990 году.
Мемориальный комплекс Победы - В. С. Раппопорт и С. П. Христофоров, открыт в честь павших в Великой Отечественной войне.
Памятник Якову Ушанову - Г. А. Огнев, В. А. Кушнаренко, А. Н. Душкин, открыт 5 ноября 1973 года.
Скульптура «Перекуем мечи на орала» - Е. В. Вучетич и Л. И. Маковеев, открыт в 1962 году.
Скульптура «К звездам» - Е. В. Вучетич и Л. И. Маковеев, открыт в 1962 году.
Братская могила борцов за Советскую власть 1918-1919 гг. - П. Р. Столбов и Н. Водозаборов, открыт 5 июня 1951 года.
Памятник Сергею Кирову - Н. В. Томский и Н. А. Троицкий, открыт 18 июня 1938 года.
""".replace('"', "'")
    lst = []
    for i in s.split('\n'):
        text = i[:i.find(',')]
        lst.append(''.join(text))

    print(', '.join(lst))
    # main()
# Открываем текстовый файл для записи
