import requests as req
from bs4 import BeautifulSoup
import json
import time

URL = "https://ptable.com/?lang=ja#属性"
atomic_name_selector = "li abbr"
atomic_weight_selector = "li data"

time.sleep(1.5)

atomics = {}

res = req.get(URL)  # URLのHTMLレイアウトを取得
soup = BeautifulSoup(res.content, "html.parser")  # ここから、resを綺麗にする
for name, weight in zip(
    soup.select(f"{atomic_name_selector}"), soup.select(f"{atomic_weight_selector}")
):
    # { "H": 1 }のように、 { name: weight #整数 }の形
    weight_content = weight.decode_contents()
    name_content = name.decode_contents()

    # 不安定な元素のかっこを消す。
    weight_content = weight_content.replace("(", "")
    weight_content = weight_content.replace(")", "")

    float_weight = float(weight_content)
    atomics[name_content] = float_weight
    pass

to_json = json.dumps(atomics, ensure_ascii=False)

with open("atomics.json", "w") as f:
    f.write(to_json)
    print(f"Success\n{to_json}")
