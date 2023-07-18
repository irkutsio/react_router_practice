import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  background-color: #43e4e4;

  &.active {
    background-color: #e23c8f;
  }
`;

export const Header = ({ showModal }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button onClick={showModal}>open Modal</button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <StyledLink className="nav-link active" aria-current="page" to="/">
              Home
            </StyledLink>
            <StyledLink className="nav-link" to="/news">
              News
            </StyledLink>
            <StyledLink className="nav-link" to="/todo">
              ToDo
            </StyledLink>
            <StyledLink className="nav-link" to="/login">
              Login
            </StyledLink>
            <StyledLink className="nav-link" to="/registration">
            Registration
            </StyledLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
