import { printf, toConsole } from "./fable_modules/fable-library-ts.4.17.0/String.js";
import { Record } from "./fable_modules/fable-library-ts.4.17.0/Types.js";
import { int32 } from "./fable_modules/fable-library-ts.4.17.0/Int32.js";
import { IComparable, IEquatable } from "./fable_modules/fable-library-ts.4.17.0/Util.js";
import { record_type, int32_type, TypeInfo } from "./fable_modules/fable-library-ts.4.17.0/Reflection.js";
import { render as render_1, upd, init as init_1 } from "./App/Counter.fs.js";
import { Msg } from "./App/Types.fs.js";
import { createElement } from "react";
import { FSharpList, ofArray } from "./fable_modules/fable-library-ts.4.17.0/List.js";
import { ReactElement } from "./fable_modules/Fable.React.Types.18.3.0/Fable.React.fs.js";
import { Interop_reactApi } from "./fable_modules/Feliz.2.7.0/./Interop.fs.js";
import { ProgramModule_mkSimple, ProgramModule_run } from "./fable_modules/Fable.Elmish.4.0.0/program.fs.js";
import { Program_withReactSynchronous } from "./fable_modules/Fable.Elmish.React.4.0.0/react.fs.js";

toConsole(printf("Hello from F#"));

export class State extends Record implements IEquatable<State>, IComparable<State> {
    readonly Count: int32;
    constructor(Count: int32) {
        super();
        this.Count = (Count | 0);
    }
}

export function State_$reflection(): TypeInfo {
    return record_type("Program.State", [], State, () => [["Count", int32_type]]);
}

export function init(): State {
    return new State(init_1());
}

export function update(msg: Msg, state: State): State {
    return new State(upd(msg.Counter, state.Count));
}

export function render(state: State, dispatch: ((arg0: Msg) => void)): ReactElement {
    const children: FSharpList<ReactElement> = ofArray([createElement<any>("h1", {
        children: ["Fable Vite Template"],
    }), render_1(state.Count, dispatch)]);
    return createElement<any>("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    });
}

ProgramModule_run<State, Msg, ReactElement>(Program_withReactSynchronous<void, State, Msg>("root", ProgramModule_mkSimple<void, State, Msg, ReactElement>(init, update, render)));

