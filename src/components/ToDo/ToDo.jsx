import { Link } from 'react-router-dom';

export const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {
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
          <Link to={todo.id}>{todo.title}</Link>
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
              Close
            </button>
          )}
        </div>
      </div>
    </li>
  );
};
