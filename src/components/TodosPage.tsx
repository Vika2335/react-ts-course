import React, {FC, useEffect, useState} from 'react';
import List from '../components/List';
import {ITodo} from '../types/types';
import axios from 'axios';
import TodoItem from '../components/TodoItem';

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, [])

  async function fetchTodos(){
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      setTodos(response.data)
    } catch(e) {
      alert(e)
    }
  }

  return (
    <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
  )
}

export default TodosPage;
