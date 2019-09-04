import React from 'react';
import ReactDom from 'react-dom';

export default class UsersTable extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-1 ml-12">
                        <h1>Users</h1>
                    </div>
                </div>

                <div className="row">
                    <form onSubmit="">
                        <div className="col-4">
                            <input className="form-control mr-sm-2" id="search-bar" type="search" placeholder="Search a user" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                            <div className="search-users" id="advanced-search">
                                <a id="advanced-btn" onclick={this.showOptions}>Advanced Search</a>
                            </div>

                            <div className="row"> 
                                <div className="dropdown mr-1 col">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        Role
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <a className="dropdown-item" href="#">Manager</a>
                                        <a className="dropdown-item" href="#">Employee</a>
                                        <a className="dropdown-item" href="#">Admin</a>
                                    </div>
                                </div>

                                <div className="dropdown mr-1 col">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        Department
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <a className="dropdown-item" href="#">Manager</a>
                                        <a className="dropdown-item" href="#">Employee</a>
                                        <a className="dropdown-item" href="#">Admin</a>
                                    </div>
                                </div>

                                <div className="dropdown mr-1 col">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        Work Site
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <a className="dropdown-item" href="#">Manager</a>
                                        <a className="dropdown-item" href="#">Employee</a>
                                        <a className="dropdown-item" href="#">Admin</a>
                                    </div>
                                </div>

                                <div className="dropdown mr-1 col">
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
                        </div>  
                    </form>
                </div>

                {/* <!-- Adding new user --> */}
                <div class="row">
                    <div class="col"></div>
                    <div class="col"></div><div class="col-2">
                        <button class="btn btn-outline-info" id="add-user-btn">Add user</button>
                    </div>
                </div>

                {/* <!-- Users' table --> */}
                <div className="table table-hover table-style row justify-content-md-center mt-4">
                    <table id="table-content">
                        <thead>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Roles</th>
                            <th>Department</th>
                            <th>Work Site</th>
                        </thead>
                        <tbody id="tbody">
            
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