import React from "react";
import { produce } from 'immer';
import withRouter from "./withRouter";
import axios from "axios";

class PersonForm extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onTextChange = e => {
        const copy = this.state.person;
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy});
    }

    onAddClick = async () => {
      await axios.post('/api/people/addperson', this.state.person);
      this.props.navigate('/');
    }


    render() {
        const {firstName, lastName, age} = this.state.person;
    return <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 offset-md-3 card bg-light p-4">
                <h2>Add a New Person</h2>
                <input type="text" className="form-control" name="firstName"
                    placeholder="First Name" value={firstName} onChange={this.onTextChange}></input>
                <br />
                <input type="text" className="form-control" name="lastName"
                    placeholder="Last Name" value={lastName} onChange={this.onTextChange}></input>
                <br />
                <input type="text" className="form-control" name="age"
                    placeholder="Age" value={age} onChange={this.onTextChange}></input>
                <br />
                <button className="btn btn-primary btn-lg btn-block" onClick={this.onAddClick}>Submit</button>
            </div>
        </div>
    </div>
    }
}

export default withRouter(PersonForm);