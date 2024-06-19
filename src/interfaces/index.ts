export interface Todo {
    id: number,
    task: string
}

export interface Props {
    todos?: Todo[],
    item?: Todo,
    deleteItem?: any
}