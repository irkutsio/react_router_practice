import React, { Component } from 'react';

export class Search extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
