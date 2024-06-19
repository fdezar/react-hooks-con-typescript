import { useState, useEffect, useCallback } from 'react'
import Resize from './components/Resize';
import Input from './components/Input';
import './App.css'
import List from './components/List';
import { Todo } from './interfaces';

type param = 1|2|0;
interface User {
  id: string | number,
  username: string,
  email?: string
}

const App = () => {

  const [counter, setCounter] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      task: 'First task'
    },
    {
      id: 2,
      task: 'Second task'
    }
  ])
  const [user, setUser] = useState<User>({
    id: 1,
    username: '',
    email: ''
  });

  useEffect(() => {

  }, [])

  const increment = (number: param = 1): void => {
    // setCounter(counter + number);
    setCounter(actualCounter => actualCounter + number);
    setCounter(actualCounter => actualCounter + number);
  };
  
  const decrement = (number: number): void => {
    setCounter(counter - number);
  }

  const reset = (number: number = 0): void => {
    setCounter(number);
  }

  const changeUser = (): void => {
    setUser({
      id: 1,
      username: 'Cat'
    });
  }

  const updateUser = (key: string, value: string): void => {
    setUser(actualUser => ({
      ...actualUser,
      ...{
        [key]: value
      } as unknown as User
    }));
  }

  const deleteItem = useCallback((id: number) => {
    const filteredArr = todos.filter(item => item.id !== id);
    setTodos(filteredArr);
  }, [todos]);

  const setShowResize = (option: boolean): void => {
    setShow(option);
  }

  const addTodo = (): void {
    setTodos([...todos, { id: 3, task: 'third task'}]);
  }

  return (
    <>
      {counter}
      <br />

      <button onClick={() => setShowResize(!show)}>Hide/Show Resize</button>

      { show && <Resize /> }

      <Input />

      <input value={search} onChange={(e) => setSearch(e.target.value)}/>

      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>

      <button onClick={() => changeUser()}>Change User</button>
      <button onClick={() => updateUser('name', 'Mario')}>Change User</button>

      <List todos={todos} deleteItem={() => deleteItem}/>
    </>
  )
}

export default App
