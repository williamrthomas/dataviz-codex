# Small Multiples

## Definition

A small multiple is a series of charts using the same design -- same scale, same axes, same visual grammar -- that allows direct visual comparison across categories, time periods, or variables. Each panel shows a different slice of the data while maintaining identical visual structure, so that differences between panels are attributable to the data, not to design variation.

> *"Illustrations of postage-stamp size are indexed by category or a label, sequenced over time like the frames of a movie, or ordered by a quantitative variable not used in the single image itself."*
> -- Edward Tufte, *Envisioning Information* (1990), p. 67

## Origin

**Edward Tufte**, *The Visual Display of Quantitative Information* (1983) and *Envisioning Information* (1990), published by Graphics Press. Tufte did not invent the technique -- small multiples appear in scientific illustration as early as the 17th century -- but he named it, codified its design rules, and championed it as one of the most powerful devices in data visualization.

## Detailed Explanation

### The Core Principle

> *"At the heart of quantitative reasoning is a single question: Compared to what? Small multiple designs, multivariate and data bountiful, answer directly by visually enforcing comparisons of changes, of the differences among objects, of the scope of alternatives."*
> -- Edward Tufte, *Envisioning Information* (1990)

Small multiples work because they offload comparison from memory to perception. Instead of asking the viewer to remember what one chart looked like while looking at another, small multiples place both charts side by side (or in a grid) so the eye can flick between them instantly. The cognitive load of comparison drops dramatically.

### Five Design Rules

1. **Share the same scale, axes, and visual grammar across all panels.** If one panel uses a different y-axis range or a different color encoding, comparison becomes invalid. Consistency is non-negotiable.
2. **Make individual panels as small as possible while maintaining legibility** -- the "shrink principle." The smaller each panel, the more panels fit in a single view, and the more comparisons become possible.
3. **Order panels logically** -- by time, geography, magnitude, or category. The ordering itself can reveal patterns (e.g., a time-ordered sequence reveals trends; a magnitude-ordered sequence reveals ranking).
4. **Keep the design of each panel simple**, so the eye focuses on differences between panels rather than complexity within any one. A panel in a small multiple should be simpler than a standalone chart.
5. **Use direct labels, not legends.** Each panel should be self-identifying. A legend forces the viewer to look away from the data to decode it.

### Famous Historical Examples

- **Eadweard Muybridge's *Horse in Motion*** (c. 1878-1886): A photographic series showing sequential frames of a galloping horse. One of the earliest known examples of small multiples, predating Tufte's formalization by a century. Each frame uses identical framing and exposure, allowing direct comparison of the horse's gait phases.
- **Galileo's drawings of Jupiter's moons** (1613): Sequential nightly observations of the positions of the Medicean stars (Jupiter's four largest moons), identically framed and labeled. Galileo used the small-multiple structure to demonstrate orbital motion.
- **Francis Walker's *Statistical Atlas of the United States*** (1870): Early small multiples in demographic cartography -- identically formatted maps showing population density, ethnicity, literacy, and other variables across U.S. counties.

### Modern Implementations

- **Trellis/lattice plots** (Cleveland, 1993): The formal statistical framework for conditioning plots, where a dataset is split by one or more categorical variables and each subset is plotted in its own panel.
- **ggplot2 facets** (Wickham, 2009): `facet_wrap()` and `facet_grid()` are direct implementations of small multiples in the grammar of graphics. `facet_wrap()` wraps panels into a rectangular layout; `facet_grid()` creates a matrix layout conditioned on two variables.
- **Small-multiple maps**: Identical maps colored by different variables or time periods, widely used in epidemiology, election analysis, and climate science.
- **Sparkline grids**: Rows of sparklines in a table, where each row is a small multiple showing a different entity's time series.

## Examples

### Good Examples

- A grid of 50 line charts, one per U.S. state, showing COVID-19 case trajectories over the same time period with the same y-axis scale. The viewer can instantly compare shapes, peaks, and timing across states.
- A trellis of scatterplots showing the relationship between income and life expectancy, faceted by continent. Each panel uses the same axes, making cross-continent comparison immediate.
- A series of small maps showing election results by decade, identically scaled and colored, revealing geographic shifts over time.

### Bad Examples

- A set of charts labeled "Small Multiples" but with different y-axis ranges in each panel. The visual comparison is invalid because the same visual height represents different values.
- Panels so large that only two or three fit on screen at once, defeating the purpose of simultaneous comparison.
- Panels with complex internal structure (multiple overlaid series, annotations, dual axes) that make individual panels hard to parse, let alone compare.

## Practical Application

1. **Use small multiples whenever "compared to what?" is the question.** If the analytical goal is comparison across groups, time, or conditions, small multiples should be the default consideration.
2. **Enforce shared scales rigorously.** Use your plotting library's built-in faceting functions (which handle shared axes automatically) rather than manually assembling separate charts.
3. **Start small, then enlarge if needed.** Apply Tufte's shrink principle: reduce panel size until legibility is at risk, then increase slightly.
4. **Order deliberately.** The panel order is itself a data encoding. Choose an order that supports the analytical question (chronological for trends, ranked for comparison, geographic for spatial patterns).
5. **Label panels directly.** Place the panel identifier (state name, year, category) as a direct panel title, not in a remote legend.

## Common Mistakes

- **Inconsistent scales across panels.** This is the single most common and most damaging error. It makes visual comparison misleading.
- **Too few panels.** A small multiple with only two panels is just two charts side by side. The technique gains power with larger numbers of panels (10, 20, 50, or more).
- **Overly complex panels.** Each panel should be as simple as possible. If a single panel needs a legend, annotations, and multiple data series, it is too complex for the small-multiple format.
- **Poor ordering.** Random or alphabetical ordering when a more meaningful order (by magnitude, by time, by geography) would reveal patterns.

## Related Principles

- [Micro/Macro Readings](micro-macro-readings.md) -- Small multiples enable micro/macro readings: each panel is a micro view, the full grid is the macro view.
- [Analytical Design](analytical-design.md) -- Small multiples directly serve Principle 1 of analytical design: show comparisons.
- [Data-Ink Ratio](data-ink-ratio.md) -- Individual panels in a small multiple should maximize data-ink ratio to keep panels clean and comparable.

## Key Quotes

> *"At the heart of quantitative reasoning is a single question: Compared to what?"*
> -- Edward Tufte, *Envisioning Information* (1990)

> *"Small multiple designs, multivariate and data bountiful, answer directly by visually enforcing comparisons of changes, of the differences among objects, of the scope of alternatives."*
> -- Edward Tufte, *Envisioning Information* (1990)

## Further Reading

- [Edward Tufte](../thinkers/modern/edward-tufte.md) -- Thinker who named and codified small multiples.
- [Hadley Wickham](../thinkers/contemporary/hadley-wickham.md) -- Implemented small multiples as faceting in ggplot2.
- [Minimalist / Tuftean School](../schools/minimalist-tuftean.md) -- The design tradition that champions small multiples.
- Tufte, Edward. *Envisioning Information*. Graphics Press, 1990. Chapter 4: "Small Multiples."
- Cleveland, William. *Visualizing Data*. Hobart Press, 1993. (Trellis displays.)
- Wickham, Hadley. *ggplot2: Elegant Graphics for Data Analysis*. Springer, 2009.
