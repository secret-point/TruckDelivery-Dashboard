// const isProd = true;
const Config = {
    SERVICE_URL: "http://127.0.0.1:8000/api/",
    IS_PROD: false,
  };
  
  const ProdConfig = {
    SERVICE_URL: "https://dashboard.ezpapel.ai/api/",
    IS_PROD: true,
  };
  
  /* Decide config values based upon build type: Debug/Release */
  export default process.env.NODE_ENV && process.env.NODE_ENV === "development"
    ? Config
    : ProdConfig;
  