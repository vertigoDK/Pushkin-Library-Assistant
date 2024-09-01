# Добавить вывод о том что если человек хочет сменить ссылки ему следует это сделать в links.py
from anyz_parser.legend_parser import AnyzLegendParser
import asyncio

if __name__ == '__main__':
    parser_anyz: AnyzLegendParser = AnyzLegendParser()
    asyncio.run(parser_anyz.run_parser())
