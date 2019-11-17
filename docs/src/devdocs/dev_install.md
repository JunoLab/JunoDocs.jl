# Developer Installation Instructions

## Julia Packages

Execute the following in a Julia prompt:
```julia
pkg> dev Atom Juno
```
This will automatically clone the git repos of most of the packages that power Juno
into `~/.julia/dev`. It might make sense to do this in a clean environment, so you
can switch back to a known working version.

## Atom Packages

Executing the following lines of code in a terminal will give you the development
versions of the Atom packages that power Juno:
```
λ apm dev language-julia

λ apm dev julia-client

λ apm dev ink
```
You'll find those packages in `~/github/` by default, but can also specify a
directory as the second argument to `apm dev`.

After that you can start Atom in development mode via
```
λ atom -d
```
to get the development version of these packages or without the `-d` flag to use
the latest released version.
