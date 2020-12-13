// React Imports
import React,{useState} from 'react';
import { Link } from 'react-scroll'
import '../index.css';

// Local Imports
import AsnCard from '../components/AsnCard';
import InputApiCall from '../components/InputApiCall';
import nasa_img from "../assets/nasa-Q1p7bh3SHj8-unsplash.jpg";
import SideNavBar from "../components/SideNavBar"

const HomeScreen = (props) => {
  const [response,setResponse]=useState([]);

  //Store whether IP query or not
  const [ip,setIp]=useState([]);
  console.log(response);
  console.log(Object.keys)
  

  return( <div 
  style={{
    backgroundColor: 'seashell'
  }}> 
  <SideNavBar rendered={!response.length==0 && !Object.values(response[0]).includes("no known score")}/>
      <div
        style={{
          backgroundImage: `url(${nasa_img})`,
          backgroundSize: "cover",
          height: "100vh"
        }}
        ><div class='center'><InputApiCall setIp={setIp} setResponse={setResponse} /></div>
      </div>
      <div id="cardslink">
      {response.length>0 && !Object.values(response[0]).includes("no known score") ? (
        <div class='center'
        style={{
          backgroundColor: 'seashell'
        }}>
        <AsnCard ip={ip} data={response[0]}/>
      </div>

      ):null}
      </div>
      
      
  </div>);
};

export default HomeScreen;