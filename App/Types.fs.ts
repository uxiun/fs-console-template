import { Record, Union } from "../fable_modules/fable-library-ts.4.17.0/Types.js";
import { record_type, union_type, TypeInfo } from "../fable_modules/fable-library-ts.4.17.0/Reflection.js";
import { IComparable, IEquatable } from "../fable_modules/fable-library-ts.4.17.0/Util.js";

export type Counter_$union = 
    | Counter<0>
    | Counter<1>

export type Counter_$cases = {
    0: ["Increment", []],
    1: ["Decrement", []]
}

export function Counter_Increment() {
    return new Counter<0>(0, []);
}

export function Counter_Decrement() {
    return new Counter<1>(1, []);
}

export class Counter<Tag extends keyof Counter_$cases> extends Union<Tag, Counter_$cases[Tag][0]> {
    constructor(readonly tag: Tag, readonly fields: Counter_$cases[Tag][1]) {
        super();
    }
    cases() {
        return ["Increment", "Decrement"];
    }
}

export function Counter_$reflection(): TypeInfo {
    return union_type("Types.Counter", [], Counter, () => [[], []]);
}

export class Msg extends Record implements IEquatable<Msg>, IComparable<Msg> {
    readonly Counter: Counter_$union;
    constructor(Counter: Counter_$union) {
        super();
        this.Counter = Counter;
    }
}

export function Msg_$reflection(): TypeInfo {
    return record_type("Types.Msg", [], Msg, () => [["Counter", Counter_$reflection()]]);
}

