
import React from "react";
import withRouter from "./withRouter";
import axios from "axios";


class AddCar extends React.Component {
   
    state = {
        fullName: '',
        car: {
            make: '', 
            model: '',
            year: '',
            personId: this.props.params.id
        }
    }

    onTextChange = e => {
        const copy = this.state.car;
        copy[e.target.name] = e.target.value;
        this.setState({car: copy});
    }

    onAddClick = async () => {
        
        const {car} = this.state;
        await axios.post('/api/people/addcar', car);
        this.props.navigate('/');
    }

    render() {
        const { make, model, year } = this.state.car;
        return (<div className="container" style={{marginTop: 60}}>
            <div className="row">
                <div className="col-md-6 offset-md-3 card bg-light p-4">
                    <h2>Add a Car for {this.state.fullName}</h2>
                    <input type="text" className="form-control" name="make"
                        placeholder="Make" value={make} onChange={this.onTextChange}></input>
                    <br />
                    <input type="text" className="form-control" name="model"
                        placeholder="Model" value={model} onChange={this.onTextChange}></input>
                    <br />
                    <input type="text" className="form-control" name="year"
                        placeholder="Year" value={year} onChange={this.onTextChange}></input>
                    <br />
                    <button className="btn btn-primary btn-lg btn-block" onClick={this.onAddClick}>Submit</button>
                </div>
            </div>
        </div>)
    }
}

export default withRouter(AddCar);