import argparse

from bot_logic.services.engines.legends_engine import LegendsEngine

def upsert_all_chroma_stores():
    lEngine = LegendsEngine()
    lEngine.legends_vectore_store_upsert()


if __name__ == '__main__':
    upsert_all_chroma_stores()