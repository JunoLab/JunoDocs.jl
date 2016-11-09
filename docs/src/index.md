# The Juno IDE Documentation

Juno is an Integrated Development Environment (IDE) for the Julia language. It provides
powerful tools to help you develop code. Juno is built on Atom, a text editor
provided by Github. Juno consists of both Julia and Atom packages in order to
add Julia-specific enhancements, such as syntax highlighting, a plot pane,
integration with Julia's debugger (Gallium), a console for running code, and much more.

### Installation

To install Juno, please see the [Installation Instructions](@ref). These installation
instructions should work for Windows, Mac OSX, and Linux on the current Julia release (v0.5).
If you wish to use Juno with the Julia nightly version, you may need to use the
[Developer Installation Instructions](@ref).

### Reporting Issues / Bugs

If you have any issues with this setup, please do report them at
[discuss.junolab.org](http://discuss.junolab.org). We'll do our best to help you get going.

### User Manual

The following pages are the user manual. These describe how to install and use
Juno, along with answer questions most new users encounter.

```@contents
Pages = [
    "man/installation.md",
    "man/basic_usage.md",
    "man/faq.md",
    "man/juno_frontend.md"
    ]
Depth = 2
```

### Developer Documentation

This part of the documentation is for Juno developers. It details how to get
the bleeding edge Juno installation, how the CI works, and describes the Juno
package ecosystem.

```@contents
Pages = [
    "devdocs/contributor_guide.md",
    "devdocs/dev_install.md",
    "devdocs/package_info.md",
    "devdocs/juno_ci.md",
    "devdocs/communication.md"
]
Depth = 2
```
