import React from "react";
import '../assets/style/Sidebar.css'
import { Link } from "react-router-dom";

const emailComponent: React.FC = () => {

    return (
        <div className="container">
            <div className="">
                <div className=" bg-light py-4 d-flex flex-column text-center sidebar">
                    <Link to='/NewemailComponent'><p className="newEmail">New Email</p></Link>
                    <Link to='/'><p className="inbox">Inbox</p></Link>
                    <Link to='/stared'><p>Started</p></Link> 
                    <Link to='/sent'><p>Sent</p></Link> 
                    <Link to='/trash'><p>Trash</p></Link> 
                    <Link to='/important'><p>Important</p></Link> 
                </div>
            </div>

            

        </div>
    )
}

export default emailComponent; 