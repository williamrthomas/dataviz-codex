# Practitioner Path

For working data analysts, data scientists, and business intelligence professionals ready to level up their visualization skills. This path emphasizes tools, applied principles, practical projects, and workflow habits that will immediately improve your output.

**Prerequisites:** Complete the [Foundations Path](foundations.md) first.

**Time estimate:** 4-6 weeks of reading, 6-8 weeks of practice.

---

## Phase 1: Tools to Learn

Master at least two of these four tools. Each represents a different philosophy and capability set.

### 1. ggplot2 (R)
- **Creator:** [Hadley Wickham](../thinkers/contemporary/hadley-wickham.md)
- **School:** [Grammar of Graphics](../schools/grammar-of-graphics.md)
- **Why learn it:** The most expressive statistical visualization tool available. ggplot2 teaches you to think about visualization as composition — data + aesthetic mappings + geometric objects + scales + coordinates + facets — rather than as a menu of chart types. Even if you never use R professionally, learning ggplot2 will change how you think.
- **Key text:** [*ggplot2: Elegant Graphics for Data Analysis*](../library/intermediate.md) (Wickham, 2009/2016)
- **Companion principle:** [Grammar of Graphics](../principles/grammar-of-graphics.md)

### 2. D3.js (JavaScript)
- **Creator:** [Mike Bostock](../thinkers/contemporary/mike-bostock.md)
- **Why learn it:** The most powerful and flexible web visualization library. D3 gives you complete control over every pixel, enabling custom interactive visualizations that no drag-and-drop tool can match. It is the standard for newsroom and publication-quality web visualization.
- **Key text:** [*D3.js in Action*](../library/reference.md) (Meeks, 2015/2017)
- **Companion principle:** [Interaction Design](../principles/interaction-design.md)

### 3. Tableau
- **Why learn it:** The industry standard for business intelligence visualization. Tableau's drag-and-drop interface implements Grammar of Graphics concepts (it was influenced by VizQL, a visual query language) and makes sophisticated visualizations accessible without code. Essential for anyone in a corporate analytics role.
- **Companion principle:** [Interaction Design](../principles/interaction-design.md)

### 4. Observable
- **Creator:** [Mike Bostock](../thinkers/contemporary/mike-bostock.md)
- **Why learn it:** The modern evolution of D3, built on reactive notebooks. Observable Plot simplifies the Grammar of Graphics for the web. Observable notebooks combine code, data, and visualization in a shareable, explorable format that is ideal for analytical communication.
- **Companion principle:** [Grammar of Graphics](../principles/grammar-of-graphics.md)

---

## Phase 2: Books to Read

These four books deepen the foundations and build applied expertise.

### 1. ggplot2: Elegant Graphics for Data Analysis
- **Author:** [Hadley Wickham](../thinkers/contemporary/hadley-wickham.md) (2009/2016)
- **Library entry:** [Intermediate Reading List](../library/intermediate.md)
- **Focus:** The Grammar of Graphics in practice. Not just an R manual — a way of thinking about visualization composition that transfers to every tool.

### 2. Show Me the Numbers
- **Author:** [Stephen Few](../thinkers/contemporary/stephen-few.md) (2004/2012)
- **Library entry:** [Intermediate Reading List](../library/intermediate.md)
- **Focus:** Rigorous, perceptually grounded guide to tables and graphs for quantitative analysis. The most practically useful book for day-to-day analytical chart-making.

### 3. Information Dashboard Design
- **Author:** [Stephen Few](../thinkers/contemporary/stephen-few.md) (2006/2013)
- **Library entry:** [Intermediate Reading List](../library/intermediate.md)
- **Focus:** The definitive reference on dashboard design. If you build dashboards — and most analysts do — this book will save you from the most common mistakes.

### 4. Data Points
- **Author:** [Nathan Yau](../thinkers/contemporary/nathan-yau.md) (2013)
- **Library entry:** [Intermediate Reading List](../library/intermediate.md)
- **Focus:** Bridges statistical understanding and design thinking. Strong on audience analysis, purpose-driven design, and the human dimension of data representation.

---

## Phase 3: Principles to Master

Go deeper on these five principles. You encountered some in the Foundations path; now internalize them for daily practice.

### 1. [Grammar of Graphics](../principles/grammar-of-graphics.md)
- **Why master it:** The compositional approach frees you from thinking in chart types. Instead of asking "should I make a bar chart or a line chart?" you ask "what data, what encoding, what geometry, what scale?" This is a more powerful and flexible way to think.
- **Key thinkers:** [Wilkinson](../thinkers/modern/leland-wilkinson.md), [Wickham](../thinkers/contemporary/hadley-wickham.md)

### 2. [Interaction Design](../principles/interaction-design.md)
- **Why master it:** "Overview first, zoom and filter, then details on demand" — [Shneiderman's](../thinkers/modern/ben-shneiderman.md) visual information seeking mantra applies to every interactive visualization and dashboard you build.
- **Key thinkers:** [Shneiderman](../thinkers/modern/ben-shneiderman.md), [Bostock](../thinkers/contemporary/mike-bostock.md)

### 3. [Accessibility](../principles/accessibility.md)
- **Why master it:** Approximately 8% of men and 0.5% of women have color vision deficiency. Visualizations that rely solely on color to encode data exclude millions of users. Accessibility is both ethical and practical — accessible charts are often clearer for everyone.

### 4. [Color Theory](../principles/color-theory.md)
- **Why master it:** Color is the most misused visual channel. Understanding sequential, diverging, and categorical palettes — and when to use each — eliminates the most common color mistakes in analytical visualization.

### 5. [Analytical Design](../principles/analytical-design.md)
- **Why master it:** Tufte's six principles of analytical design — show comparisons, show causality, show multivariate data, integrate evidence, document everything, and content counts most — are the gold standard for analytical visualization.
- **Key thinker:** [Tufte](../thinkers/modern/edward-tufte.md)

---

## Phase 4: Projects to Build

Practice is essential. Build these four projects to internalize the principles.

### Project 1: Redesign a Bad Chart
- **Goal:** Find a poorly designed chart in the wild (news, corporate reports, social media) and redesign it.
- **Principles applied:** [Data-Ink Ratio](../principles/data-ink-ratio.md), [Chartjunk](../principles/chartjunk.md), [Perceptual Hierarchy](../principles/perceptual-hierarchy.md)
- **Deliverable:** Before-and-after comparison with written explanation of every design decision.

### Project 2: Create a Small Multiples Dashboard
- **Goal:** Take a dataset with multiple categories or time periods and create a [small multiples](../principles/small-multiples.md) display.
- **Principles applied:** [Small Multiples](../principles/small-multiples.md), [Grammar of Graphics](../principles/grammar-of-graphics.md), consistent scales
- **Deliverable:** A faceted display in ggplot2, Tableau, or D3.

### Project 3: Build an Interactive Exploration Tool
- **Goal:** Create an interactive visualization that follows Shneiderman's mantra: overview first, zoom and filter, then details on demand.
- **Principles applied:** [Interaction Design](../principles/interaction-design.md), [Accessibility](../principles/accessibility.md)
- **Deliverable:** A working interactive visualization in D3, Observable, or Tableau.

### Project 4: Create a Sparkline Table
- **Goal:** Build a table that embeds [sparklines](../principles/sparklines.md) — word-sized, high-resolution graphics — inline with numeric data.
- **Principles applied:** [Sparklines](../principles/sparklines.md), [Micro/Macro Readings](../principles/micro-macro-readings.md), data density
- **Deliverable:** A publication-quality table with embedded sparklines.

---

## Phase 5: Workflows to Adopt

### Tidy Data Philosophy
- Keep data in tidy format (each variable is a column, each observation is a row, each type of observational unit is a table).
- Tidy data is the foundation of the [Grammar of Graphics](../principles/grammar-of-graphics.md) workflow. ggplot2, Vega-Lite, and Observable Plot all assume tidy data.
- **Key thinker:** [Hadley Wickham](../thinkers/contemporary/hadley-wickham.md) (Wickham, 2014, "Tidy Data")

### Study Hall Meetings
- Establish a regular "data viz study hall" with colleagues to critique each other's visualizations. Use the [Principles](../principles/README.md) as a shared vocabulary for feedback.
- This is how skills improve fastest — through structured peer critique.

### Direct Labeling Over Legends
- Label data directly on the chart whenever possible, rather than forcing the reader to decode a separate legend.
- This reduces cognitive load and follows the [Smallest Effective Difference](../principles/smallest-effective-difference.md) principle.
- Example: label each line in a line chart at its endpoint rather than using a color-coded legend.

---

## Next Steps

- For deeper theoretical grounding, see the [Advanced Path](advanced.md)
- For design-focused skills, see the [Designer Path](designer.md)
- For the full reading list, see the [Library](../library/README.md)

---

*Back to the [Curriculum overview](README.md) | Previous: [Foundations](foundations.md) | Next: [Designer](designer.md)*
