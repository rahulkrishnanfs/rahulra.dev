import os
from PIL import Image, ImageEnhance, ImageOps

SRC = "/Users/rahulra/.cursor/projects/Users-rahulra-claude-rahulkrishnanra/assets"
OUT = "/Users/rahulra/claude/rahulkrishnanra/src/assets/gallery"
os.makedirs(OUT, exist_ok=True)

# Ordered list of source files -> output index (must match captions in Gallery.jsx)
files = [
    "image-495acac2-806d-49ac-a3d8-b2b2c8801fab.png",
    "image-335df07d-a5a1-4d7e-9634-fc9ad3097dd5.png",
    "image-521fd1aa-9352-4017-a776-0eced40f8389.png",
    "image-deddc486-228d-4889-85b1-f9c787c0a22f.png",
    "image-88ce5343-82ad-4045-82e9-95df5b738c7c.png",
    "image-eba3b4ed-b832-422d-9791-f06cd9f178a2.png",
    "image-c73e00a2-eadc-40cf-87c2-0ccbb42f5541.png",
    "image-57736f8e-778b-4897-8903-a1128e4ca8ea.png",
    "image-b2026da2-512a-4474-9320-87e9bfff1c87.png",
    "image-03cadb2c-f21c-4cc8-b11b-9dd555f30b90.png",
    "image-fd280ed1-3a34-4dd7-bd4c-2eb16ef036d9.png",
    "image-83e905f1-dfe5-48bb-9225-2ef413cce68a.png",
    "image-6a8025fe-132b-4103-ac47-48988d82f5a3.png",
    "image-f67a7047-f596-4042-a213-c5e580e3af8b.png",
    "image-afd1b558-265b-4bb5-8b66-41394608ffef.png",
    "image-d0d349de-a50c-49fb-a860-c695c13a55c0.png",
    "Screenshot_2026-02-14_at_13.06.39-29155a41-e285-4936-a671-317c46cf4263.png",
    "Screenshot_2025-12-29_at_20.39.52-66fea8ba-e2e4-433b-8e81-d81eaabebff7.png",
    "Screenshot_2025-12-29_at_20.40.59-7be4f3da-15b4-437d-999b-cf9c038aacaa.png",
    "Screenshot_2025-12-29_at_20.41.10-1b870c7c-f516-4845-9ace-c0b79aa56a21.png",
    "Screenshot_2026-06-23_at_22.03.08-8574e562-5218-45bc-8b1a-57912d1ac980.png",
    "Screenshot_2025-12-29_at_20.40.07-d20d9cb8-0cf1-4f4a-a827-02b2736dd41f.png",
    "Screenshot_2025-12-29_at_20.39.14-2162acdb-5074-4149-8af5-3b0fa4288a35.png",
    "Screenshot_2026-02-21_at_18.35.05-59c77916-5d72-4115-be9d-50cd5e61a8b6.png",
    "2-e9f1329e-61a9-468c-a47c-c0ffe0e13ab2.png",
    "8-4074ecac-5607-429b-8563-788c370e2f95.png",
    "7-d07211a2-f2ac-4095-b24e-e6c31f464e22.png",
    "IMG_1244-e3008758-8fc7-4e8c-a0b7-0de63af895ed.png",
    "IMG_1206-76223fe5-79b4-41c8-a300-7ba5a60ac67f.png",
    "IMG_0915-580ecd9e-4f55-453b-adae-7137b8c817e3.png",
    "Screenshot_2026-06-24_at_09.09.21-23e0cff0-e99b-45f6-814f-b68a6f9e5610.png",
    "Screenshot_2026-06-24_at_09.09.09-1224a14f-1ccb-438e-bedc-cf1948669c96.png",
]

MAX = 1400

for i, name in enumerate(files, start=1):
    path = os.path.join(SRC, name)
    im = Image.open(path)
    im = ImageOps.exif_transpose(im).convert("RGB")
    # resize to max long edge
    w, h = im.size
    scale = min(1.0, MAX / max(w, h))
    if scale < 1.0:
        im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
    # enhancements: brightness, contrast, color, sharpness
    im = ImageEnhance.Brightness(im).enhance(1.05)
    im = ImageEnhance.Contrast(im).enhance(1.10)
    im = ImageEnhance.Color(im).enhance(1.08)
    im = ImageEnhance.Sharpness(im).enhance(1.45)
    out = os.path.join(OUT, f"gallery-{i:02d}.jpg")
    im.save(out, "JPEG", quality=85, optimize=True, progressive=True)
    print(f"saved {out} {im.size}")

print("done")
