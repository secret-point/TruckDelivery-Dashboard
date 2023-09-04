// const isProd = true;
const Config = {
  SERVICE_URL: 'http://127.0.0.1:8000/api/',
  IS_PROD: false,
  MIX_GOOGLE_MAP_API_KEY: 'AIzaSyBSWgph_L-xkYyn9R--oUNQ7ze2cIBrXds',
  NODE_SERVER_URL: 'http://127.0.0.1:3000/api/',
};

const ProdConfig = {
  SERVICE_URL: 'https://dashboard.ezpapel.ai/api/',
  MIX_GOOGLE_MAP_API_KEY: 'AIzaSyBSWgph_L-xkYyn9R--oUNQ7ze2cIBrXds',
  IS_PROD: true,
  NODE_SERVER_URL: 'https://api23.ezpapel.com/api/',
};

/* Decide config values based upon build type: Debug/Release */
export default process.env.NODE_ENV && process.env.NODE_ENV === 'development'
  ? Config
  : ProdConfig;
