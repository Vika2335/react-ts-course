import React, {FC, useEffect, useState} from 'react';
import List from '../List';
import {ITodo} from '../../types/types';
import axios from 'axios';
import TodoItem from '../TodoItem';
import {useNavigate} from 'react-router-dom';

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const navigate = useNavigate();

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
    <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} onClick={(todo) => navigate('/todos/' + todo.id)}/>}/>
  )
}

export default TodosPage;
