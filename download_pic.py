import argparse
import json
from pathlib import Path
from urllib.parse import urljoin, quote
from urllib.request import urlretrieve

# 项目根目录
ROOT = Path(__file__).resolve().parent

# game_data.json 路径
GAME_DATA = ROOT / "src-tauri" / "src" / "game_data.json"

# 下载站点
BASE_URL = "https://www.fknc.top/"

# 输出目录
OUTPUT_DIR = ROOT / "src" / "carzyfarm"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def quote_url_path(path: str) -> str:
    """
    对 URL path 部分进行 quote
    """
    return quote(path, safe="/")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="overwrite existing files",
    )

    args = parser.parse_args()

    with open(GAME_DATA, "r", encoding="utf-8") as f:
        data = json.load(f)

    crops = data.get("crops", [])

    for crop in crops:
        image_url = crop.get("imageUrl")

        if not image_url:
            continue

        quoted_path = quote_url_path(image_url)

        # 构造完整 URL
        full_url = urljoin(BASE_URL, quoted_path.lstrip("/"))

        # 保留原始中文文件名
        filename = Path(image_url).name

        save_path = OUTPUT_DIR / filename

        # 已存在则跳过
        if save_path.exists() and not args.overwrite:
            print(f"Skip existing: {save_path}")
            continue

        print(f"Downloading: {full_url}")
        print(f" -> {save_path}")

        try:
            urlretrieve(full_url, save_path)
        except Exception as e:
            print(f"Failed: {e}")

    print("Done.")


if __name__ == "__main__":
    main()
