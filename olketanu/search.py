import pyperclip

s = repr(pyperclip.paste())


s = pyperclip.paste()
print(f"До обработки: {repr(s)}")
d = " ".join((s.replace('\n', " ").replace('\r', " ").strip().split()))
print(f"После обработки: {repr(d)}")
pyperclip.copy(d)

from uuid import uuid4

print(uuid4())


