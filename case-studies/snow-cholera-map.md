# Snow's Cholera Map

## Historical Context

In September 1854, a catastrophic cholera outbreak struck the Soho neighborhood of London. Within ten days, more than 500 people died in an area spanning just a few city blocks. The stench of death hung over the district. Families fled. Entire households were wiped out.

The dominant medical theory of the era was **miasma** — the belief that diseases were caused by "bad air" rising from rotting organic matter, sewage, and swamps. Miasma theory was not fringe science; it was the consensus view of the medical establishment, supported by the observation that epidemics often correlated with foul-smelling areas. Under miasma theory, the proper response to an outbreak was to improve ventilation and remove sources of bad odor — not to investigate water supplies.

Dr. John Snow was a London physician who had already published, in 1849, a monograph arguing that cholera was transmitted through contaminated water. His evidence was circumstantial but suggestive: cholera outbreaks traced along waterways, clusters of cases tied to specific water sources. The medical establishment was unpersuaded. Snow needed stronger evidence.

The 1854 Soho outbreak gave him that evidence — and the map he created to present it became one of the founding documents of both epidemiology and data visualization.

## The Visualization

Snow's map is deceptively simple. It is a street map of the Soho neighborhood with two kinds of marks: deaths and pumps.

Each cholera death is represented as a small horizontal bar stacked at the address where the deceased lived. Multiple deaths at the same address produce a visible accumulation — a bar chart growing outward from the building. The thirteen public water pumps in the neighborhood are marked with their locations.

The visual pattern is immediate. Deaths cluster massively around the pump at Broad Street (now Broadwick Street). The concentration is so dense that the stacked bars form dark masses around the surrounding blocks. As you move away from the Broad Street pump — in any direction — the density of deaths drops precipitously. Wherever residents were closer to a different pump, deaths are sparse or absent.

The map does not argue. It shows. The spatial correlation between the Broad Street pump and the cholera deaths is visible at a glance, and it is overwhelming.

Snow also produced supporting evidence. He documented cases that initially seemed to contradict the pattern — a workhouse near Broad Street with few deaths (it had its own well), a brewery whose workers were untouched (they drank beer, not water, and the brewery had its own water source), and isolated deaths far from Broad Street (people who had traveled to the area or had water delivered from the pump). Each anomaly, when investigated, reinforced rather than undermined the waterborne hypothesis.

## What Makes It Significant

Snow's cholera map is significant on multiple levels — as epidemiology, as data visualization, and as a model of evidence-based reasoning.

**As epidemiology**, the map represents one of the earliest uses of spatial analysis to identify the source of a disease outbreak. Snow did not merely describe the pattern of deaths; he used the map to test a specific causal hypothesis. If cholera were airborne (miasma), deaths should correlate with proximity to sources of bad air. If cholera were waterborne, deaths should correlate with proximity to contaminated water sources. The map allowed both hypotheses to be evaluated simultaneously, and the waterborne hypothesis won decisively.

**As data visualization**, the map demonstrates the power of plotting data in its natural spatial context. A table of deaths by address would contain the same information but would not reveal the pattern. A bar chart of deaths by district would aggregate away the crucial geographic detail. Only a map — showing each death at its actual location relative to the water pumps — makes the causal relationship visible.

**As evidence-based reasoning**, the map illustrates what Tufte would later formalize as analytical design: the display of evidence in a way that supports comparison, reveals causality, and enables the viewer to evaluate the argument independently.

## Critical Analysis

In *Visual Explanations* (1997), Tufte uses Snow's map as the positive example in his paired analysis of "visual and statistical thinking" — the counterpart to the failed Challenger O-ring charts. Where the Challenger engineers failed to plot the causal variable, Snow succeeded brilliantly. Where the Challenger charts obscured the pattern in the data, Snow's map revealed it.

Tufte praises Snow's analytical rigor while acknowledging the map's limitations as a dot map. The most significant limitation is that the map **implicitly assumes a uniform population distribution**. A house with no death marks could mean its residents avoided cholera — or it could mean the house was empty, or converted to commercial use, or occupied by a single person rather than a large family. The map cannot distinguish between "no cases" and "no population at risk." This matters because the apparent geographic gradient could be partly an artifact of population density rather than purely a reflection of water-source proximity.

Snow was aware of this limitation. His supporting analysis — investigating anomalies, cross-referencing with water company records, conducting door-to-door interviews — compensated for what the map alone could not show. The map was the centerpiece of the argument but not its entirety.

**The Voronoi digression.** Snow produced a second version of the map with isochrone lines — boundaries showing which households were closer to the Broad Street pump by walking distance than to any other pump. This is essentially a Voronoi diagram adapted to street geography. Tufte dismisses this addition as "Voronoi baloney" — unnecessary geometric complexity that adds nothing to the already compelling evidence of the dot map and may actually distract from it. The original dot map, Tufte argues, is stronger precisely because it is simpler: it shows the data and lets the viewer draw the obvious conclusion.

This is a characteristically Tuftean judgment: when the data speaks clearly, additional analytical apparatus is not illumination but noise.

## Lessons for Modern Practitioners

**Plot data in its natural context.** Snow's insight was to show deaths where they occurred — on a map, at their actual addresses. This principle extends beyond geography. Time-series data should be plotted against time. Performance data should be plotted against the variable that drives performance. The "natural context" is whatever dimension makes the causal structure visible.

**Use visualization to test hypotheses, not just to describe data.** Snow did not create his map as a summary of the outbreak. He created it as a test of a specific theory. The map was designed to answer a question: is cholera waterborne? Modern dashboards and reports too often describe data without asking questions of it. The most powerful visualizations are those built to evaluate a claim.

**Show all the data, including the nulls.** The power of Snow's map depends partly on the empty spaces — the blocks near other pumps where people did not die. If Snow had shown only the deaths near Broad Street, the pattern would have been less convincing. The absence of cases is as important as their presence. This anticipates Tufte's critique of the Challenger charts, where the exclusion of undamaged launches destroyed the ability to see the temperature correlation.

**Investigate anomalies rather than hiding them.** Snow did not ignore the cases that seemed to contradict his hypothesis. He investigated them and found that each anomaly had an explanation consistent with waterborne transmission. Anomalies are not embarrassments to be swept away — they are opportunities to strengthen an argument.

**Resist the urge to over-analyze a clear result.** Tufte's dismissal of the Voronoi overlay is a reminder that analytical complexity is not always a virtue. When the data already tells a clear story, adding layers of analysis can obscure rather than illuminate. Know when to stop.

**Combine the map with the detective work.** Snow's map was powerful, but it was not his only evidence. He investigated anomalies, cross-referenced water company records, and conducted interviews. The visualization was the centerpiece of a broader evidentiary argument, not a substitute for it. Modern practitioners should treat visualization as one component of analysis — the most visible component, but not the only one.

**Beware implicit assumptions in your visual encoding.** Snow's dot map assumed uniform population density — a house with no dots could mean healthy residents or an empty building. Every visual encoding carries assumptions about the underlying data. Effective practitioners identify those assumptions explicitly and either address them through supplementary analysis or acknowledge them as limitations.

**The canonical status of a visualization can reshape its history.** Thanks in large part to Tufte's evangelization, Snow's map became one of the most-taught examples in data visualization — appearing in epidemiology, statistics, public health, information design, and geography courses worldwide. This canonization has sometimes simplified the historical record, reducing Snow's multi-faceted investigation to "the map." The lesson: be precise about what a visualization actually demonstrates, and do not let its fame substitute for understanding its context.

## Related Thinkers

- [John Snow](../thinkers/historical/john-snow.md)
- [Edward Tufte](../thinkers/modern/edward-tufte.md)

## Related Principles

- [Analytical Design](../principles/analytical-design.md)

## Further Reading

- Tufte, Edward. *Visual Explanations*. Graphics Press, 1997. Chapter 2.
- Snow, John. *On the Mode of Communication of Cholera*. 2nd ed. London: John Churchill, 1855.
- Johnson, Steven. *The Ghost Map*. Riverhead Books, 2006.
- Brody, Howard, et al. "Map-making and myth-making in Broad Street: the London cholera epidemic, 1854." *The Lancet* 356 (2000): 64-68.
- Koch, Tom. *Disease Maps: Epidemics on the Ground*. University of Chicago Press, 2011.
