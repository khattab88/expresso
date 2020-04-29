export const handleError = (err) => console.log(err);

export const formatCurrency = (val, currency = "EGP") => `${val}.00 ${currency}`;

export const getQueryString = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name) || "1";  
};

export const setQueryString = (name, value) => document.location = `?${name}=${value}`;