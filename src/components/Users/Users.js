import React, { Component } from "react";
import Paginator from "./Paginator";
import UserList from "./UserList";
import UserFilter from "./UserFilter";

class Users extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="paginator">
          <Paginator itemsPerPage={this.itemsPerPage} totalItems={25} />
        </div>
        <div className="row">
          <div className="col-sm">
            <UserList />
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
