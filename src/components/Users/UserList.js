import React, { Component } from "react";
import { Table } from "reactstrap";

import allUsers from "../../data/users";

export default class UserList extends Component {
  render() {
    const users = allUsers.slice(0, 5);
    return (
      <Table striped>
        <thead>
          <tr>
            {/* <th>#id</th> */}
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.length &&
            users.map(user => (
              <tr key={user._id}>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}
