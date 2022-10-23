Feature: Login
Background: 
Given I landed on saucelab login page

  @sanity
  Scenario: Login with Valid Credential
    When I enter correct username as "standard_user" and password as "secret_sauce"
    And I clicked Login button
    Then I should get the Homepage

  @regression
  Scenario: Login with Invalid Credential
    When I enter incorrect username as "guest_user" and password as "abcdef"
    And I clicked Login button
    Then I should get the error message "Epic sadface: Username and password do not match any user in this service"
