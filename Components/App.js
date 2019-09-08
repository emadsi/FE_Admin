import React from 'react';
import ReactDom from 'react-dom';
import UsersTable from '../UsersTable'
import UsersTableRow from '../UsersTableRow';
import UsersStatus from '../Components/UsersStatus';
import UsersDetailsGraphs from '../Components/UsersDetailsGraphs';


export default class App extends React.Component{
    constructor(){
        super();
    }


    render(){
        return (
            <div>
                <div className="row justify-content-center">
                    <h1 className="alert alert-light" role="alert">
                        Users
                    </h1>
                </div>

                <UsersStatus />
                <div className="row d-flex align-items-center">
                    <div className="col-lg-8">
                        <UsersTable />
                    </div>
                    <div className="col-lg-4">
                        <UsersDetailsGraphs />
                    </div>
                </div>
            </div>
           
        );
    }
}

ReactDom.render(<App/>,
    document.querySelector('#container')
    );