import React, {Component } from "react";
import {  Link } from 'react-router-dom'
import { Box, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { fade, makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SignIn from '../../Components/SignIn';
import Location from "../../Location";


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop:"5%"   
  },
  ButtonBackground: {
    backgroundColor: "rgb(0, 210, 144)",
    borderRadius: "20px",
    padding: "8px 20px",
    fontWeight: "bold",
    fontSize: "12px",
    cursor: "pointer",
    color: "white",
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
}));

class Pd extends Component{
//   const classes = useStyles();   
//   const {restaurantData, totalCartItems} = useSelector((state) => state.app); 
//   const [restaurantLen,setLen]=useState(restaurantData.length)  
//   useEffect(() => {
//     setLen(restaurantData.length)
//   }, [restaurantData],[restaurantLen]) 

  render(){
    return (
        <>  <AppBar
        variant="outlined"
        style={{ background: 'white',color:'green', border: "none", zIndex: "999", transition: "0.3s linear",maxHeight:"70px",minHeight:"70px" }}
        className="color"
        position="fixed"
      >
        <Toolbar>    
          <IconButton
            style={{
              marginLeft: "10%",
              fontWeight: "1000",
              fontSize: "27px",
              outline:"none"
            }}
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"                      
          >
         <Link to="/" ><img width="122px" height="28px" alt="" src='/assets/images/logo.png'/></Link>
          </IconButton>
          {/* <Modal />       */}
          <IconButton color="black" aria-label="add to shopping cart" style={{marginLeft:"46%", outline:"none"}}>
              <Link to='/Cart'  ><ShoppingCartOutlinedIcon fontSize="medium" 
                      style={{position:"relative",color:"black",outline:"none", marginLeft:'4%'}}/>
                      <p style={{position:"absolute",left:"5px",top:"35px",
                            color:"black",width:"20px",height:"18px",fontWeight:"bolder",
                            cursor:"pointer",padding:"5px",
                            fontSize:"12px",outline:"none"}}>Cart</p>
                    </Link>
              </IconButton>
         <SignIn style={{position:'absolute', paddingLeft:'50px'}} />         
        </Toolbar>
      </AppBar>
          <div>
            <div className="two-sections">
                <section style={{display:'flex',flexDirection:'row',marginTop:"90px"}}>

                {/*left section */}
                    <section style={{
                                        boxSizing:'border-box',
                                        border:'none',
                                        float:'left',
                                        width:'65%',
                                        margin:'5px',
                                        background:'rgba(0,0,0,0.1)',
                                        paddingLeft:'100px',
                                        marginLeft:'100px',
                                    }}
                            >
                        <h1
                            style={{
                                        fontSize: "20px",
                                        color: "black",
                                        letterSpacing: "normal",
                                        fontWeight: "bold",
                                        fontFamily: "sans-serif",
                                        margin:'auto',
                                        padding:'10px',
                                        
                                    }}
                            >
                        Send Packages
                        </h1>
                        <p style={{
                                    fontSize: "15px",
                                    fontWeight: 300,
                                    opacity: "0.6",
                                    textAlign: "left",
                                    fontFamily: "sans-serif",
                                    }}>
                                Your on demand local couriers
                        </p>
                        <form>
                            <label style={{fontSize:'9px',color:'black'}}>PICKUP LOCATION*</label>
                                <input type="text" value="location"/>
                            <label style={{fontSize:'9px',color:'black'}}>DROP LOCATION*</label>
                                <input type="text" value="location"/>
                            <p style={{fontSize:'10px',paddingTop:'40px',float:'left'}}>
                            By confirming I accept this order doesn’t 
                            contain illegal/resticted items, 
                            if illegal/restricted items are found by 
                            Dunzo Partner, they may report it to the 
                            law enforcement authorities.Terms and Conditions</p>
                            <button style={{position:'relative',width:'200px',fontSize:'15px',padding:'10px',borderRadius:'10px',margin:'20px',textAlign:'center'}}>Confirm Order</button>
                        </form>
                    </section>
                    {/*right section */}
                    <section style={{
                                        boxSizing:'border-box',
                                        border:'none',
                                        width:'35%',
                                        margin:'5px',
                                        background:'rgba(0,0,0,0.1)',
                                        marginRight:'100px'
                                        }}>
                        <h1 style={{fontSize:'15px',padding:'10px',color:'green'}}>Some do's and Dont's</h1>
                        <ul style={{padding:'3px',fontSize:'15px'}}>
                            <li><span style={{fontWeight:'bold'}}>No Purchases</span> - Delivery partner would not be able to make any purchase</li>
                            <li><span style={{fontWeight:'bold'}}>Package Weight</span> - We cannot deliver items that can’t be easily carried on bike</li>
                            <li><span style={{fontWeight:'bold'}}>No Autos/Cabs</span> - We will not be able to get something transported via these</li>
                            <li><span style={{fontWeight:'bold'}}>Restricted/Illegal Item</span> - Please don’t hand over any restricted item</li>
                        </ul>
                        <Grid item xs={12} sm={7}>
                          <img src="/assets/images/footerimg2.png" className="card-img-top" alt="..." />
                        </Grid>
                    </section>
                </section>
            </div>
          </div>
        </>
      );
    }    
  }
  
  export default Pd;