"""Rebuild the portable research chapter. No external dependencies required."""
import json
from pathlib import Path

root = Path(__file__).resolve().parent
data = json.loads((root / 'corpus.json').read_text())
data['sources'] = json.loads((root / 'source-register.json').read_text())
data['digital'] = json.loads((root / 'digital-practice.json').read_text())
data['sources'] += json.loads((root / 'digital-sources.json').read_text())
payload = json.dumps(data, ensure_ascii=False).replace('<', '\\u003c')
html = (root / 'template.html').read_text()
html = html.replace('/* CSS */', (root / 'style.css').read_text())
html = html.replace('/* DATA */', payload)
html = html.replace('/* JS */', (root / 'app.js').read_text())
(root / 'index.html').write_text(html)
print(f'Built {root / "index.html"} ({len(html.encode()):,} bytes)')
