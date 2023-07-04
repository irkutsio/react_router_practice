import { Link, useLocation } from 'react-router-dom';

export const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {

  const location = useLocation()
  // console.log(location)

  return (
    <li className="list_group_item">
      <div>
        <div>
          {handleCheckCompleted && (
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                handleCheckCompleted(todo.id);
              }}
            />
          )}
          {handleCheckCompleted ? (
            <Link to={todo.id} state={location}>{todo.title}</Link>
          ) : (
            <h2>{todo.title}</h2>
          )}
        </div>
        <div>
          {handleDelete && (
            <button
              disabled={!todo.completed}
              type="button"
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </li>
  );
};
