import re
from http.client import HTTPSConnection

js_script = re.compile(r"/assets/index-.*\.js")
css_style = re.compile(r"/assets/index-.*\.css")

dl = HTTPSConnection("www.fknc.top")


def request_file(file: str) -> str:
    dl.request("GET", file)
    resp = dl.getresponse()
    text = resp.read().decode("utf-8")
    resp.close()
    return text


html = request_file("/index.html")

js_file = js_script.search(html).group()
css_file = css_style.search(html).group()

js = request_file(js_file)
css = request_file(css_file)

with open("src/assets/index.js", "w", encoding="utf-8") as f:
    f.write(js)

with open("src/assets/index.css", "w", encoding="utf-8") as f:
    f.write(css)
