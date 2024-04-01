import Axios from 'axios';

let baseURL=process.env.REACT_APP_BASE_URL;
if (baseURL===undefined) {
  console.log("Cannot get base URL from env vars.");
  baseURL="http://localhost:3001";

}

const apiInstance = Axios.create({
  baseURL: baseURL,
  headers: { Accept: 'application/json' }
});

apiInstance.defaults.headers.post['Content-Type'] = 'application/json';

export { apiInstance };

