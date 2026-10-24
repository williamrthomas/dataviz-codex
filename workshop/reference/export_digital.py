"""Export the curated study into an existing DataViz Codex checkout."""
import argparse
import json
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('repository', type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parent
d = json.loads((root / 'digital-practice.json').read_text())
sources = {s['id']: s for name in ('source-register.json', 'digital-sources.json')
           for s in json.loads((root / name).read_text())}
used = set()

def refs(ids):
    used.update(ids)
    return ' '.join(f"[{i}]({sources[i]['url']})" for i in ids)

def cell(text):
    return text.replace('|', '\\|').replace('\n', ' ')

def table(headers, rows):
    return '\n'.join(['| ' + ' | '.join(headers) + ' |',
                      '| ' + ' | '.join('---' for _ in headers) + ' |'] +
                     ['| ' + ' | '.join(cell(x) for x in row) + ' |' for row in rows])

parts = [f"# {d['title']}",
         f"**Working proposition:** {d['thesis']}", d['scope'],
         'This focused study extends the [Designer path](designer.md) and [Advanced path](advanced.md). It connects [analytical design](../principles/analytical-design.md), [layering and separation](../principles/layering-and-separation.md), [micro/macro readings](../principles/micro-macro-readings.md), and [interaction design](../principles/interaction-design.md).',
         '## Four complementary design lenses']
for x in d['lenses']:
    parts += [f"### {x['name']}", f"**Documented:** {x['source']} {refs(x['sources'])}", x['extension']]
parts += ['## Cartography as the organizing model',
          'High-quality maps demonstrate how much information a well-organized field can carry. swisstopo explicitly describes generalization as preserving essential content while adjusting detail to the space available. Our extension is to make that discipline part of analytical interaction. ' + refs(['S12', 'D11', 'D12']),
          table(['Cartographic lesson', 'Transfer to an analytical tool'],
                [(x['name'], x['rule']) for x in d['mapRules']]),
          'Color semantics follow the distinction among sequential, diverging and qualitative schemes. ' + refs(['D13']),
          '## A cleaner and more expressive language', d['cleaner'],
          '## Capabilities worth extending']
for x in d['capabilities']:
    parts += [f"### {x['name']}", x['change'] + ' ' + refs(x['sources']),
              '**Method:** ' + x['method'], '**Preserve:** ' + x['condition']]
parts += ['## Multidimensional analysis', d['multidimensionalNote'] + ' ' + refs(d['multidimensionalSources']),
          table(['Method', 'Question', 'Mechanic', 'Interpretation risk'],
                [(x['method'], x['question'], x['mechanic'], x['risk']) for x in d['multidimensional']]),
          'The method comparison is our synthesis. Projected layouts remain linked to original measurements; a visual cluster is a hypothesis to examine, not a demonstrated cause or natural class.',
          '## Three different meanings of motion',
          table(['Type', 'Purpose', 'Design rule', 'Source'],
                [(x['type'], x['purpose'], x['rule'], refs(x['sources'])) for x in d['motion']]),
          d['motionEvidence'] + ' ' + refs(['D15', 'D16']),
          '## Who to study next',
          table(['Practitioners and researchers', 'What to study', 'Question for practice', 'Source'],
                [(x['names'], x['study'], x['question'], refs(x['sources'])) for x in d['people']]),
          'Existing profiles in this codex provide related context: [Shneiderman](../thinkers/modern/ben-shneiderman.md), [Heer](../thinkers/contemporary/jeffrey-heer.md), [Munzner](../thinkers/contemporary/tamara-munzner.md), [Viégas and Wattenberg](../thinkers/contemporary/fernanda-viegas-martin-wattenberg.md), [Stefaner](../thinkers/contemporary/moritz-stefaner.md), and [Bremer](../thinkers/contemporary/nadieh-bremer.md). The primary sources linked here support this study; existing profiles are not treated as substitutes for those sources.',
          '## Three precedents to inspect']
for x in d['precedents']:
    parts += [f"### {x['name']}", f"![{x['alt']}]({x['image']})", x['lesson'] + ' ' + refs(x['sources'])]
parts += ['Figures are attributed to the linked source and load from the original host. Third-party figure rights are not changed by the repository license.',
          '## Three comparable experiments',
          '**Status:** Proposed work. No implementation or reader study is claimed.']
for i, x in enumerate(d['experiments'], 1):
    parts += [f"### {i}. {x['title']}", '**Build:** ' + x['build'], '**Test:** ' + x['test']]
parts += [d['roadmap'],
          'For each experiment retain the task, source data, transforms, encoding rules, interaction state, static alternative, failure cases and reader results. Measure task accuracy and completion separately from preference. The result should be a bounded design rule with evidence.',
          '## Constraints for the experiments', d['constraints']['intent'],
          '**Host:** ' + d['constraints']['host'],
          '**Verification sizes:** ' + '; '.join(d['constraints']['viewports']) + '.',
          '\n'.join('- ' + rule for rule in d['constraints']['rules']),
          '## Source register and reading boundaries',
          'All sources were retrieved on 24 October 2026. No complete reading of Tufte’s books or universal claim about motion is implied.',
          table(['ID', 'Primary source', 'Reading scope'],
                [(i, f"[{sources[i]['title']}]({sources[i]['url']})", sources[i]['scope'])
                 for i in sorted(used)]),
          '*Back to [Curriculum](README.md) · Related: [Designer](designer.md), [Advanced](advanced.md)*']
destination = args.repository / 'curriculum' / 'digital-practice.md'
if not destination.parent.is_dir():
    raise SystemExit('Expected an existing DataViz Codex checkout with curriculum/.')
destination.write_text('\n\n'.join(parts) + '\n')
print(f'Exported {destination} ({len(used)} cited sources)')
