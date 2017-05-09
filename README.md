# JunoDocs

[![Developer Chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JunoLab/Juno)
[![Travis](https://travis-ci.org/JunoLab/JunoDocs.jl.svg?branch=master)](https://travis-ci.org/JunoLab/JunoDocs.jl)
[![Docs](https://img.shields.io/badge/docs-latest-blue.svg)](https://JunoLab.github.io/JunoDocs.jl/latest)

This is the documentation for the Juno IDE, hosted at http://docs.junolab.org.
It is created using [Documenter.jl](https://github.com/JuliaDocs/Documenter.jl)

## Contributing to the Documentation

In order to contribute to the documentation, simply modify the files in the `/docs/src`
folder and open a PR against the `master` branch. When committed, Travis will run Documenter.jl which will
[automatically update the documentation website](https://juliadocs.github.io/Documenter.jl/stable/man/hosting.html)
by pushing to the `gh-pages` branch, meaning that no build steps are required.
