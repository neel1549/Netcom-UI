import axios from 'axios';

// Uses proxy URL: "https://powerful-stream-44018.herokuapp.com/",
// to handle Access-Control-Allow-Origin response header.

// Create axios instance

const instance = axios.create({
    baseURL: 'http://18.222.175.223:8000',
    headers: {
        'content-type': 'application/json',
        'content-type': 'text/plain',
        'Authorization': `Token 4a16dc20944dc06339cdac555fc756ad0db3dddc`
    }
});

// Create two dynamic api call methods
export default {

    // Bash ASN Call: 
    // curl --location --request GET 'http://18.217.242.152:8000/asn' 
    // --header 'Content-Type: application/json' --header 'Content-Type: text/plain' 
    // --data-raw '{"asn":["17054", "204519", "577"]}'

    getAsn: (payload) =>
    instance({
        'method' : 'POST',
        'url' : '/asn',
        'data' : payload
    }),

    // Bash IP Call:
    // curl --location --request GET 'http://18.217.242.152:8000/ip' 
    // --header 'Content-Type: application/json' --header 'Content-Type: text/plain' 
    // --data-raw '{"ip":["128.237.129.154"]}'
    
    getIp: (payload) =>
    instance({
        'method' : 'POST',
        'url' : '/ip',
        'data' : payload
    })
}