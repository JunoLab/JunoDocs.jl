# The Juno.jl Front-End

## Enhanced Display

Print `info` to the console in a nicer way:

```julia
info("foo")
```

![info](static/info.gif)

## Progress Meters

Show a progress meter for a computation:

```julia
@progress for ...
```

![progress](static/progress.gif)

## Console Interactions

Allow the user to select from a list of options:

```julia
selector(xs) -> x
```

![selector](static/selector.gif)

Get input in the console:

```julia
input()
```

![input](static/input.gif)
