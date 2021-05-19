import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FiEdit2 } from 'react-icons/fi';
import { BsArrowLeft} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';



const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
});


function createData(name, calories, fat, carbs, protein, detail) {
  return { name, calories, fat, carbs, protein, detail };
}

const rows = [
  createData(
    'Budget',
    "All Access",
    "View | Create | Edit | Delete",
    "1 min ago",
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  ),
  createData(
    'Bidding',
    "No Access",
    "-",
    "1 min ago",
    'Maecenas rutrum urna vel lacus viverra, id ultrices dui rutrum'
  ),
  createData(
    'Vendor Portal',
    "Restricted Access",
    "View | Create",
    "1 min ago",
    'Morbi congue gravida nunc, eu cursus felis vulputate id'
  ),
  createData(
    'Purchase Order/Work Order',
    "Restricted Access",
    "View | Create",
    "1 min ago",
    'Vestibulum efficitur, ipsum consectetur finibus maximus, ligula dolor vehicula ex, sed viverra nulla mauris id purus'
  ),
  createData(
    'Organisational Profile',
    "All Access",
    "View | Create | Edit | Delete",
    "1 min ago",
    ' Suspendisse vehicula eu libero eget viverra'
  )
];

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "-" : "+"}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell className="extra" colSpan="5"  padding="checkbox" />
          <div className="extra">
          <h5 className="extra-h5">All aspects in the bidding module</h5>
          <h5 className="access">Access Control</h5>
          <div className="first-list">
            <ul>
              <li> <div className="for-circle"><div className="circle-checked"></div></div> All Access  </li>
              <li><span className="span1">Can access all items.</span></li>
              <li> <div className="for-circle"><div className="circle-checked"></div></div> All Access </li>
              <li><span className="span2">Can access all items.</span></li>
            </ul>
          </div>
          <hr></hr>
          <div class="checking-list">
          <ul>
            <li><Checkbox
            onChange={handleChange}
            color="default"
            inputProps={{ "aria-label": "primary checkbox" }}
          /> View items in access</li>
          <li><Checkbox
            checked={checked}
            color="default"
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          /> Edit items in access</li>
          <li><Checkbox
            onChange={handleChange}
            color="default"
            inputProps={{ "aria-label": "primary checkbox" }}
          /> Delete items in access</li>
          <li><Checkbox
            onChange={handleChange}
            color="default"
            inputProps={{ "aria-label": "primary checkbox" }}
          /> Create items in access</li>
          </ul>

          </div>
          
          </div>
        </TableRow>
      )}
    </>
  );
};



// const rows = [
//   createData('Budget', 'All Access', "View | Create | Edit | Delete", "1 min ago"),
//   createData('Bidding ', 'No Access', "-", "1 min ago"),
//   createData('Vendor Portal', 'Restricted Access', "View | Create", "1 min ago"),
//   createData('Purchase Order/Work Order', 'Restricted Access', "View | Create", "1 min ago"),
//   createData('Organisational Profile', 'All Access', "View | Create | Edit | Delete", "1 min ago"),
//   createData('Permissions & Access Control', 'No Access', "-", "1 min ago"),
// ];


export default function ManagerTable() {
  const classes = useStyles();


  

  return (

    <div className="mid-section">
    <ul className="delete-edit1">
         <Link to="/" > <li> <BsArrowLeft className="plus1" size="1.5em" />
          
     </li></Link>
     <li className="management">Management Team</li>
          <li><FiEdit2 size="1.2em" /></li>
        </ul>
        <ul className="main-body-list">
         <li className="li-active">Access Control </li>
         <Divider orientation="vertical" flexItem />
         <li className="li-not-active"> Assigned Members</li>
       </ul>

       <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className="heading-table">
            <TableCell padding="checkbox" />
            <TableCell>Deparment/Role Name</TableCell>
            <TableCell align="center">Access Level</TableCell>
            <TableCell align="center">Summary</TableCell>
            <TableCell align="center">Last Updated</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
          {rows.map(row => (
            <ExpandableTableRow
              key={row.name}
              expandComponent={<TableCell colSpan="5">{row.detail}</TableCell>}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center" > <p style={ row.calories === "All Access"  ? { backgroundColor:"#80ffbf", color:"#27AE60",border: "2px solid green" ,padding:"1%", borderRadius:"50px"} : { backgroundColor:" #ff9999", color:"#FF0808",border: "2px solid red" ,padding:"1%", borderRadius:"50px"}}>{row.calories}</p></TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">button</TableCell>
            </ExpandableTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
      );
    }
       
    {/* <TableContainer component={Paper}>
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
            
            <TableRow  key={row.name}>
              <TableCell component="th" scope="row"  className="icon-wrapper">
              <AiOutlinePlusCircle onClick={handleClick} className="plus-icon" size="1.5em"/>{row.name}
              </TableCell>
              <TableCell  align="center"><p className="access-level" style={row.level==="No Access" ? { backgroundColor:"grey" }: null} style={ row.level === "All Access"  ? { backgroundColor:"#80ffbf", color:"#27AE60",border: "2px solid green"} : { backgroundColor:" #ff9999", color:"#FF0808",border: "2px solid red"}}>{row.level}</p></TableCell>
              <TableCell align="center">{row.number}</TableCell>
              <TableCell align="center">{row.updated}</TableCell>
              <TableCell align="center"><AiOutlineEye size="1.5em" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    
