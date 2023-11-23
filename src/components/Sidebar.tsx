import React from "react";
import '../assets/style/Sidebar.css'
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {

    return (
        <div className="container">
            <div>
                <div className=" bg-light py-4 d-flex flex-column text-center sidebar">
                    <Link to='/'><p className="newEmail">New Email</p></Link>
                    <Link to='/inbox'><p className="inbox">Inbox</p></Link>
                </div>
            </div>

            

        </div>
    )
}

export default Sidebar; 