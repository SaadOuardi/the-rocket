const ENV = process.env.REACT_APP_ENV || "development";

export const API_URL = ENV === "production"
    ? process.env.REACT_APP_BACKEND_URL
    : process.env.REACT_APP_BACKEND_URL_DEV;

export const FRONTEND_URL = ENV === "production"
    ? process.env.REACT_APP_FRONTEND_URL
    : process.env.REACT_APP_FRONTEND_URL_DEV;

// Debugging Output
console.log(`Running in ${ENV} mode`);
console.log(`Frontend URL: ${FRONTEND_URL}`);
console.log(`Backend API URL: ${API_URL}`);
