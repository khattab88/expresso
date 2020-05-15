/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable one-var */
/* eslint-disable max-len */

export default class Utils {
    
    static handleError (err) { console.log(err); }

    static formatCurrency (val, currency = "EGP") { return `${val}.00 ${currency}`; }
    
    static getQueryString (name) {
        const urlParams = new URLSearchParams(window.location.search);
    
        return urlParams.get(name) || "1";
    }
    
    // eslint-disable-next-line no-return-assign
    static setQueryString (name, value) { document.location = `?${name}=${value}`; }
    
    static setTimer (duration) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(), duration);
        });
    
        return promise;
    }

    static saveToStorage (key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
    
        console.log("save to storage: ", data);
    }

    static getFromStorage (key) {
        let data = JSON.parse(sessionStorage.getItem(key));
    
        console.log("get from storage: ", data);
    
        if (data) { return data; }
    
        return null;
    }    
    
}
