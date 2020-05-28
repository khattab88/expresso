/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable one-var */
/* eslint-disable max-len */
export const handleError = (err) => console.log(err);

export const formatCurrency = (val, currency = "EGP") => `${val}.00 ${currency}`;

// exports const formatDate = (date) => date.toString();

export const getQueryString = (name) => {
    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get(name) || "1";
};

// eslint-disable-next-line no-return-assign
export const setQueryString = (name, value) => document.location = `?${name}=${value}`;

export const setTimer = (duration) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), duration);
    });

    return promise;
};

// module.exports = formatCurrency;
