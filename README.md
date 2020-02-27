# JunoDocs

[![Developer Chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/JunoLab/Juno)
[![Travis](https://travis-ci.org/JunoLab/JunoDocs.jl.svg?branch=master)](https://travis-ci.org/JunoLab/JunoDocs.jl)
[![Docs](https://img.shields.io/badge/docs-stable-blue.svg)](https://JunoLab.github.io/JunoDocs.jl/stable)
[![Docs](https://img.shields.io/badge/docs-latest-blue.svg)](https://JunoLab.github.io/JunoDocs.jl/latest)

This is the documentation for the Juno IDE, hosted at http://docs.junolab.org.
It is created using [Documenter.jl](https://github.com/JuliaDocs/Documenter.jl)

## Contributing to the Documentation

In order to contribute to the documentation, simply modify the files in the `/docs/src` folder
and open a PR against the `master` branch.
Once a PR has been opened, the CI will automatically run Documenter.jl and generate a new documentation against the PR.
You can see the generate documentation on `http://docs.junolab.org/previews/PR##`, where `##` is the PR number.

## Local build of the Documentation

Although it's not necessary, if you want to check how the new documentation pages would look like in advance of opening a PR,
you can build documentations locally and check the results generated in `docs/build` by the following step:

> from the root of this repository:

```sh
$ julia --project=docs/ -e 'using Pkg; Pkg.develop(PackageSpec(path = pwd())); Pkg.instantiate()'
$ julia --project=docs/ docs/make.jl
```
