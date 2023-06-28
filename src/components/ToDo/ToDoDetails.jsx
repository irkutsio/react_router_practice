import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ToDo } from './ToDo';

export const ToDoDetails = () => {
  const [todoList, setTodoList] = useState([]);

  const params = useParams();

const location = useLocation()
console.log(location)

  useEffect(() => {
    if (localStorage.getItem('todo'))
      setTodoList(() => JSON.parse(localStorage.getItem('todo')));
  }, []);

  return (
    <>
    <Link to={location.state} className='btn btn-secondary m-2'> ⬅ back </Link>
      {todoList.map(
        todo => todo.id === params.id && <ToDo key={todo.id} todo={todo} />
      )}
    </>
  );
};
