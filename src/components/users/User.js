import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

export default class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  render() {
    const {
      login,
      avatar_url,
      html_url,
      name,
      company,
      blog,
      location,
      hireable,
      bio,
      public_repos,
      public_gists,
      followers,
      following,
    } = this.props.user;

    const { repos, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable:{" "}
        <i
          className={`fas ${
            hireable ? "fa-check text-success" : "fa-times-circle text-danger"
          }`}
        ></i>
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-ing'
              style={{ width: "150px" }}
              alt=''
            />

            <h1>{name}</h1>

            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>

            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center '>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Reps: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}
