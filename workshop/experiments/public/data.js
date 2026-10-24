export const fixture = Object.freeze({
  id: 'codex-compact-fixture-v1', seed: 1031, synthetic: true,
  entities: 72, periods: 12,
  description: 'Fictional service areas. Coordinates represent access and outcome indices, not geography. All values are synthetic observations at discrete periods.',
});
export const cohorts = ['Aster', 'Birch', 'Cedar'];
export const features = Object.freeze([
  { key: 'access', label: 'Access', unit: 'index', min: 0, max: 100 },
  { key: 'outcome', label: 'Outcome', unit: 'index', min: 0, max: 100 },
  { key: 'cycle', label: 'Duration', unit: 'days', min: 0, max: 40 },
  { key: 'volume', label: 'Volume', unit: 'records', min: 0, max: 1200 },
  { key: 'resource', label: 'Resource', unit: '%', min: 0, max: 100 },
  { key: 'spread', label: 'Variation', unit: 'index', min: 0, max: 100 },
]);
const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
const round = x => Math.round(x * 10) / 10;
let seed = fixture.seed;
function random() { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; }
const entities = Array.from({ length: fixture.entities }, (_, i) => ({
  id: `AREA-${String(i + 1).padStart(2, '0')}`,
  cohort: cohorts[i % 3],
  a: 12 + random() * 58,
  b: 16 + random() * 48,
  growth: (random() - .25) * 2.2,
  phase: random() * Math.PI * 2,
  volume: 100 + random() * 700,
  resource: 15 + random() * 60,
}));
export const observations = Object.freeze(entities.flatMap((e, i) =>
  Array.from({ length: fixture.periods }, (_, period) => {
    const wave = Math.sin(period * .55 + e.phase);
    const access = round(clamp(e.a + period * e.growth + wave * 6, 2, 98));
    const outcome = round(clamp(e.b + access * .18 + period * (.75 - i % 5 * .16) + Math.cos(period * .45 + e.phase) * 8, 2, 98));
    return Object.freeze({
      id: e.id, cohort: e.cohort, period,
      access, outcome,
      cycle: round(clamp(32 - access * .2 + wave * 4 + i % 4, 1, 39)),
      volume: Math.round(clamp(e.volume + period * 14 + wave * 60, 1, 1199)),
      resource: round(clamp(e.resource + period * .9 + wave * 7, 1, 99)),
      spread: round(clamp(8 + i % 9 * 7 + wave * 8, 1, 99)),
      source: `${fixture.id}/${e.id}/period-${period + 1}`,
    });
  })));
export function atPeriod(period) {
  if (!Number.isInteger(period) || period < 0 || period >= fixture.periods) throw new RangeError('Invalid period');
  return observations.filter(row => row.period === period);
}
export function query(period, cohort = 'All', minAccess = 0) {
  if (cohort !== 'All' && !cohorts.includes(cohort)) throw new RangeError('Invalid cohort');
  if (!Number.isFinite(minAccess) || minAccess < 0 || minAccess > 100) throw new RangeError('Invalid access threshold');
  return atPeriod(period).filter(row => (cohort === 'All' || row.cohort === cohort) && row.access >= minAccess);
}
export function normalize(row, feature) {
  return (row[feature.key] - feature.min) / (feature.max - feature.min);
}
export function bins(rows, columns = 6, lines = 4) {
  const cells = Array.from({ length: columns * lines }, (_, index) => ({
    id: index, x0: index % columns * 100 / columns, x1: (index % columns + 1) * 100 / columns,
    y0: Math.floor(index / columns) * 100 / lines, y1: (Math.floor(index / columns) + 1) * 100 / lines,
    rows: [],
  }));
  for (const row of rows) {
    const x = Math.min(columns - 1, Math.floor(row.access / 100 * columns));
    const y = Math.min(lines - 1, Math.floor(row.outcome / 100 * lines));
    cells[y * columns + x].rows.push(row);
  }
  return cells;
}
export const motionIds = Object.freeze(entities.slice(0, 12).map(row => row.id));
export function motionRows(period, cohort = 'All') {
  return query(period, cohort).filter(row => motionIds.includes(row.id));
}
export function evidence(state) {
  return {
    schema: 'dataviz-codex/experiment-evidence/v1', fixture,
    state: { ...state }, features,
    selection: state.mode === 'motion' ? motionRows(state.period, state.cohort) : query(state.period, state.cohort, state.mode === 'dimensions' ? state.minAccess : 0),
    observations,
    definitions: {
      axes: 'Access index and outcome index, each 0–100. Spatial position is not geography.',
      query: 'Dimensions applies cohort and inclusive minimum access to the current period. Field applies cohort only. Motion uses a fixed 12-ID sample and cohort only.',
      profiles: 'Each raw feature is normalized against the fixed min/max domains listed in features. This does not establish equal importance.',
      motion: 'Smooth transitions interpolate for display only. There are 12 discrete synthetic observations per entity; no intermediate observation is asserted.',
      evaluation: 'No good/bad judgment or causal inference is defined.',
    },
  };
}
