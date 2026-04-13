# Contributing to the DataViz Codex

Thank you for your interest in contributing to this knowledge repository. The codex grows through careful, well-researched additions from people who care about data visualization.

## How to Contribute

### Adding a New Thinker

1. Open an issue using the [New Thinker template](.github/ISSUE_TEMPLATE/new-thinker.md)
2. If approved, create a new markdown file in the appropriate era directory (`thinkers/historical/`, `thinkers/modern/`, or `thinkers/contemporary/`)
3. Follow the thinker template structure (see any existing thinker file for reference)
4. Include cross-references to related thinkers, principles, and schools
5. Update `thinkers/README.md` to include the new entry
6. Submit a pull request

### Adding a New Principle or Concept

1. Open an issue using the [New Concept template](.github/ISSUE_TEMPLATE/new-concept.md)
2. If approved, create a new markdown file in `principles/`
3. Include: definition, origin (which thinker, which book), detailed explanation, examples, practical guidelines, common mistakes, related principles, and key quotes
4. Update `principles/README.md`
5. Add cross-references from relevant thinker files
6. Submit a pull request

### Suggesting a Case Study

1. Open an issue describing the visualization, its historical context, and why it belongs in the codex
2. Case studies should be self-contained analytical narratives
3. Include links to related thinkers and principles

### Improving Existing Content

- Corrections, additional quotes, new cross-references, and expanded analysis are all welcome
- Open a pull request with a clear description of what changed and why

## Style Guide

### Writing

- Write in clear, direct prose. Avoid jargon where possible; define it where necessary.
- Use the present tense for describing principles and ideas ("Tufte argues..." not "Tufte argued...")
- Use past tense for historical events ("Nightingale presented her diagrams to Parliament in 1858")
- Attribute ideas to their originators. Cite the specific book and year.
- Prefer substance over length. A concise, well-sourced entry is better than a long, vague one.

### Cross-Referencing

Cross-references are the connective tissue of this codex. Every entry should link to related entries using relative paths:

- From a thinker to a principle: `../../principles/data-ink-ratio.md`
- From a thinker to another thinker in the same era: `./other-thinker.md`
- From a thinker to another era: `../modern/edward-tufte.md`
- From a principle to a thinker: `../thinkers/modern/edward-tufte.md`
- From a principle to a school: `../schools/minimalist-tuftean.md`

### Formatting

- Use H1 (`#`) only for the thinker's name or concept title
- Use H2 (`##`) for major sections
- Use tables for structured comparisons
- Use blockquotes (`>`) for direct quotes, always with attribution
- Use bullet lists for key contributions and major works

## Code of Conduct

Be respectful, be rigorous, be generous. This is a knowledge project. Disagreements about ideas are welcome; personal attacks are not.

## Questions?

Open an issue with the label "question" and we will get back to you.
