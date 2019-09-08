import React from 'react';
import ReactDom from 'react-dom';
import UsersTableRow from './UsersTableRow'
import Data, {USERS} from './data.js'

const AdvancedSearchStyle = {
    cursor : "pointer",
    color : "blue",
    textDecoration : "underline"

}
const AdvancedSearchOptionsStyle = {
    display : "none"
}

export default class UsersTable extends React.Component{
    constructor(){
        super();
        this.state ={
            users : []
        }
    }

    componentDidMount(){
        this.setState({
            users : USERS
        });
    }

    showOptions(){
        const advancedSearchOptions = document.querySelector('#advancedSearchOptions');

        if(advancedSearchOptions.style.display == "flex"){
            advancedSearchOptions.style.display = "none";
        }
        else{
            advancedSearchOptions.style.display = "flex";
        }
        
    }

    render(){
        return(
            <div>
                {/* <div className="row justify-content-center">
                    <h1 className="alert alert-light" role="alert">
                        Users
                    </h1>
                </div> */}
                {/* A block for displaying the general result info */}
                {/* <div className="row offset-md-4 mb-2 col-md-3 m-auto">
                    <div className="card">
                        <div className="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                </div> */}
                
                <div className="col-5 m-auto justify-content-md-center">
                    <form>
                        <div className="form-row input-group lg-10 m-auto">
                            <input type="text" className="form-control" placeholder="Search by name" aria-label="Search by name" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                        <div >
                            <a style={AdvancedSearchStyle} className="justify-content-md-center offset-md-4" onClick={this.showOptions}>Advanced Search</a>
                        </div>
                        <div className="form-row m-auto" id="advancedSearchOptions" style={AdvancedSearchOptionsStyle}>
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
                
                <div className="row">
                    <table className="table mt-2" id="usersTable">
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
                            {/* A Component for dynamically filling the table*/}
                            {this.state.users.map(user => <UsersTableRow 
                                                    key={user.employeeNumber}
                                                    user={user}
                                                    />)
                        }  
                        </tbody>
                    </table>
                </div>
            
            </div>
        );
    }
}

// ReactDom.render(<UsersTable/>,
//     document.querySelector('#container')
//     );