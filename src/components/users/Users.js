import PropTypes from "prop-types";
import React from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr )",
  gridGap: "1rem",
};

Users.prototype = {
  users: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default Users;
