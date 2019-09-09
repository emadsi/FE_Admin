import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faUsers, faUserTie, faCity, faNetworkWired } from '@fortawesome/free-solid-svg-icons'


export default class UsersStatus extends React.Component{

    render(){
        return(

            <div>
                <div className="row mb-2 d-flex align-items-stretch justify-content-center">
                    <div className="col-sm-3 w-100">
                        <div className="card text-center" style={{backgroundColor : "rgb(220,220,220)"}}>
                            <div className="card-body">
                                <FontAwesomeIcon 
                                    icon={faUsers}
                                    size="2x"
                                    >
                                </FontAwesomeIcon>
                                <p className="card-text">Users</p>
                                <span><p>Emad</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 w-100">
                        <div className="card text-center" style={{backgroundColor : "rgb(220,220,220)"}}>
                            <div className="card-body">
                                <FontAwesomeIcon
                                    icon={faUserTie}
                                    size="2x"
                                    >
                                </FontAwesomeIcon>
                                <p className="card-text">Roles</p>
                                <span><p>Emad</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 w-100">
                        <div className="card text-center" style={{backgroundColor : "rgb(220,220,220)"}}>
                            <div className="card-body">
                                <FontAwesomeIcon
                                    icon={faNetworkWired}
                                    size="2x"
                                    >
                                </FontAwesomeIcon>
                                <p className="card-text">Departments</p>
                                <span><p>Emad</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 w-100">
                        <div className="card text-center" style={{backgroundColor : "rgb(220,220,220)"}}>
                            <div className="card-body">
                                <FontAwesomeIcon
                                    icon={faCity}
                                    size="2x"
                                    >
                                </FontAwesomeIcon>
                                <p className="card-text">Work Sites</p>
                                <span><p>Emad</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}