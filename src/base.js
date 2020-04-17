export const handleError = (err) => console.log(err);

export const formatCurrency = (val, currency = "EGP") => `${val}.00 ${currency}`;