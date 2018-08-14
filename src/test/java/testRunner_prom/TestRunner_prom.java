package testRunner_prom;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-report/smoketest"/*, ”json:target/basicreport_test.json" */},
		glue = "stepDefinition_prom",
		//dryRun=true,
		features =  "src/Features"
		,tags ={"@new"}
		,monochrome=true
		)

public class TestRunner_prom 
//This is just a runner
{ }