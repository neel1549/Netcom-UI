// React Imports
import React from 'react';
import { Link } from 'react-scroll'
import '../index.css';

// Local Imports
import AsnCard from '../components/AsnCard';
import InputApiCall from '../components/InputApiCall';
import nasa_img from "../assets/nasa-Q1p7bh3SHj8-unsplash.jpg";

const HomeScreen = (props) => {
  return <div 
  style={{
    backgroundColor: 'seashell'
  }}> 
      <div
        style={{
          backgroundImage: `url(${nasa_img})`,
          backgroundSize: "cover",
          height: "100vh"
        }}
        ><div class='center'><InputApiCall /></div>
      </div>
      <div id="cardslink" class='center'
        style={{
          backgroundColor: 'seashell'
        }}>
        <AsnCard />
        <AsnCard />
      </div>
  </div>;
};

export default HomeScreen;