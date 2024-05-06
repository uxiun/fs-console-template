import { printf, toConsole } from "./fable_modules/fable-library-ts.4.17.0/String.js";
import { createElement } from "react";
import { ReactElement } from "./fable_modules/Fable.React.Types.18.3.0/Fable.React.fs.js";
import { ProgramModule_mkSimple, ProgramModule_run } from "./fable_modules/Fable.Elmish.4.0.0/program.fs.js";
import { Program_withReactSynchronous } from "./fable_modules/Fable.Elmish.React.4.0.0/react.fs.js";

toConsole(printf("Hello from F#"));

export const header: ReactElement = createElement<any>("h1", {
    children: ["Fable Vite Template"],
});

ProgramModule_run<void, any, ReactElement>(Program_withReactSynchronous<void, void, any>("root", ProgramModule_mkSimple<void, void, any, ReactElement>((): void => {
}, (_arg_1: any, _arg_2: void): void => {
}, (_arg_3: void, _arg_4: ((arg0: any) => void)): ReactElement => header)));

