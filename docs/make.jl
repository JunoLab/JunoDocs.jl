using Documenter, Juno

makedocs(modules=Module[Juno],
         doctest=false, clean=true,
         format =:html,
         sitename="Juno Documentation",
         pages = Any[
         "Home" => "index.md",
         "Manual" => Any[
             "man/installation.md",
             "man/basic_usage.md",
             "man/faq.md",
             "man/juno_frontend.md",
             "man/info_developer.md,
             "man/settings.md"
         ],
         "Developer Documentation" => Any[
             "devdocs/contributor_guide.md",
             "devdocs/dev_install.md",
             "devdocs/package_info.md",
             "devdocs/juno_ci.md",
             "devdocs/communication.md"
         ]])


deploydocs(
   repo = "github.com/JunoLab/JunoDocs.jl.git",
   target = "build",
   osname = "linux",
   julia = "0.5",
   deps = nothing,
   make = nothing)
