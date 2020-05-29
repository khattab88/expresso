/* eslint-disable no-undef */
// const jest = require("jest");
const puppeteer = require("puppeteer");

// jest.setTimeout(30000);

test("should redirect to restaurant menu page when click find restaurants button in home page", async () => {

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ["--window-size=1920,1080"]
    });

    const page = await browser.newPage();

    await page.goto("http://localhost:8080/home");

    await page.click(".search__submit");

    console.log(page.url());

    expect(page.url()).toBe("http://localhost:8080/restaurant-menu/index.html");

    await browser.close();
}, 30000);
