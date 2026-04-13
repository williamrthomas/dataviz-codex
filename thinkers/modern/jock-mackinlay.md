# Jock Mackinlay (b. ~1953)
> "The principles of good visualization are formal enough to be encoded as rules -- and therefore automated."

## Overview

Jock Mackinlay is the computer scientist who proved that visualization design could be automated. Working at Xerox PARC in the 1980s and 1990s, Mackinlay created APT (A Presentation Tool) -- the first system to *automatically* design graphical presentations from data. His landmark 1986 paper formalized the connection between data types and optimal visual encodings, transforming the informal craft knowledge of chart design into a computational framework with over 1,800 academic citations.

Mackinlay's insight was that the principles articulated by Bertin (in his semiology of graphics) and validated empirically by Cleveland (in his perceptual hierarchy) were precise enough to be implemented as algorithms. APT searched the design space of possible encodings, evaluated them against two criteria -- *expressiveness* (does it accurately represent the data?) and *effectiveness* (does it use the most perceptually accurate encoding?) -- and output the best design. This computationalization of visualization theory bridged the gap between human expertise and machine assistance, laying the intellectual foundation for every modern visualization recommendation engine.

## Key Contributions

- **APT (A Presentation Tool):** The first system to automatically design graphical presentations from relational data, searching the design space for optimal encodings
- **Expressiveness and effectiveness criteria:** Formalized the two key evaluation dimensions for visualization design -- accuracy of representation and perceptual optimality
- **Formalized the connection between data types and visual encodings:** Demonstrated that the mapping from data characteristics to chart forms could be specified as computable rules
- **Tableau's Show Me feature:** Later work at Tableau applied APT principles to commercial visualization software, making automated design recommendations available to millions of users
- **Collaborative research at Xerox PARC:** Part of the Card-Mackinlay-Robertson trio that produced foundational information visualization research

## Major Works

- "Automating the Design of Graphical Presentations of Relational Information" (*ACM Transactions on Graphics*, 1986) -- over 1,800 academic citations; the foundational paper on automated visualization design
- *Readings in Information Visualization: Using Vision to Think* (with Stuart Card and Ben Shneiderman, 1999) -- the foundational anthology of the field
- "The Information Visualizer" (with Stuart Card and George Robertson, 1991)
- Later contributions as lead researcher at Tableau Software

## Core Philosophy

Mackinlay believed that the principles of good visualization were formal enough to be encoded as rules -- and therefore automated. This was not a rejection of human judgment but a recognition that much of what expert designers know about chart selection follows logical patterns that a computer can replicate. His APT system demonstrated this concretely: given a dataset with specific variable types, the system could determine which encodings would be both expressive (faithfully representing the data structure) and effective (exploiting the human perceptual system optimally).

This philosophy computationalized Bertin's semiology and Cleveland's perceptual hierarchy, transforming descriptive knowledge about good design into a generative system that could produce good designs. It represents one of the most significant intellectual leaps in the history of the field: from "here is what makes a good chart" to "here is a system that makes good charts."

## Connections

- **[Stuart Card](./stuart-card.md):** Close collaborator at Xerox PARC; together with Robertson, they formed one of the most productive visualization research trios of the 1980s--90s
- **[Ben Shneiderman](./ben-shneiderman.md):** Co-author of the foundational *Readings in Information Visualization* anthology; shared commitment to making visualization a formal academic discipline
- **[William Cleveland](./william-cleveland.md):** APT directly formalized Cleveland's perceptual hierarchy into an automated design algorithm; Cleveland's experimental rankings became Mackinlay's effectiveness criteria
- **[Jacques Bertin](../historical/jacques-bertin.md):** APT computationalized Bertin's semiology of graphics, transforming Bertin's theoretical framework into executable rules
- **[Jeffrey Heer](../contemporary/jeffrey-heer.md):** The Vega-Lite grammar developed by Heer's group is a direct descendant of Mackinlay's formalism
- **[Mike Bostock](../contemporary/mike-bostock.md):** D3.js and Observable connect to the tradition of formalized visualization that Mackinlay pioneered
- **[Leland Wilkinson](./leland-wilkinson.md):** The Grammar of Graphics and APT represent complementary approaches to formalizing visualization -- Wilkinson through compositional grammar, Mackinlay through automated search
- **[Perceptual Hierarchy](../../principles/perceptual-hierarchy.md):** The empirical ranking that Mackinlay encoded as effectiveness criteria in APT
- **[Grammar of Graphics](../../principles/grammar-of-graphics.md):** A related formalization that addresses the compositional structure of charts
- **[Edward Tufte](./edward-tufte.md):** Tufte's design principles represent human expertise that Mackinlay sought to encode computationally

## Influence

The idea that visualization can be *automated* -- that there is a logic to design that a system can learn -- underlies every modern visualization recommendation engine. Tableau's *Show Me* feature, Google's Chart Suggester, and emerging AI-assisted visualization tools all trace their intellectual lineage to Mackinlay's APT formalism.

Mackinlay's work is the bridge between human-designed charts and algorithmically generated ones. By demonstrating that the informal knowledge of expert designers could be formalized and computed, he opened the door to a future in which visualization systems not only display data but actively assist users in choosing the right display. This vision is increasingly realized in modern tools and will only grow more important as AI capabilities advance.

## Key Quotes

- "An effective presentation is one that exploits the capabilities of the output medium and the human visual system."
- "The expressiveness criterion ensures that a graphical language can express all the information in the data, and only that information."
- "Automated design of graphical presentations is possible because the design process can be formalized as a search through a space of alternatives."

## Further Reading

- Mackinlay, J. "Automating the Design of Graphical Presentations of Relational Information." *ACM Transactions on Graphics* 5, no. 2 (1986): 110--141.
- Card, S. K., Mackinlay, J. D., and Shneiderman, B. *Readings in Information Visualization: Using Vision to Think*. Morgan Kaufmann, 1999.
- [Wikipedia: Jock D. Mackinlay](https://en.wikipedia.org/wiki/Jock_D._Mackinlay)
