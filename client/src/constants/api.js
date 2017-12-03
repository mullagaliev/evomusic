const BackendApiPath = 'http://3b58727d.ngrok.io';

const BackendApi = (path) => {
  return `${BackendApiPath}${path}`;
};

export default{
  BackendApi
};