# Basic Usage

These instructions assume that you have already installed Juno. If you have not
installed Juno, please see [the installation instructions]().

### Opening the Console Window

To open the console, use the command `Ctrl+j` then `Ctrl+o`, or go to Packages >
Julia > Open Console. This will open a window with the title console. To use the
console, simply type in a command and hit `Enter`. This will run the command in
Julia (the first time a command is run, the connection between Julia and Atom
will be installed, taking a bit more time).

Using the console is similar to using the REPL. For example, to enter multi-line
input, use `Ctrl+Enter`. Tab completion will be available with a window for selecting
the desired completion (which can be scrolled through using the arrow keys). Juno
also features enhanced displaying of output types. For example, types like `Array`
show an arrow on the side. By clicking on the header for this output you will
expand the array in the console. Note that floating point numbers also truncate their
displays as well: to see more digits, click on the number.

### Inline Evaluation

You can evaluate your Julia code inline by navigating your curser to the appropriate
code and hitting `Ctrl+Enter`. This will run the code block that the curser is
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

Atom will need to be reloaded, either by closing and reopening it or by
running the `Window: Reload` command. At this point, you should find that
there are a bunch of new Julia commands available in Atom – type "Julia"
into the command palette to see what's available. If the `julia` command
isn't on your path already, set the Julia path in the julia-client settings panel.

#### Adding Your Own Shortcuts

### Using the Plot Pane

### Using the Workspace Pane

### Using the Debugger

### Settings Descriptions
