package testRunner_prom;

import static com.codeborne.selenide.Selenide.open;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import com.codeborne.selenide.Configuration;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


//@RunWith(Cucumber.class)
/*@CucumberOptions
		(
        plugin = {"html:target/cucumber-report/smoketest", "json:target/cucumber.json"},
        features = "src/Features",
        glue = "stepDefinition_prom"
        //glue = "ru/riskmarket/steps"
        //tags = "@tag"
		)*/
@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-report/smoketest"/*, ”json:target/basicreport_test.json" */},
		glue = "stepDefinition_prom",
		//dryRun=true,
		features =  "src/Features"
		//,tags ={"~@ignore", “@teamcity”}
		,monochrome=true
		)

public class TestRunner_prom 
//This is just a runner
{
	@BeforeClass
    static public void setupTimeout()
    {
        Configuration.timeout = 90000;
        Configuration.browser = "chrome";
        System.setProperty("webdriver.chrome.driver", "src/chromedriver.exe");
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("enable-logging", "v=1");
		//WebDriver driver = new ChromeDriver(chromeOptions);
        open("http://eaist.mos.ru/analytics/index.php");
    }
}
