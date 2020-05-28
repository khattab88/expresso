// import { formatCurrency } from "../src/base";
const formatCurrency = require("../src/base");

test("should return formatted currency value", () => {
    const formatted = formatCurrency(10);
    
    expect(formatted).toBe("10.00 EGP");
});
