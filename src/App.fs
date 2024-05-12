open Feliz
open Elmish
open Elmish.React

open Helper
open Util

type Msg =
  | Increment
  | Decrement

type State = int
let init () = 0

let private button (msg: Msg) (dispatch: Msg -> unit) : ReactElement =
  let text =
    match msg with
    | Increment -> "+"
    | Decrement -> "-"
    + "1"

  Html.button [
    prop.style [
      style.backgroundColor "white"
      style.fontSize (length.em 3)
      style.width (length.em 2)
      style.height (length.em 2)
      style.borderRadius (length.percent 22)
    ]
    prop.text text
    prop.onClick (fun _ -> dispatch msg)
  ]

let update (msg: Msg) (state: State) : State =
  match msg with
  | Increment -> state + 1
  | Decrement -> state - 1

let render (state: State) (dispatch: Msg -> unit) : ReactElement =
  Html.div [
    Html.h1 "Elmish Vite Template"
    Html.div [
      prop.style [
        style.backgroundColor "salmon"
        style.borderRadius 3
        style.padding (length.em 1)
      ]

      prop.children (
        Html.h1 $"Count: {state}"
        :: ([
              Increment
              Decrement
            ]
            |> List.map (fun msg -> button msg dispatch))
      )

    ]
  ]

Program.mkSimple init update render
|> Program.withReactSynchronous "elmish"
|> Program.run
