// React Imports
import React, { useState } from "react";

// Component Imports
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Styled from "styled-components";

// Local File Imports
import cmu from "../assets/1200px-Carnegie_Mellon_University_seal.svg.png";
import cyberworld from "../assets/CyberWorld.mp4";
import netcom from "../assets/netcom-logo.png";
import netcomcmu from "../assets/NetcomCMU.png"

const ScreenWrapper = Styled.div``;
const JumboWrapper = Styled.div`
  top: 20%;
  /* z-index: 10; */
  background: lightgrey;
  border-radius: 35px;
  border: 1px solid black;
  height: 50vh;
  opacity: 0.7;
  position: absolute;
  left: 25%;
  width: 90vh;
`;
const LandingScreen = (props) => {
  return (
    <div
      // className="App"
      // style={{
      //   backgroundImage: `url(${nasa})`,
      //   backgroundSize: "cover",
      //   height: "100vh",
      // }}
    >
      <video className='videoTag' autoPlay loop muted>
        <source src={cyberworld} type='video/mp4' />
      </video>

      <JumboWrapper>
        <Jumbotron>
          <div style={{
            textAlign: "center"
          }}>
            <h1>ASN Malicious Activity Tracker</h1>
            <h3>
              Product from sponsorship with <br></br>Carnegie Mellon University Capstone Program
            </h3>
          </div>
          <br></br>
          <div
            style={{
              flexDirection: "column",
              left: "15%",
              position: "relative"
            }}
          >
            {/* <img
              style={{ opacity: 1, left: "25%", paddingRight: 10 }}
              src={netcom}
            />
            <img
              style={{ opacity: 1, paddingLeft: 20 }}
              width="180"
              height="200"
              src={cmu}
            /> */}
            <img
              style={{ opacity: 1, paddingRight: 10 }}
              width="400"
              height="200"
              src={netcomcmu}/>
          </div> 
          <br></br>
          <Button
            style={{ position: "relative", paddingTop: 10, left: "40%" }}
            variant="primary"
            href="/home"
            size="lg"
          >
            Learn More
          </Button>
        </Jumbotron>
      </JumboWrapper>
    </div>
  );
};
export default LandingScreen;