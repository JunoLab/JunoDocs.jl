# Basic Usage

These instructions assume that you have already installed Juno. If you have not
installed Juno, please see [the installation instructions]().

### Opening the Console Window

To open the console, use the command `Ctrl+j` then `Ctrl+o`, or go to Packages >
Julia > Open Console. This will open a window with the title console. To use the
console, simply type in a command and hit `Enter`. This will run the command in
Julia (the first time a command is run, the connection between Julia and Atom
will be installed, taking a bit more time). To clear the console, use the command
`Ctrl+j` followed by `Ctrl+c`.

Using the console is similar to using the REPL. For example, to enter multi-line
input, use `Ctrl+Enter`. Tab completion will be available with a window for selecting
the desired completion (which can be scrolled through using the arrow keys). Juno
also features enhanced displaying of output types. For example, types like `Array`
show an arrow on the side. By clicking on the header for this output you will
expand the array in the console. Note that floating point numbers also truncate their
displays as well: to see more digits, click on the number.

### Inline Evaluation

You can evaluate your Julia code inline by navigating your cursor to the appropriate
code and hitting `Ctrl+Enter`. This will run the code block that the cursor is
contained in. For example, if you go to the top of a `for` loop, it will evaluate
the whole for loop, or if it's inside of a function, it will evaluate the function
(i.e. create the function). The specifically choose which code to evaluate, highlight
the appropriate parts and use `Ctrl+Enter`. To evaluate the whole script, use
`Ctrl+Shift+Enter`.

### The Command Panel

To open the command panel, use `Ctrl+Shift+p` or go to Packages > Command Pallete > Toggle.
In the command pallete you can search for common commands. For example, type in
"julia" and you will see the commands which relate to Julia (and the keyboard shortcuts
for the commands).

### Common Keyboard Shortcuts

For MacOS, replace `Ctrl` by `Cmd`.

- Open the command panel: `Ctrl+Shift+p`
- Evaluate at the cursor: `Ctrl+Enter`
- Evaluate a whole script: `Ctrl+Shift+Enter`
- Open the console: `Ctrl+j` `Ctrl+o`
- Clear the console: `Ctrl+j` `Ctrl+c`
- Kill the Julia process: `Ctrl+j` `Ctrl+k`
- Open a REPL: `Ctrl+j` `Ctrl+r`
- Start Julia: `Ctrl+j` `Ctrl+s`
- Open the Plot Pane: `Ctrl+j` `Ctrl+p`

#### Adding Your Own Shortcuts

### Using the Plot Pane

Use of the plot pane will be automatic by plotting packages which support the
interface. The following describes the package interactions in more depth.

#### The Plots.jl Ecosystem

Plots.jl supports usage of the plot pane with compatible backends. The backends
which are compatible are:

- PlotlyJS
- PyPlot
- GR

The `plot` command will plot to the plot pane by default. To open up a non-plot
pane window, use the `gui()` command. For example,

```julia
using Plots
pyplot() # Choose a backend
plot(rand(4,4)) # This will plot to the plot pane
gui() # This will open up a separate interactive GUI window
```

#### Gadfly

Gadfly also will use the plot pane.

### Using the Workspace Pane

A workspace pane is available for showing the variables declared in the workspace.
To open the pane, go to Packages > Julia > Open Workspace.

### Using the Debugger

### Settings Descriptions

- Julia Path: The location of the Julia binary. This is the command that Atom uses
  to call Julia. It defaults to the command `julia` which requires that Julia
  has been added to the path. If Julia is not in the path, this must be the path
  to the Julia installation.
- Boot Mode: This is the type of process list that atom-julia-client is using. The
  default is `Basic` which only has one process running at a time. `Cycler` instead
  has a process queue per window, meaning that if you quit the REPL (`Ctrl+j`+ `Ctrl+o`) then there exists an already running process which will seamlessly
  replace it. `Server` has a shared process queue between all windows, resulting
  in less process (2+n vs 2n where n is the number of windows) with more interactions (thus less safe).
- Deprecation Warnings: Checkbox for whether to show the Julia deprecation warnings
  in the console.
- Optimization Level: Sets the `-O` optimization level for the Julia LLVM compiler.
  The default is 3 corresponding to `-O3` which is the default for the Julia REPL. Higher levels take longer to compile but produce faster code.
- Julia Options Precompiled:
- Enable Powershell Wrapper (Windows): Use a Powershell wrapper to spawn Julia.
  This is required in order to allow interrupts.
- Notifications: Enables the popup notifications from evaluations
- Error Notifications: Enables the error notification windows to be displayed as
  well as in the console.
- Enable Menu: Enables the Julia menu in the menu bar. This option requires a
  restart of Atom for the change to take effect.
- Enable Tool Bar: Shows the Julia icons in the tool bar. This option requires a
  restart of Atom for the change to take effect.
- Maximum Console Size: Limits the Console history's size. The default value is
  10,000. A larger history requires more memory and may slow down Atom, but will
  allow for more of the display to be saved.
- Terminal. The command which is used to open a terminal.
- Errors to Console: Denotes whether the error messages will be printed to the
  console.
- Launch on Startup: Denotes whether the Julia process will be started when the
  Atom window is opened.
