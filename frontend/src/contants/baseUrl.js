const ENV_TYPE = process.env.REACT_APP_ENV || "development";

const baseUrl =
  ENV_TYPE === "development"
    ? process.env.LOCAL_BACKEND_URL || "http://localhost:5000"
    : process.env.PRODUCTION_BACKEND_URL;

export default baseUrl;
