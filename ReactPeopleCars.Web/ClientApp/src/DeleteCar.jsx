import React from "react";
import CarRow from "./CarRow";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from "./withRouter";


class DeleteCar extends React.Component {

    state = {
        cars: [],
        personId: this.props.params.id
    }

    onDeleteAllClick = async () => {
        await axios.post(`/api/people/deleteallcars?id=${this.state.personId}`);
        this.props.navigate('/');
    }


    componentDidMount = async () => {
        this.loadCars();
    }

    loadCars = async () => {
        const response = await axios.get(`/api/people/getcarsbyid?id=${this.state.personId}`);
        this.setState({ cars: response.data });
    }

    render() {
        const { cars } = this.state;
        return <div className="container" style={{ marginTop: 60 }}>
            <div className="row">
                <div className="col-md-10">
                    <input type="text" className="form-control form-control-lg"
                        placeholder="Search Cars"></input>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-dark btn-lg w-100">Clear</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map(c => <CarRow
                                key={c.id}
                                car={c}
                            />)}
                            {!cars.length && <div>
                                <h1>There are no cars to display.</h1>
                            </div>}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6" style={{ marginTop: 20 }}>
                    <button disabled={!this.state.cars.length} className="btn btn-danger btn-lg w-100" onClick={this.onDeleteAllClick}>Delete All</button>
                </div>
                <div className="col-md-6" style={{ marginTop: 20 }}>
                    <Link to='/'>
                        <button disabled={!this.state.cars.length} className="btn btn-warning btn-lg w-100" >Cancel</button>
                    </Link>
                </div>
            </div>
        </div>
    }
}

export default withRouter(DeleteCar);