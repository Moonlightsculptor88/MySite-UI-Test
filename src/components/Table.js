import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AiOutlineEye } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';


const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
});

function createData(name, level , number, updated) {
  return { name, level, number,  updated};
}



 const styles= {
    fontSize:"18px"
 }

const rows = [
  createData('Management Team', 'All Access', 6, "1 min ago"),
  createData('Procurement Team ', 'Restricted Access', 9, "1 min ago"),
  createData('Project Team', 'Restricted Access', 16, "1 min ago"),
  createData('IT Team', 'Restricted Access', 3, "1 min ago"),
  createData('Super Admin', 'All Access', 16, "1 min ago"),
];


export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-head">Department Role/Name</TableCell>
            <TableCell className="table-head" align="left">Access Level</TableCell>
            <TableCell className="table-head" align="center">No of Members</TableCell>
            <TableCell className="table-head" align="center">Last Updated</TableCell>
            <TableCell className="table-head" align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
            <TableCell   component="th" scope="row" className="icon-wrapper">O  
            <Link className="links" to="/Manager"> {row.name}</Link>
              </TableCell>
              <TableCell  align="center"><p className="access-level" style={ row.level === "All Access"  ? { backgroundColor:"#80ffbf", color:"#27AE60",border: "2px solid green"} : { backgroundColor:" #ff9999", color:"#FF0808",border: "2px solid red"}}>{row.level}</p></TableCell>
              <TableCell align="center">{row.number}</TableCell>
              <TableCell align="center">{row.updated}</TableCell>
              <TableCell align="center"><AiOutlineEye size="1.5em" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}