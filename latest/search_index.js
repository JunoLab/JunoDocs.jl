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
    "text": "Juno is an Integrated Development Environment (IDE) for the Julia language. It provides powerful tools to help you develop code. Juno is built on Atom, a text editor provided by Github. Juno consists of both Julia and Atom packages in order to add Julia-specific enhancements, such as syntax highlighting, a plot pane, integration with Julia\'s debugger (Gallium), a console for running code, and much more."
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "To install Juno, please see the Installation Instructions. These installation instructions should work for Windows, Mac OSX, and Linux on the current Julia release (v0.6). If you wish to use Juno with the Julia nightly version, you may need to use the Developer Installation Instructions."
},

{
    "location": "index.html#Reporting-Issues-/-Bugs-1",
    "page": "Home",
    "title": "Reporting Issues / Bugs",
    "category": "section",
    "text": "If you have any issues with this setup, please do report them at discourse.julialang.org. We\'ll do our best to help you get going."
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
    "text": "Getting Juno takes a couple of simple steps:"
},

{
    "location": "man/installation.html#.-Install-Julia-1",
    "page": "Installation Instructions",
    "title": "1. Install Julia",
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
    "location": "man/installation.html#.-Install-Atom-1",
    "page": "Installation Instructions",
    "title": "2. Install Atom",
    "category": "section",
    "text": "Download, install and open Atom. If you have it already, make sure it\'s up to date (version 1.23+)."
},

{
    "location": "man/installation.html#.-Install-Juno-1",
    "page": "Installation Instructions",
    "title": "3. Install Juno",
    "category": "section",
    "text": "In Atom, go to Settings (Ctrl+,, or Cmd+, on macOS) and go to the \"Install\" panel.Type uber-juno into the search box and hit enter. Click the install button on the package of the same name.Atom will then set up Juno for you, installing the required Atom and Julia packages."
},

{
    "location": "man/installation.html#Note-1",
    "page": "Installation Instructions",
    "title": "Note",
    "category": "section",
    "text": "You may need to add the path to Julia if it is not accessible via the command julia. To do so, go to Packages > Julia > Settings and in the first box for \"Julia Path\" insert the path to your Julia installation (example: C:\\Users\\UserName\\AppData\\Local\\Julia-1.0.0\\bin\\julia.exe)"
},

{
    "location": "man/installation.html#.-Use-Juno-1",
    "page": "Installation Instructions",
    "title": "4. Use Juno",
    "category": "section",
    "text": "You should be good to go now – try opening the REPL with Packages > Julia > Open Console or Ctrl-J Ctrl-O (Cmd-J Cmd-O on macOS) and press Enter to start a Julia session."
},

{
    "location": "man/installation.html#Common-Problems-1",
    "page": "Installation Instructions",
    "title": "Common Problems",
    "category": "section",
    "text": "If you experience problems after installing Juno, have a look at the FAQ. In case you can\'t solve your problem with the instructions here or in the FAQ, then please post at the discussion board and we\'re happy to help."
},

{
    "location": "man/installation.html#Juno-could-not-be-started.-1",
    "page": "Installation Instructions",
    "title": "Juno could not be started.",
    "category": "section",
    "text": "Go to Packages > Julia > Settings and change \"Julia Path\" to point to the Julia binary."
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
    "location": "man/basic_usage.html#The-Command-Palette-1",
    "page": "Basic Usage",
    "title": "The Command Palette",
    "category": "section",
    "text": "To open the command panel, use Ctrl+Shift+p or go to Packages > Command Palette > Toggle. In the command pallete you can search for common commands. For example, type in \"julia\" and you will see the commands which relate to Julia (and the keyboard shortcuts for the commands)."
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
    "text": "You can evaluate your Julia code inline by navigating your cursor to the appropriate code and hitting Ctrl+Enter. This will run the code block that the cursor is contained in. For example, if you go to the top of a for loop, it will evaluate the whole for loop, or if it\'s inside of a function, it will evaluate the function (i.e. create the function). To specifically choose which code to evaluate, highlight the appropriate parts and use Ctrl+Enter. To evaluate the whole script, use Ctrl+Shift+Enter."
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
    "text": "You can add custom commands and keybindings to julia, should you so wish. To create new commands, add something like the following to your init.coffeeatom.packages.onDidActivatePackage (p) ->\n  if p.name is \'julia-client\'\n    juno = p.mainModule\n\n    atom.commands.add \'.item-views > atom-text-editor\', \'julia-client:clear-console-and-run-file\', ->\n      juno.runtime.evaluation.evalAll()\n      juno.runtime.console.reset()\nand\'.platform-win32 .item-views > atom-text-editor[data-grammar=\"source julia\"]\':\n  \'ctrl-shift-alt-enter\': \'julia-client:clear-console-and-run-file\'to your keymap.cson (you can get to both files via Settings > Open Config Folder). It\'s also possible to add new keybindings for existing commands, such as f5 for julia-client:run-file.Note that you will need to muck around with julia-client\'s internals for defining custom commands, so your code might break on new releases. You\'ll also need to figure out which functions you can use for what – julia-client\'s commands will probably be helpful for that."
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
    "location": "man/faq.html#The-installation-of-some-Atom-packages-fails.-What-can-I-do?-1",
    "page": "FAQ",
    "title": "The installation of some Atom packages fails. What can I do?",
    "category": "section",
    "text": "It is possible that your Antivirus Software prevents certain files to be downloaded or executed that are necessary for Juno to function. Consider disabling antivirus software\'s real time monitoring for the duration of the installation. For certain scanners (Avast and McAffee) it might also be necessary to excludeC:\\Users\\you\\.atom\\packages\\julia-client\\node_modules\\node-pty-prebuilt\\build\\Release\\winpty-agent.exefrom the real time monitoring after installation. This is an upstream issue which should hopefully be resolved soon."
},

{
    "location": "man/faq.html#Juno-doesn\'t-work-properly-after-an-Atom-update.-What-do-I-do?-1",
    "page": "FAQ",
    "title": "Juno doesn\'t work properly after an Atom update. What do I do?",
    "category": "section",
    "text": "Check whether you have a little red bug symbol in the status bar (lower right):(Image: native bug)If so, click on it and then click on \"Rebuild Packages\":(Image: native update)Restart Atom and you should be good to go!"
},

{
    "location": "man/faq.html#Juno-doesn\'t-work-properly-after-some-Atom-packages-were-updated.-What-do-I-do?-1",
    "page": "FAQ",
    "title": "Juno doesn\'t work properly after some Atom packages were updated. What do I do?",
    "category": "section",
    "text": "There\'s a chance the update of julia-client failed. To get a clean re-install while preserving any setting you might have changed, try the following steps:Close all Atom instances.\nStart a terminal (e.g. cmd on Windows or the Terminal App on MacOS)\nExecute apm uninstall julia-client.\nExecute apm install julia-client.\nStart Juno. Evertyhing should work again."
},

{
    "location": "man/faq.html#The-REPL-is-unbearably-slow.-How-do-I-fix-it?-1",
    "page": "FAQ",
    "title": "The REPL is unbearably slow. How do I fix it?",
    "category": "section",
    "text": "Enable the Fallback Renderer option in the julia-client settings and restart Atom for good measure."
},

{
    "location": "man/faq.html#Some-Juno-package-is-using-the-wrong-precompile-cache,-what-do-I-do?-1",
    "page": "FAQ",
    "title": "Some Juno package is using the wrong precompile cache, what do I do?",
    "category": "section",
    "text": "This problem manifests itself in errors like:WARNING: Method definition\nWARNING: Module Juno with uuid 738353145462472 is missing from the cache.\nERROR: LoadError: Declaring precompile(false) is not allowed in files that are being precompiled.\nERROR: LoadError: Failed to precompile Atom to C:\\Users...One way this can occur is from updating Julia versions. However, this has a very easy fix. Go into the Julia REPL (not the Juno console in Atom, but the actual Julia terminal window) and type in the command:using AtomThat will force Julia to re-compile all of the cache files and should fix the problem."
},

{
    "location": "man/faq.html#I-am-having-a-problem-running-Juno-with-an-older-version-of-Julia,-why?-1",
    "page": "FAQ",
    "title": "I am having a problem running Juno with an older version of Julia, why?",
    "category": "section",
    "text": "Juno is under rapid development, so it\'s expected that previous versions may not be compatible with the Atom packages overtime. Julia will automatically use older versions on the Julia-side packages, but Atom will always give you the most up-to-date packages it knows about, which causes this issue. The easy way to solve this is to always use the current Julia release. Otherwise, resort to the Developer Installation Instructions for the Atom packages and use git to checkout an older version. This requires some git know-how, so it\'s only recommended if the older version of Julia is truly necessary."
},

{
    "location": "man/faq.html#How-do-I-use-Juno-with-the-Julia-Nightly-version?-1",
    "page": "FAQ",
    "title": "How do I use Juno with the Julia Nightly version?",
    "category": "section",
    "text": "If you want to use Juno with the nightly version use caution: this package is under rapid development so do so at your own risk. That being said, the Julia nightly should work using the Developer Installation Instructions. Note that this will require you to be on master for the Julia and Atom packages, so things will be changing likely before documentation changes."
},

{
    "location": "man/faq.html#How-do-I-execute-code-on-Juno-startup?-1",
    "page": "FAQ",
    "title": "How do I execute code on Juno startup?",
    "category": "section",
    "text": "Much like Julia has its ~/.julia/config/startup.jl file for executing code on startup, Juno will execute code contained in ~/.julia/config/juno_startup.jl after Julia has been booted and a connection with the editor is established. This allows running code on startup that queries the frontend, e.g. Juno.syntaxcolors."
},

{
    "location": "man/faq.html#Advanced-topics-1",
    "page": "FAQ",
    "title": "Advanced topics",
    "category": "section",
    "text": ""
},

{
    "location": "man/faq.html#Connecting-to-a-Julia-session-on-a-remote-machine-1",
    "page": "FAQ",
    "title": "Connecting to a Julia session on a remote machine",
    "category": "section",
    "text": "Juno can be used for editing and executing code on a remote machine (which might be very useful for computationally expensive tasks or when you want to use hardware not available locally, e.g. GPUs)."
},

{
    "location": "man/faq.html#Prerequisites-1",
    "page": "FAQ",
    "title": "Prerequisites",
    "category": "section",
    "text": "The remote machine must have Julia installed and you need to be able to open a ssh connection to it. On your local machine you need a working Juno installation as well as ftp-remote-edit for editing remote files."
},

{
    "location": "man/faq.html#Setup-1",
    "page": "FAQ",
    "title": "Setup",
    "category": "section",
    "text": "Add a new server in ftp-remote-edit\'s server browser with the Ftp Remote Edit: Edit Servers command:(Image: )Select that server in the \"Remote\" tree view and click the planet icon in the toolbar to start a Julia session on the selected remote machine. If you want to start a remote session by default then you can change the Boot Mode to Remote in the julia-client settings.(Image: )If you have tmux installed on the server then you can also use a persistent session, which you can connect to and disconnect from at will without losing progress. To use this feature enable the Use persistent tmux session option in the julia-client settings."
},

{
    "location": "man/faq.html#Connecting-to-a-Julia-session-in-a-(local)-Docker-container-1",
    "page": "FAQ",
    "title": "Connecting to a Julia session in a (local) Docker container",
    "category": "section",
    "text": "Use case: local installation of Juno with a local Docker containerLaunch Atom/Juno on your local machine\nSpin up your docker container with network_mode:host, ie.docker run -it --network=host [container_name] juliaIn Atom/Juno, bring up The Command Palette and search for Julia Client: Connect External Process\nJuno will respond with a Julia command, e.g. using Juno; Juno.connect([Atom port]), where [Atom port] is the port Atom is listening on for the Julia session to connect.\nIn the Julia session, replace [Atom port] in the following command with the port specified by Atom & enter the following command to connect your Julia session to AtomFor Mac:using Juno; Juno.connect(\"host.docker.internal\", [Atom port])For Linux (untested):using Juno; Juno.connect(\"docker0\", [Atom port])"
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
    "category": "function",
    "text": "isactive()\n\nWill return true when the current Julia process is connected to a running Juno frontend.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#The-Juno.jl-Front-End-1",
    "page": "The Juno.jl Front-End",
    "title": "The Juno.jl Front-End",
    "category": "section",
    "text": "Juno provides some functionality using Atom\'s UI, which will usually have a fallback for use in other environments.The isactive() function will provide an interface for figuring out whether the current session is running within Juno:Juno.isactive"
},

{
    "location": "man/juno_frontend.html#Juno.structure",
    "page": "The Juno.jl Front-End",
    "title": "Juno.structure",
    "category": "function",
    "text": "structure(x)\n\nDisplay x\'s underlying representation, rather than using its normal display method.\n\nFor example, structure(:(2x+1)) displays the Expr object with its head and args fields instead of printing the expression.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Enhanced-Display-1",
    "page": "The Juno.jl Front-End",
    "title": "Enhanced Display",
    "category": "section",
    "text": "Juno.jl includes features which allow package developers to created enhanced displays in Juno.For example, we can print provide structured display for arbitrary objects (similar to Base.dump)(Image: structure)Juno.structure"
},

{
    "location": "man/juno_frontend.html#Juno.profiler",
    "page": "The Juno.jl Front-End",
    "title": "Juno.profiler",
    "category": "function",
    "text": "profiler()\n\nShow currently collected profile information as an in-editor flamechart.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.profiletree",
    "page": "The Juno.jl Front-End",
    "title": "Juno.profiletree",
    "category": "function",
    "text": "profiletree()\n\nShow currently collected profile information in tree-form. Falls back to Profile.print().\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.@profiler",
    "page": "The Juno.jl Front-End",
    "title": "Juno.@profiler",
    "category": "macro",
    "text": "@profiler\n\nClear currently collected profile traces, profile the provided expression and show it via Juno.profiler().\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Profiler-1",
    "page": "The Juno.jl Front-End",
    "title": "Profiler",
    "category": "section",
    "text": "Profiles collected by @profile can be displayed as a flame chart (similar to ProfileView.jl) inside of Juno by calling Juno.profiler(). Juno.profiletree() will display the stack trace similar to the output of Base\'s Profile.print(). There\'s also a @profiler macro which does the same as @profile but also displays the collected information as a flame chart and clears all collected backtraces beforehand.Juno.profiler\nJuno.profiletree\nJuno.@profiler(Image: profiler)Clicking on one of the boxes in the profile view will take you to the corresponding file/line. The length of the lines in the editor correspond to the percentage of calls made in that line; to clear the profile view and the in-editor display, click the Forget Plot button in the profile view toolbar."
},

{
    "location": "man/juno_frontend.html#Juno.@progress",
    "page": "The Juno.jl Front-End",
    "title": "Juno.@progress",
    "category": "macro",
    "text": "@progress [name=\"\", threshold=0.005] for i = ...\n\nShow a progress meter named name for the given loop if possible. Update frequency is limited by threshold (one update per 0.5% of progress by default).\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.progress",
    "page": "The Juno.jl Front-End",
    "title": "Juno.progress",
    "category": "function",
    "text": "progress(p::ProgressBar, prog::Number)\n\nUpdate p\'s progress to prog.\n\n\n\nprogress(p::ProgressBar)\n\nSet p to an indeterminate progress bar.\n\n\n\nprogress(f::Function; name = \"\", msg = \"\")\n\nEvaluates f with p = ProgressBar(name = name, msg = msg) as the argument and calls done(p) afterwards. This is guaranteed to clean up the progress bar, even if f errors.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Progress-Meters-1",
    "page": "The Juno.jl Front-End",
    "title": "Progress Meters",
    "category": "section",
    "text": "Juno.jl allows package developers to use the progress bar which is provided in the Atom window. For example, you can easily show a progress meter for a for loop or a comprehension via the command:@progress for ...(Image: progress)The following functions provide this interface:Juno.@progress\nJuno.progressIt is recommended to either use the @progress macro or theprogress(name = \"Foo\") do p\n\nendnotation to ensure that the progress bars are properly unregistered in the frontend."
},

{
    "location": "man/juno_frontend.html#Juno.selector",
    "page": "The Juno.jl Front-End",
    "title": "Juno.selector",
    "category": "function",
    "text": "selector([xs...]) -> x\n\nAllow the user to select one of the xs.\n\nxs should be an iterator of strings. Currently there is no fallback in other environments.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.notify",
    "page": "The Juno.jl Front-End",
    "title": "Juno.notify",
    "category": "function",
    "text": "notify(msg)\n\nDisplay msg as an OS specific notification.\n\nUseful for signaling the end of a long running computation or similar. This disregards the Notifications setting in julia-client. Falls back to info(msg) in other environments.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.syntaxcolors",
    "page": "The Juno.jl Front-End",
    "title": "Juno.syntaxcolors",
    "category": "function",
    "text": "syntaxcolors(selectors = Atom.SELECTORS)::Dict{String, UInt32}\n\nGet the colors used by the current Atom theme. selectors should be a Dict{String, Vector{String}} which assigns a css selector (e.g. syntax--julia) to a name (e.g. variable).\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Juno.clearconsole",
    "page": "The Juno.jl Front-End",
    "title": "Juno.clearconsole",
    "category": "function",
    "text": "clearconsole()\n\nClear the console if Juno is used; does nothing otherwise.\n\n\n\n"
},

{
    "location": "man/juno_frontend.html#Interaction-1",
    "page": "The Juno.jl Front-End",
    "title": "Interaction",
    "category": "section",
    "text": "Juno.jl lets package developers interact with users via the Atom frontend. For example, you can allow the user to select from a list of options:Juno.selector(Image: selector)or send an OS-level notification:Juno.notifyYou can also useJuno.syntaxcolorsfor querying the currently used syntax colors in Atom (and generate a plot theme or an OhMyREPL syntax theme from that).The console can be cleared withJuno.clearconsoleor Ctrl-J Ctrl-C."
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
    "text": ""
},

{
    "location": "man/info_developer.html#Custom-Inline-Display-1",
    "page": "Information for Package Developers",
    "title": "Custom Inline Display",
    "category": "section",
    "text": "Juno\'s inline display system operates on three distinct levels:If you create a new type and don\'t define a show method for it, Juno will use a fallback that lazily shows all fields.\nIf you\'ve defined a show method for the application/prs.juno.inline MIME type then Juno willdisplay what is printed by that method or\ndisplay the above fallback for the object returned by the show  method.If you\'ve defined a show method for the text/plain MIME type Juno will use that to create a simple Tree View.\nTreeViews.jl allows customizing everything about how your type is displayed.The following will show how to use the TreeViews.jl API for pretty-printing in a few simple cases.First, let\'s define some custom types we want to display:struct Foo\n    field1\n    field2\nend\n\nstruct Bar\n    a\n    field1\nendBy default, Juno displays those like this:(Image: custom rendering 1)This default rendering method will not be used if you define e.g.Base.show(io::IO, ::MIME\"text/plain\", ::Foo) = print(io, \"Foo\")for displaying this nicely in the REPL. If you also define a Base.show(io::IO, ::MIME\"application/prs.juno.inline\", ::Foo) method, that will be used instead. As a special case, you can also return an object from that show method, and Juno will show that with its default display methods (which allows you to recover what is shown above):Base.show(io::IO, ::MIME\"application/prs.juno.inline\", x::Foo) = xTo switch to a TreeViews.jl display we can simply overload the following methods for our types:import TreeViews: hastreeview, numberofnodes, treelabel, treenode\nhastreeview(::Foo) = true\nhastreeview(::Bar) = trueSince TreeViews.jl implements sensible defaults for custom types, this gives us(Image: custom rendering 2)It is of course possible to customize this to your heart\'s content. For example, we might only want to display Foos first field withnumberofnodes(::Foo) = 1or change the Foo in the first line to something else:treelabel(io::IO, x::Foo, ::MIME\"text/plain\") = print(io, \"I\'m a Foo.\")(Image: custom rendering 3)Juno accepts a few different MIME types:text/plain: Probably best compatibility.\ntext/html: Allows much richer display options (e.g. LaTeX).\napplication/prs.juno.inline: Same as text/html, but specific to Juno.Even text/plain allows for some (limited) control over styling (colors, decorations). In general, you can print the correct SGR codes and everything will work, but I\'d recommend using Crayons.jl or a similar library instead:# plain SGR\ntreelabel(io::IO, x::Foo, ::MIME\"text/plain\") =\n  print(io, \"\\x1b[32mHello\\x1b[0m there\")\n\nusing Crayons\ntreelabel(io::IO, x::Foo, i::Int, ::MIME\"text/plain\") =\n  print(io, crayon\"(250,20,105) bold\"(\"General\"), \" Kenobi\")(Image: custom rendering 4)note: Note\nThose styles also apply to display in the REPL, provided for example by the as-of-yet unregistered REPLTreeViews.jl package:(Image: repl tree views)Using text/html allows for greater customization by using inline CSStreelabel(io::IO, x::Foo, i::Int, ::MIME\"text/html\") =\n  print(io, \"<span><span style=\\\"color:aqua; font-size:0.7em\\\">General</span> Kenobi</span>\")(Image: custom rendering 5)The application/prs.juno.inline MIME type allows you to make use of the styling Atom uses:treelabel(io::IO, x::Foo, ::MIME\"application/prs.juno.inline\") =\n  print(io, \"<span class=\\\"syntax--support syntax--type syntax--julia\\\">Junoooooooo!</span>\")(Image: custom rendering 6)It\'s also possible to e.g. print no label for Foos first field and handle everything in with treenode:treelabel(io::IO, x::Foo, i::Int, ::MIME\"application/prs.juno.inline\") = print(io, \"\")\nusing Markdown\ntreenode(x::Foo, i::Int) = MD(\"\"\"\n    ## Markdown\n\n    with ``\\\\LaTeX``\\n\n    and `code = 2+sqrt(4)`\n    \"\"\")(Image: custom rendering 7)To hide the treenode display, simply return missing:treenode(x::Foo, i::Int) = missing\ntreelabel(io::IO, x::Foo, i::Int, ::MIME\"application/prs.juno.inline\") = print(io, \"...\")(Image: custom rendering 8)Nothing at all will be shown if treelabel doesn\'t print anything and treenode returns missing."
},

{
    "location": "man/info_developer.html#Displaying-Plots-and-Graphics-1",
    "page": "Information for Package Developers",
    "title": "Displaying Plots and Graphics",
    "category": "section",
    "text": "Plots can be displayed by providing a show method for one of the following MIME types (ordered by priority):application/prs.juno.plotpane+html - rendered in a webview\nimage/svg+xml - rendered in a webview\nimage/png\nimage/jpeg\nimage/tiff\nimage/bmp\nimage/gifThe first two of those MIME types are rendered in a webview to a) prevent XSS and b) make sure not to crash Atom for big or complex graphics. For the others we provide some basic pan and zoom utilities.So if you want to e.g. display an svg you can do the following:struct Baz\n    data\nend\n\nBase.show(io::IO, ::MIME\"image/svg+xml\", b::Baz) = print(io, b.data)\nBaz(open(f -> read(f, String), \"emu.svg\"))(Image: plot pane svg)application/prs.juno.plotpane+html is HTML, but also indicates that you want your type to be displayed in Juno\'s Plot Pane.struct Blah\n    data\nend\n\nfunction Base.show(io::IO, ::MIME\"application/prs.juno.plotpane+html\", b::Blah)\n    colors = get(io, :juno_colors, nothing)\n    size = get(io, :juno_plotsize, [100, 100])\n\n    html = \"\"\"\n    <div style=\"\n        background-color: #eee;\n        color: #222;\n        width: $(size[1]-40)px;\n        height: $(size[2]-40)px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        padding: 20px;\n        margin: 0;\n        \">\n        <span>$(b.data)</span>\n        <br/>\n        <input/>\n    </div>\n    \"\"\"\n\n    print(io, html)\nend\n\nBlah(\"Input stuff here:\")(Image: plot pane html)"
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
    "text": "If you have feature ideas you\'d like to implement, or bugs you\'d like to fix, feel free to open a discussion under the \"dev\" category – we\'re always happy to help people flesh out their ideas or get unstuck on problems. Another good place to discuss with developers is in the Juno Gitter. Come by and we can chat about your ideas.If you look over the GitHub issues for the various packages, you may notice some labelled up for grabs. These are features or bugs for which the implementation or fix is reasonably straightforward – they might take a few hours of effort or more, but they won\'t involve enormous expert-level challenges. As above, feel free to open up a discussion on these and we\'ll help you get going.For extra general resources, consider the following:Julia Documentation – for learning about the Julia language.\nMDN – by far the best reference on the JavaScript language and browser window APIs.\nCoffeeScript – Atom and its packages use this to make working with JS a little more convenient.\nThe Atom Docs – the Atom Flight Manual is a very readable introduction to Atom\'s internals, and the API docs are a useful reference.\njulia-client developer docs – These docs go into more detail about the internals of this project and the development workflow.Most open source projects, including ours, use git to help work together. There are plenty of git tutorials around, and the various GUI clients (e.g. GitHub for Windows/Mac, SourceTree) are very helpful for learning the ropes."
},

{
    "location": "devdocs/contributor_guide.html#Contributing-to-the-Documentation-1",
    "page": "Contributor Guide",
    "title": "Contributing to the Documentation",
    "category": "section",
    "text": "The documentation is provided by the JunoLab/JunoDocs.jl repository. It\'s built using Documenter.jl. To modify the documentation, simply modify the Markdown files in the docs/src folder. For more information on using Documenter.jl, please see the Documenter.jl Documentation."
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
    "text": ""
},

{
    "location": "devdocs/dev_install.html#Julia-Packages-1",
    "page": "Developer Installation Instructions",
    "title": "Julia Packages",
    "category": "section",
    "text": "Execute the following in a Julia prompt:pkg> dev Atom Juno CodeToolsThis will automatically clone the git repos of most of the packages that power Juno into ~/.julia/dev. It might make sense to do this in a clean environment, so you can switch back to a known working version."
},

{
    "location": "devdocs/dev_install.html#Atom-Packages-1",
    "page": "Developer Installation Instructions",
    "title": "Atom Packages",
    "category": "section",
    "text": "Executing the following lines of code in a terminal will give you the development versions of the Atom packages that power Juno:λ apm dev julia-client\n\nλ apm dev ink\n\nλ apm dev language-julia\n\nλ apm dev latex-completionsYou\'ll find those packages in ~/github/ by default, but can also specify a directory as the second argument to apm dev.After that you can start Atom in development mode viaλ atom -dto get the development version of these packages or without the -d flag to use the latest released version."
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
    "page": "Juno\'s CI",
    "title": "Juno\'s CI",
    "category": "page",
    "text": ""
},

{
    "location": "devdocs/juno_ci.html#Juno\'s-CI-1",
    "page": "Juno\'s CI",
    "title": "Juno\'s CI",
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
    "text": "Juno works by booting a Julia client from Atom. When Julia starts it connects to Atom over a TCP port, and from that point on Julia and Atom can each send messages to each other. Messages are JSON objects, with a type header to tell the receiver how the message should be handled.The code handling low-level communication is kept in client.coffee and comm.jl. However, the details of those files aren\'t particularly important – you only need to understand the communication API, which we\'ll go over here."
},

{
    "location": "devdocs/communication.html#Sending-messages-from-Atom-1",
    "page": "Communication",
    "title": "Sending messages from Atom",
    "category": "section",
    "text": "Communication works by sending messages with an appropriate type on one side and registering handlers for that type on the other. The handler then takes some action and returns data to the original sender. For example, on the Atom side messages are sent in CoffeeScript as follows:client.msg \'eval\', \'2+2\'On the Julia side, we need to set up a handler for this message, which happens as follows:handle(\"eval\") do code\n  eval(parse(code))\nendThis is a very simplified version of the eval handler that you can find in the Atom.jl source code. It simply evaluates whatever it\'s given and returns the result – in this case, 4.Often we want to do something with that return result in Atom – in this case, we\'d like to display the result. We don\'t need to change anything on the Julia side to accomplish this; we can just use the rpc function from JS:client.rpc(\'eval\', \'2+2\').then (result) =>\n  console.log dataThis call sends the eval message, pulls the result field out of the returned JSON, and displays the result, 4, in the console.This approach is exactly how Atom gets evaluation results, autocompletion and more from Julia – so it\'s easy to find more examples spread throughout the julia-client and Atom.jl source code.As a first project, try implementing an Atom command (see the Atom docs) which sends this message to Julia, as well as adding the Julia handler above to Atom.jl. (You\'ll want to use a type other than eval to avoid clashes with actual evaluation.)"
},

{
    "location": "devdocs/communication.html#Sending-messages-from-Julia-1",
    "page": "Communication",
    "title": "Sending messages from Julia",
    "category": "section",
    "text": "Julia has a similar mechanism to talk to Atom via the functionAtom.@msg type(args...)Handlers are defined on the Atom side as follows:client.handle \'log\', (args...) ->\n  console.log argsIt\'s also possible for Julia to wait for a response from Atom, using the rpc function.client.handle \'echo\', (data) ->\n  data(It\'s very easy to add this code to julia-client\'s activate function if you want to try this out.)Calling the following from the REPL:Atom.@rpc echo(Dict(:a=>1, :b=>2))will return Dict(\"a\"=>1, \"b\"=>2). The data was passed to Atom and simply returned as-is. Try changing the handler to modify the data before returning it.This mechanism is how Julia commands like Atom.select() are implemented, and in general it makes it very simple for Julia to control the Atom frontend – see frontend.jl and frontend.coffee"
},

{
    "location": "devdocs/communication.html#Debugging-and-Learning-1",
    "page": "Communication",
    "title": "Debugging and Learning",
    "category": "section",
    "text": "A good way to get a handle on this stuff is just to use console.log and @show, on the Atom and Julia sides respectively, to take a peek at what\'s going over the wire. For example, it\'s easy to change the above Julia handler tohandle(\"eval\") do data\n  @show data\n  @show Dict(:result => eval(parse(data[\"code\"])))\nendThis will show you both the data being sent to Julia (in the example above, Dict(\"code\"=>\"2+2\")) and the data being sent back to Atom (Dict(:result => 4)). Modifying say, the completions handler in a similar way will show you what completion data Julia sends back to Atom (there will probably be a lot, so try looking at specific keys, for example).You don\'t need to reload Atom or restart the Julia client every time you make a change like this. If you open a file from the Atom.jl source code, you should see from the status bar that Juno knows you\'re working with the Atom module (try evaluating current_module() if you\'re not sure). Evaluating handlers from within the Atom module will show you what message types are currently defined. If you change a handler, just press C-Enter to update it in place; you should see the effect of your update immediately next time the handler is triggered. For example, if you modify the eval handler as follows:handle(\"eval\") do data\n  println(data[\"code\"]) # <- insert this line\n  # ...and update it, you should find that the next time you evaluate you see the contents of the current editor dumped into the console. Thus, most features or fixes you\'d want to add to Juno can be made without a long edit – compile – run cycle."
},

]}
