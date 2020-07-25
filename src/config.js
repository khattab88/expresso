// config.js

const config = {
    env: "development",
    development: {
        apiUrl: "http://localhost:3000/api/v1"
    },
    staging: {
        apiUrl: "https://expresso-app-api.herokuapp.com/api/v1"
    }
};

export default config;
