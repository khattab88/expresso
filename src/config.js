// config.js

const formatCurrency = (val, currency = "EGP") => `${val}.00 ${currency}`;

const sum = (x, y) => x + y;

// module.exports = { formatCurrency, sum };

export { formatCurrency, sum };

