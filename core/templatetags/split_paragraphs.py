from django import template

register = template.Library()


@register.filter(name='split_paragraphs')
def split_paragraphs(value):
    """Добавляет <p> для обычных строк и <h3> для строк, начинающихся с #"""
    if not value:
        return ''

    # Разбиваем текст по строкам и добавляем нужные теги
    result = []
    for line in value.splitlines():
        stripped_line = line.strip()
        if not stripped_line:
            continue  # Пропускаем пустые строки

        if stripped_line.startswith('#'):
            # Преобразуем строку с # в заголовок h3
            result.append(f'<h3>{stripped_line[1:].strip()}</h3>')
        else:
            # Обычные строки оборачиваем в <p>
            result.append(f'<p>{stripped_line}</p>')

    return ''.join(result)
