const { Builder, By, Key, util } = require('selenium-webdriver');

async function generateTest() {
    // Constroi 
    var driver = await new Builder().forBrowser('firefox').build();

    await driver.get('https://www.facebook.com/?stype=lo&jlou=Afd47ZM3-3HWS_gnO-JluNUvj9XpD1ZsVKtQ9eGFDxnoUZYZxcn_UUZ2mWAXS-ZoOTLmcI0jLKMKqmWQ5Nnz8fve02qelw9hTUFIbVXkoDw7kA&smuh=64219&lh=Ac-U3BEaTPiD7pF0_ZU');

    await driver.sleep('5000');
    await driver.findElement(By.css('#email')).sendKeys('aquiiii');
    await driver.sleep('5000');
    await driver.findElement(By.css('#pass')).sendKeys('11111');

    await driver.sleep('5000');
    await driver.findElement(By.id('soma')).click();

    driver.findElement(By.id('result')).getAttribute('innerText');

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