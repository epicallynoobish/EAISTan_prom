package stepDefinition_prom;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;

import java.util.concurrent.TimeUnit;

import org.junit.Assume;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.codeborne.selenide.Configuration;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import env.DriverUtil;
//import info.seleniumcucumber.methods.BaseTest;

public class stepDef_prom 
{
	//static public final WebDriver driver = new ChromeDriver();
	protected static WebDriver driver = DriverUtil.getDefaultDriver();
	@Before
    static public void setupTimeout()
    {
        //Configuration.browser = "chrome";
        //System.setProperty("webdriver.chrome.driver", "src/chromedriver.exe");
        //ChromeOptions chromeOptions = new ChromeOptions();
        //chromeOptions.addArguments("enable-logging", "v=1");
    }
	/*@Given("^I login as demo with password reptilian with name Иванов О\\.З\\.$")
	public void i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З() throws Exception
	{
        //Thread.sleep(10000);
		driver.get("http://eaist.mos.ru/analytics/index.php");
        //open("http://eaist.mos.ru/analytics/index.php");
		WebElement explicitWait = (new WebDriverWait(driver, 30))
        		.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='auth_user_name']")));
        //$("#auth_user_name").is(visible);
		$("#auth_user_name").sendKeys("demo");
		$("#auth_user_password").sendKeys("reptilian");
		$(".enter_btn").click();
		$(".c_header").waitUntil(visible, 9000);
		$(".c_header").$(".user-name").shouldHave(text("Иванов О.З."));
	}


	@When("^I go to \"([^\"]*)\"$")
	public void i_go_to(String table) throws Exception
	{open(table);}

	@When("^I checking the table$")
	public void i_checking_the_table() throws Exception
	{
        $("#creport-grid > div.grid-table-wrap > table").shouldBe(visible);
        $("#creport-grid > div.grid-table-wrap > div").shouldNotBe(visible);
    }*/
	//protected static WebDriver driver = new ChromeDriver();
	
	@Given("^I navigate to \"([^\"]*)\"$") 
	public static void i_navigate(String url) throws Throwable
	{
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		System.out.println(url);
		driver.get(url);

        (new WebDriverWait(driver, 60))
        	.until(ExpectedConditions.presenceOfElementLocated(By.id("auth_user_name")));
        System.out.println(url);
        //Assume.assumeFalse($("#auth_user_name").isDisplayed());
        //driver.findElement(By.id("#auth_user_name")).getClass();
        Assume.assumeNotNull(driver.findElement(By.id("#auth_user_name")).getClass());
        //$("#auth_user_name").is(visible);
        System.out.println(url);
	}

	@Given("^I enter login \"([^\"]*)\" in field having id \"([^\"]*)\"$")
	public static void i_enter_login(String login, String name_field) throws Throwable
	{
		System.out.println(login);
		$(name_field).sendKeys(login);
	}

	@Given("^I enter pass \"([^\"]*)\" in field having id \"([^\"]*)\"$")
	public static void i_enter_pass(String pass, String pass_field) throws Throwable
	{
		$(pass_field).sendKeys(pass);
	}

	@When("^I clickbutton having class \"([^\"]*)\"$") 
	public static void i_click(String entr_btn) throws Throwable
	{
		$(entr_btn).click();
	}
	
	@Then("^I should get logged in$")
	public void should_logged_in() throws Throwable
	{
		By selection = By.xpath("//*[@id='body']/header/div/div[1]/nav");
        (new WebDriverWait(driver, 30)).until(
                ExpectedConditions.visibilityOfElementLocated(selection));
		$(".c_header").$(".user-name").shouldHave(text("Иванов О.З."));
	}

}
