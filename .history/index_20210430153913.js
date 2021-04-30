const { Builder, By, Key, util } = require('selenium-webdriver');

async function generateTest() {
    // Constroi 
    var driver = await new Builder().forBrowser('firefox').build();

    await driver.get('http://127.0.0.1:5500/calculadora.html');

    await driver.sleep('2000');
    await driver.findElement(By.id('one')).sendKeys('25');
    await driver.sleep('2000');
    await driver.findElement(By.id('two')).sendKeys('50');

    const expectedValue = 75;

    await driver.sleep('2000');
    await driver.findElement(By.id('soma')).click();

    const sum = parseInt(await driver.findElement(By.id('one')).getAttribute('value'))
        + parseInt(await driver.findElement(By.id('two')).getAttribute('value'));

    await driver.sleep('5000');
    if (75 === parseInt(await driver.findElement(By.id('result')).getAttribute('innerText'))) {
        console.log(`A calculadora funcionou! A soma é ${sum}`);
        await driver.get('https://cdn.universoracionalista.org/wp-content/uploads/2020/05/albert-einstein.jpg');
    } else {
        console.log(`O teste falhou!`);
    }

}

generateTest();