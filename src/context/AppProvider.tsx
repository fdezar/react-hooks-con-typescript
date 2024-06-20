import { Context } from "./AppContext";
import { State } from "../interfaces";

const INITIAL_STATE: State = {
    id: 10,
    other: 'whatever'
};

interface ProviderProps {
    children: React.ReactNode;
}

export const CustomProvider = ({ children }: ProviderProps ) => {
    return (
        <Context.Provider value={INITIAL_STATE}>
            { children }
        </Context.Provider>
    );
};
