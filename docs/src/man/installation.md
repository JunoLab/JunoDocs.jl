# Installation Instructions

Getting Juno takes a couple of simple steps:

## 1. Install Julia

First, download Julia (command line version) for your platform from
the [downloads page](http://julialang.org/downloads/).

Then:

#### On Windows

1. Run the downloaded installer, using the default settings.

#### On OS X

1. Double-click the downloaded disk image to load it.
2. Drag the Julia-1.X.Y app onto the Applications folder shortcut.

#### On Linux

1. Unzip the downloaded folder and place it in your home directory.
2. Make sure to have dependencies curl and cmake installed.

## 2. Install Atom

Download, install and open [Atom](https://atom.io). If you have it already, make sure it's up to date (version 1.41+).

## 3. Install Juno

In Atom, go to Settings (`Ctrl+,`, or `Cmd+,` on macOS. Note that this is Control plus comma!) and go to the "Install" panel.

Type `uber-juno` into the search box and hit enter. Click the install button on the package of the same name.

Atom will then set up Juno for you, installing the required Atom and Julia packages.

!!! note
    You may need to add the path to Julia if it is not accessible via the command `julia`.
    To do so, go to `Packages > Juno > Settings` and in the first box for `Julia Path`
    insert the path to your Julia installation
    (example: `C:\Users\UserName\AppData\Local\Julia-1.2.0\bin\julia.exe`)

## 4. Use Juno

You should be good to go now -- try opening the REPL with `Juno > Open REPL`
or `Ctrl-J Ctrl-O` (`Cmd-J Cmd-O` on macOS), and then press `Enter` in the REPL to start a Julia session.

## Troubleshooting

If you experience problems after installing Juno, have a look at the [FAQ](@ref) section.
In case you can't solve your problem with the instructions here or in the FAQ, then please post
on [Juno.jl GitHub repository](https://github.com/JunoLab/Juno.jl/issues) or
at [Julia Discourse under the `Tooling ▶ Juno` category](https://discourse.julialang.org/c/tools/juno/l/latest),
and we're happy to help.

!!! note
    When you report a problem, please add the output of `Julia Client: Debug Info` command or `Juno > Debug Information` menus entry if possible.
