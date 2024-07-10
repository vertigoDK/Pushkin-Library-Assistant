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

    s= """Санаторий "Барлык-Арасан": Оазис здоровья в предгорьях Арасантау

Расположенный в живописной Барлыкской долине, в 600 км от Семея, санаторий "Барлык-Арасан" - это уникальное место для оздоровления и отдыха.

Благодатная природа:

    Чистый горный воздух,

    Красивые ландшафты,

    Степное разнотравье,

    Возможность купания в озере Алаколь

создают идеальные условия для восстановления сил.

Целебные воды и грязи:

    Вблизи санатория (в радиусе 1,5 км) находятся 13 термальных минеральных источников.

    Воды серо-водородные, хлоридо-сульфатные, натриево-кальциевые с повышенным содержанием кремниевой кислоты.

    По химическому составу и слабой радиоактивности схожи с водами Цхалтубо, Сары-Агаш, Алма-Арасан.

Лечебный эффект:

Минеральная вода "Барлык-Арасан" эффективна при лечении:

    Заболеваний кожи

    Опорно-двигательного аппарата

    Центральной и периферической нервной системы

    Пищеварительного тракта

    Органов дыхания

    Гинекологических заболеваний

и многих других.

Инфраструктура:

    Физиотерапевтический, массажный, гинекологический кабинеты

    Зал лечебной физкультуры

    Комфортабельные номера (1, 2, 3-х местные)

    Ежедневный выезд на озеро Алаколь

Санаторий "Барлык-Арасан" - это место, где природа и современная медицина соединяются для вашего здоровья и благополучия."""
    lst = []
    for i in s.split('\n'):
        if not i.strip():
            continue
        text = i[4:i.find(' ', 4)]
        lst.append(''.join(text))

    print(" ".join(s.replace('\n', ' ').replace('\t', ' ').replace('"', '').split()))
    # main()
# Открываем текстовый файл для записи
