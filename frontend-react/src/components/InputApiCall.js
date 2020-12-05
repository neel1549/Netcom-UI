// React Imports
import React, { useState } from 'react';
import { Link } from 'react-scroll'

// Import bootstrap components & sytles
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import local ApiHelper class
import apihelper from './ApiHelper';

// Helpfull example:
// https://www.pluralsight.com/guides/how-to-use-react-with-react-bootstrap

// Main function for retrieving input, making API call, 
//    inserting API response data into database

function InputApiCall() {

    // Declare state (member) variables
    const [inputData, setInputData] = useState(null);
    const [dataArray, setDataArray] = useState([]);
    const [useIP, setUseIP] = useState(false);

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

            }).catch((error) => {
                // Log errors
                console.log(error)
            })

        } else {

            // Format data payload for GET Request
            const payload = JSON.stringify({ "asn" : dataArray });

            // TODO DELETE AFTER TESTING
            console.log(payload);

            // Call ASN API
            apihelper.getAsn(payload).then((response) => {

                // TODO insert Database
                console.log("ASN API Response : " + response.data)

            }).catch((error) => {
                // Log errors
                console.log(error)
            })
        }
    }

    // Method to clear state variables for reuse
    const clearStateVars = () => {
        // setInputData(null);
        // setDataArray([]);
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

            // No user data, log message but do nothing
            console.log('ASN & IP Inputs are NULL')

        } else { // User has inputed data

            // Call method to send GET Request to API Endpoint
            callApi();

            // Clear form and input data
            clearFormInput();
            clearStateVars();
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
    
        // // TODO: DELETE AFTER TESTING
        // console.log("User Input - ASN : " + input);
        // console.log({ inputData });
        // console.log({ dataArray });
        // console.log({ useIP });
    }

    // Event handler each time user types input into IP textbox on form
    const updateIp = (input) => {

        // Record user's input
        setInputData(input);

        // Format ASN into list
        setDataArray(input.split(','));

        // Set IP flag to false
        setUseIP(true);

        // // TODO: DELETE AFTER TESTING
        // console.log("User Input - IP : " + input);
        // console.log({ inputData });
        // console.log({ dataArray });
        // console.log({ useIP });
    }

    // Form styling
    const formStyle = {
        width: "40%"
    };

    // Return form HTML
    return (
        // <Form style={formStyle}>
        <Form>
            <Form.Group controlid="formAsn">
                <Form.Label style={{ color: "SteelBlue" }}><h2>ASN:</h2></Form.Label>
                <Form.Control placeholder="Enter ASN" onChange={(e) => { updateAsn(e.target.value) }} />
                <Form.Text className="text-muted">
                    <h5 style={{ color: "GoldenRod" }}>Format: 17504</h5>
                </Form.Text>
            </Form.Group>
            <Form.Group controlid="formIp">
                <Form.Label style={{ color: "SteelBlue" }}><h2>IP Address:</h2></Form.Label>
                <Form.Control placeholder="Enter IP Address" onChange={(e) => { updateIp(e.target.value) }} />
                <Form.Text className="text-muted">
                    <h5 style={{ color: "GoldenRod" }}>Format: 192.168.10.12</h5>
                </Form.Text>
            </Form.Group>
            <Link to="cardslink" spy={true} smooth={true}>
                <Button style={{ width: "100%" }} variant="dark" size="lg" onClick={handleSubmit}>
                    Retrieve ASN Details
                </Button>
            </Link>
        </Form>
    )
}

export default InputApiCall