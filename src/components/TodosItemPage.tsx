import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom';

interface TodosItemPageParams {
  id: string;
}

const TodosItemPage: FC = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const params = useParams<Required<TodosItemPageParams>>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodo();
  }, [])

  async function fetchTodo(){
    try {
      const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id)
      setTodo(response.data)
    } catch(e) {
      alert(e)
    }
  }
  
  return (
    <div>
      <button onClick={() => navigate('/todos')}>Back</button>
      <h1>Страница задачи </h1>
      <div>
        {todo?.title}
      </div>
    </div>
  )
}

export default TodosItemPage;
