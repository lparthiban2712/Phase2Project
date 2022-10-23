package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class Steps {
	
	WebDriver driver=Hooks.driver;
	@Given("I landed on saucelab login page")
	public void i_landed_on_saucelab_login_page() {
	      driver.get("https://www.saucedemo.com/");
	}

	@When("I enter correct username as {string} and password as {string}")
	public void i_enter_correct_username_as_and_password_as(String username, String password) {
	    WebElement user=driver.findElement(By.name("user-name"));
		user.sendKeys(username);
		
		WebElement pwd=driver.findElement(By.name("password"));
		pwd.sendKeys(password);
		
		
	}

	@And("I clicked Login button")
	public void i_clicked_Login_button() {

		WebElement login=driver.findElement(By.name("login-button"));
		login.click();
	}

	@Then("I should get the Homepage")
	public void i_should_get_the_Homepage() {
	    
	    WebElement Products=driver.findElement(By.xpath("//span[text()='Products']"));
	    Assert.assertTrue(Products.isDisplayed());
	}
	
	@When("I enter incorrect username as {string} and password as {string}")
	public void i_enter_incorrect_username_and_inpassword(String wrongusername,String wrongpassword) {
	   
		WebElement user=driver.findElement(By.name("user-name"));
		user.sendKeys(wrongusername);
		
		WebElement pwd=driver.findElement(By.name("password"));
		pwd.sendKeys(wrongpassword);
	}

	@Then("I should get the error message {string}")
	public void i_should_get_the_error_message(String ExpError) {
	    
	    WebElement error=driver.findElement(By.xpath("//h3[@data-test='error']"));
	    String ActError=error.getText();
	    Assert.assertEquals(ExpError,ActError);
	}

	@And("I click on Add to Cart for product {string}")
	public void i_click_on_Add_to_cart_for_product(String product) {
	    String productnamexpath="//div[@class='inventory_item_name' and contains(text(),'"+product+"')]//following::button[1]";
		WebElement productname=driver.findElement(By.xpath(productnamexpath));
		productname.click();
		
}
	@Then("Product should be successfully added to the project")
	public void product_should_be_successfully_added_to_the_project() {
	    		
		WebElement AddtoCart = driver.findElement(By.xpath("//span[@class='shopping_cart_badge']"));
		Assert.assertEquals(AddtoCart.getText(), "1");
	    	}

	

}
