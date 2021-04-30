const {Builder, By, Key, util} = require('selenium-webdriver');

async function generateTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://127.0.0.1:5500/calculadora.html')
}