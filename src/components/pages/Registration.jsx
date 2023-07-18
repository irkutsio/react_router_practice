import { useNavigate } from 'react-router-dom';
import { signUp } from 'services/auth_services';

export const Registration = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: e.target.elements.name.value,
      password: e.target.elements.password.value,
      email: e.target.elements.email.value,
      avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867',
    };
    signUp(newUser)
      .then(() => {
        console.log('success');
        navigate('/login')
      })
      .catch(error => {
        console.log(error);
      });
    console.log(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          style={{ width: 300 }}
          type="text"
          className="form-control"
          name="name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          style={{ width: 300 }}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          style={{ width: 300 }}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
