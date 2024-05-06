import { int32 } from "../fable_modules/fable-library-ts.4.17.0/Int32.js";
import { Counter_Decrement, Counter_Increment, Msg, Counter_$union } from "./Types.fs.js";
import { createElement } from "react";
import { ReactElement } from "../fable_modules/Fable.React.Types.18.3.0/Fable.React.fs.js";
import { createObj } from "../fable_modules/fable-library-ts.4.17.0/Util.js";
import { cons, ofArray, map } from "../fable_modules/fable-library-ts.4.17.0/List.js";
import { Interop_reactApi } from "../fable_modules/Feliz.2.7.0/./Interop.fs.js";

export function init(): int32 {
    return 0;
}

export function upd(msg: Counter_$union, state: int32): int32 {
    if (msg.tag === /* Decrement */ 1) {
        return (state - 1) | 0;
    }
    else {
        return (state + 1) | 0;
    }
}

function button(msg: Counter_$union, dispatch: ((arg0: Msg) => void)): ReactElement {
    const text: string = ((msg.tag === /* Decrement */ 1) ? "-" : "+") + "1";
    return createElement<any>("button", {
        style: {
            backgroundColor: "white",
            fontSize: 3 + "em",
            width: 2 + "em",
            height: 2 + "em",
            borderRadius: 22 + "%",
        },
        children: text,
        onClick: (_arg: any): void => {
            dispatch(new Msg(msg));
        },
    });
}

export function render(state: int32, dispatch: ((arg0: Msg) => void)): ReactElement {
    let elems: Iterable<ReactElement>;
    return createElement<any>("div", createObj(ofArray([["style", {
        backgroundColor: "salmon",
        borderRadius: 3,
        padding: 1 + "em",
    }] as [string, any], (elems = cons(createElement<any>("h1", {
        children: [`Count: ${state}`],
    }), map<Counter_$union, ReactElement>((msg: Counter_$union): ReactElement => button(msg, dispatch), ofArray([Counter_Increment(), Counter_Decrement()]))), ["children", Interop_reactApi.Children.toArray(Array.from(elems))] as [string, any])])));
}

