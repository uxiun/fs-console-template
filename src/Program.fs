// For more information see https://aka.ms/fsharp-console-apps
printfn "Hello from F#"

open Feliz
open Elmish
open Elmish.React

type State = { Count: int }
let init () = { Count = Counter.init () }

let update (msg: Types.Msg) (state: State) : State =
    { state with
        Count = Counter.upd msg.Counter state.Count }

let render (state: State) (dispatch: Types.Msg -> unit) : ReactElement =
    Html.div
        [ Html.h1 "Elmish Vite Template with src/"
          Counter.render state.Count dispatch ]




Program.mkSimple init update render
|> Program.withReactSynchronous "elmish"
|> Program.run
