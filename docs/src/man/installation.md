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

## 3. Install Juno and Configure IDE

To install `Juno`, open atom, click on `file` > `settings` > `install-packages` and type `uber-juno`: this is the package that you need to install. `uber-juno` will do everything by itself and install the IDE in a matter of minutes!

Once the setup is done, we need to tell `Juno` where to find the `Julia` binary: go to `file` > `settings` > `packages` and type `julia-client`

You should now click on `settings` and navigate to the `Settings`section: you will find a field called `Julia Path`: you should type the path to the Julia executable in there.

In my case, the path to my `Julia` executable is `C:\Users\UserName\AppData\Local\Julia-1.2.0\bin\julia.exe`

If you have done everything correctly now you can start a `Julia` session inside atom: to do so click on the `earth-like icon` on the left toolbar `(or go to Juno > Start Julia)`. A panel should open on the lower end of Atom and you should be able to access the `Julia REPL`.

I suggest that you type the following code to check whether your setup is successful:

```julia
println("Hello World! This is Julia!")
```
That’s it, you have successfully installed Julia and setup the Juno IDE: easy, isn’t it? You can now start coding and start you journey in the wonderful world of the Julia Language!

If you are new to Julia, I suggest that you take a look at the wonderful JuliaComputing introductory tutorials

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
