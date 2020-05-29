import { formatCurrency, sum } from "../src/config";
// const { formatCurrency, sum } = require("../src/config");

test("should return formatted currency value", () => {
    const formatted = formatCurrency(10);
    
    expect(formatted).toBe("10.00 EGP");
});

test("should return sum of two numbers", () => {
    const res = sum(3, 4);

    expect(res).toBe(7);
});
