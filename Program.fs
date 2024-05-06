// For more information see https://aka.ms/fsharp-console-apps
printfn "Hello from F#"

open Feliz
open Elmish
open Elmish.React

let header = Html.h1 "Fable Vite Template"

Program.mkSimple (fun _ -> ()) (fun _ _ -> ()) (fun _ _ -> header)
|> Program.withReactSynchronous "root"
|> Program.run
