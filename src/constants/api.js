const BackendApiPath = 'http://89e61027.ngrok.io';

const BackendApi = (path) => {
  return `${BackendApiPath}${path}`;
};

export default{
  BackendApi
};