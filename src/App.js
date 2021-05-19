import './App.css';
import Navbar from "./components/Navbar"
import SideNav from "./components/SideNav"
import Divider from '@material-ui/core/Divider';
import { BsWifi } from 'react-icons/bs';
import { CgMenuBoxed } from 'react-icons/cg';
import { BsArrowRepeat } from 'react-icons/bs';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainMid from "./components/main-mid";
import Manager from "./components/Manager";




const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function App(props) {
  const { classes, children, className, ...other } = props;
  return (
    
  <div >
  <Router>
    <Navbar />
    <div className="main-body">
     <SideNav />
      <div className="second-heading">
       <ul className="main-body-list">
         <li className="li-active"><BsWifi className="wifi" size="1.25em"/>Permissions </li>
         <Divider orientation="vertical" flexItem />
         <li className="li-not-active"><CgMenuBoxed className="box" size="1.25em"/> Approval Matrix</li>
         <li className="li-not-active right " ><BsArrowRepeat size="1.25em" /></li>
         <li className="li-not-active right-1 ">Last synced 15 mins ago</li>
       </ul>
       <Divider />

        {/* MIDDLE SECTION */}
        <Switch>
        <Route path="/" exact component={MainMid} />
        <Route path="/Manager" component={Manager} />  
        </Switch>
      
      </div>
  </div>

 </Router>
  </div>
  
  );
}

export default App;
