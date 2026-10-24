"""Install the isolated Codex component and assets into an existing Astro project.

Does not change package.json, layouts, routing, authentication or Astro version.
"""
import argparse
import json
import shutil
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('project', type=Path)
args = parser.parse_args()
here = Path(__file__).resolve().parent
project = args.project.resolve()
package = json.loads((project / 'package.json').read_text())
if 'astro' not in {**package.get('dependencies', {}), **package.get('devDependencies', {})}:
    raise SystemExit('The supplied project does not declare Astro. No files changed.')
component = project / 'src/components/CodexExperiments.astro'
assets = project / 'public/codex-experiments'
reference = project / 'public/codex-reference/index.html'
if component.exists() and 'DataViz Codex: portable custom element' not in component.read_text():
    raise SystemExit('Component path contains unrelated work. No files changed.')
if assets.exists() and any(assets.iterdir()):
    try:
        manifest = json.loads((assets / 'manifest.json').read_text())
    except (FileNotFoundError, json.JSONDecodeError):
        raise SystemExit('Asset path contains unrecognized work. No files changed.')
    if manifest.get('package') != 'dataviz-codex-experiments':
        raise SystemExit('Asset path contains unrelated work. No files changed.')
if reference.exists() and '<title>Visual practice' not in reference.read_text():
    raise SystemExit('Reference path contains unrelated work. No files changed.')
component.parent.mkdir(parents=True, exist_ok=True)
assets.mkdir(parents=True, exist_ok=True)
reference.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(here / 'CodexExperiments.astro', component)
for source in (here / 'public').iterdir():
    if source.is_file():
        shutil.copy2(source, assets / source.name)
(assets / 'manifest.json').write_text(json.dumps({'package':'dataviz-codex-experiments','version':1,'fixture':'codex-compact-fixture-v1'}, indent=2)+'\n')
shutil.copy2(here.parent / 'reference/index.html', reference)
print(f'Installed component: {component}')
print(f'Installed assets: {assets}')
print('Render <CodexExperiments /> in the intended host page; measure the actual header and set hostOffset accordingly.')
