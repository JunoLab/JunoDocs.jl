var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#The-Juno-IDE-Documentation-1",
    "page": "Home",
    "title": "The Juno IDE Documentation",
    "category": "section",
    "text": "Juno is an Integrated Development Environment (IDE) for the Julia language. It provides powerful tools to help you develop code. Juno is built on Atom, a text editor a text editor provided by Github. Juno extends Atom by adding Julia-specific enhancements, such as syntax highlighting, integration with Julia's debugger (Gallium), a console for running code, and much more."
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "To install Juno, please see the installation page. These installation instructions should work for Windows, Mac OSX, and Linux on the current Julia release (v0.5). If you wish to use Juno with the Julia nightly version, you may need to use the developer installation."
},

{
    "location": "index.html#Reporting-Issues-/-Bugs-1",
    "page": "Home",
    "title": "Reporting Issues / Bugs",
    "category": "section",
    "text": "If you have any issues with this setup, please do report it here or at Juno Discuss. We'll do our best to help you get going."
},

{
    "location": "index.html#User-Manual-1",
    "page": "Home",
    "title": "User Manual",
    "category": "section",
    "text": "The following pages are the user manual. These describe how to install and use Juno, along with answer questions most new users encounter.Pages = [\n    \"man/installation.md\",\n    \"man/basic_usage.md\",\n    \"man/faq.md\",\n    \"man/juno_frontend.md\"\n    ]\nDepth = 2"
},

{
    "location": "index.html#Developer-Documentation-1",
    "page": "Home",
    "title": "Developer Documentation",
    "category": "section",
    "text": "This part of the documentation is for Juno developers. It details how to get the bleeding edge Juno installation, how the CI works, and describes the Juno package ecosystem.Pages = [\n    \"devdocs/contributor_guide.md\",\n    \"devdocs/dev_install.md\",\n    \"devdocs/package_info.md\",\n    \"devdocs/juno_ci.md\",\n    \"devdocs/communication.md\"\n]\nDepth = 2"
},

{
    "location": "man/installation.html#",
    "page": "Installation Instructions",
    "title": "Installation Instructions",
    "category": "page",
    "text": ""
},

{
    "location": "man/installation.html#Installation-Instructions-1",
    "page": "Installation Instructions",
    "title": "Installation Instructions",
    "category": "section",
    "text": "Getting Juno takes a couple of simple steps. One needs to:Install Julia\nInstall Atom\nInstall the Juno plugin for Atom (uber-juno)Follow this and you'll be running Julia code in no time!"
},

{
    "location": "man/installation.html#Getting-Julia-1",
    "page": "Installation Instructions",
    "title": "Getting Julia",
    "category": "section",
    "text": "First, download Julia (command line version) for your platform from the downloads page.Then:"
},

{
    "location": "man/installation.html#On-Windows-1",
    "page": "Installation Instructions",
    "title": "On Windows",
    "category": "section",
    "text": "Run the downloaded installer, using the default settings."
},

{
    "location": "man/installation.html#On-OS-X-1",
    "page": "Installation Instructions",
    "title": "On OS X",
    "category": "section",
    "text": "Double-click the downloaded disk image to load it.\nDrag the Julia-0.X.Y app onto the Applications folder shortcut."
},

{
    "location": "man/installation.html#On-Linux-1",
    "page": "Installation Instructions",
    "title": "On Linux",
    "category": "section",
    "text": "Unzip the downloaded folder and place it in your home directory.\nMake sure to have dependencies curl and cmake installed."
},

{
    "location": "man/installation.html#Getting-Atom-1",
    "page": "Installation Instructions",
    "title": "Getting Atom",
    "category": "section",
    "text": "Download, install and open Atom. If you have it already, make sure it's up to date (version 1.7+)."
},

{
    "location": "man/installation.html#Installing-the-Juno-Plugin-1",
    "page": "Installation Instructions",
    "title": "Installing the Juno Plugin",
    "category": "section",
    "text": "In Atom, go to Settings (<kbd>Ctrl</kbd>+<kbd>,</kbd>, or <kbd>Cmd</kbd>+<kbd>,</kbd> on OS X) and go to the \"Install\" panel.Type uber-juno into the search box and hit enter. Click the install button on the package of the same name.Atom will then set up Juno for you, installing the required Atom and Julia packages. Once the setup is done you're good to go!"
},

{
    "location": "man/installation.html#Additional-Windows-Step:-Adding-the-Julia-Path-1",
    "page": "Installation Instructions",
    "title": "Additional Windows Step: Adding the Julia Path",
    "category": "section",
    "text": "If you installed Julia on Windows using the binaries provided by JuliaLang.org, then you will need to add Julia's path to your Atom settings. The settings can be found in Packages > Julia > Settings. Where it says \"Julia Path\" is where the Julia path must be included. The standard Julia installation will place Julia in the following location:C:\\Users\\[USERNAME]\\AppData\\Local\\Julia-0.5.0\\bin\\juliawhere [USERNAME] is your Windows username."
},

{
    "location": "man/basic_usage.html#",
    "page": "Basic Usage",
    "title": "Basic Usage",
    "category": "page",
    "text": ""
},

{
    "location": "man/basic_usage.html#Basic-Usage-1",
    "page": "Basic Usage",
    "title": "Basic Usage",
    "category": "section",
    "text": ""
},

{
    "location": "man/basic_usage.html#The-Command-Panel-1",
    "page": "Basic Usage",
    "title": "The Command Panel",
    "category": "section",
    "text": ""
},

{
    "location": "man/basic_usage.html#Common-Keyboard-Shortcuts-1",
    "page": "Basic Usage",
    "title": "Common Keyboard Shortcuts",
    "category": "section",
    "text": "Atom will need to be reloaded, either by closing and reopening it or by running the Window: Reload command. At this point, you should find that there are a bunch of new Julia commands available in Atom – type \"Julia\" into the command palette to see what's available. If the julia command isn't on your path already, set the Julia path in the julia-client settings panel.Get started by going into a buffer set to Julia syntax, typing 2+2, and pressing <kbd>C-Enter</kbd> (where <kbd>C</kbd> stands for <kbd>Ctrl</kbd>, or <kdb>Cmd</kbd> on OS X). After the client boots you should see the result pop up next to the text. You can also work in the Atom REPL by pressing <kbd>C-J C-O</kbd> – just type in the input box and <kbd>Shift-Enter</kbd> to evaluate."
},

{
    "location": "man/basic_usage.html#Adding-Your-Own-Shortcuts-1",
    "page": "Basic Usage",
    "title": "Adding Your Own Shortcuts",
    "category": "section",
    "text": ""
},

{
    "location": "man/basic_usage.html#Using-the-Plot-Pane-1",
    "page": "Basic Usage",
    "title": "Using the Plot Pane",
    "category": "section",
    "text": ""
},

{
    "location": "man/basic_usage.html#Using-the-Workspace-Pane-1",
    "page": "Basic Usage",
    "title": "Using the Workspace Pane",
    "category": "section",
    "text": ""
},

{
    "location": "man/basic_usage.html#Using-the-Debugger-1",
    "page": "Basic Usage",
    "title": "Using the Debugger",
    "category": "section",
    "text": ""
},

{
    "location": "man/basic_usage.html#Settings-Descriptions-1",
    "page": "Basic Usage",
    "title": "Settings Descriptions",
    "category": "section",
    "text": ""
},

{
    "location": "man/faq.html#",
    "page": "FAQ",
    "title": "FAQ",
    "category": "page",
    "text": ""
},

{
    "location": "man/faq.html#FAQ-1",
    "page": "FAQ",
    "title": "FAQ",
    "category": "section",
    "text": ""
},

{
    "location": "man/faq.html#I-am-having-issues,-where-do-I-leave-a-bug-report?-1",
    "page": "FAQ",
    "title": "I am having issues, where do I leave a bug report?",
    "category": "section",
    "text": "Please leave bug reports either at the discussion board or at the Juno.jl Github repository."
},

{
    "location": "man/faq.html#Some-Juno-package-is-using-the-wrong-precompile-cache,-what-do-I-do?-1",
    "page": "FAQ",
    "title": "Some Juno package is using the wrong precompile cache, what do I do?",
    "category": "section",
    "text": "This problem manifests itself in errors like:WARNING: Method definition\nWARNING: Module Juno with uuid 738353145462472 is missing from the cache.\nERROR: LoadError: Declaring precompile(false) is not allowed in files that are being precompiled.\nERROR: LoadError: Failed to precompile Atom to C:\\Users...One way this can occur is from updating Julia versions. However, this has a very easy fix. Go into the Julia REPL (not the Juno console in Atom, but the actual Julia terminal window) and type in the command:using AtomThat will force Julia to re-compile all of the cache files and should fix the problem."
},

{
    "location": "man/faq.html#What-are-these-warnings-in-the-console?-1",
    "page": "FAQ",
    "title": "What are these warnings in the console?",
    "category": "section",
    "text": "If you are experiencing warnings like:WARNING: julia-client: can't render lazyorWARNING: Atom.jl: unrecognised message clearLazy.there's no reason to be alarmed: these warnings are harmless. They mostly occur because Juno is developing very fast, and so the package versions you have may be \"out of sync\". The most common fix is to Pkg.update() and so make sure you update your Atom packages (a blue box shows up in the in the bottom right corner when an update is available).(Image: UpdateBoxScreenshot)If none of these work, again there's no need to worry since these warnings are not breaking. Note that if you are on the Julia nightly version, you should expect that these warnings may occur, it's just part of being on the bleeding edge."
},

{
    "location": "man/faq.html#I-am-having-a-problem-running-Juno-with-an-older-version-of-Julia,-why?-1",
    "page": "FAQ",
    "title": "I am having a problem running Juno with an older version of Julia, why?",
    "category": "section",
    "text": "Juno is under rapid development, so it's expected that previous versions may not be compatible with the Atom packages overtime. Julia will automatically use older versions on the Julia-side packages, but Atom will always give you the most up-to-date packages it knows about, which causes this issue. The easy way to solve this is to always use the current Julia release. Otherwise, resort to the Developer Install for the Atom packages and use git to checkout an older version. This requires some git know-how, so it's only recommended if the older version of Julia is truly necessary."
},

{
    "location": "man/faq.html#How-do-I-use-Juno-with-the-Julia-Nightly-version?-1",
    "page": "FAQ",
    "title": "How do I use Juno with the Julia Nightly version?",
    "category": "section",
    "text": "If you want to use Juno with the nightly version use caution: this package is under rapid development so do so at your own risk. That being said, the Julia nightly should work using the Developer Install. Note that this will require you to be on master for the Julia and Atom packages, so things will be changing likely before documentation changes."
},

{
    "location": "man/juno_frontend.html#",
    "page": "The Juno.jl Front-End",
    "title": "The Juno.jl Front-End",
    "category": "page",
    "text": ""
},

{
    "location": "man/juno_frontend.html#The-Juno.jl-Front-End-1",
    "page": "The Juno.jl Front-End",
    "title": "The Juno.jl Front-End",
    "category": "section",
    "text": ""
},

{
    "location": "man/juno_frontend.html#Media.media",
    "page": "The Juno.jl Front-End",
    "title": "Media.media",
    "category": "Function",
    "text": "media(T) gives the media type of the type T. The default is Textual.\n\nmedia(Gadfly.Plot) == Media.Plot\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Media.@media",
    "page": "The Juno.jl Front-End",
    "title": "Media.@media",
    "category": "Macro",
    "text": "Similar to abstract:\n\n@media Foo\n\ndefines Foo, as well as FooT, the type representing Foo and its descendants (which is useful for dispatch).\n\n@media Bar <: Foo\nBar::FooT\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Media.setdisplay",
    "page": "The Juno.jl Front-End",
    "title": "Media.setdisplay",
    "category": "Function",
    "text": "setdisplay([input], T, output)\n\nDisplay T objects using output when produced by input.\n\nT is an object type or media type, e.g. Gadfly.Plot or Media.Graphical.\n\ndisplay(Editor(), Image, Console())\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Media.getdisplay",
    "page": "The Juno.jl Front-End",
    "title": "Media.getdisplay",
    "category": "Function",
    "text": "getdisplay(T)\n\nFind out what output device T will display on.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.info",
    "page": "The Juno.jl Front-End",
    "title": "Juno.info",
    "category": "Function",
    "text": "info(msg)\n\nShow the given message in Juno's console using blue styling, or fall back to Base.info.\n\nIn a package, you can use import Juno: info to replace the default version with this one.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Enhanced-Display-1",
    "page": "The Juno.jl Front-End",
    "title": "Enhanced Display",
    "category": "section",
    "text": "Juno.jl includes features which allow package developers to created enhanced displays in Juno. For example, we can print info to the console in a nicer way:info(\"foo\")(Image: info)The following functions provide this interface:Media.media\nMedia.@media\nMedia.setdisplay\nMedia.getdisplay\nJuno.info"
},

{
    "location": "man/juno_frontend.html#Juno.@progress",
    "page": "The Juno.jl Front-End",
    "title": "Juno.@progress",
    "category": "Macro",
    "text": "@progress for i = ...\n\nShow a progress metre for the given loop if possible.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Progress-Meters-1",
    "page": "The Juno.jl Front-End",
    "title": "Progress Meters",
    "category": "section",
    "text": "Juno.jl allows package developers to use the progressbar which is provided in the Atom window. For example, you can easily show a progress meter for a for loop via the command:@progress for ...(Image: progress)The following functions provide this interface:Juno.@progress"
},

{
    "location": "man/juno_frontend.html#Juno.isactive",
    "page": "The Juno.jl Front-End",
    "title": "Juno.isactive",
    "category": "Function",
    "text": "isactive()\n\nWill return true when the current Julia process is connected to a running Juno frontend.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.input",
    "page": "The Juno.jl Front-End",
    "title": "Juno.input",
    "category": "Function",
    "text": "input() -> \"...\"\n\nPrompt the user to input some text, and return it.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.selector",
    "page": "The Juno.jl Front-End",
    "title": "Juno.selector",
    "category": "Function",
    "text": "selector([xs...]) -> x\n\nAllow the user to select one of the xs.\n\nxs should be an iterator of strings. Currently there is no fallback in other environments.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Console-Interactions-1",
    "page": "The Juno.jl Front-End",
    "title": "Console Interactions",
    "category": "section",
    "text": "Juno.jl lets package developers interact with users via the Juno console. For example, you can allow the user to select from a list of options:selector(xs) -> x(Image: selector)or get input in the console:input()(Image: input)The following functions provide this interface:Juno.isactive\nJuno.input\nJuno.selector"
},

{
    "location": "devdocs/contributor_guide.html#",
    "page": "Contributor Guide",
    "title": "Contributor Guide",
    "category": "page",
    "text": ""
},

{
    "location": "devdocs/contributor_guide.html#Contributor-Guide-1",
    "page": "Contributor Guide",
    "title": "Contributor Guide",
    "category": "section",
    "text": ""
},

{
    "location": "devdocs/dev_install.html#",
    "page": "Developer Installation Instructions",
    "title": "Developer Installation Instructions",
    "category": "page",
    "text": ""
},

{
    "location": "devdocs/dev_install.html#Developer-Installation-Instructions-1",
    "page": "Developer Installation Instructions",
    "title": "Developer Installation Instructions",
    "category": "section",
    "text": "These are the developer install instructions. To develop Juno, you need to be on the latest Atom and Julia packages. This install is also relevant to users on Julia's nightlies since this will install fixes which have not be released. However, use caution: this install is not guaranteed to be stable, and getting it to work may require intimate knowledge of Julia as the documentation will likely be behind."
},

{
    "location": "devdocs/dev_install.html#Getting-Master-on-the-Atom-Packages-1",
    "page": "Developer Installation Instructions",
    "title": "Getting Master on the Atom Packages",
    "category": "section",
    "text": "To install the latest atom packages, run the commands:apm install https://github.com/JunoLab/atom-ink\napm install https://github.com/JunoLab/atom-julia-clientIt's a good idea to keep these up to date by running Pkg.update() in Julia and syncing the package repos every now and then, which will be in ~/.atom/packages/julia-client and ~/.atom/packages/ink. Note that this installation method for the Atom packages will allow them to be update each commit via the Atom package manager."
},

{
    "location": "devdocs/dev_install.html#Bleeding-Edge-Installs-for-the-Julia-Packages-1",
    "page": "Developer Installation Instructions",
    "title": "Bleeding Edge Installs for the Julia Packages",
    "category": "section",
    "text": "The Julia packages can be installed by either cloning the repository or though the standard installation (Pkg.add(PkgName)) followed by checking out the master branch (Pkg.checkout(\"PkgName\"). The following code will check out the relevant packages:Pkg.checkout(\"Atom\")\nPkg.checkout(\"Blink\")\nPkg.checkout(\"CodeTools\")\nPkg.checkout(\"DevTools\")\nPkg.checkout(\"Hiccup\")\nPkg.checkout(\"Juno\")\nPkg.checkout(\"LNR\")\nPkg.checkout(\"Media\")"
},

{
    "location": "devdocs/dev_install.html#Bleeding-Edge-Features-(Plotting,-Debugging,-etc.)-1",
    "page": "Developer Installation Instructions",
    "title": "Bleeding Edge Features (Plotting, Debugging, etc.)",
    "category": "section",
    "text": "In order to use the bleeding edge features, you may need to checkout master on the respective repositories. For example, for the latest plotting features, you may need toPkg.checkout(\"Plots\")and/or checkout master on a backend:Pkg.checkout(\"PlotlyJS\")For the latest debugger features, you may need to checkout the full debugger stack. This is done with the following code:Pkg.clone(\"https://github.com/Keno/COFF.jl\")\nPkg.checkout(\"Reactive\")\nPkg.checkout(\"ObjFileBase\")\nPkg.checkout(\"StructIO\")\nPkg.checkout(\"AbstractTrees\")\nPkg.checkout(\"DWARF\")\nPkg.checkout(\"ELF\")\nPkg.checkout(\"MachO\")\nPkg.checkout(\"COFF\")\nPkg.checkout(\"TerminalUI\")\nPkg.checkout(\"ASTInterpreter\")\nPkg.checkout(\"VT100\")\nPkg.checkout(\"JuliaParser\")\nPkg.checkout(\"Gallium\")"
},

{
    "location": "devdocs/package_info.html#",
    "page": "Juno Package Information",
    "title": "Juno Package Information",
    "category": "page",
    "text": ""
},

{
    "location": "devdocs/package_info.html#Juno-Package-Information-1",
    "page": "Juno Package Information",
    "title": "Juno Package Information",
    "category": "section",
    "text": "Julia support in Atom consists of a number of packages for both Julia and Atom:"
},

{
    "location": "devdocs/package_info.html#Atom-Packages-1",
    "page": "Juno Package Information",
    "title": "Atom Packages",
    "category": "section",
    "text": "atom-bombe - Encrypts plain text files\natom-eval - Super secret stuff.\natom-indent-detective - Tries to work out the indentation settings of your current file, sublime-style\nlanguage-julia – Provides basic language support for Atom, e.g. syntax highlighting.\nink – Provides generic UI components for building IDEs in Atom (e.g. the console lives here).\njulia-client – these packages tie everything together. julia-client boots Julia from inside Atom, then communicates with the Atom.jl package to provide e.g. autocompletion and evaluation within the editor.\nuber-juno - An Atom metapackage which installs the Juno IDE."
},

{
    "location": "devdocs/package_info.html#Julia-Packages-1",
    "page": "Juno Package Information",
    "title": "Julia Packages",
    "category": "section",
    "text": "Atom.jl - This is the language server backend for Juno, the Julia IDE.\nBlink.jl - An API for communicating with web pages from Julia.\nCodeTools.jl – Provides backend editor support for Julia, e.g. autocompletion and evaluation.\nDevTools.jl - Graphical displays for Julia types.\nHiccup.jl - A library designed to make HTML from Julia.\nJuno.jl - The frontend API. Provides components for package developers and users to interact with Juno.\nLNR.jl - Parser for handwritten text where  line and column information is significant.\nMedia.jl - The display system which enables the user handle multiple input/output devices and decides what media types get displayed where."
},

{
    "location": "devdocs/juno_ci.html#",
    "page": "Juno's CI",
    "title": "Juno's CI",
    "category": "page",
    "text": ""
},

{
    "location": "devdocs/juno_ci.html#Juno's-CI-1",
    "page": "Juno's CI",
    "title": "Juno's CI",
    "category": "section",
    "text": ""
},

{
    "location": "devdocs/communication.html#",
    "page": "Communication",
    "title": "Communication",
    "category": "page",
    "text": ""
},

{
    "location": "devdocs/communication.html#Communication-1",
    "page": "Communication",
    "title": "Communication",
    "category": "section",
    "text": "Juno works by booting a Julia client from Atom. When Julia starts it connects to Atom over a TCP port, and from that point on Julia and Atom can each send messages to each other. Messages are JSON objects, with a type header to tell the receiver how the message should be handled.The code handling low-level communication is kept in client.coffee and comm.jl. However, the details of those files aren't particularly important – you only need to understand the communication API, which we'll go over here."
},

{
    "location": "devdocs/communication.html#Sending-messages-from-Atom-1",
    "page": "Communication",
    "title": "Sending messages from Atom",
    "category": "section",
    "text": "Communication works by sending messages with an appropriate type on one side and registering handlers for that type on the other. The handler then takes some action and returns data to the original sender. For example, on the Atom side messages are sent in CoffeeScript as follows:client.msg 'eval', '2+2'On the Julia side, we need to set up a handler for this message, which happens as follows:handle(\"eval\") do code\n  eval(parse(code))\nendThis is a very simplified version of the eval handler that you can find in the Atom.jl source code. It simply evaluates whatever it's given and returns the result – in this case, 4.Often we want to do something with that return result in Atom – in this case, we'd like to display the result. We don't need to change anything on the Julia side to accomplish this; we can just use the rpc function from JS:client.rpc('eval', '2+2').then (result) =>\n  console.log dataThis call sends the eval message, pulls the result field out of the returned JSON, and displays the result, 4, in the console.This approach is exactly how Atom gets evaluation results, autocompletion and more from Julia – so it's easy to find more examples spread throughout the julia-client and Atom.jl source code.As a first project, try implementing an Atom command (see the Atom docs) which sends this message to Julia, as well as adding the Julia handler above to Atom.jl. (You'll want to use a type other than eval to avoid clashes with actual evaluation.)"
},

{
    "location": "devdocs/communication.html#Sending-messages-from-Julia-1",
    "page": "Communication",
    "title": "Sending messages from Julia",
    "category": "section",
    "text": "Julia has a similar mechanism to talk to Atom via the functionAtom.@msg type(args...)Handlers are defined on the Atom side as follows:client.handle 'log', (args...) ->\n  console.log argsIt's also possible for Julia to wait for a response from Atom, using the rpc function.client.handle 'echo', (data) ->\n  data(It's very easy to add this code to julia-client's activate function if you want to try this out.)Calling the following from the REPL:Atom.@rpc echo(Dict(:a=>1, :b=>2))will return Dict(\"a\"=>1, \"b\"=>2). The data was passed to Atom and simply returned as-is. Try changing the handler to modify the data before returning it.This mechanism is how Julia commands like Atom.select() are implemented, and in general it makes it very simple for Julia to control the Atom frontend – see frontend.jl and frontend.coffee"
},

{
    "location": "devdocs/communication.html#Debugging-and-Learning-1",
    "page": "Communication",
    "title": "Debugging and Learning",
    "category": "section",
    "text": "A good way to get a handle on this stuff is just to use console.log and @show, on the Atom and Julia sides respectively, to take a peek at what's going over the wire. For example, it's easy to change the above Julia handler tohandle(\"eval\") do data\n  @show data\n  @show Dict(:result => eval(parse(data[\"code\"])))\nendThis will show you both the data being sent to Julia (in the example above, Dict(\"code\"=>\"2+2\")) and the data being sent back to Atom (Dict(:result => 4)). Modifying say, the completions handler in a similar way will show you what completion data Julia sends back to Atom (there will probably be a lot, so try looking at specific keys, for example).You don't need to reload Atom or restart the Julia client every time you make a change like this. If you open a file from the Atom.jl source code, you should see from the status bar that Juno knows you're working with the Atom module (try evaluating current_module() if you're not sure). Evaluating handlers from within the Atom module will show you what message types are currently defined. If you change a handler, just press C-Enter to update it in place; you should see the effect of your update immediately next time the handler is triggered. For example, if you modify the eval handler as follows:handle(\"eval\") do data\n  println(data[\"code\"]) # <- insert this line\n  # ...and update it, you should find that the next time you evaluate you see the contents of the current editor dumped into the console. Thus, most features or fixes you'd want to add to Juno can be made without a long edit – compile – run cycle."
},

]}
