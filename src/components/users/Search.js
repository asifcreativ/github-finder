import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Search = ({ searchUsers, showAlert, showClear, clearUsers }) => {
  const [text, setText] = useState('');

  const onChange = (evt) => {
    setText(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (text === '') {
      showAlert('Please enter something', 'light');
      return;
    }
    searchUsers(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search...'
          value={text}
          onChange={onChange}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
