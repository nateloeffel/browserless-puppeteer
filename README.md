# Browserless with Puppeteer

### How to use
1. Install dependencies
```sh
npm install
```
2. Add WS Endpoint to .env
Add the string for the endpoint to the `.env.example` file then rename it to `.env`.
```sh
mv .env.example .env
```
3. Start program
```sh
node index.js
```


### Notes
* Currently using puppeteer, and not puppeteer core.
* Fully working on Cloud Run
* Built using linux/amd64
