const ENV = process.env.REACT_APP_ENV || "development";

export const API_URL = ENV === "production"
    ? process.env.REACT_APP_BACKEND_URL_PROD
    : process.env.REACT_APP_BACKEND_URL;

export const FRONTEND_URL = ENV === "production"
    ? process.env.REACT_APP_FRONTEND_URL_PROD
    : process.env.REACT_APP_FRONTEND_URL;

// Debugging Output
console.log(`Running in ${ENV} mode`);
console.log(`Frontend URL: ${process.env.REACT_APP_FRONTEND_URL}`);
console.log(`Backend API URL: ${process.env.REACT_APP_BACKEND_URL}`);
