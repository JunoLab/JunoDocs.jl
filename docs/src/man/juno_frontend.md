# The Juno.jl Front-End

## Enhanced Display

Print `info` to the console in a nicer way:

```julia
info("foo")
```

![info](assets/info.gif)

## Progress Meters

Show a progress meter for a computation:

```julia
@progress for ...
```

![progress](assets/progress.gif)

## Console Interactions

Allow the user to select from a list of options:

```julia
selector(xs) -> x
```

![selector](assets/selector.gif)

Get input in the console:

```julia
input()
```

![input](static/input.gif)
