# The Juno IDE Documentation

Juno is an Integrated Development Environment (IDE) for the Julia language. It provides
powerful tools to help you develop code. Juno is built on [Atom](https://atom.io), a text
editor provided by GitHub. Juno consists of both Julia and Atom packages in order to
add Julia-specific enhancements, such as syntax highlighting, a plot pane,
integration with Julia's debugger, a console for running code, and much more.

### Installation / Updates

To install Juno, please see the [Installation Instructions](@ref). These installation
instructions should work for Windows, Mac OSX, and Linux on the current Julia release (v1).
If you wish to use Juno with the Julia nightly version, you may need to use the
[Developer Installation Instructions](@ref).

Since Juno is under a rapid development, there will be lots of updates after your installation
and they needs some steps.
When you update your Juno, please first read through [Update Instructions](@ref).

### Reporting Issues / Bugs / Discussions

If you have any issues with this setup, please do report them
on [Juno.jl GitHub repository](https://github.com/JunoLab/Juno.jl/issues) or
at [Julia's discussion forum under the `Tooling ▶ Juno` category](https://discourse.julialang.org/c/tools/juno/l/latest).
We'll do our best to help you get going.
You can also ping us on the `#juno-bridged` channel in [the Julia slack](https://slackinvite.julialang.org/)
to ask some random questions or for a chat.

### User Manual

The following pages are the user manual. These describe how to install and use
Juno, along with answer questions most new users encounter.

```@contents
Pages = [
    "man/installation.md",
    "man/basic_usage.md",
    "man/faq.md",
    "man/remote.md",
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
    "devdocs/ecosystem.md",
    "devdocs/test_suites.md",
    "devdocs/communication.md"
]
Depth = 2
```
