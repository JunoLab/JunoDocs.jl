# Developer Installation Instructions

This guide is for you if:

 * You wish to understand how Juno works under the hood
 * You like taking things apart, tinkering, and putting them back together
 * You want to be on the bleeding edge build, why?
   -  If you report bugs the devs will like you more
   -  Get bug fixes ahead of time (i.e. not wait for the next public release)
   - ***You wish to contribute!***

(Note: Original document tested on OSX on 4 Nov 2016, use common sense!)

In the beginning was **Atom** (highly customisable editor) and **Julia**. Developers started to assemble a collection of tools that lets us use Atom as a Julia IDE. And this collection has become known as **Juno**.  If you are standard user, the `uber-juno` package takes care of installing all of these components behind-the-scenes. But if you want to actually dig in and tweak some of them, you are going to need to assemble the parts individually. That's what this guide covers.

* Install the current ***stable*** or **bleeding-edge** Julia (command line version) from http://julialang.org/downloads/  
  Drag .app into Applications folder  
  Run

* Install Atom from https://atom.io/  
  Drag .app into Applications folder  
  Run

Ok, you should have Atom and a `Julia>` Julia-prompt side-by-side.

`Julia> Pkg.status()` should say no packages installed!  `Packages` menu drop down in Atom shouldn't have "Julia" yet.

* Use Atom's `apm` package manager to install `atom-julia-client` (Julia IDE for Atom) which makes use of `ink` (toolkit for building IDEs in Atom):

```shell
apm install https://github.com/JunoLab/atom-ink           # ~/.atom/packages/ink
apm install https://github.com/JunoLab/atom-julia-client  # ~/.atom/packages/julia-client
```

You can observe this creates a local mirror of each GitHub repo.  
(Note: You can sync all local repos with `Pkg.update()`

If you now relaunch Atom you will see the `Packages` menu drop down now has a "Julia" entry.
  `Packages -> Julia -> Open Console`
  Try `1+1` and it will fail "Julia could not be started!"

(Note that `Julia> Pkg.status()` still reports nothing).
  
(**NOTE**: you can actually skip this step because when you do `1+1` a couple of steps further down it will automatically perform this command!)

* `Julia> Pkg.add("Atom")`

Now `Julia> Pkg.status()` will list a ton of stuff:

```julia
Julia> Pkg.status()
1 required packages:
 - Atom                          0.5.4
43 additional packages:
 - ASTInterpreter                0.0.4
 - AbstractTrees                 0.0.4
 - ArgParse                      0.4.0
 - BinDeps                       0.4.5
 - Blink                         0.4.3
 - COFF                          0.0.2
 - ...
```

NOTE:

```shell
ls ~/.julia/lib/v0.5/  
Atom.ji		CodeTools.ji   Hiccup.ji	HttpParser.ji	Juno.ji		MacroTools.ji	Mustache.ji	SHA.ji
BinDeps.ji	Codecs.ji	   Homebrew.ji	HttpServer.ji	LNR.ji		MbedTLS.ji	Mux.ji		URIParser.ji
Blink.ji	Compat.ji	   HttpCommon.ji	JSON.ji		Lazy.ji		Media.ji	Reexport.ji	WebSockets.ji

ls ~/.atom/packages
README.md	ink		julia-client	language-julia
```

Now restarting Atom, doing `Packages -> Julia -> Open Console -> 1+1` it still fails with "Julia could not be started!"

* `Atom -> Prefs -> Packages -> 'julia client' -> Settings -> Julia Path -> /Applications/Julia-0.5.app/Contents/Resources/julia/bin/julia`  *(...or wherever Julia installed itself)*

* NOW type `1+1` and it will precompile Julia!  (if you skipped the `Pkg.add("Atom")` step above it will first add the `Atom.jl` package and a bunch of dependent packages).

*(Note: https://github.com/JunoLab/atom-julia-client/blob/master/script/boot.jl <-- this is what actually happens when you type `1+1` if you're interested).*

So at this point you should have a standard 'Juno' i.e. Julia-in-Atom installation. You can run Julia code in the console (just like the Julia prompt you get from Julia.app), also you can create and run files and even debug with breakpoints etc.

Wait! Something is missing -- there is no syntax highlighting, and the buttons along the left margin aren't there yet!

There must be some stuff that `uber-juno` installed that we haven't!  https://github.com/JunoLab/uber-juno/blob/master/lib/packages.coffee gives:

```coffee
requirements = [
  'tool-bar'
  'latex-completions'
  'language-julia'
  'ink'
  'julia-client'
]
```

So we *could* go into `Atom -> Preferences -> install -> 'language-julia'` and similarly for the other 2 we don't have.

NOTE: we could probably alternatively use `apm` to do it from the command line like we did above.  Googling finds: https://github.com/JuliaEditorSupport/atom-language-julia which says to do `apm install language-julia`.  Ah, but that is going to install the stock release version that Atom has in its repositories, so if we want instead the master version, we should probably be doing something like:

* `apm install https://github.com/JuliaEditorSupport/atom-language-julia`

Great!  It worked!

Now let's get that toolbar! https://github.com/JunoLab/atom-julia-client/blob/master/lib/package/toolbar.coffee

If you want cutting-edge versions of these you will have to repeat the above process: locate the GitHub repo & use `apm`.  Instead let's just do the standard install from Atom:

* `Atom -> Preferences -> install -> 'tool-bar'`   *(If it fails try a couple more times -- often for me the first attempt fails).*
  `Atom -> Julia -> Settings -> Enable Toolbar`

* `Atom -> Preferences -> install -> 'latex-completions'`  
  Check by typing `x\til` into Atom editor and it should offer `...de` auto-completion.  Hit `TAB` and you should get `x̃`

Of course if you find you need bleeding-edge on either of these, you can just uninstall from Atom and use `apm`.

---

Now let's work on bringing the key packages up to bleeding edge!

* Sync `Atom` package!

```julia
julia> Pkg.checkout("Atom")
INFO: Checking out Atom master...
INFO: Pulling Atom latest master...
INFO: No packages to install, update or remove

julia> Pkg.status()
1 required packages:
 - Atom                          0.5.4+             master
43 additional packages:
 - ASTInterpreter                0.0.4
 - AbstractTrees                 0.0.4
 - ArgParse                      0.4.0
 - BinDeps                       0.4.5
 - Blink                         0.4.3
 - COFF                          0.0.2
 - ...
```

Notice we have brought Atom up to bleeding edge. Now if the package maintainers push a new version, we can sync with it by doing `Pkg.update()`

* **Sync up a few more packages.**  The folks on https://gitter.im/JunoLab/Juno recommend:

  *  Blink
  *  CodeTools
  *  Hiccup
  *  Juno
  *  LNR
  *  Media  

(Note: You could do `foreach( Pkg.checkout, ["Blink", "CodeTools", "Hiccup", "etc"] )`).

**Quick note on using the Julia package manager, i.e. `Pkg.bla`**

If you want to revert/unsync a particular package, do `Pkg.free("foo")`.  At time of writing `Hiccup` was causing err.. hiccups so it needed to be reverted.

`Pkg.update()` will update/sync all checked-out Julia packages!  The corresponding command for syncing *Atom* packages is `apm upgrade`.)

Complete `Pkg` doc at http://docs.julialang.org/en/release-0.5/manual/packages/

* If you want bleeding-edge for Julia's ***debugger*** as well, you need:

```julia
Pkg.checkout("Reactive")
Pkg.checkout("ObjFileBase")
Pkg.checkout("StructIO")
Pkg.checkout("AbstractTrees")
Pkg.checkout("DWARF")
Pkg.checkout("ELF")
Pkg.checkout("MachO")
Pkg.checkout("TerminalUI")
Pkg.checkout("ASTInterpreter")
Pkg.checkout("VT100")
Pkg.checkout("JuliaParser")
Pkg.checkout("Gallium")
Pkg.clone("https://github.com/Keno/COFF.jl")  # <-- UNREGISTERED package! (*)
Pkg.checkout("COFF")
```

(*) *Registered* packages can be installed with `Pkg.add`, UNREGISTERED packages require `Pkg.clone` + a complete URL.

That list comes straight from the bottom of https://github.com/Keno/Gallium.jl#installation

Why didn't we have to `Pkg.add` each of those first? Because when we did `Pkg.add("Atom")` it did `Pkg.add` on all of Atom's dependencies (i.e. everything in https://github.com/JunoLab/Atom.jl/blob/master/REQUIRE) one of which is `Gallium`. And this `Pkg.add("Gallium")` then did `Pkg.add` on all of *Gallium*'s dependencies: https://github.com/Keno/Gallium.jl/blob/master/REQUIRE. 

You can see most of those list-items in Gallium's `REQUIRE` file, and presumably the others are to be found somewhere in the dependency tree.
