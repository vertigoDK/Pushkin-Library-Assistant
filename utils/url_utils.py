"""
Вспомогательные функции для urls
"""
import requests

def check_url_exists(url: str) -> bool:
    """Отправляет пустой гет запрос на url

    Args:
        url (str): url проверяющегося сайта

    Returns:
        bool: если сайт дал код 200 то возвращается True, иначае False
    """
    try:
        response = requests.get(url)
        # Проверяем код статуса ответа
        if response.status_code == 200:
            return True
        else:
            return False
    except requests.RequestException as e:
        # Обработка ошибок (например, неверный URL или проблемы с сетью)
        print(f"Ошибка при проверке URL: {e}")
        return False


if __name__ == '__main__':
    base_url: str = "https://anyz.pushkinlibrary.kz/"
    print(check_url_exists(base_url))
