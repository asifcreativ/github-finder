import axios from "axios";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setTimeout(() => {
      // TODO: TEST ONLY
      this.setState({ users: res.data.items, loading: false });
    }, 1000);
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, text) => {
    this.setState({ alert: { msg, text } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading, alert } = this.state;

    return (
      <Router>
        <div>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      setAlert={this.setAlert}
                      showClear={users.length > 0}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />

              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setTimeout(() => {
      // TODO: TEST ONLY
      this.setState({ users: res.data, loading: false });
    }, 1000);
  }
}

export default App;
