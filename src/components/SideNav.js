import React from "react"
import { RiBriefcase4Line } from 'react-icons/ri';

function SideNav() {
    return (
        <div className="sidenav">
            <ul>
                <li className="not-active"><RiBriefcase4Line className="icon-project" size="1em"/> Projects </li>
                <li className="not-active"><RiBriefcase4Line className="icon-project" size="1em"/> Organisation Profile</li>
                <li className="active"><RiBriefcase4Line className="icon-project" size="1em"/> Access Control</li>
            </ul>
        </div>
    )
}

export default SideNav;