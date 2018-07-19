package testRunner_prom;

import static com.codeborne.selenide.Selenide.open;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

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
        System.setProperty("webdriver.chrome.driver", "src/chromedriver.exe"); //--enable-logging --v=1
        Configuration.browser = "chrome";
        Configuration.chromeSwitches = "--enable-logging --v=1";
        open("http://eaist.mos.ru/analytics/index.php");
    }
}
