import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PeopleTable from './PeopleTable';
import PersonForm from './PersonForm';
import AddCar from './AddCar';
import DeleteCar from './DeleteCar';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={ <PeopleTable />} />
                <Route path='/personform' element={ <PersonForm />} />
                <Route path='/addcar/:id' element={ <AddCar />} />
                <Route path='/deletecar/:id' element={ <DeleteCar />} />
            </Routes>
        </Layout>
    );
}

export default App;


//need to switch the query string in delete cars to be a
//vm object...
//need to do the persons name on the add car page...