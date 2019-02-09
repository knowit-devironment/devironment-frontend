
import urljoin from 'url-join';

// http://ec2-13-53-174-238.eu-north-1.compute.amazonaws.com:8080/
const apiBaseUrl = 'http://192.168.101.83:8080'; // Local on mac, not server


const apiGetOptions = {
  method: 'GET',
};

const apiPostOptions = payload => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  },
  body: JSON.stringify({
    ...payload,
  }),
});

class BackendApi {

  static createWasteBag(request) {
    console.log("Create waste bag API:" + request);
    try {
      console.log(urljoin(apiBaseUrl, 'waste-bags'));
      return Promise
        .resolve(
          fetch(urljoin(apiBaseUrl, 'waste-bags'), apiPostOptions(request))
            .then(response => {
              if (response.status === 200) {
                console.log("SUCCESS - Waste bag registered");
                return response.json()
              }
              else console.log("Error: Waste bag not registered")
            }))
        .then(wasteBagResponse => console.log("wasteBagResponse", wasteBagResponse));
    } catch (e) {
      console.log('Error', e);
      return null;
    }
  }
}

export default BackendApi;