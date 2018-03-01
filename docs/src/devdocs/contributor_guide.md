# Contributor Guide

### Help & Bug Reporting

This project is composed of many sub-projects, and it can be hard to know the appropriate
place to file issues. For that reason we prefer that non-developers report issues on the
[Juno discussion forum](https://discourse.julialang.org/) under the "issue" category or
or [at the Juno.jl Github repository](https://github.com/JunoLab/Juno.jl/issues). If
you know which package the issue is appropriate in, then please open an issue there.
Bug reports can be some of the most helpful contributions!

### Contributing to the Packages

If you have feature ideas you'd like to implement, or bugs you'd like to fix, feel free to
open a [discussion](https://discourse.julialang.org/) under the "dev" category – we're always happy
to help people flesh out their ideas or get unstuck on problems. Another good place
to discuss with developers is in the [Juno Gitter](https://gitter.im/JunoLab/Juno).
Come by and we can chat about your ideas.

If you look over the GitHub issues for the various packages, you may notice some labelled
[up for
grabs](https://github.com/JunoLab/atom-julia-client/issues?q=is%3Aopen+is%3Aissue+label%3A%22up+for+grabs%22).
These are features or bugs for which the implementation or fix is reasonably straightforward –
they might take a few hours of effort or more, but they won't involve enormous expert-level
challenges. As above, feel free to open up a discussion on these and we'll help you get
going.

For extra general resources, consider the following:

* [Julia Documentation](http://docs.julialang.org/en/latest/) – for learning about the Julia
  language.
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – by far the best reference
  on the JavaScript language and browser window APIs.
* [CoffeeScript](http://coffeescript.org/) – Atom and its packages use this to make working
  with JS a little more convenient.
* [The Atom Docs](https://atom.io/docs) – the Atom Flight Manual is a very readable introduction
  to Atom's internals, and the API docs are a useful reference.
* [julia-client developer docs](@ref Communication) – These docs go into more detail about the internals
  of this project and the development workflow.

Most open source projects, including ours, use [git](http://git-scm.org) to help work
together. There are plenty of git tutorials around, and the various GUI clients (e.g. GitHub
for Windows/Mac, SourceTree) are very helpful for learning the ropes.

### Contributing to the Documentation

The documentation is provided by the JunoLab/JunoDocs.jl repository. It's built
using Documenter.jl. To modify the documentation, simply modify the Markdown
files in the docs/src folder. For more information on using Documenter.jl,
please see the [Documenter.jl Documentation](https://juliadocs.github.io/Documenter.jl/latest/).
