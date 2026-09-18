---
layout: page
title: Code
permalink: /code/
nav: true
nav_order: 4
---

## Open-Source Software

I believe in open science and reproducibility. All code developed for my research is publicly available under permissive licenses.

---

### FwCC: FRB–w Cross-Correlation Pipeline

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.22725659.svg)](https://doi.org/10.5281/zenodo.22725659)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/AntonPushkin260/fwcc-analysis?style=social)](https://github.com/AntonPushkin260/fwcc-analysis)

**Repository:** [github.com/AntonPushkin260/fwcc-analysis](https://github.com/AntonPushkin260/fwcc-analysis)

End-to-end pipeline for measuring the angular cross-correlation between the extragalactic FRB dispersion measure field and foreground galaxy overdensity maps.

**Key Features:**
- Event-weighted DM map construction
- Pseudo-$C_\ell$ estimation via NaMaster
- PCA compression of jackknife covariance
- Covariance-marginalised Sellentin–Heavens likelihood
- Cosmology-dependent $N(z)$ precomputation

**Installation:**
```bash
git clone https://github.com/AntonPushkin260/fwcc-analysis.git
cd fwcc-analysis
pip install -r requirements.txt
python fwcc_pipeline.py
```


**Documentation:** See the [README](https://github.com/AntonPushkin260/fwcc-analysis#readme) for detailed usage instructions.

---

## Contributing

Contributions, bug reports, and feature requests are welcome! Please open an issue or pull request on GitHub.

## Future Plans

I am working on packaging FwCC as a proper Python library for easier installation:
- PyPI distribution: `pip install fwcc`
- Modular API with clean separation of components
- Command-line interface for common workflows
- Full Sphinx-based documentation with Jupyter notebook tutorials

Stay tuned for updates!
