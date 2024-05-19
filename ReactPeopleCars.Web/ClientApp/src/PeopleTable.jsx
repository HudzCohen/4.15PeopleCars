import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import PersonRow from "./PersonRow";

class PeopleTable extends React.Component {

    state = {
        people: [],
        searchText: ''
    }

    componentDidMount = async () => {
        this.loadPeople();
    }

    loadPeople = async () => {
        const response = await axios.get('/api/people/getall');
        this.setState({ people: response.data });
    }

    onSearchChange = e => {
        const copy = e.target.value;
        this.setState({ searchText: copy });
    }

    onClearClick = () => {
        this.setState({ searchText: '' });
    }


    render() {
        const { people, searchText } = this.state;

        return (
            <div style={{ marginTop: 100 }}>
                <div className="row">
                    <div className="col-md-10">
                        <input type="text" className="form-control form-control-lg" placeholder="Search People"
                            value={searchText} onChange={this.onSearchChange} >

                        </input>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark btn-lg w-100" onClick={this.onClearClick}>Clear</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12" style={{ marginBottom: 20 }}>
                        <Link to='/personform'>
                            <button className="btn btn-success btn-lg w-100">Add Person</button>
                        </Link>
                    </div>
                </div>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Car</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.filter(p => p.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
                            p.lastName.toLowerCase().includes(searchText.toLowerCase()))
                            .map(p => <PersonRow
                                key={p.id}
                                person={p}
                                carCount={p.cars.length} />
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PeopleTable;