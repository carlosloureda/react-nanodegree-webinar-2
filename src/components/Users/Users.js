import React, { Component } from "react";
import Paginator from "./Paginator";
import UserList from "./UserList";
import UserFilter from "./UserFilter";

import allUsers from "../../data/users";

class Users extends Component {
  itemsPerPage = 5;
  totalPages = 5;

  state = {
    actualPage: 0,
    totalUsers: 0,
    users: []
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    const initSlice = this.itemsPerPage * this.state.actualPage;
    const endSlice = initSlice + this.itemsPerPage;
    let users = allUsers;

    this.setState(state => ({
      users: users.slice(initSlice, endSlice),
      totalUsers: users.length
    }));
  };

  render() {
    const { users, actualPage, totalUsers } = this.state;
    return (
      <div className="container-fluid">
        <div className="paginator">
          <Paginator
            itemsPerPage={this.itemsPerPage}
            totalItems={totalUsers}
            actualPage={actualPage}
          />
        </div>
        <div className="row">
          <div className="col-sm">
            <UserList users={users} />
          </div>
          <div className="col-sm">
            <UserFilter />
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
