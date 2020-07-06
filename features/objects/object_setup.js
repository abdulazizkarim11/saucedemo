var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
var By = webdriver.By
var driver;
var assert = require('chai').assert;

class HomePage {

    constructor() {

        chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome()).build();
    }

    async userLogin() {
       await driver.get('https://www.saucedemo.com/');
       await driver.getTitle().then(function(title){
           assert.equal(title, "Swag Labs");
           console.log(title);
       })

        try {
            await driver.findElement(By.id("user-name")).sendKeys("standard_user");
            await driver.findElement(By.id("password")).sendKeys("secret_sauce");
            await driver.findElement(By.css(".btn_action")).click();
       } catch (error) {
           console.log(error);
       }

    }

    async productPage() {
        try {
            await driver.findElement(By.className('product_label')).then(function (product) {
                product.getText().then(function (text) {
                    console.log(text);
                })
            })
        }catch(error){
            console.log(error);
        }

    }

    async productContainer(){
        try {
            let productContainer = await driver.findElement(By.className('product_sort_container'));
            await productContainer.click();
            await driver.findElement(By.xpath('//option[@value="hilo"]')).click();
            await productContainer.click();
        } catch (error) {
            console.log(error);
        }
    }



    async onesieItem(){
        try {
            await driver.findElement(By.css(".inventory_item:nth-child(6) .btn_primary")).click();

        }catch (error){
            console.log(error);

        }


        }

    async bikeLight(){
        try {
            await driver.findElement(By.css(".inventory_item:nth-child(5) .btn_primary")).click();
        } catch (error){
            console.log(error);
        }

    }


    async basket(){
        try {
            await driver.findElement(By.css("path")).click();
        } catch (error) {
            console.log(error);
        }

    }



    async checkout() {
        try {
            await driver.findElements(By.css(".cart_item:nth-child(3) > .cart_item_label"));

            } catch (error){
            console.log(error);

        }
        await driver.findElement(By.className('btn_action checkout_button')).click();
    }


    async checkoutInformation(){
        try {
            await driver.findElement(By.id("first-name")).sendKeys("standard_user");
            await driver.findElement(By.id("last-name")).sendKeys("standard_password");
            await driver.findElement(By.id("postal-code")).sendKeys(90210);
            await driver.findElement(By.className('btn_primary cart_button')).click();
        }catch(error){
            console.log(error);
}

    }

    async purchaseComplete(){
        try {
            await driver.findElement(By.className('btn_action cart_button')).click();
        }catch(error){
            console.log(error);
        }
    }

    async thankYouMessage() {
        try {
            await driver.findElement(By.className('complete-header')).then(function (message) {
                message.getText().then(function (message) {
                    console.log(message);

                    driver.quit();

                })

            })
        }catch(error){
            console.log(error);
        }


   }

 }

module.exports = new HomePage();
