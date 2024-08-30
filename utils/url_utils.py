# `import requests` is a Python statement that imports the `requests` library. This library allows you
# to send HTTP requests easily in Python. In the provided code snippet, the `requests` library is used
# to make an HTTP GET request to a specified URL in the `check_url_exists` function.
import requests


def check_url_exists(url: str) -> bool:
    """
    The function `check_url_exists` takes a URL as input and returns True if the URL exists and returns
    False otherwise, handling exceptions using the requests library in Python.
    
    Args:
      url (str): The function `check_url_exists` takes a URL as input and checks if the URL exists by
    sending a GET request to the URL. If the response status code is 200, it returns True indicating
    that the URL exists, otherwise it returns False.
    
    Returns:
      The function `check_url_exists` returns a boolean value - `True` if the URL exists and returns a
    status code of 200, and `False` otherwise. If there is an exception during the request, it will
    catch the `requests.RequestException` and return `False`.
    """
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return True
        else:
            return False
    except requests.RequestException as e:
        print(f"Ошибка при проверке URL: {e}")
        return False


if __name__ == '__main__':
    base_url: str = "https://anyz.pushkinlibrary.kz/"
    print(check_url_exists(base_url))
