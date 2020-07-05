Feature: Performing a login and purchase journey

    Background:
        Given user is logged in
        And user is on the products page

    Scenario: Purchase journey
        Given user selects option price high to low from sort container
        And user adds to cart sauce labs onesie
        And user adds to cart sauce labs bike light
        And user clicks on basket
        And user clicks on checkout
        And user enters checkout information
        And user completes purchase journey
        And user can see thank you message


