import React,{Component} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./Menu.css";
import Cards from "./Cards/Card1";


class Menu extends Component{
  render(){
  return (
    <div className="menu">
       <div className="nav">
            <div className="bizwy">BIZWY</div>
            <div className="location"><LocationOnIcon/></div> 
            <div className="search"><SearchIcon/></div>
            <div className="cart"><ShoppingCartIcon/></div>
       </div>
       {/* <div className="card"><Cards/></div> */}
    </div>
  );
}
}

export default Menu;