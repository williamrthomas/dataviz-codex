# Experiment verification

24 October 2026. This record covers the isolated Astro fixture, not the unidentified actual devshare host. Reader comprehension and comparative usefulness have not been established.

## Analytical checks

All six Node tests pass. They cover stable entity identity and finite fixed-domain values; inclusive cohort queries and empty selections; exact population conservation across cells; stable motion sample membership across all periods; export scope; and invalid input rejection.

The fixture has 72 entities × 12 periods = 864 observations. Each of three cohorts has 24 entities. The motion sample has twelve fixed IDs, four from each cohort, at every period.

## Layout checks in the Astro fixture

The host header is 56px. Page spacing and the component's viewport budget reserve room around the artifact. The following measurements apply to Field, Dimensions and Motion at the tested default state.

| Viewport | Artifact bottom | Space below artifact | Internal vertical overflow | Page horizontal overflow |
| --- | --- | --- | --- | --- |
| 1280 × 800 | 720px | 80px | 0px | 0px |
| 1366 × 768 | 712px | 56px | 0px | 0px |
| 390 × 844 | 784px | 60px | 0px | 0px |

Visible controls and their labels have at least 14px text; SVG and contextual labels have at least 12px text. The selected facts, essential controls, units, scope, cohort legend and export action remain inside the artifact. Narrow Dimensions layouts switch between positions and profiles while preserving selection; the profile header also retains the matching count. The final production preview produced no captured browser console errors.

These bounds prove fit in this fixture. They do not prove fit under a different host's header, padding, fonts, embedded panel dimensions or accessibility zoom.

## Browser interactions checked

- Keyboard activation of a cell opens its true coordinate range. The visible count and inspector choices match that cell; Full field restores context.
- At period 12, Birch with minimum access 100 is an explicit empty selection and disables the inspector. Restoring the threshold to 60 produces eight matching IDs in the query and inspector.
- The linked profile contains those same eight observations, with full-population context and exact raw values for AREA-02: access 67.1, outcome 37.4, duration 15.6 days, volume 606, resource 64.7%, variation 7.1.
- A downloaded browser evidence bundle was parsed independently. It contains those eight matching records, eight visible IDs, AREA-02 selected, threshold 60, and all 864 source observations.
- The guided Motion cues preserve the selected entity and move through periods 1, 6 and 12. AREA-01's final cue reports +11.7 access and +0.6 outcome index points from period 1. These are fixture calculations, not historical data or Rosling quotations.
- Guided observation scrubbing is disabled while the guide controls the sequence. Next cue retains keyboard focus. Leaving the experiment exits the guide; changing its inspected entity or cohort restarts the sequence.
- Persistent frames use the same domains and fixed sample. Narrow screens show start/end frames; repeated periods are deduplicated.
- The reduced-motion preference switches the animated mode to direct observation updates. Playback has an explicit pause control and ends at the last observation. Temporary test overrides are reset after verification.

## Astro build and asset integration

Astro 7.4.2 built the static fixture successfully with both `/` and `/devshare/` as its base. In the prefixed preview, the page, component module, relative data module, stylesheet and reference atlas return HTTP 200 under `/devshare/`.

The install helper leaves the host's dependencies, Astro version, route, layout and authentication unchanged. It installs only the named component and recognized asset locations. The real devshare route, framework version, client navigation and deployment remain to be verified when its URL or project path is supplied.

A temporary target with an unrelated asset manifest was rejected before any component directory was created; its existing asset contents were preserved.

Saved [desktop](previews/dimensions-desktop.jpg) and [phone](previews/motion-mobile.jpg) previews come from the production fixture. The nine final [viewport measurements](previews/viewport-checks.json) cover all three experiments at all three sizes.

## Remaining study

Run task-based comparisons with readers using the same data and question. Compare Field against a dense static alternative, Dimensions against an equivalent table or small multiples, and Motion against direct updates and persistent frames. Record accuracy, time and identity tracking separately from preference.
