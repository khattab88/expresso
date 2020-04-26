export const handleError = (err) => console.log(err);

export const formatCurrency = (val, currency = "EGP") => `${val}.00 ${currency}`;

export const getArea = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let area = urlParams.get('area') || "1";
    return area;
};