# The Challenger O-Ring Data

## Historical Context

On the evening of January 27, 1986, engineers at Morton Thiokol — the manufacturer of the Space Shuttle's solid rocket boosters — were convinced that the Challenger should not be launched the following morning. The forecast called for temperatures in the low 20s Fahrenheit at Cape Canaveral, far colder than any previous shuttle launch. The engineers knew, from both laboratory testing and post-flight inspection data, that the O-ring seals in the solid rocket booster joints lost resiliency exponentially as temperature decreased. Cold O-rings could not seat properly, allowing hot combustion gases to erode or blow past the seals — a phenomenon called "blow-by."

To make their case, the engineers prepared **thirteen charts** and faxed them to NASA's Marshall Space Flight Center overnight. A teleconference followed. NASA officials were, in the words of the Rogers Commission report, "appalled" by the recommendation not to launch. They pushed back. Thiokol's senior management, under pressure, overrode their own engineers and reversed the recommendation to a launch approval.

On the morning of January 28, 1986, at 11:38 a.m. EST, the Space Shuttle Challenger launched in 29-degree weather. Seventy-three seconds later, it broke apart. All seven crew members — Francis Scobee, Michael Smith, Judith Resnik, Ellison Onizuka, Ronald McNair, Gregory Jarvis, and Christa McAuliffe — were killed. The cause was exactly what the engineers had feared: an O-ring in the right solid rocket booster failed to seal, allowing a plume of hot gas to breach the joint and ignite the external fuel tank.

The engineers had the data. They had the right conclusion. They failed to present it in a way that made the argument unarguable.

## The Visualization

Tufte's analysis in *Visual Explanations* (1997) is forensic. He examines the thirteen charts that Thiokol faxed to NASA and identifies, with precision, the specific design failures that rendered the engineers' argument unconvincing.

**What the engineers showed:** Charts of O-ring damage organized by launch sequence — that is, by flight number in chronological order. When you look at O-ring damage arranged chronologically, there is no visually obvious pattern. Damage appears to occur randomly across the history of shuttle flights. The charts also included rocket motor diagrams, redundant descriptions of the same data in different formats, and extensive technical detail about O-ring mechanics. The critical relationship — temperature causes damage — was buried.

**What the engineers should have shown:** A simple scatterplot with temperature on the x-axis and O-ring damage severity on the y-axis, with all twenty-three prior launches plotted as data points. Tufte reconstructs this chart in *Visual Explanations*, and the pattern is stark:

- Launches at higher temperatures: little or no O-ring damage.
- Launches at lower temperatures: significant and increasing O-ring damage.
- The Challenger was scheduled to launch at approximately 29 degrees Fahrenheit — far below the temperature of any previous launch, in a range where the extrapolated damage curve pointed to catastrophic failure.

Had this single chart been presented, the case against launching would have been visually undeniable and statistically compelling.

## What Makes It Significant

The Challenger O-ring analysis is the most devastating forensic critique in the history of data visualization. It demonstrates, with life-and-death stakes, that the design of an evidence display is not a cosmetic concern — it is an ethical one.

Tufte does not blame the engineers for incompetence. They understood the physics. They had the correct conclusion. Their failure was in the translation of data into visual evidence. The charts they produced did not lie, but they did not reveal the truth either. They presented data in a format that made the critical pattern invisible.

This analysis elevated data visualization from a craft concern to a moral one. If seven people died partly because a scatterplot was not drawn, then the design of evidence displays is a matter of professional responsibility on par with the engineering itself.

The analysis also made Tufte famous far beyond the design world. It is taught in engineering schools, statistics courses, business schools, and engineering ethics curricula. NASA itself incorporated the case into its training materials after the Columbia disaster in 2003.

## Critical Analysis

Tufte identifies four specific failures in the engineers' charts:

### 1. Data organized by flight number, not by the causal variable

The charts arranged O-ring damage data chronologically — by the order in which missions flew. This is perhaps the most natural way to organize historical data, but it is exactly wrong for the question at hand. The question was not "has O-ring damage gotten worse over time?" but "does O-ring damage correlate with temperature?" Organizing by flight number made the temperature relationship invisible because launches did not occur in order of ascending or descending temperature.

### 2. Flights with no damage were omitted

This is the most consequential failure. The engineers' key charts showed only the launches where O-ring damage had been observed. Launches with no damage were excluded, apparently on the reasoning that "nothing happened" was not informative.

In fact, the undamaged launches were the most informative data in the set. They occurred predominantly at higher temperatures. Including them would have created a clear visual separation: undamaged flights clustered at high temperatures, damaged flights clustered at low temperatures. Excluding them destroyed the ability to see any correlation at all.

This is a general principle with broad applicability: **the absence of an effect is data.** Excluding null results is one of the most common and most damaging errors in evidence presentation.

### 3. No temperature axis on the main damage chart

The charts that showed O-ring damage did not include temperature as a variable on any axis. Temperature was mentioned in the text and in separate supporting charts, but it was never plotted against damage in the same visual field. The viewer had to mentally correlate information across multiple disconnected displays — exactly the kind of cognitive burden that good design should eliminate.

### 4. Multiple redundant charts without synthesis

Thirteen charts were presented. Many of them re-described the same facts in different formats — rocket motor diagrams, tables of damage indices, narrative descriptions. None of them synthesized the data into a single display that revealed the pattern. The volume of material may have actually weakened the argument by diffusing attention across redundant details rather than focusing it on the critical relationship.

### The Counterfactual

Tufte's most powerful move is constructive, not critical. He draws the chart that should have been made: a scatterplot of all twenty-three prior launches, with O-ring damage on the y-axis and launch temperature on the x-axis. A vertical line at 29 degrees marks the forecast temperature for Challenger's launch day.

The pattern is visually immediate. All significant damage occurred at lower temperatures. The 29-degree forecast falls far below the coldest previous launch. No reasonable viewer of this chart could conclude that launching was safe.

> *"Conclusions should be explicit, not the result of secret computation by the analyst."*

The scatterplot makes the conclusion explicit. The original charts left it as an exercise for the reader — an exercise that, under the pressure of a real-time teleconference with institutional momentum toward launching, no one completed.

## Lessons for Modern Practitioners

**Always plot the causal variable.** If you are arguing that X causes Y, then X must be on an axis of your chart. It sounds obvious, but the Challenger engineers — intelligent, experienced professionals — failed to do it. The temptation to organize data by the most convenient or most familiar variable (time, sequence number, category) rather than the analytically relevant one is pervasive.

**Show ALL the data, including null results.** The exclusion of undamaged launches is the single most instructive error in the case. Null results — cases where the effect did not occur — are not irrelevant. They define the baseline against which effects are measured. A chart that shows only the cases where something went wrong is inherently misleading because it cannot show whether "wrong" correlates with anything.

**Make your conclusions explicit.** The engineers believed the shuttle should not launch. Their charts did not say so. In a decision-making context, a display that merely presents data and leaves the conclusion implicit is inadequate. If your analysis supports a specific recommendation, the display should make that recommendation visually obvious. Draw the line. Label the threshold. State the implication.

**Synthesize rather than accumulate.** Thirteen charts did not make a stronger case than one chart would have. More is not better when the additional material is redundant or tangential. A single well-designed synthesis is more persuasive than a stack of partial views.

**Recognize that evidence presentation is a moral act.** The design of a data display is not a matter of aesthetics or personal preference. When decisions have consequences — and they almost always do — the quality of the evidence presentation directly affects the quality of the decision. Presenting data badly is not a style failure; it is a responsibility failure.

## Related Thinkers

- [Edward Tufte](../thinkers/modern/edward-tufte.md)

## Related Principles

- [Analytical Design](../principles/analytical-design.md)
- [Lie Factor](../principles/lie-factor.md)

## Related Schools

- [Minimalist / Tuftean](../schools/minimalist-tuftean.md)

## Further Reading

- Tufte, Edward. *Visual Explanations*. Graphics Press, 1997. Pages 38-54.
- Presidential Commission on the Space Shuttle Challenger Accident. *Report of the Presidential Commission on the Space Shuttle Challenger Accident*. Washington, DC, 1986.
- Robison, Wade, Roger Boisjoly, David Hoeker, and Stefan Young. "Representation and Misrepresentation: Tufte and the Morton Thiokol Engineers on the Challenger." *Science and Engineering Ethics* 8 (2002): 59-81.
- Feynman, Richard P. "Personal Observations on the Reliability of the Shuttle." Appendix F to the Rogers Commission Report, 1986.
