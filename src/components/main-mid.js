import React from "react";
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import Table from "./Table"



function MainMid() {
    return (
        <div className="mid-section" >
        <ul className="delete-edit">
          <li><button variant="contained" className="button" disableElevation> 
          <AiOutlinePlus className="plus" size="1.5em" > </AiOutlinePlus>
          Add Role
    </button></li>
  
          <li><FiEdit2 size="1.5em" /></li>
          <li><AiOutlineDelete  size="1.5em"/></li>
        </ul>
        <Table />
        </div>
    )
}

export default MainMid;