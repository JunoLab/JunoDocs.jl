# Juno Package Information

Juno consists of a number of packages for both Julia and Atom:

### Atom Packages
* [uber-juno](https://github.com/JunoLab/uber-juno) – An Atom metapackage which installs the Juno IDE.
* [julia-client](http://github.com/JunoLab/atom-julia-client) – these packages tie everything together. julia-client boots Julia from inside Atom, then communicates with the Atom.jl package to provide e.g. autocompletion and evaluation within the editor.
* [language-julia](https://github.com/JuliaLang/atom-language-julia) – Provides basic language support for Atom, e.g. syntax highlighting.
* [ink](https://github.com/JunoLab/atom-ink) – Provides generic UI components for building IDEs in Atom (e.g. the console lives here).
* [latex-completions](https://github.com/JunoLab/atom-latex-completions) – Provides unicode completions for certain $\LaTeX$ commands.
* [indent-detective](https://github.com/JunoLab/atom-indent-detective) – Tries to work out the indentation settings of your current file, sublime-style.


### Julia Packages

* [Juno.jl](https://github.com/JunoLab/Juno.jl) – The frontend API. Provides components for package developers and users to interact with Juno.
* [Atom.jl](http://github.com/JunoLab/Atom.jl) – This is the language server backend for Juno, the Julia IDE.
* [Blink.jl](https://github.com/JunoLab/Blink.jl) – An API for communicating with web pages from Julia.
* [CodeTools.jl](http://github.com/JunoLab/CodeTools.jl) – Provides backend editor support for Julia, e.g. autocompletion and evaluation.
* [Hiccup.jl](https://github.com/JunoLab/Hiccup.jl) – A library designed to make HTML from Julia.
* [LNR.jl](https://github.com/JunoLab/LNR.jl) – Parser for handwritten text where line and column information is significant.
* [Media.jl](https://github.com/JunoLab/Media.jl) – The display system which enables the user handle multiple input/output devices and decides what media types get displayed where.
