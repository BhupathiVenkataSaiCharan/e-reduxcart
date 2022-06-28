import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect, Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Modal from './Components/Modal';
import SignIn from './Components/SignIn';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ButtonBackground: {
    backgroundColor: "rgb(0, 210, 144)",
    borderRadius: "20px",
    padding: "8px 20px",
    fontWeight: "bold",
    fontSize: "12px",
    cursor: "pointer",
    color: "blue"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
  color: {
    backgroundColor: "white",
    color: "black",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  MobilePic: {
    width: "176px",
    boxSizing: "content-box",
    height: "240px",
    marginLeft: "32%",
    backgroundImage: `url('https://ik.imagekit.io/dunzo/web-assets/images/dunzo-app-be5ce8c58d3ad0b183757f34179879b4.png?tr=w-352,h-480,cm-pad_resize)`,
  },
}));

export default function Navbar() { 
//   const classes = useStyles();
//   const params=useParams();
//   const dispatch = useDispatch()
//   const temp=window.localStorage.getItem('totalCartItems')
//   const [totalCartItems,seti] =React.useState(temp); 
//   const { restaurantData} = useSelector((state) => state.app); 
//   const [restaurantLen,setLen]=useState(restaurantData.length)
  
//   useEffect(() => {
//     setLen(restaurantData.length)
//   }, [restaurantData],[restaurantLen])

  //console.log("NavbarrestaurantDatalen", restaurantData.length);

  return (
    <>
      <AppBar
        variant="outlined"
        style={{ background: 'white', border: "none", zIndex: "999", transition: "0.3s linear",maxHeight:"70px",minHeight:"70px" }}
        className="color"
        position="fixed"
      >
        <Toolbar>
        
          <IconButton
            style={{
              marginLeft: "10%",
              fontWeight: "1000",
              fontSize: "20px",
              outline:"none"
            }}
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"                      
          >
         <Link to="/" style={{outline:"none"}}><img width="122px" height="28px" alt="img" src='assets/images/logo.png'/></Link>
          </IconButton>
          <Modal />
          <Button
            style={{
              marginLeft: "15%",
              textTransform: "none",
              fontFamily: "Open+Sans",
              width:'auto',
              outline:"none",
              color:'black',
              fontWeight:"bolder"
              
            }}
            color="inherit"
          >
            Donego for Partners{" "}
          </Button>
          <Button
            style={{
              marginLeft: "3%",
              textTransform: "none",
              fontFamily: "Open+Sans",
              width:'auto',
              outline:"none",
              color:'black',
              fontWeight:"bolder"
              
            }}
            color="inherit"
          >
            Donego for Business{" "}
            <ExpandMoreIcon/>
          </Button>

         <Link style={{
              marginLeft: "5%",
              textTransform: "none",
              fontFamily: "Open+Sans",
              width:'auto',
              outline:"none",
              color:'black'
              
            }}> 
            <SearchIcon/>
            <p style={{position:"absolute",left:"74%",top:"35px",
                            color:"black",width:"20px",height:"18px",fontWeight:"bolder",
                            cursor:"pointer",padding:"10px",marginLeft:'2%',
                            fontSize:"12px",outline:"none"}}>Search</p>
            </Link>

          <IconButton color="black" aria-label="add to shopping cart" 
                    style={{outline:"none",marginLeft:'40px'}}>
          <Link to='/cart' >
            <ShoppingCartOutlinedIcon fontSize="medium" style={{
              marginLeft: "5%",
              textTransform: "none",
              fontFamily: "Open+Sans",
              width:'auto',
              outline:"none",
              color:'black'}} />{/*style={{position:"relative",color:"black",outline:"none", marginLeft:'4%'}} */}
                      {/* <p style={{position:"absolute",left:"5px",top:"30px",
                            color:"black",width:"20px",height:"18px",fontWeight:"bolder",
                            cursor:"pointer",padding:"10px",
                            fontSize:"12px",outline:"none"}}>Cart</p> */}
                            <p style={{position:"absolute",left:"5px",top:"30px",
                            color:"black",width:"20px",height:"18px",fontWeight:"bolder",
                            cursor:"pointer",padding:"10px",marginLeft:'2%',
                            fontSize:"12px",outline:"none"}}>Cart</p>
          </Link>
          </IconButton>
          <SignIn/>
        </Toolbar>
      </AppBar>      
        </>    
  );
}
