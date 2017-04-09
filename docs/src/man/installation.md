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
2. Make sure to have dependencies curl, mbedtls-devel and cmake installed.

### Getting Atom

Download, install and open [Atom](https://atom.io). If you have it already, make sure it's up to date (version 1.7+).

### Installing the Juno Plugin

In Atom, go to Settings (`Ctrl+,`, or `Cmd+,` on OS X) and go to the "Install" panel.

Type `uber-juno` into the search box and hit enter. Click the install button on the package of the same name.

Atom will then set up Juno for you, installing the required Atom and Julia packages.

### Installing the Atom-Julia Interaction

The Atom-Julia interaction is automatically installed by using a command in the
console. To do this, go to Packages > Julia > Open Console to open the console,
and type in any Julia command like `2+2`. This will start the automatic
installation feature. When complete, Julia and Atom will be linked.

### Common Problems

If you experience problems after installing Juno, have a look at the [FAQ](@ref).
In case you can't solve your problem with the instructions here or in the FAQ,
then please post [at the discussion board](http://discuss.junolab.org/) and we're
 happy to help.

#### Juno could not be started.
Go to Packages > Julia > Settings and change "Julia Path" to point to the Julia
binary.

#### MbedTLS not properly installed.
If you get
```
ERROR: LoadError: MbedTLS not properly installed. Please run Pkg.build("MbedTLS")
```
in the Julia console, first try `Pkg.build("MbedTLS")` in the Julia REPL. If
that errors and you are on Linux, try installing `cmake` and then calling the
above command again.

Make sure you have mbedtls-devel package installed, on Fedora you can run:

dnf install mbedtls-devel

