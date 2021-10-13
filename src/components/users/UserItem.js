import React, { Component } from "react";

export default class UserItem extends Component {
  //   state = {
  //     login: "mojombo",
  //     id: 1,
  //     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo",
  //   };

  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt={login}
          className='round-img'
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a className='btn btn-sm btn-dart my-1' href={html_url}>
            More
          </a>
        </div>
      </div>
    );
  }
}
