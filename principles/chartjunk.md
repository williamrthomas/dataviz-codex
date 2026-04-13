# Chartjunk

## Definition

Chartjunk is all the non-data-ink and redundant data-ink in a graphic -- the visual clutter that obscures, competes with, or replaces the data. The term was coined by Edward Tufte to describe every element of a chart that does not contribute to the viewer's understanding of the data being presented.

> *"Chartjunk flows from the premise that audiences can be charmed, distracted, or fooled by means of content-free misdirection."*
> -- Edward Tufte, *Beautiful Evidence* (2006)

## Origin

**Edward Tufte**, *The Visual Display of Quantitative Information* (1983), published by Graphics Press. The concept was expanded and reinforced in subsequent books, particularly *Beautiful Evidence* (2006). Tufte's identification and taxonomy of chartjunk is one of the most influential contributions to the field of data visualization.

## Detailed Explanation

Tufte argues that chartjunk is not merely a neutral aesthetic choice. It actively damages the graphic in three ways:

1. **It obscures the data.** Decorative elements compete with data elements for the viewer's visual attention.
2. **It signals dishonesty.** Decoration implies that the data alone is insufficient to hold attention -- that it must be propped up with spectacle.
3. **It destroys credibility.** Audiences who notice decorative excess may question whether the underlying data is equally unreliable.

### Categories of Chartjunk

| Type | Description | Example |
|------|-------------|---------|
| **Moire vibration** | Repetitive cross-hatching patterns that create optical illusions and visual discomfort | Heavy diagonal line fills in bar charts that shimmer when printed |
| **Heavy grid lines** | Grid lines that are as visually prominent as (or more prominent than) the data | Dark black grid overlaid on a line chart, competing with the trend line |
| **Unintentional optical art** | Borders, frames, and background colors that generate visual noise and interference patterns | Thick black borders around every chart element creating a cage-like effect |
| **Ducks** | Graphics whose overall form is a visual pun or spectacle rather than a data display | A bar chart shaped like a rollercoaster; novelty infographics where the container shape dominates the data |
| **Self-promoting graphics** | Design that showcases the designer's cleverness rather than the data | Gratuitously curved histogram bars; ornate custom axes |
| **Decorative fills** | Unnecessary shading, gradient fills, textures, or images used as backgrounds | Stock photos placed behind bar charts; gradient fills inside pie slices |
| **Phony dimensionality** | 3D effects applied to inherently 2D data, distorting perception | 3D pie charts, 3D bar charts, 3D ribbons -- all of which make accurate value comparison harder |

The term "ducks" comes from architecture: the Long Island duck shop, built in the shape of a giant duck, where the building's form overwhelms its function. In chartjunk terms, a "duck" is a graphic where the overall visual form takes priority over data communication.

### Why Chartjunk Matters

Chartjunk does not simply clutter. It actively lies. When a pie chart is rendered in 3D, the perspective distortion makes slices in the front appear larger than slices in the back, even when they represent the same value. When a bar chart uses gradient fills, the gradient suggests variation within a single value. When a chart is placed on a photographic background, the photograph competes with the data for the viewer's limited visual processing capacity.

The cumulative effect is that viewers spend cognitive effort parsing decoration rather than understanding data. In high-stakes environments -- medical dashboards, financial reports, engineering displays -- this misallocation of attention can have serious consequences.

## Examples

### Good Examples

- A clean bar chart with no borders, no gridlines, direct value labels, and a single neutral color.
- A line chart where the data lines are the dominant visual element and all supporting structure is muted to light gray.
- A scatterplot with no background fill, minimal axis decoration, and direct annotation of notable points.

### Bad Examples

- A 3D pie chart with gradient fills, drop shadows, an exploded slice, and a photographic background. Every one of these elements is chartjunk.
- A bar chart where each bar uses a different cross-hatch pattern, creating moire vibration when printed or displayed on screen.
- An infographic that shapes the data container as a novelty object (a thermometer, a fuel gauge, a speedometer) at the cost of accurate scale perception.

## The Bateman et al. Counter-Argument

In 2010, Scott Bateman and colleagues published "Useful Junk? The Effects of Visual Embellishment on Comprehension and Memorability of Charts" (CHI 2010). Their study found that embellished charts (in the style of Nigel Holmes) were recalled more accurately after a two-to-three-week delay than their plain equivalents.

This study is frequently cited as a rebuttal to Tufte. However, it is important to note the nuance: the embellishments tested were thematically relevant illustrations that reinforced the chart's message (e.g., a chart about oil with oil-themed imagery), not arbitrary decoration. The study measured recall, not accuracy of immediate value extraction. Tufte's argument is primarily about analytical accuracy and honesty; the Bateman finding speaks to memorability, which is a different (though not irrelevant) dimension.

The debate remains active. Most practitioners adopt a middle ground: avoid decoration that distorts data or competes with it, but recognize that thematically relevant and carefully controlled embellishment can serve certain communication goals.

## Practical Application

1. **Default to plain.** Start every chart with zero decoration and add elements only when they serve a clear communicative purpose.
2. **Never use 3D effects on 2D data.** There is no case where a 3D pie chart or 3D bar chart improves data communication. The perspective distortion always misleads.
3. **Audit gradients and fills.** If a fill or gradient does not encode a data variable, replace it with a flat color or remove it.
4. **Eliminate moire patterns.** If your chart uses cross-hatching or patterned fills, test the output at final resolution. If patterns vibrate or shimmer, replace them with solid colors.
5. **Question every border.** Chart borders, cell borders, and axis frames are frequently unnecessary. Remove them and see if the chart still communicates clearly.
6. **Separate decoration from data.** If an illustration or image is genuinely useful for context, place it adjacent to the chart rather than behind or within it.

## Common Mistakes

- **Assuming all decoration is chartjunk.** Color that encodes a data variable is not chartjunk. A legend is not chartjunk (though direct labeling may be better). Structural elements that aid value reading are not chartjunk. The test is whether the element contributes to understanding the data.
- **Using software defaults uncritically.** Many charting tools ship with default styles that include borders, gridlines, gradient fills, and other elements that meet Tufte's definition of chartjunk. Accepting defaults without auditing them is a common source of chartjunk.
- **Conflating minimalism with quality.** Removing all decoration from a chart does not automatically make it good. A chart can be free of chartjunk yet still be poorly designed (bad scale, wrong chart type, misleading axis).

## Related Principles

- [Data-Ink Ratio](data-ink-ratio.md) -- Chartjunk is the complement of data-ink; it is the non-data-ink that the data-ink ratio seeks to minimize.
- [Lie Factor](lie-factor.md) -- Phony dimensionality and other forms of chartjunk are frequent sources of high Lie Factors.
- [Smallest Effective Difference](smallest-effective-difference.md) -- Where structural elements must remain, apply the smallest effective visual weight.
- [Analytical Design](analytical-design.md) -- Chartjunk is fundamentally incompatible with design that assists analytical thinking.

## Key Quotes

> *"Chartjunk flows from the premise that audiences can be charmed, distracted, or fooled by means of content-free misdirection: garish colors, designer colors, corny clip-art, generic decoration, phony dimensionality."*
> -- Edward Tufte, *Beautiful Evidence* (2006)

> *"Decoration signals to the viewer that the data alone is insufficient to hold attention -- that it must be propped up with spectacle."*
> -- Paraphrase of Tufte's argument in *VDQI* (1983)

> *"Lying graphics cheapen the graphical art everywhere."*
> -- Edward Tufte, *The Visual Display of Quantitative Information* (1983)

## Further Reading

- [Edward Tufte](../thinkers/modern/edward-tufte.md) -- Full thinker profile.
- [Minimalist / Tuftean School](../schools/minimalist-tuftean.md) -- The intellectual tradition behind the critique of chartjunk.
- Tufte, Edward. *The Visual Display of Quantitative Information*. Graphics Press, 1983. Chapter 5: "Chartjunk: Vibrations, Grids, and Ducks."
- Bateman, Scott, et al. "Useful Junk? The Effects of Visual Embellishment on Comprehension and Memorability of Charts." *Proceedings of CHI 2010*.
