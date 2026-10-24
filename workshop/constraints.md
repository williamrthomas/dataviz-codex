# Artifact constraints

The artifacts belong on an Astro page in the existing devshare. The host project's path, Astro version, route, authentication and visible header must be verified before claiming deployment or host compatibility.

## Spatial budget

Verify at 1280 × 800, 1366 × 768 and 390 × 844 CSS pixels at 100% browser zoom. Treat the actual host header, page padding and lower comfort margin as part of the budget. A standalone preview does not prove fit inside the host.

Each artifact must show its primary graphic, essential controls, units, scope, reference, legend and selected-state facts above the fold. One artifact is visible at a time. There must be no internal vertical scrolling, clipped content or page-level horizontal overflow in the artifact.

Use at least 14px text for interface controls and their labels, and 12px for chart and contextual labels at the rendered size. Preserve usable control targets. Reduce framing, repetition and simultaneous views before reducing legibility. Desktop may show two coordinated analytic views; narrow layouts switch between them while preserving the same data state.

Long research prose and optional methodological reading can live outside the artifact. Essential interpretation cannot depend on opening that prose.

## Analytical contract

- Use deterministic synthetic fixtures for the first comparative experiments and label them directly.
- Keep the same entities, measurements, domains and source definitions across modes.
- Name aggregation, sampling, normalization and interpolation. Preserve exact raw values and selected-population counts.
- Keep selection, filtering, navigation and changes to the model distinct.
- Retain a route from a mark to the evidence and a way to reproduce the current state.

## Motion and explanation

Motion is opt-in, pausable and replayable, respects reduced motion and has a static comparison. Interpolated movement is not an additional observed measurement.

Use Rosling as a precedent for guided explanation with a clear question, paced attention and meaningful pauses. Distinguish this from independent exploration. Examine within-group distributions rather than relying only on averages. See [Gapminder's historical explanation](https://www.gapminder.org/videos/200-years-that-changed-the-world/) and [Income Mountains](https://www.gapminder.org/fw/income-mountains/).

## Verification

For every artifact record viewport, host header height, artifact bounds, clipping, scroll overflow, text sizes, active scope and keyboard path. Test direct page loads, reconnects and any client-side navigation used by the actual Astro host.

Fit and interaction checks establish implementation behavior. Comprehension, comparative accuracy and usefulness require task-based evaluation with readers. Record preferences separately from accuracy and completion time.
