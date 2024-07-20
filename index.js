const puppeteer = require('puppeteer-core')
const dotenv = require('dotenv').config()
const express = require('express')
const browserWSEndpoint = process.env.BROWSER_WS_ENDPOINT;
const app = express();

const getBrowser = async () => puppeteer.connect({ browserWSEndpoint })

app.get("/image", async (req, res) => {
  let browser = null;

  await getBrowser()
    .then(async (browser) => {
      const page = await browser.newPage();
      await page.goto("http://www.example.com/");
      const screenshot = await page.screenshot();
      res.end(screenshot, "binary");
    })
    .catch((error) => {
      if (!res.headersSent) {
        res.status(400).send(error.message);
      }
    })
    .finally(() => browser && browser.close());
});

app.listen(8080, () => console.log("Listening on PORT: 8080"));
