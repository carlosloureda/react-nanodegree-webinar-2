import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default class UserFilter extends Component {
  state = {
    filters: {
      gender: {
        male: false,
        female: false,
        neutral: false,
        ratherNotSay: false
      },
      role: {
        guest: false,
        user: false,
        admin: false,
        superAdmin: false
      },
      age: {
        min: null,
        max: null
      }
    }
  };

  onGenderChange = e => {
    const { name, checked } = e.target;
    this.setState(state => ({
      gender: {
        ...state.gender,
        [name]: checked
      }
    }));
  };
  onRoleChange = e => {
    const { name, checked } = e.target;
    this.setState(state => ({
      role: {
        ...state.role,
        [name]: checked
      }
    }));
  };
  onAgeChange = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      age: {
        ...state.age,
        [name]: parseInt(value)
      }
    }));
  };
  render() {
    return (
      <Form>
        <h2>Filter</h2>
        <hr />
        <FormGroup check>
          <legend>Gender</legend>
          <div>
            <Label check>
              <Input
                type="checkbox"
                name="female"
                onChange={this.onGenderChange}
              />
              Female
            </Label>
          </div>
          <div>
            <Label check>
              <Input
                type="checkbox"
                name="male"
                onChange={this.onGenderChange}
              />
              Male
            </Label>
          </div>
          <div>
            <Label check>
              <Input
                type="checkbox"
                name="neutral"
                onChange={this.onGenderChange}
              />
              Neutral
            </Label>
          </div>
          <div>
            <Label check>
              <Input
                type="checkbox"
                name="ratherNotSay"
                onChange={this.onGenderChange}
              />
              Rather not say
            </Label>
          </div>
        </FormGroup>
        <FormGroup check>
          <legend>Role</legend>
          <div>
            <Label check>
              <Input
                type="checkbox"
                name="guest"
                onChange={this.onRoleChange}
              />
              Guest
            </Label>
          </div>
          <div>
            <Label check>
              <Input type="checkbox" name="user" onChange={this.onRoleChange} />
              User
            </Label>
          </div>
          <div>
            <Label check>
              <Input
                type="checkbox"
                name="admin"
                onChange={this.onRoleChange}
              />
              Admin
            </Label>
          </div>
          <div>
            <Label check>
              <Input
                type="checkbox"
                name="superAdmin"
                onChange={this.onRoleChange}
              />
              SuperAdmin
            </Label>
          </div>
        </FormGroup>
        <FormGroup className="col-3">
          <legend>Age</legend>
          <Label for="min">minimal age</Label>
          <Input
            type="number"
            name="min"
            id="minAge"
            onChange={this.onAgeChange}
          />
          <Label for="max">maximun age</Label>
          <Input
            type="number"
            name="max"
            id="maxAge"
            onChange={this.onAgeChange}
          />
        </FormGroup>
      </Form>
    );
  }
}
