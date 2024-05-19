import React from "react";
import { Link } from "react-router-dom";

export default function PersonRow({ person ,carCount}) {
    const {id, firstName, lastName, age } = person;

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{carCount}</td>
            <td>
                <Link to={`/addcar/${id}`}>
                    <button className="btn btn-primary">Add Car</button>
                </Link>
            </td>
            <td>
               <Link to={`/deletecar/${id}`}>
                <button className="btn btn-danger">Delete Car</button>
               </Link>
            </td>
        </tr>
    )
}


