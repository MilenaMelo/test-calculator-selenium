const { Builder, By, Key, util } = require('selenium-webdriver');

var result = 0;
function soma(event) {
    let one = document.querySelector('#one').value;
    let two = document.querySelector('#two').value;
    result = Number(one) + Number(two);

    document.querySelector('#result').innerHTML = result;
}

async function generateTest() {
    // Constroi 
    var driver = await new Builder().forBrowser('firefox').build();

    await driver.get('http://127.0.0.1:5500/calculadora.html');

    await driver.findElement(By.id('one')).sendKeys('25');
    await driver.findElement(By.id('two')).sendKeys('50');

    await driver.findElement(By.id('soma')).click();

    driver.findElement(By.id('result')).getAttribute('innerText');

    const sum = parseInt(await driver.findElement(By.id('one')).getAttribute('value'))
        + parseInt(await driver.findElement(By.id('two')).getAttribute('value'));

    if (sum === parseInt(await driver.findElement(By.id('result')).getAttribute('innerText'))) {
        await driver.sleep('5000');
        console.log(`A calculadora funcionou! A soma é ${sum}`);
        await driver.get('https://cdn.universoracionalista.org/wp-content/uploads/2020/05/albert-einstein.jpg');
    }

}

generateTest();