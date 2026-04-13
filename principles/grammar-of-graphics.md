# Grammar of Graphics

## Definition

The Grammar of Graphics is a formal framework that decomposes any statistical graphic into a set of orthogonal, combinable components -- data, aesthetics, geometry, statistics, scales, coordinates, and facets. Rather than selecting from a fixed menu of chart types (bar chart, pie chart, scatterplot), the grammar describes any chart as a specific combination of these components. The chart type is an emergent consequence, not a starting point.

## Origin

**Leland Wilkinson**, *The Grammar of Graphics* (1999, 2nd ed. 2005), published by Springer. Wilkinson's book proposed that all statistical graphics can be described by seven orthogonal components, analogous to the way a sentence can be described by its grammatical components (subject, verb, object).

The grammar was subsequently extended and popularized by **Hadley Wickham** in the R package **ggplot2** (2005, book in 2009), which implemented a "layered grammar of graphics" that made the framework practical for everyday data analysis. **Jeffrey Heer** and colleagues further developed the grammar in the context of web-based interactive visualization through **Vega** and **Vega-Lite**.

## Detailed Explanation

### Wilkinson's Seven Components

| Component | Description | Example |
|-----------|-------------|---------|
| **Variables** | Mapping of raw data fields to abstract values. | `x = temperature`, `y = ice_cream_sales` |
| **Algebra** | Operations to combine or transform variables; specification of dimensionality. | Cross products of variables to create multivariate spaces. |
| **Scales** | Mapping of data values into visual space -- determining how numerical ranges map to pixel positions, color ranges, or size ranges. | Linear scale from 0-100 mapped to 0-500px; log scale; categorical ordinal scale. |
| **Statistics** | Transformations applied to the data before rendering -- binning, smoothing, summarizing, aggregating. | Histogram bins, loess smoothing, mean/median computation. |
| **Geometry** | The mark type -- the visual object used to represent each data observation. | Point (scatterplot), line (line chart), bar (bar chart), area (area chart). |
| **Coordinates** | The coordinate system in which marks are placed. | Cartesian (x-y), polar (pie chart = bar chart in polar coordinates), geographic (map projections). |
| **Aesthetics** | Visual attributes of marks -- color, size, shape, transparency, line type. | Color mapped to species; size mapped to population; shape mapped to category. |

### The Key Insight

**Chart type is not primary.** You do not "choose a pie chart." You choose:
- A proportional data variable mapped to the angular aesthetic
- A categorical variable mapped to the fill color
- A bar geometry
- A polar coordinate system

The combination of bar geometry + polar coordinates + angular proportion produces what we call a "pie chart." But this framing reveals that a pie chart is simply a bar chart wrapped in polar coordinates. This insight liberates the designer from the tyranny of fixed chart types and enables the construction of novel, precisely tailored visualizations.

### Wickham's Layered Grammar

Hadley Wickham adapted Wilkinson's grammar for practical use in ggplot2, simplifying it into a layered structure:

1. **Data** -- The dataset to visualize.
2. **Aesthetic mappings** -- Which data variables map to which visual properties (x-position, y-position, color, size, shape).
3. **Geometric objects** -- What marks to draw (geom_point, geom_line, geom_bar, geom_area).
4. **Statistical transformations** -- Computations performed on the data before drawing (stat_bin, stat_smooth, stat_identity).
5. **Position adjustments** -- How overlapping marks are arranged (dodge, stack, jitter).
6. **Scales** -- How data values map to aesthetic values (scale_x_continuous, scale_color_brewer).
7. **Coordinate system** -- The space in which marks are placed (coord_cartesian, coord_polar, coord_flip).
8. **Faceting** -- How to split the data into panels (facet_wrap, facet_grid) -- Wickham's addition to Wilkinson's grammar, formalizing small multiples.

The layered grammar adds the concept of **layers**: a single plot can contain multiple layers, each with its own data, aesthetic mapping, geometry, and statistical transformation. This enables overlays (e.g., raw points + smoothed line + confidence band) within a single coherent framework.

### Why It Matters

Before the Grammar of Graphics, chart creation was a taxonomy problem: you identified your chart type from a catalog, then fit your data into that type's template. This approach had two major limitations:

1. **Rigid categories.** If your data did not fit neatly into a standard chart type, you were stuck. Novel combinations (e.g., a dot plot with jittered points, faceted by category, with a loess smooth overlay) were difficult to express.
2. **False distinctions.** "Bar chart" and "pie chart" were treated as fundamentally different things, when they are actually the same data encoding in different coordinate systems.

The grammar dissolves these limitations. Any combination of components produces a valid chart. This combinatorial power is what makes ggplot2, Vega-Lite, and other grammar-based tools so expressive.

## Examples

### Good Examples

- A ggplot2 specification: `ggplot(data, aes(x=date, y=price, color=stock)) + geom_line() + scale_y_log10() + facet_wrap(~sector)`. This concise specification produces a faceted log-scale line chart of stock prices by sector -- a visualization that would be difficult to describe in a chart-type taxonomy.
- A Vega-Lite specification where changing a single property (the coordinate system from Cartesian to polar) transforms a bar chart into a pie chart, revealing their structural equivalence.
- A layered chart with raw data points (geom_point), a smoothed trend line (geom_smooth), and a rug plot (geom_rug) -- three geometries sharing the same data and aesthetic mappings.

### Bad Examples

- A charting tool that offers a fixed menu of 12 chart types with no ability to combine or customize components. The user is forced to choose the "closest" chart type rather than specifying exactly what they need.
- A visualization specification that conflates data transformation with visual encoding, making it impossible to separate the statistical computation from the rendering.

## Practical Application

1. **Think in components, not chart types.** Before creating a visualization, identify: What data? What aesthetic mappings? What geometry? What coordinate system? What statistical transformations? What faceting?
2. **Use grammar-based tools.** ggplot2 (R), Vega-Lite (JavaScript), Altair (Python), and Plotnine (Python) all implement the grammar of graphics. They force you to think in components and reward combinatorial experimentation.
3. **Layer deliberately.** Add layers incrementally. Start with the data (geom_point), then add summary (geom_smooth), then add context (geom_hline for reference lines). Each layer should serve a purpose.
4. **Leverage faceting.** Wickham's addition of faceting as a grammar component formalizes small multiples. Use facet_wrap() and facet_grid() to create comparison displays.
5. **Document your grammar.** When sharing or publishing a visualization, include the grammar specification (the ggplot2 code, the Vega-Lite JSON). This makes the visualization fully reproducible.

## Common Mistakes

- **Choosing the chart type first.** The grammar's key insight is that chart type is emergent, not primary. Starting with "I want a bar chart" constrains the design before the data has been considered.
- **Ignoring statistical transformations.** Many users plot raw data without considering whether binning, smoothing, or aggregation would reveal patterns more clearly. The statistics component is a first-class part of the grammar.
- **Overloading a single layer.** Encoding too many variables in a single geometric layer (color + size + shape + transparency) produces visual overload. Consider using faceting (small multiples) instead of cramming everything into one panel.
- **Confusing scale and geometry.** A log scale is a scale transformation, not a geometry change. Applying a log scale to a bar chart changes how values are mapped to positions, not what marks are drawn.

## Related Principles

- [Small Multiples](small-multiples.md) -- Faceting in the grammar of graphics is the formal implementation of small multiples.
- [Perceptual Hierarchy](perceptual-hierarchy.md) -- The grammar's aesthetic mappings should follow the perceptual hierarchy: map the most important variable to the most accurately perceived channel (position > length > area > color).
- [Analytical Design](analytical-design.md) -- The grammar provides the formal machinery to implement Tufte's principles of analytical design: comparisons (faceting), multivariate analysis (multiple aesthetics), and integration of evidence (layering).
- [Pre-Attentive Processing](pre-attentive-processing.md) -- The aesthetic mappings in the grammar correspond to pre-attentive visual channels.

## Key Quotes

> *"In brief, the grammar tells us that a statistical graphic is a mapping from data to aesthetic attributes (colour, shape, size) of geometric objects (points, lines, bars)."*
> -- Hadley Wickham, *ggplot2: Elegant Graphics for Data Analysis* (2009)

> *"A pie chart is a bar chart plotted in polar coordinates."*
> -- Common illustration of the grammar's insight

## Further Reading

- [Leland Wilkinson](../thinkers/modern/leland-wilkinson.md) -- Creator of the Grammar of Graphics.
- [Hadley Wickham](../thinkers/contemporary/hadley-wickham.md) -- Implemented the layered grammar in ggplot2.
- [Jeffrey Heer](../thinkers/contemporary/jeffrey-heer.md) -- Extended the grammar to interactive web visualization through Vega and Vega-Lite.
- [Grammar of Graphics School](../schools/grammar-of-graphics.md) -- The intellectual tradition built on Wilkinson's framework.
- Wilkinson, Leland. *The Grammar of Graphics*. 2nd ed. Springer, 2005.
- Wickham, Hadley. *ggplot2: Elegant Graphics for Data Analysis*. 3rd ed. Springer, 2016.
- Satyanarayan, Arvind, et al. "Vega-Lite: A Grammar of Interactive Graphics." *IEEE Transactions on Visualization and Computer Graphics*, 2017.
