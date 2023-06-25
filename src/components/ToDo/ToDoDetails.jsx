import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToDo } from './ToDo';

export const ToDoDetails = () => {
  const [todoList, setTodoList] = useState([]);
  const params = useParams();
  useEffect(() => {
    if (localStorage.getItem('todo'))
      setTodoList(() => JSON.parse(localStorage.getItem('todo')));
  }, []);
  return (
    <>
      {todoList.map(
        todo => todo.id === params.id && <ToDo key={todo.id} todo={todo} />
      )}
    </>
  );
};
