import React, { useContext, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = (evt) => setText(evt.target.value);

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
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
        {users.length > 0 && (
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

export default Search;
