# Juno's Ecosystem

Juno consists of a number of packages for both Julia and Atom:

## Atom Packages

### Core Packages

* [language-julia](https://github.com/JuliaLang/atom-language-julia) – Provides basic language support of Julia, e.g. syntax highlighting.
* [julia-client](http://github.com/JunoLab/atom-julia-client) – This package ties everything together: julia-client boots Julia inside Atom, then communicates with the Atom.jl package to provide e.g. autocompletion and evaluation within the editor.
* [ink](https://github.com/JunoLab/atom-ink) – Provides generic UI components for building IDEs in Atom (e.g. the REPL, plot pane live here).

### Extra Packages

* [uber-juno](https://github.com/JunoLab/uber-juno) – The official installer package of Juno, usually runs only once.
* [latex-completions](https://github.com/JunoLab/atom-latex-completions) – Provides Unicode completions for certain $\LaTeX$ commands.
* [indent-detective](https://github.com/JunoLab/atom-indent-detective) – Tries to work out the indentation settings of your current file, sublime-style.
* [hyperclick](https://github.com/facebookarchive/hyperclick) - External package that provides "editor-text-clicking" UI.
* [tool-bar](https://github.com/suda/tool-bar) - External package that provides the tool-bar UI.

## Julia Packages

* [Juno.jl](https://github.com/JunoLab/Juno.jl) – The frontend API. Provides components for package developers and users to interact with Juno.
* [Atom.jl](http://github.com/JunoLab/Atom.jl) – This is the language server backend for Juno, the Julia IDE.
* [CodeTools.jl](http://github.com/JunoLab/CodeTools.jl) – Provides backend editor support for Julia, e.g. editor module detection.
* [Blink.jl](https://github.com/JunoLab/Blink.jl) – An API for communicating with web pages from Julia.
* [Hiccup.jl](https://github.com/JunoLab/Hiccup.jl) – A library designed to make HTML from Julia.
* [LNR.jl](https://github.com/JunoLab/LNR.jl) – Parser for handwritten text where line and column information is significant.
* [Media.jl](https://github.com/JunoLab/Media.jl) – The display system which enables the user handle multiple input/output devices and decides what media types get displayed where.

```@meta
# TODO: add external packages, like CSTParser, JuliaInterpreter ?
```