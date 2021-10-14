import PropTypes from "prop-types";
import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
      return;
    }
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Submit'
            className='btn btn-dark btn-block'
          />
          {showClear && (
            <button
              type='button'
              className='btn btn-light btn-block'
              onClick={clearUsers}
            >
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
