# The Juno.jl Front-End

## Enhanced Display

Juno.jl includes features which allow package developers to created enhanced displays
in Juno. For example, we can print `info` to the console in a nicer way:

```julia
info("foo")
```

![info](../assets/info.gif)

The following functions provide this interface:

```@docs
Media.media
Media.@media
Media.setdisplay
Media.getdisplay
Juno.info
```

## Progress Meters

Juno.jl allows package developers to use the progressbar which is provided in the
Atom window. For example, you can easily show a progress meter for a `for loop`
via the command:

```julia
@progress for ...
```

![progress](../assets/progress.gif)

The following functions provide this interface:

```@docs
Juno.@progress
Juno.progress
Juno.ProgressBar
Juno.name
Juno.msg
Juno.right_text
Juno.done
```

It is recommended to either use the `@progress` macro or the
```julia
progress(name = "Foo") do p

end
```
notation to ensure that the progress bars are properly unregistered in the
frontend.

## Console Interactions

Juno.jl lets package developers interact with users via the Juno console. For example,
you can allow the user to select from a list of options:

```julia
selector(xs) -> x
```

![selector](../assets/selector.gif)

or get input in the console:

```julia
input()
```

![input](../assets/input.gif)

The following functions provide this interface:

```@docs
Juno.isactive
Juno.input
Juno.selector
```
