# Установка проекта "Pushkin Library Assistant"

## Шаг 1: Клонирование репозитория

Для начала склонируйте репозиторий проекта с помощью следующей команды:

```bash
git clone https://github.com/trr69/Pushkin-Library-Assistant.git
```

## Шаг 2: Создание виртуального окружения (virtual environment)

Перейдите в каталог проекта и создайте виртуальное окружение с помощью команды:

```bash
cd Pushkin-Library-Assistant
python -m venv venv
```

## Шаг 3: Активация виртуального окружения

Активируйте виртуальное окружение. Для пользователей Windows:

```bash
venv\Scripts\activate
```

Для пользователей macOS и Linux:

```bash
source venv/bin/activate
```

## Шаг 4: Добавление файла .env

Создайте файл с именем `.env` в корневом каталоге проекта и добавьте в него следующую строку, заменив `YOUR_API_KEY` на свой API ключ от Google:

```
API_KEY=YOUR_API_KEY
```

## Шаг 5: Установка зависимостей

Установите зависимости проекта с помощью следующей команды:

```bash
pip install -r requirements.txt
```

# Использование проекта "Pushkin Library Assistant"

## Запуск чата с ботом

1. Перейдите в склонированный репозиторий проекта:

```bash
cd Pushkin-Library-Assistant
```

2. Активируйте виртуальное окружение (если оно не активировано):

   - Для пользователей Windows:

     ```bash
     venv\Scripts\activate
     ```

   - Для пользователей macOS и Linux:

     ```bash
     source venv/bin/activate
     ```

3. Запустите чат с ботом, выполнив команду:

```bash
python bot.py
```

## Перезагрузка и пересборка базы данных

Для перезагрузки и пересборки базы данных после обновления текстового файла выполните следующую команду:

```bash
python reloaddb.py
```
