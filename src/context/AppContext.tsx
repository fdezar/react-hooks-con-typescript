import { createContext } from 'react';
import { State } from "../interfaces";

const INITIAL_STATE: State = {
    id: 10,
    other: 'whatever'
}

export const Context = createContext({ INITIAL_STATE });