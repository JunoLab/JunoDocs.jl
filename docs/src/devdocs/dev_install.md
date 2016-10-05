# Developer Installation Instructions

These are the developer install instructions. To develop Juno, you need to be on
the latest Atom and Julia packages. This install is also relevant to users on
Julia's nightlies since this will install fixes which have not be released. However,
use caution: this install is not guaranteed to be stable, and getting it to work
may require intimate knowledge of Julia as the documentation will likely be behind.

### Getting Master on the Atom Packages

To install the latest atom packages, run the commands:

```shell
apm install https://github.com/JunoLab/atom-ink
apm install https://github.com/JunoLab/atom-julia-client
```

It's a good idea to keep these up to date by running `Pkg.update()` in Julia and
syncing the package repos every now and then, which will be in `~/.atom/packages/julia-client`
and `~/.atom/packages/ink`. Note that this installation method for the Atom packages
will allow them to be update each commit via the Atom package manager.

### Bleeding Edge Installs for the Julia Packages

The Julia packages can be installed by either cloning the repository or though
the standard installation (`Pkg.add(PkgName)`) followed by checking out the master branch
(`Pkg.checkout("PkgName")`. The following code will check out the relevant packages:

```julia
Pkg.checkout("Atom")
Pkg.checkout("Blink")
Pkg.checkout("CodeTools")
Pkg.checkout("DevTools")
Pkg.checkout("Hiccup")
Pkg.checkout("Juno")
Pkg.checkout("LNR")
Pkg.checkout("Media")
```

### Bleeding Edge Features (Plotting, Debugging, etc.)

In order to use the bleeding edge features, you may need to checkout master on
the respective repositories. For example, for the latest plotting features, you
may need to

```julia
Pkg.checkout("Plots")
```

and/or checkout master on a backend:

```julia
Pkg.checkout("PlotlyJS")
```

For the latest debugger features, you may need to checkout the full debugger stack. This is done
with the following code:

```julia
Pkg.clone("https://github.com/Keno/COFF.jl")
Pkg.checkout("Reactive")
Pkg.checkout("ObjFileBase")
Pkg.checkout("StructIO")
Pkg.checkout("AbstractTrees")
Pkg.checkout("DWARF")
Pkg.checkout("ELF")
Pkg.checkout("MachO")
Pkg.checkout("COFF")
Pkg.checkout("TerminalUI")
Pkg.checkout("ASTInterpreter")
Pkg.checkout("VT100")
Pkg.checkout("JuliaParser")
Pkg.checkout("Gallium")
```
