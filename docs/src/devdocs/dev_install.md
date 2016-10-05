# Developer Installation Instructions

The Julia packages can be installed by either cloning the repository or though
the standard installation (`Pkg.add(PkgName)`) followed by checking out the master branch
(`Pkg.checkout("PkgName")`.

To install the latest atom packages, run the commands:

```shell
apm install https://github.com/JunoLab/atom-ink
apm install https://github.com/JunoLab/atom-julia-client
```

It's a good idea to keep these up to date by running `Pkg.update()` in Julia and
syncing the package repos every now and then, which will be in `~/.atom/packages/julia-client`
and `~/.atom/packages/ink`. Note that this installation method for the Atom packages
will allow them to be update each commit via the Atom package manager.
