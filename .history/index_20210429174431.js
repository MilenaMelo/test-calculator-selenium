const { Builder, By, Key, util } = require('selenium-webdriver');
require('selenium-webdriver/chrome')
require('chrome')

async function generateTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://127.0.0.1:5500/calculadora.html');
}

generateTest();