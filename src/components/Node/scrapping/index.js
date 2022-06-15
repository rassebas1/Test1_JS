const puppeteer = require("puppeteer");

(async () => {
  //Code...
  console.log("intialized");
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.wikipedia.org/");

  browser.close();
  console.log("end");
})();
