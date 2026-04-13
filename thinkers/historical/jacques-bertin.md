# Jacques Bertin (1918--2010)
> Matching visual variable to data type is the central act of visualization design.

## Overview

Jacques Bertin was a French cartographer and theorist who founded the theoretical framework for information graphics. His magnum opus, *Semiologie graphique* (1967, translated as *Semiology of Graphics* in 1983), is the most-cited foundational text in the field of data visualization. In it, Bertin approached graphics as a semiotic system -- a language with its own grammar -- and identified the seven "visual variables" through which data can be encoded. This framework gave the field its theoretical vocabulary and remains the substrate beneath virtually all academic visualization research.

Bertin's contribution was not the invention of new chart types (as [Playfair](./william-playfair.md) and [Nightingale](./florence-nightingale.md) had done) or the creation of individual masterpieces (as [Minard](./charles-joseph-minard.md) and [Snow](./john-snow.md) had done). His contribution was more fundamental: he provided the *theory* that explains why some visualizations work and others do not. By identifying the properties of each visual variable -- which can represent ordered relationships, which can only represent categorical differences, which are most effective for quantitative data -- Bertin transformed visualization from an intuitive craft into a principled discipline.

## Key Contributions

- **Founded the theoretical framework for information graphics** -- providing the field with its first rigorous, systematic theory
- **Identified the seven visual variables** through which data can be encoded:
  1. **Position** (X/Y) -- the most powerful variable for quantitative data
  2. **Size** -- effective for ordered and quantitative relationships
  3. **Shape** -- effective for categorical (nominal) differences only
  4. **Value** (lightness/darkness) -- effective for ordered relationships
  5. **Color** (hue) -- effective for categorical differences; less effective for ordered data
  6. **Orientation** -- effective for categorical differences
  7. **Texture** -- effective for categorical differences
- **Established that each visual variable has different perceptual properties** -- some can represent ordered relationships (size, value), others only categorical differences (shape)
- **Articulated the key insight that matching visual variable to data type is the central act of visualization design**
- **Defined "efficiency" as the goal** -- the fastest correct understanding of the data

## Major Works

- *Semiologie graphique: Les diagrammes, les reseaux, les cartes* (1967) -- translated as *Semiology of Graphics* (1983); the most-cited foundational text in data visualization
- *La Graphique et le traitement graphique de l'information* (1977) -- extended his framework to information processing and graphic analysis

## Core Philosophy

Bertin approached graphics as a semiotic system -- a language with its own grammar. His central insight was that the act of designing a visualization is fundamentally an act of *encoding*: choosing which visual variable to use for which dimension of data. This choice is not arbitrary -- each visual variable has specific perceptual properties that make it suitable for certain data types and unsuitable for others.

The seven visual variables and their properties:

- **Position** (X/Y): The most powerful and accurate variable. Can represent quantitative, ordered, and categorical data. This is why scatterplots and time-series charts are so effective.
- **Size**: Effective for representing ordered and quantitative relationships, but less precise than position. Area judgments are systematically biased (a finding later confirmed by [Cleveland](../modern/william-cleveland.md)).
- **Shape**: Can represent only categorical (nominal) differences. A circle vs. a triangle distinguishes categories but cannot convey "more" or "less."
- **Value** (lightness/darkness): Effective for ordered relationships. Darker = more is a natural perceptual mapping.
- **Color** (hue): Effective for categorical differences (red vs. blue distinguishes categories). Much less effective for ordered data unless carefully designed.
- **Orientation**: Effective for categorical differences (horizontal vs. diagonal lines).
- **Texture**: Effective for categorical differences (dotted vs. hatched patterns).

Bertin's goal was "efficiency" -- defined as the fastest correct understanding of the data. A visualization is efficient when the viewer can extract the intended information quickly and accurately. Inefficient visualizations force viewers to decode, count, or compare in ways the visual system cannot perform automatically.

## Connections

- Bertin's visual variables **directly influenced Jock Mackinlay's APT system** -- the first automated visualization design tool, which formalized Bertin's framework into computable rules
- **[William Cleveland](../modern/william-cleveland.md) and Robert McGill's perceptual hierarchy** built on and empirically validated Bertin's visual variables -- Cleveland tested which variables humans actually decode most accurately
- **Tamara Munzner's textbook** (*Visualization Analysis and Design*, 2014) cites Bertin as foundational -- his framework is the starting point for her systematic approach
- Bertin's work is the **theoretical substrate beneath most academic visualization research** -- the vocabulary of "visual encoding" originates with him
- His framework provides the theoretical basis for the [Grammar of Graphics](../../schools/grammar-of-graphics.md) -- Leland Wilkinson's compositional system maps data to Bertin's visual variables via "aesthetics"
- The [scientific/perceptual school](../../schools/scientific-perceptual.md) takes Bertin's framework and subjects it to empirical testing -- measuring which visual variables humans actually perceive most accurately
- The [minimalist/Tuftean school](../../schools/minimalist-tuftean.md) draws on Bertin's efficiency principle -- the idea that unnecessary visual elements impede fast, correct understanding
- [Edward Tufte's](../modern/edward-tufte.md) [data-ink ratio](../../principles/data-ink-ratio.md) principle is compatible with Bertin's efficiency framework, though Tufte's focus is on removing non-data elements while Bertin's focus is on choosing the right data elements
- Bertin theorized the visual language that [William Playfair](./william-playfair.md) invented intuitively -- explaining *why* Playfair's charts work
- His concept of visual variables gives theoretical grounding to the [small multiples](../../principles/small-multiples.md) technique -- using position (the most powerful variable) to separate facets of data

## Influence

The concept of "visual encoding" -- choosing the right visual variable for the right data type -- is the organizing principle of virtually all visualization design education today. Bertin gave the field its theoretical vocabulary.

His influence radiates outward in several directions:

1. **Academic visualization research**: Bertin's framework is the starting point for virtually every academic paper on visualization design. The vocabulary of "visual encoding," "visual variables," and "mark types" originates with him.
2. **Automated visualization design**: Mackinlay's APT, Tableau's Show Me feature, and modern AI-assisted visualization tools all implement computational versions of Bertin's matching logic.
3. **Grammar of Graphics**: Wilkinson's formal grammar and Wickham's ggplot2 both map data to visual encodings in a way that directly descends from Bertin's semiotic framework. Every `aes()` call in ggplot2 is an act of Bertinian encoding.
4. **Visualization pedagogy**: Every visualization course that teaches students to "match encoding to data type" is teaching Bertin's central insight, whether or not they cite him by name.
5. **Perceptual research**: Cleveland and McGill's experiments, which produced the perceptual hierarchy that guides modern chart design, were designed to empirically test the effectiveness rankings that Bertin proposed theoretically.

Bertin's *Semiology of Graphics* remains, more than half a century after its publication, the single most important theoretical text in the field.

## Key Quotes

- "A graphic is not drawn once and for all: it is constructed and reconstructed until it reveals all the relationships constituted by the interplay of the data."
- On efficiency: the goal is "the fastest correct understanding" -- a visualization succeeds when the viewer can extract the intended information quickly and accurately
- "The graphic constitutes one of the basic sign-systems conceived by the human mind for the purposes of storing, understanding, and communicating essential information."

## Further Reading

- Bertin, Jacques. *Semiology of Graphics: Diagrams, Networks, Maps* (1967/1983) -- the foundational text; the 1983 English translation by William Berg is the standard reference
- Bertin, Jacques. *La Graphique et le traitement graphique de l'information* (1977)
- MacEachren, Alan. "Visualization in Modern Cartography" -- discusses Bertin's influence on cartographic theory
- Friendly, Michael. "The Golden Age of Statistical Graphics" (*Statistical Science*, 2008) -- places Bertin in historical context
- Cleveland, William and McGill, Robert. "Graphical Perception: Theory, Experimentation, and Application" (1984) -- the empirical validation of Bertin's theoretical framework
- Munzner, Tamara. *Visualization Analysis and Design* (2014) -- the modern textbook most directly built on Bertin's foundation
- Wilkinson, Leland. *The Grammar of Graphics* (1999/2005) -- the formal grammar that operationalizes Bertin's framework
