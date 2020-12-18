# Netcom-UI
Netcom UI for ASN and IP Metrics display

To run: 

```
cd frontend-react
npm install
./run.sh
```

Navigate to localhost:5000 to access the application

Once you load the backend: Change ApiHelper.js to the Public IP of the setup backend

```
const instance = axios.create({
    baseURL: 'http://18.222.175.223:8000',

```
