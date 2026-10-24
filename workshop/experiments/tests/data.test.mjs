import test from 'node:test';
import assert from 'node:assert/strict';
import { fixture, features, cohorts, observations, atPeriod, query, bins, normalize, motionRows, evidence } from '../public/data.js';

test('the synthetic snapshot has complete stable identities, finite values and fixed measurement domains', () => {
  assert.equal(observations.length, 72 * 12);
  const ids=atPeriod(0).map(r=>r.id);
  for(let period=0;period<12;period++){
    const rows=atPeriod(period);assert.deepEqual(rows.map(r=>r.id),ids);
    for(const row of rows){for(const feature of features){assert.ok(Number.isFinite(row[feature.key]));assert.ok(normalize(row,feature)>=0&&normalize(row,feature)<=1);}assert.ok(row.source.includes(row.id));}
  }
});
test('one query preserves the same identities for every linked measurement and yields explicit empty selections', () => {
  const rows=query(11,'Birch',60);
  assert.ok(rows.length>0&&rows.length<24);
  assert.ok(rows.every(r=>r.cohort==='Birch'&&r.access>=60));
  assert.deepEqual(query(11,'All',100),[]);
  assert.equal(query(11).length,72);
  for(const cohort of cohorts)assert.equal(query(11,cohort).length,24);
});
test('spatial aggregation conserves population and every source ID appears in exactly one correct cell', () => {
  for(const period of [0,5,11])for(const cohort of ['All',...cohorts]){
    const rows=query(period,cohort),cells=bins(rows);
    const ids=cells.flatMap(c=>c.rows.map(r=>r.id));
    assert.equal(ids.length,rows.length);assert.equal(new Set(ids).size,rows.length);
    assert.deepEqual(ids.sort(),rows.map(r=>r.id).sort());
    for(const cell of cells)assert.ok(cell.rows.every(r=>r.access>=cell.x0&&r.access<=cell.x1&&r.outcome>=cell.y0&&r.outcome<=cell.y1));
  }
  assert.equal(bins([{id:'Boundary',access:100,outcome:100}]).at(-1).rows.length,1);
});
test('motion keeps the same stratified sample throughout time instead of changing membership with plotted position', () => {
  for(const cohort of ['All',...cohorts]){
    const ids=motionRows(0,cohort).map(r=>r.id);
    assert.equal(ids.length,cohort==='All'?12:4);
    for(let period=1;period<12;period++)assert.deepEqual(motionRows(period,cohort).map(r=>r.id),ids);
  }
});
test('evidence retains all observations and distinguishes analysis filtering from fixed-sample motion', () => {
  const base={period:11,cohort:'All',minAccess:100,selected:null};
  const filtered=evidence({...base,mode:'dimensions'}),motion=evidence({...base,mode:'motion'}),field=evidence({...base,mode:'field'});
  assert.equal(filtered.selection.length,0);assert.equal(motion.selection.length,12);assert.equal(field.selection.length,72);
  assert.equal(filtered.observations.length,fixture.entities*fixture.periods);
  assert.equal(motion.definitions.evaluation,'No good/bad judgment or causal inference is defined.');
  assert.match(motion.definitions.motion,/interpolate for display only/);
});
test('invalid period, cohort and query threshold are rejected', () => {
  for(const period of [-1,12,1.5,NaN])assert.throws(()=>atPeriod(period),RangeError);
  assert.throws(()=>query(11,'Unknown'),RangeError);
  for(const threshold of [-1,101,NaN])assert.throws(()=>query(11,'All',threshold),RangeError);
});
