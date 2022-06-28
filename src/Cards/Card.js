import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Navbar.css";
import {Link} from "react-router-dom";
import {Grid} from "@material-ui/core";
import {Box} from "@material-ui/core";
import Footer from "./Footer";


class Card1 extends Component{
  render(){
      return(
          <>
              <div style={{ background: " rgb(247, 253, 250)" }}>
      <div style={{ width: "70%", marginLeft:'12%' }}>
        <Grid
          container
          direction="column"
          style={{
            paddingTop: "70px",
            fontFamily: "sans-serif",
            width:'112%',              
          }}
        >
          <Grid
            item
            style={{
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "40px",
              fontFamily: "Open+Sans",
              textAlign: "left",
            }}
          >
            {" "}
            Instant delivery at your doorstep
          </Grid>
          <Grid
            item
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={3}>
            <Link to="/ge">
                    <img src="/assets/images/landimg1.png" className="card-img-top" alt="..." />
                    </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Link to="/pd">
                    <img src="/assets/images/landimg2.png" className="card-img-top" alt="..." />
                    </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Link to="/fo">
                    <img src="/assets/images/landimg3.png" className="card-img-top" alt="..."  />
                    </Link> 
            </Grid>
            <Grid item xs={12} sm={3}>
            <Link to="/fv">
                  <img src="/assets/images/landimg4.png" className="card-img-top" alt="..."  />
                  </Link>
            </Grid>
          </Grid>
        </Grid>
        </div>
        </div>
        <div>
        <div style={{ width: "70%", marginLeft:'12%' }}>

        <Grid container style={{ marginTop: "40px",paddingBottom:"20px",width:'70%' }}>
            <Grid
              item
              container
              spacing={7}
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={12} sm={2}>
              <Link to="/meat">
                      <img src="/assets/images/landimg5.png" className="card-img-top" alt="..."/>
                      </Link>
                      <p style={{width:'200px'}}>Meat</p>
              </Grid>
              <Grid item xs={12} sm={2}>
              <Link to="/pet">
                      <img src="/assets/images/landimg6.png" className="card-img-top" alt="..."  />
                      </Link> 
                      <p style={{width:'200px'}}>Pet food</p>
              </Grid>
              <Grid item xs={12} sm={2}>
              <Link to="/pan">
                    <img src="/assets/images/landimg7.png" className="card-img-top" alt="..."  />
                    </Link>
                    <p style={{width:'200px'}}>Pan items</p>
                </Grid>
              <Grid item xs={12} sm={2}>
              <Link to="/gifts">
                    <img src="/assets/images/landimg8.png" className="card-img-top" alt="..."  />
                    </Link>
                    <p style={{width:'200px'}}>Gift items</p>
                </Grid>
              <Grid item xs={12} sm={2}>
              <Link to="/medicines">
                    <img src="/assets/images/landimg9.png" className="card-img-top" alt="..."  />
                    </Link>
                    <p style={{width:'200px'}}>Medicines</p>
                </Grid>
              <Grid item xs={12} sm={2}>
              <Link to="/cleaners">
                    <img src="/assets/images/landimg10.png" className="card-img-top" alt="..."  />
                    </Link>
                    <p style={{width:'200px'}}>Cleaning utensils</p>
                </Grid>
            </Grid>            
          </Grid>
    </div>
    <div style={{ width: "70%", marginLeft:'12%' }}>

    <Grid
          container
          direction="column"
          style={{
            paddingTop: "60px",
            fontFamily: "sans-serif",
            width:'112%',              
          }}
        >
          <Grid
            item
            style={{
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "40px",
              fontFamily: "Open+Sans",
              textAlign: "left",
            }}
          >
            {" "}
            Top picks for you
          </Grid>
    <Grid
            item
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={3}>
            {/* <Link to="/ge"></Link> */}
            <img src="/assets/images/landimg11.jpg" className="card-img-top" alt="..." />
            </Grid>
            <Grid item xs={12} sm={3}>
            {/* <Link to="/pd"></Link> */}
            <img src="/assets/images/landimg12.jpg" className="card-img-top" alt="..." />
            </Grid>
            <Grid item xs={12} sm={3}>
            {/* <Link to="/fo"></Link> */}
            <img src="/assets/images/landimg13.jpg" className="card-img-top" alt="..."  /> 
            </Grid>
            <Grid item xs={12} sm={3}>
            {/* <Link to="/fv"></Link> */}
                  <img src="/assets/images/landimg14.jpg" className="card-img-top" alt="..."  />
            </Grid>
          </Grid>
          </Grid>
          </div>
          <Box
        style={{
          width: "100%",
          backgroundImage:
            "linear-gradient(-180deg, rgb(255, 255, 255), rgb(255, 255, 255) 30%, rgb(240, 242, 247) 15%, rgb(240, 242, 247) 85%)",
          height: "auto",
          display: "flex",
          boxSizing: "border-box",
          marginTop: "60px",
          paddingBottom:"14px"
        }}
      >
        <Grid>
          <img
            style={{ height: "280px" }}
            src="/assets/images/landmobile.png"
            alt="mobile"
          />
        </Grid>

        <div
          style={{
            marginTop: "130px",           
            fontFamily: "Open+Sans",
            fontSize: "20px",
            color: "#2D3444",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "150px",
          }}
        >
          <div>All this from the convenience of your phone.</div>
          <div>Download the Dunzo mobile app.</div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "5px",
              marginTop: 0,
            }}
          >
           <Link>
           <img
              src="/assets/images/landmobile1.svg"
              alt="mobile"
            />
           </Link>
           <Link>
           <img
              src="/assets/images/landmobile2.svg"
              alt="mobile"
            />
           </Link>
          </div>          
        </div>
      </Box>
      <div style={{ backgroundColor: "rgb(23, 30, 48)" }}>
        <div style={{ width: "75%", margin: "auto" }}>
          <Footer/>
        </div>
      </div>
    </div>
   
          </>
      );
  }
}
export default Card1;