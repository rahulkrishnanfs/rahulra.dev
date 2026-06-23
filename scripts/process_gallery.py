import os
from PIL import Image, ImageEnhance, ImageOps

SRC = "/Users/rahulra/.cursor/projects/Users-rahulra-claude-rahulkrishnanra/assets"
OUT = "/Users/rahulra/claude/rahulkrishnanra/src/assets/gallery"
os.makedirs(OUT, exist_ok=True)

# Ordered list of source files -> output index
files = [
    "1000212575-23be92f6-0b8d-426b-9c63-cb617bfb1a7d.png",
    "Screenshot_2025-12-29_at_20.40.59-4228f1ce-4dd4-454d-a04e-65c8d75ba78a.png",
    "Screenshot_2026-02-05_at_23.19.38-cbce08bb-e0d3-46f6-97ee-e12bcd4e6389.png",
    "Screenshot_2026-02-15_at_13.10.15-472528ec-ab31-4745-8bab-4a0808b08083.png",
    "Screenshot_2026-01-01_at_02.00.50-5a885c37-740f-4abf-9bbd-b7afaec33f8e.png",
    "Screenshot_2026-02-21_at_18.35.05-09e3e022-34a4-4f2c-954b-5c75c8909d5f.png",
    "2-952dc10a-31c0-48ec-93ed-5252dfa09a55.png",
    "Screenshot_2026-04-01_at_10.28.37-29517898-ed5d-44cd-aca5-4c34c273daf5.png",
    "8-a339a9bc-7322-4a99-9b1f-a7f2b379f1ae.png",
    "1-41389b0d-9831-4cf0-bbe2-8ed27f949892.png",
    "IMG_0915-35fd7340-588d-4217-a956-1563659f653e.png",
    "Screenshot_2025-12-29_at_20.39.52-20c71f2b-1cfb-43d6-b1e8-fc673bcf63d0.png",
    "Screenshot_2025-12-29_at_20.39.14-0e063f7d-85a2-45f9-afc1-905883b000c5.png",
    "Screenshot_2025-12-29_at_20.40.07-0e7c17e9-14e8-4ed0-8715-2190b96e834d.png",
    "IMG_1244-6a55ea1e-5b31-4e13-a125-ab3e7c59b212.png",
    "image-eaff719a-118a-42ac-9e21-3fedd72fe5ec.png",
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
