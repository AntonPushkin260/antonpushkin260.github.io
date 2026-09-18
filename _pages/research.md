---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 2
---

## FwCC: FRB–w Cross-Correlation Pipeline

**Status:** Manuscript submitted to The Astrophysical Journal (September 2026)

### Overview

FwCC is an end-to-end pipeline for measuring the angular cross-correlation between the extragalactic Fast Radio Burst (FRB) dispersion measure (DM) field and foreground galaxy overdensity maps, **without assigning point redshifts to individual bursts**.

The key innovation is the **event-weighted map construction** that correctly handles sparse FRB sampling, combined with:
- Pseudo-$C_\ell$ estimation via [NaMaster](https://github.com/LSSTDESC/NaMaster) (mask mode-coupling correction)
- PCA compression of spatial jackknife covariance
- Covariance-marginalised Sellentin–Heavens likelihood
- Cosmology-dependent $N(z)$ precomputation on a 3D grid over $(w, \Omega_m, f_{\rm IGM})$

### Data

- **FRBs:** 4,450 events from CHIME/FRB Catalogue 2 + Outriggers + DSA-110
- **Galaxies:** DESI DR1 Bright Galaxy Survey (BGS) and Luminous Red Galaxy (LRG) tracers
- **Anchors:** 26 localized FRBs with secure spectroscopic redshifts for host-DM calibration

### Main Results

Under conservative angular scale cuts ($0.37^\circ < \theta < 1.46^\circ$) and DM-scrambling null tests:

| Configuration | $w$ | $f_{\rm IGM}$ | Consistency with ΛCDM |
|:---|:---:|:---:|:---:|
| **Joint (BGS + LRG)** | $-1.47 \pm 0.43$ | $0.69 \pm 0.06$ | $1.1\sigma$ |
| **BGS-only** (cleanest) | $-1.00 \pm 0.64$ | $0.72 \pm 0.08$ | $0.0\sigma$ |

Both results are consistent with ΛCDM. The ionised baryon fraction provides an independent, late-time confirmation of the "missing baryons" residing in the warm-hot intergalactic medium.

### Validation

The pipeline has been validated on **five end-to-end mock catalogues** built from independent 3D Gaussian matter fields. The mocks recover the input cosmology ($w = -1.0$, $f_{\rm IGM} = 0.83$) with mean offsets of $\Delta w = +0.04$ and $\Delta f_{\rm IGM} \simeq -5\%$ in amplitude ($\leq 0.3\sigma$ of the single-realisation statistical uncertainty), demonstrating that the event-weighted map estimator preserves the absolute correlation amplitude.

### Resources

- **Paper:** Submitted to ApJ (preprint coming soon on arXiv)
- **Code:** [github.com/AntonPushkin260/fwcc-analysis](https://github.com/AntonPushkin260/fwcc-analysis)
- **DOI:** [10.5281/zenodo.22725659](https://doi.org/10.5281/zenodo.22725659)

---

## Future Directions

I am actively working on:
- Packaging FwCC as a pip-installable Python library
- Extending the pipeline to support DESI DR2, Euclid, and Rubin/LSST galaxy catalogues
- Incorporating explicit circumgalactic medium (CGM) and halo gas profiles
- Forward modelling of the CHIME exposure and DESI selection functions

Collaborations and contributions are welcome! Feel free to reach out if you're interested in working together.
