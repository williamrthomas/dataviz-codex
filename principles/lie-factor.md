# Lie Factor

## Definition

The Lie Factor quantifies the degree to which a graphic misrepresents the data it displays. It is the ratio of the size of the visual effect to the size of the data effect:

```
Lie Factor = (Size of effect shown in graphic) / (Size of effect in data)
```

A Lie Factor of exactly 1.0 represents perfect visual honesty: the graphic shows the data change at its true magnitude. Values between 0.95 and 1.05 are considered acceptable. Outside that range, the graphic is misleading -- whether the distortion is intentional or the result of carelessness.

## Origin

**Edward Tufte**, *The Visual Display of Quantitative Information* (1983), published by Graphics Press. The Lie Factor is one of Tufte's most cited quantitative tools, providing a precise, testable measure of graphic integrity. It remains the standard metric for assessing visual honesty in data visualization.

## Detailed Explanation

### The Formula in Practice

To compute the Lie Factor:

1. Measure the percentage change in the data being represented.
2. Measure the percentage change in the visual encoding (length, area, volume, position) used to represent that data.
3. Divide the visual change by the data change.

**Example:** If the data increases by 50% but the bar in the chart grows by 200%, the Lie Factor is 200% / 50% = 4.0. The graphic exaggerates the data change by a factor of four.

### Canonical Examples

Tufte provides several devastating examples of high Lie Factors in published graphics:

| Graphic | Data Change | Visual Change | Lie Factor |
|---------|-------------|---------------|------------|
| **NYT fuel economy standards (1978)** | 18 to 27.5 mpg = +53% | Line lengths increased by +783% | **14.8** |
| **Doctor-figure health graphic** | +125% increase in doctors | Area increase of +406% | **3.8** |
| **3D barrel graphic (oil price)** | +554% price increase | Perceived volumetric increase of +27,000% | **~48.8** |

The NYT fuel economy example is especially instructive: the graphic used a "road" that narrowed in perspective, so that the difference between 18 mpg and 27.5 mpg was shown as a dramatic visual plunge rather than the modest 53% change it actually was. The Lie Factor of 14.8 means the graphic exaggerated the visual effect by nearly fifteen times.

The 3D barrel example demonstrates the most common geometric trap: when a one-dimensional quantity (price) is encoded as a three-dimensional object (a barrel), the visual encoding cubes the data change. A 554% increase in height, width, and depth produces a 27,000% increase in perceived volume.

### Common Sources of High Lie Factors

1. **Using area or volume to represent a one-dimensional quantity.** This is the single most common source of high Lie Factors. When a data value doubles, a proportional symbol's area quadruples (squaring) and its volume increases eightfold (cubing). Unless the viewer is explicitly informed that area or volume encodes the value, the visual effect dramatically overstates the data.

2. **Perspective distortion in 3D charts.** 3D pie charts, 3D bar charts, and 3D ribbon charts all introduce perspective foreshortening that makes elements in the foreground appear disproportionately larger than elements in the background.

3. **Truncated y-axes.** Starting the y-axis at a non-zero baseline exaggerates differences between values. A bar chart showing values of 98, 99, and 100 with a y-axis starting at 97 makes the difference between 98 and 100 appear to be half the chart height, when it is actually a 2% change.

4. **Non-proportional symbols.** Using symbols (icons, pictures, pictograms) whose size varies in a non-linear relationship to the data they represent.

5. **Aspect ratio manipulation.** Stretching or compressing the x-axis or y-axis to exaggerate or minimize trends.

## Examples

### Good Examples

- A bar chart with a zero baseline, consistent bar widths, and a Lie Factor very close to 1.0. A value that is twice as large is represented by a bar that is twice as tall.
- A proportional symbol map where symbol area (not radius) is proportional to the data value, with a legend explicitly showing the area-to-value mapping.
- A line chart with aspect ratio chosen by banking to 45 degrees, minimizing distortion of perceived slopes.

### Bad Examples

- A 3D pie chart where the front slice appears 40% larger than an identically valued back slice due to perspective foreshortening.
- A pictograph showing doctors where a "twice as many doctors" data point is represented by a doctor figure that is twice as tall AND twice as wide, producing a four-times-larger visual impression (Lie Factor = 2.0 at minimum).
- A time series where the y-axis starts at 95 rather than 0, making a 3% increase appear to fill half the chart area.

## Practical Application

1. **Always compute the Lie Factor.** For any important graphic, calculate the visual percentage change and the data percentage change, then divide. If the ratio is outside 0.95-1.05, redesign.
2. **Use zero baselines for bar charts.** Bar charts encode value as length from a baseline. If the baseline is not zero, length no longer corresponds to value, and the Lie Factor climbs.
3. **Encode one-dimensional data with one-dimensional marks.** Use length (bars) or position (dots) for quantities. Avoid area (bubbles, proportional symbols) unless you carefully ensure that the area, not the radius, is proportional to the data.
4. **Never use 3D effects on 2D data.** 3D perspective distortion makes accurate perception impossible and always inflates the Lie Factor.
5. **Label the axes honestly.** Include zero on the y-axis, or clearly indicate a broken axis. Do not silently truncate.
6. **Test with naive readers.** Show your graphic to someone unfamiliar with the data and ask them to estimate the magnitude of the change. If their estimate is far from the actual data change, the Lie Factor is too high.

## Common Mistakes

- **Assuming 3D looks better.** 3D charts never improve data communication and always increase the Lie Factor through perspective distortion. They exist only as decorative indulgence.
- **Confusing radius with area.** When creating bubble charts, many tools scale bubble radius to the data value. Since area grows as the square of the radius, this produces a Lie Factor of approximately 2.0. Always scale area, not radius.
- **Truncating axes for "clarity."** Truncating the y-axis can make small differences visible, but it also makes them appear disproportionately large. If the differences are genuinely important, annotate them directly rather than distorting the scale.
- **Ignoring the Lie Factor because the distortion is "obvious."** Viewers do not compute Lie Factors mentally. They perceive visual magnitudes directly. A graphic with a Lie Factor of 5.0 will be perceived as showing a fivefold exaggeration, regardless of the viewer's sophistication.

## Related Principles

- [Chartjunk](chartjunk.md) -- Phony dimensionality (a category of chartjunk) is a frequent source of high Lie Factors.
- [Data-Ink Ratio](data-ink-ratio.md) -- Graphics with high data-ink ratios tend to have Lie Factors closer to 1.0 because they strip away the decorative elements (3D effects, perspective, pictograms) that introduce distortion.
- [Perceptual Hierarchy](perceptual-hierarchy.md) -- The perceptual hierarchy explains why position and length are more honest encodings than area and volume.
- [Analytical Design](analytical-design.md) -- Honest representation of data magnitudes is a prerequisite for design that assists analytical thinking.

## Key Quotes

> *"Lying graphics cheapen the graphical art everywhere."*
> -- Edward Tufte, *The Visual Display of Quantitative Information* (1983)

> *"The representation of numbers, as physically measured on the surface of the graphic itself, should be directly proportional to the numerical quantities represented."*
> -- Edward Tufte, *The Visual Display of Quantitative Information* (1983)

## Further Reading

- [Edward Tufte](../thinkers/modern/edward-tufte.md) -- Thinker who developed the Lie Factor concept.
- [Minimalist / Tuftean School](../schools/minimalist-tuftean.md) -- The design tradition that prioritizes graphic integrity.
- Tufte, Edward. *The Visual Display of Quantitative Information*. Graphics Press, 1983. Chapter 2: "Graphical Integrity."
- Huff, Darrell. *How to Lie with Statistics*. W. W. Norton, 1954. (Precursor work on statistical and visual deception.)
