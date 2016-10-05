using Documenter

makedocs(modules=Module[],
         doctest=false, clean=true,
         format =Documenter.Formats.HTML,
         sitename="Juno Documentation",
         pages = Any[
         "Home" => "index.md",
         "Manual" => Any[
             "man/installation.md",
             "man/basic_usage.md",
             "man/faq.md",
             "man/juno_frontend.md"
         ],
         "Developer Documentation" => Any[
             "devdocs/contributor_guide.md",
             "devdocs/dev_install.md",
             "devdocs/package_info.md",
             "devdocs/juno_ci.md",
             "devdocs/communication.md"
         ]])


deploydocs(
   repo = "github.com/ChrisRackauckas/JunoDocs.jl.git",
   target = "build",
   deps = nothing,
   make = nothing)
