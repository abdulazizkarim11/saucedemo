var {Given,Then,When} = require('cucumber');
var homePage = require('../objects/object_setup');



Given(/^user is logged in$/, function () {
    return homePage.userLogin()

});

Then(/^user is on the products page$/,function () {
    return homePage.productPage()

});
Then(/^user selects option price high to low from sort container$/, function () {
    return homePage.productContainer()

});
Given(/^user adds to cart sauce labs onesie$/, function () {
    return homePage.onesieItem()

});
Given(/^user adds to cart sauce labs bike light$/, function () {
    return homePage.bikeLight()

});
Given(/^user clicks on basket$/, function () {
    return homePage.basket()

});
Given(/^user clicks on checkout$/, function () {
    return homePage.checkout()

});
Given(/^user enters checkout information$/, function () {
    return homePage.checkoutInformation()

});
Given(/^user completes purchase journey$/, function () {
    return homePage.purchaseComplete()


});
Given(/^user can see thank you message$/, function () {
    return homePage.thankYouMessage()

});
