/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable dot-location */
/* eslint-disable prefer-template */
/* eslint-disable no-undef */
const makePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            
            if (rand > 0.5) {
                resolve(rand);
            } else {
                reject(rand);
            }
        }, 1000);
    });
};

/*
makePromise()
    .then((data) => console.log("SUCCESS :)"))
    .catch((data) => console.log("FAIL :("));
*/

fetch("https://expresso-app-api.herokuapp.com/api/cities")
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err));
