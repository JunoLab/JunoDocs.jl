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
    "text": "Juno is an Integrated Development Environment (IDE) for the Julia language. It provides powerful tools to help you develop code. Juno is built on Atom, a text editor provided by Github. Juno consists of both Julia and Atom packages in order to add Julia-specific enhancements, such as syntax highlighting, a plot pane, integration with Julia's debugger (Gallium), a console for running code, and much more."
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "To install Juno, please see the Installation Instructions. These installation instructions should work for Windows, Mac OSX, and Linux on the current Julia release (v0.5). If you wish to use Juno with the Julia nightly version, you may need to use the Developer Installation Instructions."
},

{
    "location": "index.html#Reporting-Issues-/-Bugs-1",
    "page": "Home",
    "title": "Reporting Issues / Bugs",
    "category": "section",
    "text": "If you have any issues with this setup, please do report them at discourse.julialang.org. We'll do our best to help you get going."
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
    "text": "In Atom, go to Settings (Ctrl+,, or Cmd+, on OS X) and go to the \"Install\" panel.Type uber-juno into the search box and hit enter. Click the install button on the package of the same name.Atom will then set up Juno for you, installing the required Atom and Julia packages."
},

{
    "location": "man/installation.html#Installing-the-Atom-Julia-Interaction-1",
    "page": "Installation Instructions",
    "title": "Installing the Atom-Julia Interaction",
    "category": "section",
    "text": "The Atom-Julia interaction is automatically installed by using a command in the console. To do this, go to Packages > Julia > Open Console to open the console, and type in any Julia command like 2+2. This will start the automatic installation feature. When complete, Julia and Atom will be linked."
},

{
    "location": "man/installation.html#Common-Problems-1",
    "page": "Installation Instructions",
    "title": "Common Problems",
    "category": "section",
    "text": "If you experience problems after installing Juno, have a look at the FAQ. In case you can't solve your problem with the instructions here or in the FAQ, then please post at the discussion board and we're  happy to help."
},

{
    "location": "man/installation.html#Juno-could-not-be-started.-1",
    "page": "Installation Instructions",
    "title": "Juno could not be started.",
    "category": "section",
    "text": "Go to Packages > Julia > Settings and change \"Julia Path\" to point to the Julia binary."
},

{
    "location": "man/installation.html#MbedTLS-not-properly-installed.-1",
    "page": "Installation Instructions",
    "title": "MbedTLS not properly installed.",
    "category": "section",
    "text": "If you getERROR: LoadError: MbedTLS not properly installed. Please run Pkg.build(\"MbedTLS\")in the Julia console, first try Pkg.build(\"MbedTLS\") in the Julia REPL. If that errors and you are on Linux, try installing cmake and then calling the above command again."
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
    "text": "These instructions assume that you have already installed Juno. If you have not yet installed Juno, please see the Installation Instructions."
},

{
    "location": "man/basic_usage.html#The-Command-Panel-1",
    "page": "Basic Usage",
    "title": "The Command Panel",
    "category": "section",
    "text": "To open the command panel, use Ctrl+Shift+p or go to Packages > Command Pallete > Toggle. In the command pallete you can search for common commands. For example, type in \"julia\" and you will see the commands which relate to Julia (and the keyboard shortcuts for the commands)."
},

{
    "location": "man/basic_usage.html#Opening-the-Console-Window-1",
    "page": "Basic Usage",
    "title": "Opening the Console Window",
    "category": "section",
    "text": "To open the console, use the command Ctrl+j then Ctrl+o, or go to Packages > Julia > Open Console. This will open a window with the title console. To use the console, simply type in a command and hit Enter. This will run the command in Julia (the first time a command is run, the connection between Julia and Atom will be installed, taking a bit more time). To clear the console, use the command Ctrl+j followed by Ctrl+c.Using the console is similar to using the REPL. For example, to enter multi-line input, use Ctrl+Enter. Tab completion will be available with a window for selecting the desired completion (which can be scrolled through using the arrow keys). Juno also features enhanced displaying of output types. For example, types like Array show an arrow on the side. By clicking on the header for this output you will expand the array in the console. Note that floating point numbers truncate their displays as well: to see more digits, click on the number."
},

{
    "location": "man/basic_usage.html#Inline-Evaluation-1",
    "page": "Basic Usage",
    "title": "Inline Evaluation",
    "category": "section",
    "text": "You can evaluate your Julia code inline by navigating your cursor to the appropriate code and hitting Ctrl+Enter. This will run the code block that the cursor is contained in. For example, if you go to the top of a for loop, it will evaluate the whole for loop, or if it's inside of a function, it will evaluate the function (i.e. create the function). To specifically choose which code to evaluate, highlight the appropriate parts and use Ctrl+Enter. To evaluate the whole script, use Ctrl+Shift+Enter."
},

{
    "location": "man/basic_usage.html#Cell-Evaluation-1",
    "page": "Basic Usage",
    "title": "Cell Evaluation",
    "category": "section",
    "text": "Juno also supports cell-based evaluation. A cell boundary is defined by a line starting with ##, #---, or # %%. You can easily navigate cells via Alt-Up and Alt-Down, evaluate them with  Alt-Enter, or evaluate a cell and move to the next one via Alt-Shift-Enter."
},

{
    "location": "man/basic_usage.html#Common-Keyboard-Shortcuts-1",
    "page": "Basic Usage",
    "title": "Common Keyboard Shortcuts",
    "category": "section",
    "text": "For MacOS, replace Ctrl by Cmd.Ctrl+Shift+p - Open the command panel\nCtrl+Enter - Evaluate at the cursor\nCtrl+Shift+Enter - Evaluate the current file\nCtrl+j Ctrl+o - Open the console\nCtrl+j Ctrl+c - Clear the console\nCtrl+j Ctrl+s - Start Julia\nCtrl+j Ctrl+k - Kill the Julia process\nCtrl+j Ctrl+r - Open a REPL\nCtrl+j Ctrl+p - Open the Plot Pane\nCtrl+j Ctrl-d - Get the documentation for the symbol under the cursor\nCtrl+j Ctrl-g - Go to the definition of the symbol under the cursor"
},

{
    "location": "man/basic_usage.html#Adding-Your-Own-Shortcuts-1",
    "page": "Basic Usage",
    "title": "Adding Your Own Shortcuts",
    "category": "section",
    "text": "You can add custom commands and keybindings to julia, should you so wish. To create new commands, add something like the following to your init.coffeeatom.packages.onDidActivatePackage (p) ->\n  if p.name is 'julia-client'\n    juno = p.mainModule\n\n    atom.commands.add '.item-views > atom-text-editor', 'julia-client:clear-console-and-run-file', ->\n      juno.runtime.evaluation.evalAll()\n      juno.runtime.console.reset()\nand'.platform-win32 .item-views > atom-text-editor[data-grammar=\"source julia\"]':\n  'ctrl-shift-alt-enter': 'julia-client:clear-console-and-run-file'to your keymap.cson (you can get to both files via Settings > Open Config Folder). It's also possible to add new keybindings for existing commands, such as f5 for julia-client:run-file.Note that you will need to muck around with julia-client's internals for defining custom commands, so your code might break on new releases. You'll also need to figure out which functions you can use for what – julia-client's commands will probably be helpful for that."
},

{
    "location": "man/basic_usage.html#Using-the-Plot-Pane-1",
    "page": "Basic Usage",
    "title": "Using the Plot Pane",
    "category": "section",
    "text": "Use of the plot pane will be automatic by plotting packages which support the interface. The following describes the package interactions in more depth."
},

{
    "location": "man/basic_usage.html#The-Plots.jl-Ecosystem-1",
    "page": "Basic Usage",
    "title": "The Plots.jl Ecosystem",
    "category": "section",
    "text": "Plots.jl supports usage of the plot pane with compatible backends. The backends which are compatible are:PlotlyJS\nPyPlot\nGRThe plot command will plot to the plot pane by default. To open up a non-plot pane window, use the gui() command. For example,using Plots\npyplot() # Choose a backend\nplot(rand(4,4)) # This will plot to the plot pane\ngui() # This will open up a separate interactive GUI window"
},

{
    "location": "man/basic_usage.html#Gadfly-1",
    "page": "Basic Usage",
    "title": "Gadfly",
    "category": "section",
    "text": "Gadfly also will use the plot pane."
},

{
    "location": "man/basic_usage.html#Using-the-Workspace-Pane-1",
    "page": "Basic Usage",
    "title": "Using the Workspace Pane",
    "category": "section",
    "text": "A workspace pane is available for showing the variables declared in the workspace. To open the pane, go to Packages > Julia > Open Workspace."
},

{
    "location": "man/basic_usage.html#Enhanced-Rendering-1",
    "page": "Basic Usage",
    "title": "Enhanced Rendering",
    "category": "section",
    "text": "Juno's enhanced rendering system makes it easy to view complex types and large arrays by being able to fold the values. This is naturally done in the Juno console, but is not shown for standard prints. In order to print using this special rendering, use the render function from Juno.jl. Inside of a package if you imported Juno, then the render function will be available. render will also be available at the REPL.For interactive usage inside of a module which does not import Main (i.e. during package development), note that this function is automatically imported to Main upon starting the Julia process, and thus can be accessed via Main.Juno.render. For example, one can debug by adding print statements like:Main.Juno.render(a)and a will use the special Juno console rendering, even if the package does not require/use Juno.jl."
},

{
    "location": "man/basic_usage.html#Using-the-Debugger-(experimental)-1",
    "page": "Basic Usage",
    "title": "Using the Debugger (experimental)",
    "category": "section",
    "text": "Juno features an interactive debugger based on Gallium.jl. The easiest way to access it to use the Juno.@step macro on a function call:(Image: stepping)While you are stepping through a function, it's local variables will be displayed in the workspace and you can access them in the console (note, however, that it is not possible to assign to variables right now).It is also possible to set a breakpoint (only via the Juno.breakpoint function for now), which will initialize the debugger at the breakpoint. Juno.breakpoint takes the same arguments as Gallium.breakpoint, so see here for a description."
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
    "text": "If you are experiencing warnings like:WARNING: julia-client: can't render lazyorWARNING: Atom.jl: unrecognised message clearLazy.there's no reason to be alarmed: these warnings are harmless. They mostly occur because Juno is developing very fast, and so the package versions you have may be \"out of sync\". The most common fix is to Pkg.update() and to make sure your your Atom packages are up to date (a blue box shows up in the in the bottom right corner when an update is available).(Image: UpdateBoxScreenshot)If none of these work, again there's no need to worry since these warnings are not breaking. Note that if you are on the Julia nightly version, you should expect that these warnings may occur, it's just part of being on the bleeding edge."
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
    "location": "man/faq.html#Advanced-topics-1",
    "page": "FAQ",
    "title": "Advanced topics",
    "category": "section",
    "text": ""
},

{
    "location": "man/faq.html#Connecting-to-an-external-julia-session-on-a-remote-machine-1",
    "page": "FAQ",
    "title": "Connecting to an external julia session on a remote machine",
    "category": "section",
    "text": "Use case: local installation of Juno with a remote julia sessionLaunch Atom/Juno on your local machine\nIn Atom/Juno, bring up the command palette with cmd-shift-p (macOS) or ctrl-shift-p )Linux/Windows) and search for Julia Client: Connect External Process (Juno will then tell you which port to use locally –> we'll call it Port#2)\nPort forwardingLinux/Unix: Open a local terminal and connect to your remote server : ssh -R PORT#1:localhost:PORT#2 your.server.comWindows: Port forwarding via netsh should work. See here for an example.Launch julia in the terminal on the remote machine\nType in julia session: using Juno; Juno.connect(PORT#1)"
},

{
    "location": "man/faq.html#Executing-code-on-Juno-startup-1",
    "page": "FAQ",
    "title": "Executing code on Juno startup",
    "category": "section",
    "text": "Much like Julia has its .juliarc.jl file for executing code on startup, Juno will execute code contained in ~/.junorc.jl after booting the client."
},

{
    "location": "man/juno_frontend.html#",
    "page": "The Juno.jl Front-End",
    "title": "The Juno.jl Front-End",
    "category": "page",
    "text": ""
},

{
    "location": "man/juno_frontend.html#Juno.isactive",
    "page": "The Juno.jl Front-End",
    "title": "Juno.isactive",
    "category": "Function",
    "text": "isactive()\n\nWill return true when the current Julia process is connected to a running Juno frontend.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#The-Juno.jl-Front-End-1",
    "page": "The Juno.jl Front-End",
    "title": "The Juno.jl Front-End",
    "category": "section",
    "text": "Juno provides some functionality using Atom's UI, which will usually have a fallback for use in other environments.The isactive() function will provide an interface for figuring out whether the current session is running within Juno:Juno.isactive"
},

{
    "location": "man/juno_frontend.html#Juno.info",
    "page": "The Juno.jl Front-End",
    "title": "Juno.info",
    "category": "Function",
    "text": "info(msg)\n\nShow the given message in Juno's console using blue styling, or fall back to Base.info.\n\nIn a package, you can use import Juno: info to replace the default version with this one.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.structure",
    "page": "The Juno.jl Front-End",
    "title": "Juno.structure",
    "category": "Function",
    "text": "structure(x)\n\nDisplay x's underlying representation, rather than using its normal display method.\n\nFor example, structure(:(2x+1)) displays the Expr object with its head and args fields instead of printing the expression.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Enhanced-Display-1",
    "page": "The Juno.jl Front-End",
    "title": "Enhanced Display",
    "category": "section",
    "text": "Juno.jl includes features which allow package developers to created enhanced displays in Juno.For example, we can print info to the console in a nicer way:info(\"foo\")(Image: info)Juno.infoor provide structured display for arbitrary objects (similar to Base.dump)(Image: structure)Juno.structure"
},

{
    "location": "man/juno_frontend.html#Juno.profiler",
    "page": "The Juno.jl Front-End",
    "title": "Juno.profiler",
    "category": "Function",
    "text": "profiler()\n\nShow currently collected profile information as an in-editor flamechart.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.profiletree",
    "page": "The Juno.jl Front-End",
    "title": "Juno.profiletree",
    "category": "Function",
    "text": "profiletree()\n\nShow currently collected profile information in tree-form. Falls back to Profile.print().\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.@profiler",
    "page": "The Juno.jl Front-End",
    "title": "Juno.@profiler",
    "category": "Macro",
    "text": "@profiler\n\nClear currently collected profile traces, profile the provided expression and show it via Juno.profiler().\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Profiler-1",
    "page": "The Juno.jl Front-End",
    "title": "Profiler",
    "category": "section",
    "text": "Profiles collected by @profile can be displayed as a flame chart (similar to ProfileView.jl) inside of Juno by calling Juno.profiler(). Juno.profiletree() will display the stack trace similar to the output of Base's Profile.print(). There's also a @profiler macro which does the same as @profile but also displays the collected information as a flame chart and clears all collected backtraces beforehand.Juno.profiler\nJuno.profiletree\nJuno.@profiler(Image: profiler)Clicking on one of the boxes in the profile view will take you to the corresponding file/line. The length of the lines in the editor correspond to the percentage of calls made in that line; to clear the profile view and the in-editor display, click the Forget Plot button in the profile view toolbar."
},

{
    "location": "man/juno_frontend.html#Juno.@progress",
    "page": "The Juno.jl Front-End",
    "title": "Juno.@progress",
    "category": "Macro",
    "text": "@progress [name] for i = ...\n\nShow a progress metre for the given loop if possible.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.progress",
    "page": "The Juno.jl Front-End",
    "title": "Juno.progress",
    "category": "Function",
    "text": "progress(p::ProgressBar, prog::Number)\n\nUpdate p's progress to prog.\n\n\n\nprogress(p::ProgressBar)\n\nSet p to an indeterminate progress bar.\n\n\n\nprogress(f::Function; name = \"\", msg = \"\")\n\nEvaluates f with p = ProgressBar(name = name, msg = msg) as the argument and calls done(p) afterwards. This is guaranteed to clean up the progress bar, even if f errors.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.ProgressBar",
    "page": "The Juno.jl Front-End",
    "title": "Juno.ProgressBar",
    "category": "Type",
    "text": "ProgressBar(;name = \"\", msg = \"\")\n\nCreate a new progress bar and register it with Juno, if possible.\n\nTake care to unregister the progress bar by calling done on it, or use the progress(f::Function) syntax, which will handle that automatically.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.name",
    "page": "The Juno.jl Front-End",
    "title": "Juno.name",
    "category": "Function",
    "text": "name(p::ProgressBar, m)\n\nUpdate ps name.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.msg",
    "page": "The Juno.jl Front-End",
    "title": "Juno.msg",
    "category": "Function",
    "text": "msg(p::ProgressBar, m)\n\nUpdate the message that will be displayed in the frontend when hovering over the corrseponding progress bar.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.right_text",
    "page": "The Juno.jl Front-End",
    "title": "Juno.right_text",
    "category": "Function",
    "text": "right_text(p::ProgressBar, m)\n\nUpdate the string that will be displayed to the right of the progress bar.\n\nDefaults to the linearly extrpolated remaining time based upon the time difference between registering a progress bar and the latest update.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Base.done",
    "page": "The Juno.jl Front-End",
    "title": "Base.done",
    "category": "Function",
    "text": "done(p::ProgressBar)\n\nRemove p from the frontend.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Progress-Meters-1",
    "page": "The Juno.jl Front-End",
    "title": "Progress Meters",
    "category": "section",
    "text": "Juno.jl allows package developers to use the progress bar which is provided in the Atom window. For example, you can easily show a progress meter for a for loop via the command:@progress for ...(Image: progress)The following functions provide this interface:Juno.@progress\nJuno.progress\nJuno.ProgressBar\nJuno.name\nJuno.msg\nJuno.right_text\nJuno.doneIt is recommended to either use the @progress macro or theprogress(name = \"Foo\") do p\n\nendnotation to ensure that the progress bars are properly unregistered in the frontend."
},

{
    "location": "man/juno_frontend.html#Juno.selector",
    "page": "The Juno.jl Front-End",
    "title": "Juno.selector",
    "category": "Function",
    "text": "selector([xs...]) -> x\n\nAllow the user to select one of the xs.\n\nxs should be an iterator of strings. Currently there is no fallback in other environments.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.input",
    "page": "The Juno.jl Front-End",
    "title": "Juno.input",
    "category": "Function",
    "text": "input(prompt = \"\") -> \"...\"\n\nPrompt the user to input some text, and return it. Optionally display a prompt.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.notify",
    "page": "The Juno.jl Front-End",
    "title": "Juno.notify",
    "category": "Function",
    "text": "notify(msg)\n\nDisplay msg as an OS specific notification.\n\nUseful for signaling the end of a long running computation or similar. This disregards the Notifications setting in julia-client. Falls back to info(msg) in other environments.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Interaction-1",
    "page": "The Juno.jl Front-End",
    "title": "Interaction",
    "category": "section",
    "text": "Juno.jl lets package developers interact with users via the Atom frontend. For example, you can allow the user to select from a list of options:Juno.selector(Image: selector)or get input in the console:Juno.input(Image: input)Juno.notifyAs of version 0.5.11 of Atom.jl, Base.readline() will also correctly request user input from the console instead of stalling indefinitely."
},

{
    "location": "man/info_developer.html#",
    "page": "Information for Package Developers",
    "title": "Information for Package Developers",
    "category": "page",
    "text": ""
},

{
    "location": "man/info_developer.html#Information-for-Package-Developers-1",
    "page": "Information for Package Developers",
    "title": "Information for Package Developers",
    "category": "section",
    "text": "In this page we giving some information that can help Package developers interact smoothly with Juno, and use it to their advantage for e.g. displaying Types, graphics etc."
},

{
    "location": "man/info_developer.html#Juno.defaultrepr",
    "page": "Information for Package Developers",
    "title": "Juno.defaultrepr",
    "category": "Function",
    "text": "defaultrepr(x, lazy = false)\n\nrender fallback for types without any specialized show methods.\n\nIf lazy is true, then the type's fields will be loaded lazily when expanding the tree. This is useful when the fields contain big elements that might need to be inspectable.\n\nCan be used by packages to restore Juno's default printing if they have defined a show method that should not be used by Juno:\n\nJuno.render(i::Juno.Inline, x::myType) = Juno.render(i, Juno.defaultrepr(x))\n\n\n\n"
},

{
    "location": "man/info_developer.html#Juno.plotsize",
    "page": "Information for Package Developers",
    "title": "Juno.plotsize",
    "category": "Function",
    "text": "plotsize()\n\nGet the size of Juno's plot pane in px. Does not yet have a fallback for other environments.\n\n\n\n"
},

{
    "location": "man/info_developer.html#Custom-Type-Printing-1",
    "page": "Information for Package Developers",
    "title": "Custom Type Printing",
    "category": "section",
    "text": "As was mentioned in the Basic Usage page, you can enhance the way user-defined types are printed in the Juno console (or similarly during inline evaluation). Note: The difference between printing in Juno and in the REPL is discussed in the follow-up section.This enhancing is done by extending the Juno.render(::MyType) function to match your type.Juno.render\nJuno.@renderAs an example, we will use the typestruct System{T}\n  d::Int\n  state::Vector{T}\n  vel::Vector{T}\nend\n\ns = System(2, rand(2), rand(2))which, by default is displayed in Juno using a Juno.Tree structure, with the \"head\" displaying the Type information, and expandable arrows for all the fields that are expandable, meaning, the head itself, as well as the 2nd and 3rd fields, which are vectors.The most basic way to change this, is to simply add some custom strings to Juno.render like:import Juno.render\nfunction Juno.render(i::Juno.Inline, s::System)\n  str = \"$(s.d)-dimensional system\"\n  Juno.render(i, Text(str))\nendand then, this will change the way Juno displays the system to simply: \"2-dimensional system\". It is important to have the first argument i::Juno.Inline in your definition, instead of some println() function call, because this ensures that the information is shown correctly either at the console or on inline evaluation (with e.g. Shift+Enter at the editor).Juno.Inline is one of the predefined rendering contexts defined in Juno:Juno.Inline\nJuno.Clipboard\nJuno.PlotPaneHowever, with this approach you lose the cool interactivity of Juno allowing you to expand fields as you like. Let's say that you would like to keep the Juno display format, but simply change the message displayed on the \"head\", because for example you might not want the type information to be displayed. This is done by changing the \"head\" of the Juno.Tree that is created by default:function Juno.render(i::Juno.Inline, s::System)\n  t = Juno.render(i, Juno.defaultrepr(s))\n  t[:head] = Juno.render(i, Text(\"$(length(s.state))-dimensional system\"))\n  t\nendJuno.defaultreprBut now you notice that you display the dimension information both at the \"head\" of the tree, but also on one of the \"children\", since by default all fields of a Type are printed. Well, thankfully, it is really easy to remove a children from display:function Juno.render(i::Juno.Inline, s::System)\n  t = Juno.render(i, Juno.defaultrepr(s))\n  t[:head] = Juno.render(i, Text(\"$(length(s.state))-dimensional system\"))\n  t[:children ] = t[:children][2:3]\n  return t\nend(Image: custom rendering)Here, each entry in the vector t[:children] is one displayed entity of the Juno.Tree. By removing the first entry (which is the first field of our Type) we are now displaying only the fields state and vel. Of course, it goes without saying that you can completely change how the fields are displayed (e.g. change the vel display to velocity) by going deeper into t[:children].It's also possible to display arbitrary HTML in results: There are render methods for all the HTML primitives defined in Hiccup.jl as well as for certain higher-level elements from Juno.jl or even BaseJuno.Tree\nJuno.LazyTree\nJuno.SubTree\nJuno.Link\nJuno.Table\nJuno.Row\nBase.TextShould you wish to render something in the PlotPane, you can get it's dimensions viaJuno.plotsize"
},

{
    "location": "man/info_developer.html#Printing-in-REPL-vs.-Juno-1",
    "page": "Information for Package Developers",
    "title": "Printing in REPL vs. Juno",
    "category": "section",
    "text": "If a method for Base.show is present, but no method exists for Juno.render, then Juno will fall back to show. If both exist however, you can get the awesome display capabilities of Juno, while still having custom support for your Types in the REPL. For example, by adding the function:import Base.show\nfunction Base.show(io::IO, s::System)\n  println(io, \"$(length(s.state))-dimensional system\")\n  println(io, \"state: $(s.state)\")\n  println(io, \"velocity $(s.vel)\")\nendyou can support custom printing at the REPL as well, without ruining the Juno printing."
},

{
    "location": "man/info_developer.html#Conditionally-defining-Juno-specific-render-methods-1",
    "page": "Information for Package Developers",
    "title": "Conditionally defining Juno-specific render methods",
    "category": "section",
    "text": "It is possible to use Requires.jl to circumvent having a hard dependency on Juno.jl for rendering:@require Juno begin\n  using Juno\n  function Juno.render(i::Juno.Inline, s::System)\n    t = Juno.render(i, Juno.defaultrepr(s))\n    t[:head] = Juno.render(i, Text(\"$(length(s.state))-dimensional system\"))\n    t[:children] = t[:children][2:3]\n    return t\n  end\nend"
},

{
    "location": "man/settings.html#",
    "page": "Settings",
    "title": "Settings",
    "category": "page",
    "text": ""
},

{
    "location": "man/settings.html#Settings-1",
    "page": "Settings",
    "title": "Settings",
    "category": "section",
    "text": "Julia Path: The location of the Julia binary. This is the command that Atom uses to call Julia. It defaults to the command julia which requires that Julia has been added to the path. If Julia is not in the path, this must be the path to the Julia binary.\nBoot Mode: This is the type of process list that atom-julia-client is using.\nThe default is Basic, which only has one process running at a time.\nCycler instead has a process queue per window, meaning that if you quit the REPL (Ctrl+j+ Ctrl+o) then there exists an already running process which will seamlessly replace it.\nServer has a shared process queue between all windows, resulting in less processes (2+n vs 2n where n is the number of windows), but is still experimental. Currently disabled due to instability.\nDeprecation Warnings: Checkbox for whether to show the Julia deprecation warnings in the console.\nOptimization Level: Sets the -O optimization level for the Julia LLVM compiler. The default is 3 corresponding to -O3 which is the default for the Julia REPL. Higher levels take longer to compile but produce faster code.\nEnable Powershell Wrapper (Windows only): Use a Powershell wrapper to spawn Julia. This is required in order to allow interrupts.\nNotifications: Enables popup notifications when the evaluation finishes.\nError Notifications: When evaluating a script, this will show a popup when errors are encountered instead of only printing the error to the console.\nEnable Menu: Enables the Julia menu in the menu bar. This option requires a restart of Atom for the change to take effect.\nEnable Tool Bar: Shows the Julia icons in the tool bar. This option requires a restart of Atom for the change to take effect.\nUse Standard Layout: Sets up a classical IDE UI (editor, console, and workspace) on startup.\nMaximum Console Size: Limits the number of displayed lines in the Console (default: 10,000). A larger value will display more entries at the cost of slowing down Atom.\nTerminal: The command which is used to open a new REPL.\nResult Display Mode: Determines where the result of an inline evaluation is displayed:\nFloat results next to code\nDisplay results under code\nDisplay results in the console"
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
    "location": "devdocs/contributor_guide.html#Help-and-Bug-Reporting-1",
    "page": "Contributor Guide",
    "title": "Help & Bug Reporting",
    "category": "section",
    "text": "This project is composed of many sub-projects, and it can be hard to know the appropriate place to file issues. For that reason we prefer that non-developers report issues on the Juno discussion forum under the \"issue\" category or or at the Juno.jl Github repository. If you know which package the issue is appropriate in, then please open an issue there. Bug reports can be some of the most helpful contributions!"
},

{
    "location": "devdocs/contributor_guide.html#Contributing-to-the-Packages-1",
    "page": "Contributor Guide",
    "title": "Contributing to the Packages",
    "category": "section",
    "text": "If you have feature ideas you'd like to implement, or bugs you'd like to fix, feel free to open a discussion under the \"dev\" category – we're always happy to help people flesh out their ideas or get unstuck on problems. Another good place to discuss with developers is in the Juno Gitter. Come by and we can chat about your ideas.If you look over the GitHub issues for the various packages, you may notice some labelled up for grabs. These are features or bugs for which the implementation or fix is reasonably straightforward – they might take a few hours of effort or more, but they won't involve enormous expert-level challenges. As above, feel free to open up a discussion on these and we'll help you get going.For extra general resources, consider the following:Julia Documentation – for learning about the Julia language.\nMDN – by far the best reference on the JavaScript language and browser window APIs.\nCoffeeScript – Atom and its packages use this to make working with JS a little more convenient.\nThe Atom Docs – the Atom Flight Manual is a very readable introduction to Atom's internals, and the API docs are a useful reference.\njulia-client developer docs – These docs go into more detail about the internals of this project and the development workflow.Most open source projects, including ours, use git to help work together. There are plenty of git tutorials around, and the various GUI clients (e.g. GitHub for Windows/Mac, SourceTree) are very helpful for learning the ropes."
},

{
    "location": "devdocs/contributor_guide.html#Contributing-to-the-Documentation-1",
    "page": "Contributor Guide",
    "title": "Contributing to the Documentation",
    "category": "section",
    "text": "The documentation is provided by the JunoLab/JunoDocs.jl repository. It's built using Documenter.jl. To modify the documentation, simply modify the Markdown files in the docs/src folder. For more information on using Documenter.jl, please see the Documenter.jl Documentation."
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
    "text": "This guide is for you if:You wish to understand how Juno works under the hood\nYou like taking things apart, tinkering, and putting them back together\nYou want to be on the bleeding edge build, why?\nIf you report bugs the devs will like you more\nGet bug fixes ahead of time (i.e. not wait for the next public release)\n***You wish to contribute!***(Note: Original document tested on OSX on 4 Nov 2016, use common sense!)In the beginning was Atom (highly customisable editor) and Julia. Developers started to assemble a collection of tools that lets us use Atom as a Julia IDE. And this collection has become known as Juno.  If you are standard user, the uber-juno package takes care of installing all of these components behind-the-scenes. But if you want to actually dig in and tweak some of them, you are going to need to assemble the parts individually. That's what this guide covers.Install the current ***stable*** or bleeding-edge Julia (command line version) from http://julialang.org/downloads/   Drag .app into Applications folder   Run\nInstall Atom from https://atom.io/   Drag .app into Applications folder   RunOk, you should have Atom and a Julia> Julia-prompt side-by-side.Julia> Pkg.status() should say no packages installed!  Packages menu drop down in Atom shouldn't have \"Julia\" yet.Use Atom's apm package manager to install atom-julia-client (Julia IDE for Atom) which makes use of ink (toolkit for building IDEs in Atom):apm install https://github.com/JunoLab/atom-ink           # ~/.atom/packages/ink\napm install https://github.com/JunoLab/atom-julia-client  # ~/.atom/packages/julia-clientYou can observe this creates a local mirror of each GitHub repo.   (Note: You can sync all local repos with Pkg.update()If you now relaunch Atom you will see the Packages menu drop down now has a \"Julia\" entry.   Packages -> Julia -> Open Console   Try 1+1 and it will fail \"Julia could not be started!\"(Note that Julia> Pkg.status() still reports nothing).(NOTE: you can actually skip this step because when you do 1+1 a couple of steps further down it will automatically perform this command!)Julia> Pkg.add(\"Atom\")Now Julia> Pkg.status() will list a ton of stuff:Julia> Pkg.status()\n1 required packages:\n - Atom                          0.5.4\n43 additional packages:\n - ASTInterpreter                0.0.4\n - AbstractTrees                 0.0.4\n - ArgParse                      0.4.0\n - BinDeps                       0.4.5\n - Blink                         0.4.3\n - COFF                          0.0.2\n - ...NOTE:ls ~/.julia/lib/v0.5/  \nAtom.ji		CodeTools.ji   Hiccup.ji	HttpParser.ji	Juno.ji		MacroTools.ji	Mustache.ji	SHA.ji\nBinDeps.ji	Codecs.ji	   Homebrew.ji	HttpServer.ji	LNR.ji		MbedTLS.ji	Mux.ji		URIParser.ji\nBlink.ji	Compat.ji	   HttpCommon.ji	JSON.ji		Lazy.ji		Media.ji	Reexport.ji	WebSockets.ji\n\nls ~/.atom/packages\nREADME.md	ink		julia-client	language-juliaNow restarting Atom, doing Packages -> Julia -> Open Console -> 1+1 it still fails with \"Julia could not be started!\"Atom -> Prefs -> Packages -> 'julia client' -> Settings -> Julia Path -> /Applications/Julia-0.5.app/Contents/Resources/julia/bin/julia  (...or wherever Julia installed itself)\nNOW type 1+1 and it will precompile Julia!  (if you skipped the Pkg.add(\"Atom\") step above it will first add the Atom.jl package and a bunch of dependent packages).(Note: https://github.com/JunoLab/atom-julia-client/blob/master/script/boot.jl <– this is what actually happens when you type 1+1 if you're interested).So at this point you should have a standard 'Juno' i.e. Julia-in-Atom installation. You can run Julia code in the console (just like the Julia prompt you get from Julia.app), also you can create and run files and even debug with breakpoints etc.Wait! Something is missing – there is no syntax highlighting, and the buttons along the left margin aren't there yet!There must be some stuff that uber-juno installed that we haven't!  https://github.com/JunoLab/uber-juno/blob/master/lib/packages.coffee gives:requirements = [\n  'tool-bar'\n  'latex-completions'\n  'language-julia'\n  'ink'\n  'julia-client'\n]So we could go into Atom -> Preferences -> install -> 'language-julia' and similarly for the other 2 we don't have.NOTE: we could probably alternatively use apm to do it from the command line like we did above.  Googling finds: https://github.com/JuliaEditorSupport/atom-language-julia which says to do apm install language-julia.  Ah, but that is going to install the stock release version that Atom has in its repositories, so if we want instead the master version, we should probably be doing something like:apm install https://github.com/JuliaEditorSupport/atom-language-juliaGreat!  It worked!Now let's get that toolbar! https://github.com/JunoLab/atom-julia-client/blob/master/lib/package/toolbar.coffeeIf you want cutting-edge versions of these you will have to repeat the above process: locate the GitHub repo & use apm.  Instead let's just do the standard install from Atom:Atom -> Preferences -> install -> 'tool-bar'   (If it fails try a couple more times – often for me the first attempt fails). Atom -> Julia -> Settings -> Enable Toolbar\nAtom -> Preferences -> install -> 'latex-completions'   Check by typing x\\til into Atom editor and it should offer ...de auto-completion.  Hit TAB and you should get x̃Of course if you find you need bleeding-edge on either of these, you can just uninstall from Atom and use apm.Now let's work on bringing the key packages up to bleeding edge!Sync Atom package!julia> Pkg.checkout(\"Atom\")\nINFO: Checking out Atom master...\nINFO: Pulling Atom latest master...\nINFO: No packages to install, update or remove\n\njulia> Pkg.status()\n1 required packages:\n - Atom                          0.5.4+             master\n43 additional packages:\n - ASTInterpreter                0.0.4\n - AbstractTrees                 0.0.4\n - ArgParse                      0.4.0\n - BinDeps                       0.4.5\n - Blink                         0.4.3\n - COFF                          0.0.2\n - ...Notice we have brought Atom up to bleeding edge. Now if the package maintainers push a new version, we can sync with it by doing Pkg.update()Sync up a few more packages.  The folks on https://gitter.im/JunoLab/Juno recommend:\nBlink\nCodeTools\nHiccup\nJuno\nLNR\nMedia  (Note: You could do foreach( Pkg.checkout, [\"Blink\", \"CodeTools\", \"Hiccup\", \"etc\"] )).Quick note on using the Julia package manager, i.e. Pkg.blaIf you want to revert/unsync a particular package, do Pkg.free(\"foo\").  At time of writing Hiccup was causing err.. hiccups so it needed to be reverted.Pkg.update() will update/sync all checked-out Julia packages!  The corresponding command for syncing Atom packages is apm upgrade.)Complete Pkg doc at http://docs.julialang.org/en/release-0.5/manual/packages/If you want bleeding-edge for Julia's ***debugger*** as well, you need:Pkg.checkout(\"Reactive\")\nPkg.checkout(\"ObjFileBase\")\nPkg.checkout(\"StructIO\")\nPkg.checkout(\"AbstractTrees\")\nPkg.checkout(\"DWARF\")\nPkg.checkout(\"ELF\")\nPkg.checkout(\"MachO\")\nPkg.checkout(\"TerminalUI\")\nPkg.checkout(\"ASTInterpreter\")\nPkg.checkout(\"VT100\")\nPkg.checkout(\"JuliaParser\")\nPkg.checkout(\"Gallium\")\nPkg.clone(\"https://github.com/Keno/COFF.jl\")  # <-- UNREGISTERED package! (*)\nPkg.checkout(\"COFF\")() *Registered packages can be installed with Pkg.add, UNREGISTERED packages require Pkg.clone + a complete URL.That list comes straight from the bottom of https://github.com/Keno/Gallium.jl#installationWhy didn't we have to Pkg.add each of those first? Because when we did Pkg.add(\"Atom\") it did Pkg.add on all of Atom's dependencies (i.e. everything in https://github.com/JunoLab/Atom.jl/blob/master/REQUIRE) one of which is Gallium. And this Pkg.add(\"Gallium\") then did Pkg.add on all of Gallium's dependencies: https://github.com/Keno/Gallium.jl/blob/master/REQUIRE. You can see most of those list-items in Gallium's REQUIRE file, and presumably the others are to be found somewhere in the dependency tree."
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
    "text": "Juno consists of a number of packages for both Julia and Atom:"
},

{
    "location": "devdocs/package_info.html#Atom-Packages-1",
    "page": "Juno Package Information",
    "title": "Atom Packages",
    "category": "section",
    "text": "uber-juno – An Atom metapackage which installs the Juno IDE.\njulia-client – This package ties everything together. julia-client boots Julia from inside Atom, then communicates with the Atom.jl package to provide e.g. autocompletion and evaluation within the editor.\nlanguage-julia – Provides basic language support for Atom, e.g. syntax highlighting.\nink – Provides generic UI components for building IDEs in Atom (e.g. the console lives here).\nlatex-completions – Provides unicode completions for certain LaTeX commands.\nindent-detective – Tries to work out the indentation settings of your current file, sublime-style."
},

{
    "location": "devdocs/package_info.html#Julia-Packages-1",
    "page": "Juno Package Information",
    "title": "Julia Packages",
    "category": "section",
    "text": "Juno.jl – The frontend API. Provides components for package developers and users to interact with Juno.\nAtom.jl – This is the language server backend for Juno, the Julia IDE.\nBlink.jl – An API for communicating with web pages from Julia.\nCodeTools.jl – Provides backend editor support for Julia, e.g. autocompletion and evaluation.\nHiccup.jl – A library designed to make HTML from Julia.\nLNR.jl – Parser for handwritten text where line and column information is significant.\nMedia.jl – The display system which enables the user handle multiple input/output devices and decides what media types get displayed where."
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
