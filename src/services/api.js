
import urljoin from 'url-join';

// http://ec2-13-53-174-238.eu-north-1.compute.amazonaws.com:8080/
const apiBaseUrl = '192-168.101.83:8080/'; // Local on mac, not server


const apiGetOptions = {
  method: 'GET',
};

class BackendApi {
  static createWastebag() {
    try {
      return fetch(urljoin(apiBaseUrl, ''), apiGetOptions)
        .then(response => response.json());
    } catch (e) {
      console.log('Error', e);
      return null;
    }
  }
}

export default BackendApi;