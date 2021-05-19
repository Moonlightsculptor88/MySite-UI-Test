import React from "react";
import mainLogo from "../assets/Subtract.png"
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';


function Navbar(){
    return (
        <nav className="navbar">
            <ul>
                <li><img src={mainLogo} alt="logo" /></li>
                <li>Mysite</li>
                <li><div></div></li>
                <li>Kishore</li>
                <li><IoIosNotificationsOutline size="2em" color="grey" /></li>
                <li><AiOutlineQuestionCircle size="2em" color="grey" /></li>
            </ul>
        </nav>
    )
}

export default Navbar;