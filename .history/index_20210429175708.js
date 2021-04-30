const { Builder, By, Key, util } = require('selenium-webdriver');

async function generateTest() {

    describe('Protocolo Create Test', () => {

        before(async () => { 
            let driver = await new Builder().forBrowser('firefox').build();
            await driver.get('http://127.0.0.1:5500/calculadora.html');
        });
        after(async () => { //-----  Close driver sellenium
            //----- Close window
            driver.quit();
        });

        await driver.findElement(By.id('one')).sendKeys('25');
        await driver.findElement(By.id('two')).sendKeys('50');

        await(await driver.findElement(By.id('soma'))).click();

        driver.findElement(By.id('result')).getAttribute('innerText');
    }

generateTest();