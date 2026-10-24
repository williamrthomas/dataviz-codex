# Visual practice workshop

This workshop connects the codex's intellectual references to inspectable artifacts and experiments.

- [Reference atlas](reference/index.html): the Tufte specimens and digital extension, including cartographic practice, Rams, Ive, Rosling, multidimensional exploration and motion. Open locally in a browser; original figures require internet access.
- [Digital analytical instruments](../curriculum/digital-practice.md): the sourced study and proposed experiments.
- [Artifact constraints](constraints.md): the above-fold design and verification contract for an Astro devshare.
- [Compact experiments](experiments/README.md): working Field, Dimensions and Motion prototypes using one synthetic dataset, with an Astro fixture and host integration component.

Rebuild the reference atlas with Python's standard library:

```sh
python3 workshop/reference/build.py
```

The editable sources are the JSON records, template, CSS and JavaScript in `reference/`. Source registers distinguish public essays, author descriptions, selected book pages, papers and proposed interpretations. Third-party figures retain their original attribution and rights.

Export the digital study back into the repository's curriculum:

```sh
python3 workshop/reference/export_digital.py .
```

The research atlas may scroll. The interactive analytical artifacts governed by the constraint contract must fit above the fold with their essential reading context.
