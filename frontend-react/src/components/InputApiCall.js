// React Imports
import React, { useState } from 'react';
import { Link } from 'react-scroll'

// Import bootstrap components & sytles
import { Form, Button,Jumbotron,Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import local ApiHelper class
import apihelper from './ApiHelper';
import AsnCard from './AsnCard';

const InputApiCall=({setResponse,setIp})=> {

    // Declare state (member) variables
    const [inputData, setInputData] = useState(null);
    const [dataArray, setDataArray] = useState([]);
    const [useIP, setUseIP] = useState(false);
    const[alert,setAlert]=useState(false);

   

    // Method uses helper API class to send Get Requests to API hosted by AWS
    const callApi = () => {

        // Check wheter to call ASN or IP API Endpoint
        if (useIP) {

            // Format data payload for GET Request
            const payload = JSON.stringify({ "ip" : dataArray });
        

            // Call IP API
            apihelper.getIp(payload).then((response) => {

                // TODO insert Database
                console.log("IP API Response : " + response.data)
                setResponse(response.data[inputData]["asns"]);

            }).catch((error) => {
                // Log errors
                console.log(error)
            })
            setIp(true);

        } else {

            // Format data payload for POST Request
            const payload = JSON.stringify({ "asn" : dataArray });
            console.log(dataArray)

            // TODO DELETE AFTER TESTING
            console.log(payload);

            // Call ASN API
            apihelper.getAsn(payload).then((response) => {
                

                // TODO insert Database
                console.log("ASN API Response : " + response)
                if (!Object.values(response.data.asns[0]).includes("no known score")){

                    setResponse(response.data.asns);
                    setIp(false);
                    setAlert(false)
                }
                else{
                    setAlert(true);
                }
              

            }).catch((error) => {
                // Log errors
                console.log(error)
            })
        }
    }

    // Clears form input with each submit
    const clearFormInput = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }

    // Form's Button event handler
    const handleSubmit = () => {

        // TODO: DELETE AFTER TESTING
        console.log("In Submit")
        console.log({ inputData });
        console.log({ dataArray });
        console.log({ useIP });

        // Check user input
        if (inputData == null){
            setAlert(true)

            // No user data, log message but do nothing
            console.log('ASN & IP Inputs are NULL')
            setAlert(true)

        } else { // User has inputed data

            // Call method to send GET Request to API Endpoint
            callApi();

            // Clear form and input data
            clearFormInput();
           
        }
    }

    // Event handler each time user types input into ASN textbox on form
    const updateAsn = (input) => {

        // Record user's input
        setInputData(input);

        // Format ASN into list
        setDataArray(input.split(','));

        // Set IP flag to false
        setUseIP(false);
    
    }

    // Event handler each time user types input into IP textbox on form
    const updateIp = (input) => {

        // Record user's input
        setInputData(input);

        // Format ASN into list
        setDataArray(input.split(','));

        // Set IP flag to false
        setUseIP(true);


    }

    // Form styling
    const formStyle = {
        width: "40%"
    };

    
    return (
        <Jumbotron style= {{boxShadow:"10px 10px 10px",borderRadius:10,width:"110%",height:"90%"}} >
            
            <br/>
        <Form  >
        
            <Form.Group controlid="formAsn">
                <Form.Label style={{ color: "SteelBlue",opacity:1 }}><h2>ASN:</h2></Form.Label>
                <Form.Control placeholder="Enter ASN"    
                    onChange={(e) => { updateAsn(e.target.value) }} />
                <Form.Text className="text-muted">
                    <h5 style={{ color: "GoldenRod" }}>Format: 17054</h5>
                </Form.Text>
            </Form.Group>
            <Form.Label style={{ color: "SteelBlue",opacity:1,marginLeft:270}}><h2>OR</h2></Form.Label>
            <Form.Group controlid="formIp">
                <Form.Label style={{ color: "SteelBlue" }}><h2>IP Address:</h2></Form.Label>
                <Form.Control  placeholder="Enter IP Address"  onChange={(e) => { updateIp(e.target.value) }} />
                <Form.Text className="text-muted">
                    <h5 style={{ color: "GoldenRod" }}>Format: 128.237.129.154</h5>
                </Form.Text>
            </Form.Group>
            <Link to="cardslink" spy={true} smooth={true}>
                <Button style={{ width: "100%" }} variant="dark" size="lg" onClick={handleSubmit}>
                    Retrieve Details
                </Button>
            </Link>
        </Form>
        <Alert show={alert} variant="danger" onClose={() => setAlert(false)} dismissible>
        <Alert.Heading>You got an error!</Alert.Heading>
        <p>
          You entered an ill formatted IP/ASN or it was missing. Please try again!
        </p>
      </Alert>

        </Jumbotron>
        
        
        
    )
}

export default InputApiCall