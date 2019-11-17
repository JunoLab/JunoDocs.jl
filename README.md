# JunoDocs

[![Developer Chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JunoLab/Juno)
[![Travis](https://travis-ci.org/JunoLab/JunoDocs.jl.svg?branch=master)](https://travis-ci.org/JunoLab/JunoDocs.jl)
[![Docs](https://img.shields.io/badge/docs-latest-blue.svg)](https://JunoLab.github.io/JunoDocs.jl/latest)

This is the documentation for the Juno IDE, hosted at http://docs.junolab.org.
It is created using [Documenter.jl](https://github.com/JuliaDocs/Documenter.jl)

## Contributing to the Documentation

In order to contribute to the documentation, simply modify the files in the `/docs/src`
folder and open a PR against the `master` branch. When committed, Travis will run
[Documenter.jl](https://github.com/JuliaDocs/Documenter.jl) which will
[automatically update the documentation website](https://juliadocs.github.io/Documenter.jl/stable/man/hosting/)
by pushing to the `gh-pages` branch, meaning that no build steps are required.

## Local build of the Documentation

Although it's not necessary, If you want to check how the documentations looks before you make a PR,
you can build the documentations locally and check the results in `docs/build`:

> from the root of this repository:

```sh
$ julia --project=docs/ -e 'using Pkg; Pkg.develop(PackageSpec(path = pwd())); Pkg.instantiate()'
$ julia --project=docs/ docs/make.jl
```
