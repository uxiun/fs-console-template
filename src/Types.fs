module Types

type Counter =
    | Increment
    | Decrement

type Msg = { Counter: Counter }
