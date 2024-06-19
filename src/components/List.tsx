import { useEffect, memo } from 'react';
import { Todo, Props } from "../interfaces";
import Item from "./Item";

// El memo es para que no vuelva a cargar siempre que se actualice el estado. Hay que ser cautelosos dónde usarlo
const List = memo(( /* todos: Todo[] */ props: Props ) => {

    useEffect(() => {
        console.log('Listado');
    }, []);

    return (
        <> 
            {
            props.todos?.map((item: Todo) => <Item key={item.id} deleteItem={props.deleteItem} item={item} />)
            }
        </>
    )
});

export default List;