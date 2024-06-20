export interface Todo {
    id: number,
    task: string
}

export interface Props {
    todos?: Todo[],
    item?: Todo,
    deleteItem?: any
}

export interface State {
    id: number,
    other: string
}

export interface Provider {
    children: JSX.Element | JSX.Element[]
}