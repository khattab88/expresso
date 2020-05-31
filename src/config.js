// config.js

const config = {
    apiUrl: "https://expresso-app-api.herokuapp.com/api/"
};

const formatCurrency = (val, currency = "EGP") => `${val}.00 ${currency}`;

const sum = (x, y) => x + y;

// module.exports = { formatCurrency, sum };

export { formatCurrency, sum, config };

