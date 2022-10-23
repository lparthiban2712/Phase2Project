Feature: Home page
Background: 
Given I landed on saucelab login page

  @sanity
  Scenario: Add the products to the cart
    When I enter correct username as "standard_user" and password as "secret_sauce"
    And I clicked Login button
    And I click on Add to Cart for product "Sauce Labs Backpack"
    Then Product should be successfully added to the project
