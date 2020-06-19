// config.js

const config = {
    env: "dev",
    dev: {
        apiUrl: "http://localhost:3000/api"
    },
    staging: {
        apiUrl: "https://expresso-app-api.herokuapp.com/api"
    }
};

export default config;
