# Update Instructions

To update your Juno, you need to follow the two steps -- both update Atom packages and Julia packages.


## 1. Update Atom Packages

In this step, we install the latest versions of
[`julia-client`](https://github.com/JunoLab/atom-julia-client) and
[`ink`](https://github.com/JunoLab/atom-ink)
packages.

First, close all the Atom windows and type the following command into your terminal
(e.g. `cmd` on Windows or the Terminal App on MacOS):

```sh
apm update
```

If that also doesn’t work or if you want to only update Juno-related packages,
try the commands below instead:

```sh
apm uninstall ink
apm uninstall julia-client
apm install ink
apm install julia-client
```

!!! note
    To fully update Atom packages, an Atom process that had been started _before_ updating the packages needs to be restarted.
    This is why we recommend you close all the Atom processes first.
    If you follow the above step, `julia-client` and `ink` will be the latest version the next time you open Atom .

!!! warning
    It is possible that your Antivirus Software prevents certain files to be downloaded or
    executed that are necessary for Juno to function. Consider disabling antivirus software's
    real time monitoring for the duration of the installation. For certain scanners
    (Avast and McAffee) it might also be necessary to exclude
    ```
    C:\Users\you\.atom\packages\julia-client\node_modules\node-pty-prebuilt\build\Release\winpty-agent.exe
    ```
    from the real time monitoring after installation. This is an [upstream issue](https://github.com/rprichard/winpty/issues/142) which should hopefully be resolved soon.

## 2. Update Julia Packages

Execute the following in a Julia prompt:

```julia
pkg> up Atom Juno
```

If it doesn't work, try to execute below and see what hinders the updates of
[Atom.jl](https://github.com/JunoLab/Atom.jl) and
[Juno.jl](https://github.com/JunoLab/Juno.jl)
in your environment.

```julia
pkg> rm Atom Juno
pkg> add Atom@atomjlver
pkg> add Juno@junojlver
```

where `@atomjlver` and `@junojlver` is the versions of Atom.jl and Juno.jl that you're trying to update to, respectively.

!!! warning
    The versioning of Atom.jl and Juno.jl doesn't necessarily match.
    For example, the current latest version of Atom.jl is `Atom@0.12.7`
    while that of Juno.jl is `Juno@0.8.0`

## Troubleshooting

In a case you still face a problem even after following the update instructions here, then please post
on [Juno.jl GitHub repository](https://github.com/JunoLab/Juno.jl/issues) or
at [Julia's discussion forum under the `Tooling ▶ Juno` category](https://discourse.julialang.org/c/tools/juno/l/latest),
and we're happy to help.

!!! note
    When you report a problem, please add the output of `Julia Client: Debug Info` command or `Juno > Debug Information` menus entry if possible.
