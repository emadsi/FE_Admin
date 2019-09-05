import React from 'react';
import ReactDom from 'react-dom';

export default class UsersTable extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div className="row justify-content-center">
                    <h1 className="alert alert-light" role="alert">
                        Users
                    </h1>
                </div>
                {/* Fadi adding this Comment. */}
                {/* I am not familiar with mg-auto class. */}
                {/* use m-auto for margin-auto instead.*/}
                <div className="row offset-md-4 mb-2 col-md-3 mg-auto">
                    <div className="card">
                        <div className="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-md-center ">
                    <form>
                        <div className="input-group lg-10">
                            <input type="text" className="form-control" placeholder="Search by name" aria-label="Search by name" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success" type="button" id="button-addon2">Button</button>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="dropdown mr-1 mt-2">
                                <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                    Role
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                    <a className="dropdown-item" href="#">Manager</a>
                                    <a className="dropdown-item" href="#">Employee</a>
                                    <a className="dropdown-item" href="#">Admin</a>
                                </div>
                            </div>
                            <div className="dropdown mr-1 mt-2">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        Department
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                      <a className="dropdown-item" href="#">Manager</a>
                                      <a className="dropdown-item" href="#">Employee</a>
                                      <a className="dropdown-item" href="#">Admin</a>
                                    </div>
                            </div>
                            <div className="dropdown mr-1 mt-2">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        Work Site
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                      <a className="dropdown-item" href="#">Manager</a>
                                      <a className="dropdown-item" href="#">Employee</a>
                                      <a className="dropdown-item" href="#">Admin</a>
                                    </div>
                            </div>
                            <div className="dropdown mr-1 mt-2">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        Country
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                      <a className="dropdown-item" href="#">Manager</a>
                                      <a className="dropdown-item" href="#">Employee</a>
                                      <a className="dropdown-item" href="#">Admin</a>
                                    </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* typo in the classes list? "-"  */}
                <div className="row - justify-content-center">
                    <table className="table  col-md-6 mt-4" id="usersTable">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Full Name</th>
                                <th>Roles</th>
                                <th>Department</th>
                                <th>Work Site</th>
                            </tr>
                        </thead>
                        <tbody>
                            <UsersTableComponent /> {/* Whats the difference between UserTable and UsersTableComponent?
                                                        Can you please comment your code? */}
                        </tbody>
                    </table>
                </div>
            
            </div>
        );
    }
}

ReactDom.render(<UsersTable/>,
    document.querySelector('#container')
    );