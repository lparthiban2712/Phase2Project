$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/saucedemohome.feature");
formatter.feature({
  "name": "Home page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I landed on saucelab login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Steps.i_landed_on_saucelab_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add the products to the cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter correct username as \"standard_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Steps.i_enter_correct_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Steps.i_clicked_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Add to Cart for product \"Sauce Labs Backpack\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Steps.i_click_on_Add_to_cart_for_product(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product should be successfully added to the project",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Steps.product_should_be_successfully_added_to_the_project()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/saucedemologin.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I landed on saucelab login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Steps.i_landed_on_saucelab_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Valid Credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter correct username as \"standard_user\" and password as \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Steps.i_enter_correct_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Steps.i_clicked_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Steps.i_should_get_the_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I landed on saucelab login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.Steps.i_landed_on_saucelab_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Invalid Credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter incorrect username as \"guest_user\" and password as \"abcdef\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.Steps.i_enter_incorrect_username_and_inpassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.Steps.i_clicked_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.Steps.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});