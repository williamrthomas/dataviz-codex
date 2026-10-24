import { fixture, cohorts, features, atPeriod, query, normalize, bins, motionIds, motionRows, evidence } from './data.js';

const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const colors = { Aster:'#4b653b', Birch:'#80618d', Cedar:'#47758a' };
const n = value => new Intl.NumberFormat('en-US', { maximumFractionDigits:1 }).format(value);
const periodName = period => `Period ${String(period + 1).padStart(2, '0')}`;
const line = (x1,y1,x2,y2,attrs='') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${attrs}/>`;
const text = (x,y,value,attrs='') => `<text x="${x}" y="${y}" ${attrs}>${esc(value)}</text>`;
let instanceCount = 0;

class CodexExperiments extends HTMLElement {
  constructor() {
    super();
    this.state = { mode:'field', period:11, cohort:'All', minAccess:0, selected:'AREA-01', level:'cells', pane:'scatter', motion:'animated', guided:false, guideStep:0 };
    this.domain = null;
    this.instance = ++instanceCount;
    this.playing = false;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)');
  }
  connectedCallback() {
    if (this.controller) return;
    this.controller = new AbortController();
    this.style.setProperty('--codex-host-offset', `${Number(this.dataset.hostOffset) || 128}px`);
    const reference = this.dataset.reference || new URL('../codex-reference/index.html', import.meta.url).href;
    this.innerHTML = `<section class="cdx-shell" aria-label="Compact visual practice experiments"><header class="cdx-header"><div><p class="cdx-eyebrow">Codex · Synthetic data</p><h2>Visual practice lab</h2></div><div class="cdx-links"><a href="${esc(reference)}#digital" target="_blank" rel="noopener">Research</a><span class="cdx-legend"><span class="cdx-key"><i style="background:#4b653b"></i>Aster</span><span class="cdx-key"><i style="background:#80618d"></i>Birch</span><span class="cdx-key"><i style="background:#47758a"></i>Cedar</span></span></div></header><nav class="cdx-modes" aria-label="Select experiment"><button type="button" data-mode="field">Field</button><button type="button" data-mode="dimensions">Dimensions</button><button type="button" data-mode="motion">Motion</button><span data-guide-slot></span><span class="cdx-mode-note" data-mode-note></span></nav><div class="cdx-controls" data-controls></div><div class="cdx-workspace"><section class="cdx-panel cdx-main"><div class="cdx-panel-head"><h3 data-chart-title></h3><span data-chart-note></span></div><svg data-chart role="img" aria-label="Access and outcome indices"></svg></section><section class="cdx-panel cdx-side"><div class="cdx-panel-head"><h3 data-side-title></h3><span data-side-note></span></div><svg data-side role="img"></svg></section></div><section class="cdx-facts" aria-label="Selected entity measurements" data-facts></section><footer class="cdx-footer"><p data-reading></p><button type="button" class="cdx-export" data-export>Evidence JSON</button></footer><span class="cdx-sr" data-live aria-live="polite"></span></section>`;
    this.addEventListener('click', event => this.onClick(event), { signal:this.controller.signal });
    this.addEventListener('input', event => this.onInput(event), { signal:this.controller.signal });
    this.addEventListener('change', event => this.onChange(event), { signal:this.controller.signal });
    this.addEventListener('keydown', event => {
      if ((event.key === 'Enter' || event.key === ' ') && event.target.closest('[data-cell]')) { event.preventDefault(); this.openCell(Number(event.target.closest('[data-cell]').dataset.cell)); }
    }, { signal:this.controller.signal });
    this.resize = new ResizeObserver(() => this.draw());
    this.resize.observe(this.$('.cdx-workspace'));
    this.reduced.addEventListener('change', () => { this.finishAnimation(); this.update(); }, { signal:this.controller.signal });
    this.renderControls(); this.update();
  }
  disconnectedCallback() { this.stop(); this.resize?.disconnect(); this.controller?.abort(); this.controller=null; }
  $(selector) { return this.querySelector(selector); }
  rows() { return this.state.mode === 'motion' ? motionRows(this.state.period, this.state.cohort) : query(this.state.period,this.state.cohort,this.state.mode==='dimensions'?this.state.minAccess:0); }
  visibleRows() {const rows=this.rows(),d=this.domain;if(this.state.mode!=='field'||!d)return rows;return rows.filter(r=>r.access>=d.x0&&(r.access<d.x1||d.x1===100)&&r.outcome>=d.y0&&(r.outcome<d.y1||d.y1===100));}
  renderControls() {
    const s=this.state;
    const cohort=`<label>Cohort<select data-control="cohort" aria-label="Cohort"><option>All</option>${cohorts.map(c=>`<option ${s.cohort===c?'selected':''}>${c}</option>`).join('')}</select></label>`;
    const selector=`<label class="cdx-selected-control"><span>Inspect · <span data-inspect-cohort></span></span><select data-control="selected" aria-label="Inspect entity"></select></label>`;
    const periods=`<label class="cdx-range"><span>Observation · <strong data-period-label>${s.period+1} / 12</strong></span><input type="range" min="0" max="11" step="1" value="${s.period}" data-control="period" aria-label="Observation period" ${s.mode==='motion'&&s.guided?'disabled title="Use Next cue, or turn Guide off to explore freely."':''}></label>`;
    const level=s.mode==='field'?`<div class="cdx-toggle" aria-label="Detail level"><button type="button" data-level="cells" aria-pressed="${s.level==='cells'}">Cells</button><button type="button" data-level="records" aria-pressed="${s.level==='records'}">Records</button><button type="button" data-home aria-label="Show full field">Full field</button></div>`:'';
    const motion=s.mode==='motion'?`<div class="cdx-toggle" aria-label="Motion comparison mode">${[['direct','Direct'],['animated','Motion'],['frames','Frames']].map(([id,label])=>`<button type="button" data-motion="${id}" aria-pressed="${s.motion===id}">${label}</button>`).join('')}</div><div class="cdx-play">${s.guided?`<button type="button" data-next-cue>${s.guideStep===2?'Replay guide':'Next cue'}</button>`:'<button type="button" data-play>Play</button>'}</div>`:'';
    const access=s.mode==='dimensions'?`<label class="cdx-range"><span>Access at least <strong data-access-label>${s.minAccess}</strong></span><input type="range" min="0" max="100" step="5" value="${s.minAccess}" data-control="minAccess" aria-label="Minimum access index"></label><label class="cdx-pane-control">View<select data-control="pane" aria-label="Analysis view"><option value="scatter" ${s.pane==='scatter'?'selected':''}>Positions</option><option value="profile" ${s.pane==='profile'?'selected':''}>Profiles</option></select></label>`:'';
    this.$('[data-controls]').innerHTML=cohort+level+access+motion+periods+selector;
  }
  update() {
    const s=this.state,rows=this.visibleRows();
    if (!rows.some(row=>row.id===s.selected)) s.selected=rows[0]?.id||null;
    const shell=this.$('.cdx-shell');
    shell.className=`cdx-shell cdx-${s.mode}`;shell.dataset.pane=s.pane;
    this.querySelectorAll('[data-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mode===s.mode)));
    this.querySelectorAll('[data-motion]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.motion===s.motion)));
    this.querySelectorAll('[data-level]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.level===s.level)));
    const guideSlot=this.$('[data-guide-slot]');
    if(s.mode!=='motion')guideSlot.innerHTML='';
    else if(guideSlot.firstElementChild)guideSlot.firstElementChild.setAttribute('aria-pressed',String(s.guided));
    else guideSlot.innerHTML=`<button type="button" data-guide aria-pressed="${s.guided}">Guide</button>`;
    this.$('[data-mode-note]').textContent=s.mode==='field'?'Hierarchy & detail':s.mode==='dimensions'?'One query across six attributes':'Identity, time & explanation';
    this.$('[data-chart-title]').textContent=s.mode==='field'?'Access × outcome':s.mode==='dimensions'?'Positions in two dimensions':'Change in the same entities';
    this.$('[data-chart-note]').textContent=s.mode==='motion'?`${rows.length} of 72 · fixed sample`:`${this.domain&&s.mode==='field'?`${rows.length} in view · `:''}${this.rows().length} / 72 matching · ${periodName(s.period)}`;
    const select=this.$('[data-control=selected]');
    select.innerHTML=rows.length?rows.map(row=>`<option value="${row.id}" ${row.id===s.selected?'selected':''}>${row.id}</option>`).join(''):'<option value="">No match</option>';
    select.disabled=!rows.length;
    this.$('[data-period-label]').textContent=`${s.period+1} / 12`;
    this.$('[data-control=period]').value=s.period;
    if(this.$('[data-access-label]'))this.$('[data-access-label]').textContent=s.minAccess;
    if(this.$('[data-play]')){this.$('[data-play]').textContent=this.playing?'Pause':'Play';this.$('[data-play]').disabled=s.motion==='frames';}
    const row=rows.find(r=>r.id===s.selected);
    this.$('[data-inspect-cohort]').textContent=row?.cohort||'None';
    this.$('[data-facts]').innerHTML=`<div class="cdx-identity"><span>Inspected entity</span><strong>${row?.id||'None'}</strong><span>${row?.cohort||'Empty selection'}</span></div>${features.map(f=>`<div><span>${f.label}</span><strong>${row?n(row[f.key]):'—'}</strong><small>${f.unit}</small></div>`).join('')}`;
    this.$('[data-reading]').textContent=s.mode==='field'?'Cells count matches; the outline contains the inspected entity. Positions are indices, not geography.':s.mode==='dimensions'?'Profiles use six fixed normalization domains. Exact raw values remain above; gray marks retain the full population.':s.motion==='frames'?'Persistent frames retain the comparison. The same fixed sample is used in every period.':this.reduced.matches?'Reduced motion is active: observations update directly. These are discrete synthetic periods.':'Motion interpolates between discrete synthetic observations; the path is not additional observed data.';
    if(s.mode==='motion'&&s.guided&&row){const first=atPeriod(0).find(r=>r.id===row.id),sign=v=>`${v>0?'+':''}${n(v)}`;this.$('[data-chart-title]').textContent=`${row.id} · guided cue ${s.guideStep+1} / 3`;this.$('[data-reading]').textContent=s.guideStep===0?`Locate ${row.id}: access ${n(row.access)}, outcome ${n(row.outcome)}. Follow this same entity through the next two observations.`:`Since Period 01: access ${sign(row.access-first.access)}; outcome ${sign(row.outcome-first.outcome)} index points. ${s.guideStep===1?'Pause and compare their changes.':'Inspect the raw values before drawing a conclusion.'}`;}
    this.$('[data-live]').textContent=`${rows.length} matching entities. ${row?`${row.id} selected.`:'No selected entity.'}`;
    this.draw();
  }
  onClick(event) {
    const button=event.target.closest('button');
    if(button?.dataset.mode){this.stop();this.state.mode=button.dataset.mode;this.state.guided=false;this.state.guideStep=0;this.domain=null;this.renderControls();this.update();this.$(`[data-mode="${this.state.mode}"]`).focus();return;}
    if(button?.hasAttribute('data-guide')){this.stop();this.state.guided=!this.state.guided;this.state.guideStep=0;this.renderControls();if(this.state.guided)this.setPeriod(0);else this.update();return;}
    if(button?.hasAttribute('data-next-cue')){this.stop();this.state.guideStep=(this.state.guideStep+1)%3;this.renderControls();this.setPeriod([0,5,11][this.state.guideStep]);this.$('[data-next-cue]').focus();return;}
    if(button?.dataset.level){this.state.level=button.dataset.level;this.update();return;}
    if(button?.hasAttribute('data-home')){this.domain=null;this.update();return;}
    if(button?.dataset.motion){this.stop();this.state.motion=button.dataset.motion;this.update();return;}
    if(button?.hasAttribute('data-play')){this.playing?this.stop():this.play();this.update();return;}
    if(button?.dataset.step){this.stop();this.setPeriod(Math.max(0,Math.min(11,this.state.period+Number(button.dataset.step))));return;}
    if(button?.hasAttribute('data-export')){this.download();return;}
    const point=event.target.closest('[data-point]');
    if(point){this.state.selected=point.dataset.point;this.update();return;}
    const cell=event.target.closest('[data-cell]');
    if(cell)this.openCell(Number(cell.dataset.cell));
  }
  onInput(event) {
    const field=event.target.dataset.control;
    if(field==='period'){this.stop();this.setPeriod(Number(event.target.value));}
    if(field==='minAccess'){this.state.minAccess=Number(event.target.value);this.update();}
  }
  onChange(event) {
    const field=event.target.dataset.control;
    if(field==='cohort'){this.stop();this.state.cohort=event.target.value;if(this.state.guided){this.state.guideStep=0;this.setPeriod(0);}else this.update();}
    if(field==='selected'){this.state.selected=event.target.value;if(this.state.guided){this.state.guideStep=0;this.setPeriod(0);}else this.update();}
    if(field==='pane'){this.state.pane=event.target.value;this.update();}
  }
  openCell(id) {
    const cell=bins(this.rows()).find(row=>row.id===id);
    if(!cell?.rows.length)return;
    this.state.level='records';this.domain={x0:cell.x0,x1:cell.x1,y0:cell.y0,y1:cell.y1};
    this.state.selected=cell.rows[0].id;this.update();
    this.$('[data-level=records]').focus({preventScroll:true});
  }
  setPeriod(period) {
    const previous=this.state.period;this.finishAnimation();this.state.period=period;this.update();
    if(this.state.mode==='motion'&&this.state.motion==='animated'&&!this.reduced.matches&&previous!==period){
      const start=performance.now();
      const frame=now=>{const t=Math.min(1,(now-start)/480);this.drawMotion(previous,period,t*t*(3-2*t));if(t<1)this.frame=requestAnimationFrame(frame);else this.frame=null;};
      this.frame=requestAnimationFrame(frame);
    }
  }
  play() {
    if(this.state.motion==='frames')return;
    this.playing=true;
    if(this.state.period===11)this.setPeriod(0);
    const advance=()=>{
      if(!this.playing)return;
      if(this.state.period===11){this.playing=false;this.update();return;}
      this.setPeriod(this.state.period+1);
      this.timer=setTimeout(advance,900);
    };
    this.timer=setTimeout(advance,900);
  }
  finishAnimation(){if(this.frame)cancelAnimationFrame(this.frame);this.frame=null;}
  stop(){this.playing=false;clearTimeout(this.timer);this.finishAnimation();}
  axes(width,height,domain={x0:0,x1:100,y0:0,y1:100},small=false) {
    const margin={left:46,right:18,top:18,bottom:38};
    const w=Math.max(20,width-margin.left-margin.right),h=Math.max(20,height-margin.top-margin.bottom);
    const x=v=>margin.left+(v-domain.x0)/(domain.x1-domain.x0)*w;
    const y=v=>margin.top+h-(v-domain.y0)/(domain.y1-domain.y0)*h;
    const ticks=small?[0,1]:[0,.5,1];
    let svg=`<title>Access versus outcome, indices from ${domain.x0} to ${domain.x1} and ${domain.y0} to ${domain.y1}</title>`;
    for(const t of ticks){let vx=domain.x0+t*(domain.x1-domain.x0),vy=domain.y0+t*(domain.y1-domain.y0);svg+=line(x(vx),margin.top,x(vx),margin.top+h,'class="cdx-guide"')+line(margin.left,y(vy),margin.left+w,y(vy),'class="cdx-guide"')+text(x(vx),height-18,n(vx),'text-anchor="middle" class="cdx-tick"')+text(margin.left-7,y(vy)+4,n(vy),'text-anchor="end" class="cdx-tick"');}
    svg+=text(margin.left,12,'Outcome (index)')+text(width-18,height-2,'Access (index)','text-anchor="end"');
    return {svg,x,y,margin,w,h};
  }
  dimensions(svg){return {width:Math.max(180,svg.clientWidth),height:Math.max(95,svg.clientHeight)};}
  paint(svg,body,width,height){svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.innerHTML=body;}
  dot(row,x,y,selected=false,opacity=1){return `<circle data-point="${row.id}" cx="${x(row.access)}" cy="${y(row.outcome)}" r="${selected?6:3.5}" fill="${colors[row.cohort]}" opacity="${opacity}" ${selected?'stroke="var(--cdx-ink)" stroke-width="2"':''}><title>${row.id} · ${row.cohort}: access ${row.access}, outcome ${row.outcome}</title></circle>`;}
  draw() {
    if(!this.controller||!this.$('[data-chart]'))return;
    if(this.state.mode==='motion'){this.drawMotion(this.state.period,this.state.period,1);return;}
    const svg=this.$('[data-chart]'),{width,height}=this.dimensions(svg),s=this.state,rows=this.visibleRows();
    const a=this.axes(width,height,this.domain||undefined);let body=a.svg;
    if(s.mode==='field'&&s.level==='cells'){
      for(const cell of bins(rows).filter(c=>c.rows.length)){
        const cx=a.x(cell.x0),cy=a.y(cell.y1),cw=a.x(cell.x1)-cx,ch=a.y(cell.y0)-cy;
        body+=`<rect data-cell="${cell.id}" role="button" tabindex="0" aria-label="Inspect ${cell.rows.length} entities with access ${n(cell.x0)} to ${n(cell.x1)}, outcome ${n(cell.y0)} to ${n(cell.y1)}" x="${cx+2}" y="${cy+2}" width="${Math.max(0,cw-4)}" height="${Math.max(0,ch-4)}" fill="var(--cdx-accent)" opacity="${.12+Math.min(1,cell.rows.length/10)*.63}"/>`+text(cx+cw/2,cy+ch/2+4,cell.rows.length,'text-anchor="middle" pointer-events="none"');
      }
      const containing=bins(rows).find(c=>c.rows.some(r=>r.id===s.selected));if(containing)body+=`<rect x="${a.x(containing.x0)+2}" y="${a.y(containing.y1)+2}" width="${a.x(containing.x1)-a.x(containing.x0)-4}" height="${a.y(containing.y0)-a.y(containing.y1)-4}" fill="none" stroke="var(--cdx-ink)" stroke-width="2" pointer-events="none"/>`;
    }else{
      const all=atPeriod(s.period),clip=`cdx-clip-${this.instance}`;
      body+=`<defs><clipPath id="${clip}"><rect x="${a.margin.left-7}" y="${a.margin.top-7}" width="${a.w+14}" height="${a.h+14}"/></clipPath></defs><g clip-path="url(#${clip})">`;
      if(s.mode==='dimensions')all.forEach(row=>body+=this.dot(row,a.x,a.y,false,.12));
      rows.filter(r=>r.id!==s.selected).forEach(row=>body+=this.dot(row,a.x,a.y,false,.75));
      const selected=rows.find(r=>r.id===s.selected);if(selected)body+=this.dot(selected,a.x,a.y,true,1);
      body+='</g>';
      if(this.domain)body+=text(width-18,12,'Focused cell · Full field to return','text-anchor="end"');
    }
    if(!rows.length)body+=text(width/2,height/2,'No matching entities','text-anchor="middle"');
    this.paint(svg,body,width,height);
    if(s.mode==='dimensions')this.drawProfiles();else this.drawHistogram();
  }
  drawHistogram(){
    this.$('[data-side-title]').textContent='Access distribution';this.$('[data-side-note]').textContent='Matching / full population';
    const svg=this.$('[data-side]');svg.setAttribute('aria-label','Access distribution: matching entities in green against the full population in gray');
    const {width,height}=this.dimensions(svg),all=bins(atPeriod(this.state.period),6,1),selected=bins(this.rows(),6,1),max=Math.max(1,...all.map(c=>c.rows.length));
    const left=28,right=12,top=20,bottom=35,w=width-left-right,h=Math.max(30,height-top-bottom);
    let body=`<title>Access distribution, six equal-width bins, counts per bin</title>`;
    [0,max].forEach(t=>body+=text(left-5,top+h-t/max*h+4,t,'text-anchor="end"'));
    all.forEach((c,i)=>{const x=left+i*w/6,bw=w/6-8,base=top+h;body+=`<rect x="${x+4}" y="${base-c.rows.length/max*h}" width="${bw}" height="${c.rows.length/max*h}" fill="var(--cdx-line)"/><rect x="${x+4}" y="${base-selected[i].rows.length/max*h}" width="${bw}" height="${selected[i].rows.length/max*h}" fill="var(--cdx-accent)" opacity=".8"/>`;});
    body+=text(left,height-15,'0')+text(width-right,height-15,'100','text-anchor="end"')+text(width-right,height-1,'Access (index)','text-anchor="end"');
    this.paint(svg,body,width,height);
  }
  drawProfiles(){
    this.$('[data-side-title]').textContent='Six-attribute profiles';this.$('[data-side-note]').textContent=`${this.rows().length} / 72 · fixed domains`;
    const svg=this.$('[data-side]');svg.setAttribute('aria-label','Parallel coordinates: six attributes normalized against fixed domains, with the inspected entity emphasized');
    const {width,height}=this.dimensions(svg),left=20,right=25,top=25,bottom=35,w=width-left-right,h=Math.max(30,height-top-bottom);
    const x=i=>left+i*w/5,y=v=>top+h-v*h;
    let body=`<title>Six-attribute normalized profiles. Inspect the raw values below; normalized percentages do not make the units equivalent.</title>`;
    features.forEach((f,i)=>{body+=line(x(i),top,x(i),top+h,'class="cdx-guide"')+text(x(i),height-15,f.label==='Variation'?'Spread':f.label==='Resource'?'Res.':f.label==='Duration'?'Days':f.label,'text-anchor="middle"');});
    body+=text(left,14,'100%')+text(left,top+h-2,'0%');
    const path=row=>features.map((f,i)=>`${i?'L':'M'}${x(i)},${y(normalize(row,f))}`).join('');
    atPeriod(this.state.period).forEach(row=>body+=`<path d="${path(row)}" fill="none" stroke="var(--cdx-muted)" opacity=".09"/>`);
    this.rows().filter(row=>row.id!==this.state.selected).forEach(row=>body+=`<path d="${path(row)}" fill="none" stroke="${colors[row.cohort]}" opacity=".25"/>`);
    const selected=this.rows().find(row=>row.id===this.state.selected);
    if(selected){body+=`<path d="${path(selected)}" fill="none" stroke="${colors[selected.cohort]}" stroke-width="2.5"/>`;features.forEach((f,i)=>body+=`<circle cx="${x(i)}" cy="${y(normalize(selected,f))}" r="3" fill="${colors[selected.cohort]}"/>`);}
    this.paint(svg,body,width,height);
  }
  drawMotion(from,to,t){
    const svg=this.$('[data-chart]');if(!svg)return;
    const {width,height}=this.dimensions(svg),s=this.state;
    if(s.motion==='frames'){
      const periods=[...new Set(width<600?[0,to]:[0,Math.floor(to/2),to])],horizontal=width>=600,panels=periods.length;
      let body=`<title>Persistent comparison frames for the same sampled entities. Each frame uses identical 0–100 access and outcome scales.</title>`;
      periods.forEach((period,index)=>{
        const pw=horizontal?width/panels:width,ph=horizontal?height:height/panels,dx=horizontal?index*pw:0,dy=horizontal?0:index*ph;
        const a=this.axes(pw,ph,undefined,true);let panel=a.svg;
        motionRows(period,s.cohort).forEach(row=>panel+=this.dot(row,a.x,a.y,row.id===s.selected,row.id===s.selected?1:.28));
        panel+=text(pw-18,12,periodName(period),'text-anchor="end"');body+=`<g transform="translate(${dx},${dy})">${panel}</g>`;
      });
      this.paint(svg,body,width,height);return;
    }
    const a=this.axes(width,height),old=new Map(motionRows(from,s.cohort).map(row=>[row.id,row]));let body=a.svg;
    for(const row of motionRows(to,s.cohort)){
      const start=old.get(row.id)||row,point={...row,access:start.access+(row.access-start.access)*t,outcome:start.outcome+(row.outcome-start.outcome)*t};
      if(row.id===s.selected){const trail=Array.from({length:to+1},(_,period)=>atPeriod(period).find(r=>r.id===row.id));body+=`<path d="${trail.map((r,i)=>`${i?'L':'M'}${a.x(r.access)},${a.y(r.outcome)}`).join('')}" fill="none" stroke="var(--cdx-muted)" stroke-dasharray="3 3" opacity=".5"/>`;}
      body+=this.dot(point,a.x,a.y,row.id===s.selected,row.id===s.selected?1:.5);
    }
    body+=text(width-18,17,periodName(to),'text-anchor="end"');
    this.paint(svg,body,width,height);
  }
  download(){
    const bundle=evidence({...this.state,domain:this.domain,reducedMotion:this.reduced.matches});bundle.view={domain:this.domain,visibleIds:this.visibleRows().map(r=>r.id)};
    const url=URL.createObjectURL(new Blob([JSON.stringify(bundle,null,2)],{type:'application/json'}));
    const a=document.createElement('a');a.href=url;a.download=`codex-${this.state.mode}-period-${this.state.period+1}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
}
if(!customElements.get('codex-experiments'))customElements.define('codex-experiments',CodexExperiments);
