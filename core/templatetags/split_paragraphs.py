from django import template

register = template.Library()


@register.filter(name='split_paragraphs')
def split_paragraphs(value):
    paragraphs = value.split('\n')
    wrapped_paragraphs = ''.join([f'<p>{paragraph}</p>' for paragraph in paragraphs if paragraph.strip() != ''])
    return wrapped_paragraphs
