import tiktoken


def get_count_tokens(text: str, model: str = "gpt-4o-mini") -> int:
    """
    Подсчитывает количество токенов в тексте для указанной модели.

    :param text: Строка текста, для которой необходимо посчитать токены.
    :param model: Название модели, используемой для токенизации.
    :return: Количество токенов в тексте.
    """
    # Загрузка кодека токенизации для заданной модели
    encoding = tiktoken.encoding_for_model(model)

    # Токенизация текста и подсчет длины токенизированного списка
    token_count = len(encoding.encode(text))
    return token_count


def read(file: str):
    with open(file, 'r', encoding="utf8") as f:
        text = f.read()
    return text


def price(base_price: float, count_tokens: int, epoch: int):
    return (base_price / 1_000_000) * count_tokens * epoch


def main():
    texts = []
    for i in ['anyz', "esimder", 'irbis', 'olketanu', 'pushkinlibrary']:
        texts.append(read(file=f'{i}.json'))
    text = ' '.join(texts)
    count_tokens = get_count_tokens(text)
    print("Количество токенов:", count_tokens)
    p = price(base_price=0.3, count_tokens=count_tokens, epoch=1)
    print(f'Цена ~{p:.2f}', )


main()

