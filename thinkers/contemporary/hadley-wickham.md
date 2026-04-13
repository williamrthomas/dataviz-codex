# Hadley Wickham (1979--present)
> "Tidy datasets are all alike, but every messy dataset is messy in its own way."

## Overview

Hadley Wickham is the most influential figure in making the Grammar of Graphics accessible and practical for data scientists. Born in New Zealand and active in the US from the 2000s onward, Wickham created ggplot2, articulated the "tidy data" philosophy, and authored the layered grammar of graphics that redefined how an entire generation approaches data visualization.

As Chief Scientist at RStudio (now Posit), Wickham defined the modern R data science ecosystem. His work bridges theoretical rigor and practical tooling -- he took [Leland Wilkinson's](../modern/leland-wilkinson.md) abstract Grammar of Graphics and turned it into a compositional system that millions of practitioners use daily.

## Key Contributions

- Created **ggplot2**, the dominant visualization system in academic statistics and data science globally
- Articulated the **tidy data** philosophy: every variable is a column, every observation is a row, every type of observational unit is a table
- Authored the **layered grammar of graphics**, building on [Wilkinson's Grammar of Graphics](../../principles/grammar-of-graphics.md) to provide a compositional framework for building visualizations from first principles
- Built the **tidyverse** ecosystem of R packages (dplyr, tidyr, purrr, readr, and many more), creating a coherent data science workflow
- Served as Chief Scientist at RStudio/Posit, shaping the direction of the R ecosystem

## Major Works

- *ggplot2: Elegant Graphics for Data Analysis* (2009, 2nd edition 2016)
- "Tidy Data" (*Journal of Statistical Software*, 2014)
- The tidyverse ecosystem of R packages (dplyr, tidyr, purrr, etc.)
- *R for Data Science* (with Garrett Grolemund, 2017; 2nd edition 2023)
- *Advanced R* (2014, 2nd edition 2019)

## Core Philosophy

Wickham believes that data science suffers from a lack of principled frameworks. His tidy data philosophy mirrors the relational database philosophy but is framed specifically for data scientists, providing a consistent structure that makes data manipulation, modeling, and visualization dramatically simpler.

His layered grammar of graphics, built on [Wilkinson's](../modern/leland-wilkinson.md) foundational work, provides a compositional framework for building visualizations from first principles rather than choosing from a menu of chart types. In Wickham's system, a visualization is constructed by mapping data to aesthetic properties (position, color, size, shape) and layering geometric objects, statistical transformations, scales, coordinate systems, and faceting specifications.

This approach reframes visualization not as "making charts" but as "mapping data to aesthetics" -- a conceptual shift that has profound implications for how practitioners think about and communicate with data.

## Connections

- Explicitly builds on [Leland Wilkinson's](../modern/leland-wilkinson.md) [Grammar of Graphics](../../principles/grammar-of-graphics.md)
- Part of the [Grammar of Graphics school](../../schools/grammar-of-graphics.md) of visualization thought
- ggplot2 influenced [Mike Bostock's](./mike-bostock.md) thinking about declarative visualization specifications
- Python libraries Altair and Plotnine are direct ports of ggplot2's philosophy, extending the Grammar of Graphics tradition
- Work complements [Jeffrey Heer's](./jeffrey-heer.md) Vega and Vega-Lite, which also implement grammar-of-graphics principles for the web
- Influenced by [William Cleveland's](../modern/william-cleveland.md) statistical graphics research
- Shares [Edward Tufte's](../modern/edward-tufte.md) commitment to principled, data-rich visualization

## Influence

ggplot2 has been downloaded hundreds of millions of times. It has shaped how an entire generation of data scientists thinks about visualization -- not as "making charts" but as "mapping data to aesthetics." The package is the dominant visualization system in academic statistics, bioinformatics, social sciences, and data science education worldwide.

Python's Altair and Plotnine are direct ports of ggplot2's philosophy to Python, demonstrating the cross-language influence of Wickham's ideas. The tidyverse ecosystem has become the de facto standard for data manipulation in R, and its design principles (consistency, composability, human-readable code) have influenced tool design across the data science landscape.

Wickham's work represents the most successful practical implementation of the [Grammar of Graphics](../../principles/grammar-of-graphics.md) vision -- transforming an abstract theoretical framework into a tool that millions use every day.

## Key Quotes

- "Tidy datasets are all alike, but every messy dataset is messy in its own way."
- "The purpose of a grammar is to provide a set of principles for constructing statistical graphics."
- "An important part of data science is making values explicit that are often implicit."

## Further Reading

- [ggplot2 documentation](https://ggplot2.tidyverse.org/)
- [Tidyverse website](https://www.tidyverse.org/)
- [R for Data Science (online)](https://r4ds.hadley.nz/)
- [Wickham, H. (2010). "A Layered Grammar of Graphics." *Journal of Computational and Graphical Statistics*](https://doi.org/10.1198/jcgs.2009.07098)
- [Wickham, H. (2014). "Tidy Data." *Journal of Statistical Software*](https://doi.org/10.18637/jss.v059.i10)
