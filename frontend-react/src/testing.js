import http from 'k6/http';

let asns=[]
for (var i=0;i<10000;i++){
    asns.push(17054)
}
export default function () {

  var url = 'http://18.222.175.223:8000';
  var payload = JSON.stringify({ "asn" : asns });

  var params = {
    headers: {
      'content-type': 'application/json',
        'content-type': 'text/plain',
        'Authorization': `Token 4a16dc20944dc06339cdac555fc756ad0db3dddc`
    },
  };
  

  http.post(url, payload, params);
}
