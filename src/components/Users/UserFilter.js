import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default class UserFilter extends Component {
  render() {
    return (
      <Form>
        <h2>Filter</h2>
        <hr />
        <FormGroup check>
          <legend>Gender</legend>
          <div>
            <Label check>
              <Input type="checkbox" name="female" />
              Female
            </Label>
          </div>
          <div>
            <Label check>
              <Input type="checkbox" name="male" />
              Male
            </Label>
          </div>
          <div>
            <Label check>
              <Input type="checkbox" name="neutral" />
              Neutral
            </Label>
          </div>
          <div>
            <Label check>
              <Input type="checkbox" name="ratherNotSay" />
              Rather not say
            </Label>
          </div>
        </FormGroup>
        <FormGroup check>
          <legend>Role</legend>
          <div>
            <Label check>
              <Input type="checkbox" name="guest" />
              Guest
            </Label>
          </div>
          <div>
            <Label check>
              <Input type="checkbox" name="user" />
              User
            </Label>
          </div>
          <div>
            <Label check>
              <Input type="checkbox" name="admin" />
              Admin
            </Label>
          </div>
          <div>
            <Label check>
              <Input type="checkbox" name="superAdmin" />
              SuperAdmin
            </Label>
          </div>
        </FormGroup>
        <FormGroup className="col-3">
          <legend>Age</legend>
          <Label for="min">minimal age</Label>
          <Input type="number" name="min" id="minAge" />
          <Label for="max">maximun age</Label>
          <Input type="number" name="max" id="maxAge" />
        </FormGroup>
      </Form>
    );
  }
}
