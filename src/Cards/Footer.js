import React,{ Component } from "react";
import { Box } from "@material-ui/core";

class Footer extends Component{
    render(){
  return (
    <>
      <Box
        style={{
          backgroundColor: "rgb(23, 30, 48)",
          width: "100%",
          margin: "auto",
          height: "auto",
        }}
      >
        <Box
          style={{
            border: "none",           
            height: "140px",           
            marginTop: "0px",
            paddingTop: "40px",
            marginDown: "300px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontFamily: "sans-serif",
              color: "white",
              fontWeight: "600",
              textAlign: "left",
            }}
          >
            You can’t stop time, but you can save it!
          </p>
          <p
            style={{
              color: "rgb(183, 186, 195)",
              fontFamily: "sans-serif",
              textAlign: "left",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "normal",
              lineHeight: "18px",
            }}
          >
            Living in the city, there is never enough time to shop for
            groceries, pick-up supplies, grab food and wade through traffic on
            the way back home. How about we take care of all of the above for
            you? What if we can give you all that time back? Send packages
            across the city and get everything from food, groceries, medicines
            and pet supplies delivered right to your doorstep. From any store to
            your door, just make a list and we’ll make it disappear. Just Dunzo
            It!
          </p>
          <br />
          <br />
          <hr />
        </Box>
        <Box
          style={{
            border: "none",        
            marginTop: "100px",          
            height: "400px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Box
              style={{
                border: "none",
                height: "80px",
                width: "80px",
              }}
            >
              <img
                style={{ height: "70px", width: "70px", cursor: "pointer" }}
                src="/assets/images/footerimg1.png"
                alt="logo"
              />
            </Box>
            <Box
              style={{
                border: "none",
                marginLeft:"60px",
                width: "210px",
                height: "auto",               
              }}
            >
              <p
                style={{                  
                  textAlign: "left",
                  fontSize: "12px",
                  color: "rgb(102, 115, 242)",
                  fontWeight: "700",
                  letterSpacing: "0.2px",
                  fontFamily: "sans-serif",
                }}
              >
                DUNGO
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                About
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Jobs
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Contact
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Term and Conditions
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Privacy and Policy
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Dungo for partner
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Dungo for business
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Grow with Google
              </p>
            </Box>
            <Box
              style={{
                border: "none",
                width: "240px",
                height: "auto",
                marginLeft:"60px",
              }}
            >
              <p
                style={{                 
                  textAlign: "left",
                  fontSize: "13px",
                  color: "rgb(102, 115, 242)",
                  fontWeight: "700",
                  letterSpacing: "0.2px",
                  fontFamily: "sans-serif",
                }}
              >
                SERVICABLE CITIES
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Bangalore
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Pune
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Gurgaon
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Hyderabad
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                New Delhi
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Chennai
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Jaipur
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Mumbai
              </p>
            </Box>
            <Box
              style={{
                border: "none",
                width: "210px",
                height: "auto",
                marginLeft:"60px",
              }}
            >
              <p
                style={{                  
                  textAlign: "left",
                  fontSize: "13px",
                  color: "rgb(102, 115, 242)",
                  fontWeight: "700",
                  letterSpacing: "0.2px",
                  fontFamily: "sans-serif",
                }}
              >
                GET IN TOUCH
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Email
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Twitter
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Facebook
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                instagram
              </p>
              <p
                style={{
                  color: "white",
                  textAlign: "left",
                  style: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                Linkdin
              </p>
            </Box>
            <Box
              style={{
                border: "none",
                width: "274px",
                height: "200px",
                marginLeft:"40px",                
              }}
            >
              <img
                style={{ height: "140px", width: "260px" }}
                src="/assets/images/footerimg2.png"
                alt="logo"
              />
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
}

}

export default Footer;