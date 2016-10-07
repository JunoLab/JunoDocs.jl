# Installation Instructions

Getting Juno takes a couple of simple steps. One needs to:

1. Install Julia
2. Install Atom
3. Install the Juno plugin for Atom (uber-juno)

Follow this and you'll be running Julia code in no time!

### Getting Julia

First, download Julia (command line version) for your platform from the [downloads page](http://julialang.org/downloads/).

Then:

#### On Windows

1. Run the downloaded installer, using the default settings.

#### On OS X

1. Double-click the downloaded disk image to load it.
2. Drag the Julia-0.X.Y app onto the Applications folder shortcut.

#### On Linux

1. Unzip the downloaded folder and place it in your home directory.
2. Make sure to have dependencies curl and cmake installed.

### Getting Atom

Download, install and open [Atom](https://atom.io). If you have it already, make sure it's up to date (version 1.7+).

### Installing the Juno Plugin

In Atom, go to Settings (`Ctrl+,`, or `Cmd+,` on OS X) and go to the "Install" panel.

Type `uber-juno` into the search box and hit enter. Click the install button on the package of the same name.

Atom will then set up Juno for you, installing the required Atom and Julia packages. Once the setup is done you're good to go!

### Additional Windows Step: Adding the Julia Path

If you installed Julia on Windows using the binaries provided by [JuliaLang.org](http://julialang.org/),
then you will need to add Julia's path to your Atom settings. The settings can be
found in Packages > Julia > Settings. Where it says "Julia Path" is where the Julia
path must be included. The standard Julia installation will place Julia in the following
location:

```shell
C:\Users\[USERNAME]\AppData\Local\Julia-0.5.0\bin\julia
```

where [USERNAME] is your Windows username.
