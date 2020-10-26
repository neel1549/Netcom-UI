import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import nasa from "../assets/nasa-Q1p7bh3SHj8-unsplash.jpg";
import netcom from "../assets/netcom-logo.png";
import cmu from "../assets/1200px-Carnegie_Mellon_University_seal.svg.png";
import Card from "react-bootstrap/Card";

const ScreenWrapper = styled.div``;
const JumboWrapper = styled.div`
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
      className="App"
      style={{
        backgroundImage: `url(${nasa})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <JumboWrapper>
        <Jumbotron>
          <h1>ASN Malicious Activity Tracker</h1>
          <h3>
            Product of sponsorship with Carnegie Mellon University Capstone
            Program
          </h3>

          <div
            style={{
              flexDirection: "column",
              left: "20%",
              position: "relative",
            }}
          >
            <img
              style={{ opacity: 1, left: "25%", paddingRight: 10 }}
              src={netcom}
            />
            <img
              style={{ opacity: 1, paddingLeft: 20 }}
              width="180"
              height="200"
              src={cmu}
            />
          </div>

          <Button
            style={{ position: "relative", paddingTop: 10, left: "40%" }}
            variant="primary"
            href="/home"
          >
            Learn more
          </Button>
        </Jumbotron>
      </JumboWrapper>
    </div>
  );
};
export default LandingScreen;
