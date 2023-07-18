import { loginThunk } from 'components/store/auth/thunk';
import { useDispatch } from 'react-redux';
// import { login } from 'services/auth_services';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const login = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(loginThunk(login));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          style={{ width: 300 }}
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          style={{ width: 300 }}
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      {/* <div className="mb-3 form-check">
        {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label> */}
      {/* </div> */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
