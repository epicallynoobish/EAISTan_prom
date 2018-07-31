$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Features/testDataExistence_prom.feature");
formatter.feature({
  "name": "Test data existance_prom",
  "description": "  I want to check if there is some data in all the tables",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "I login with valud creds",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "I navigate to \"http://eaist.mos.ru/analytics/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_navigate(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting 45 seconds for Firefox to start.\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T19:05:32.194Z\u0027\nSystem info: host: \u0027PRM-WS-0159\u0027, ip: \u0027172.18.8.142\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.XpiDriverService.waitUntilAvailable(XpiDriverService.java:131)\r\n\tat org.openqa.selenium.firefox.XpiDriverService.start(XpiDriverService.java:116)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat com.codeborne.selenide.webdriver.FirefoxDriverFactory.createFirefoxDriver(FirefoxDriverFactory.java:32)\r\n\tat com.codeborne.selenide.webdriver.FirefoxDriverFactory.create(FirefoxDriverFactory.java:25)\r\n\tat com.codeborne.selenide.webdriver.WebDriverFactory.lambda$createWebDriver$0(WebDriverFactory.java:55)\r\n\tat java.util.Optional.map(Unknown Source)\r\n\tat com.codeborne.selenide.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:55)\r\n\tat com.codeborne.selenide.impl.WebDriverThreadLocalContainer.createDriver(WebDriverThreadLocalContainer.java:227)\r\n\tat com.codeborne.selenide.impl.WebDriverThreadLocalContainer.getWebDriver(WebDriverThreadLocalContainer.java:96)\r\n\tat com.codeborne.selenide.impl.WebDriverThreadLocalContainer.getCurrentUrl(WebDriverThreadLocalContainer.java:209)\r\n\tat com.codeborne.selenide.WebDriverRunner.url(WebDriverRunner.java:268)\r\n\tat com.codeborne.selenide.Selenide.refresh(Selenide.java:173)\r\n\tat stepDefinition_prom.stepDef_prom.i_navigate(stepDef_prom.java:77)\r\n\tat ✽.I navigate to \"http://eaist.mos.ru/analytics/index.php\"(src/Features/testDataExistence_prom.feature:7)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:22464/hub/status] to be available after 45001 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.firefox.XpiDriverService.waitUntilAvailable(XpiDriverService.java:129)\r\n\tat org.openqa.selenium.firefox.XpiDriverService.start(XpiDriverService.java:116)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat com.codeborne.selenide.webdriver.FirefoxDriverFactory.createFirefoxDriver(FirefoxDriverFactory.java:32)\r\n\tat com.codeborne.selenide.webdriver.FirefoxDriverFactory.create(FirefoxDriverFactory.java:25)\r\n\tat com.codeborne.selenide.webdriver.WebDriverFactory.lambda$createWebDriver$0(WebDriverFactory.java:55)\r\n\tat java.util.Optional.map(Unknown Source)\r\n\tat com.codeborne.selenide.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:55)\r\n\tat com.codeborne.selenide.impl.WebDriverThreadLocalContainer.createDriver(WebDriverThreadLocalContainer.java:227)\r\n\tat com.codeborne.selenide.impl.WebDriverThreadLocalContainer.getWebDriver(WebDriverThreadLocalContainer.java:96)\r\n\tat com.codeborne.selenide.impl.WebDriverThreadLocalContainer.getCurrentUrl(WebDriverThreadLocalContainer.java:209)\r\n\tat com.codeborne.selenide.WebDriverRunner.url(WebDriverRunner.java:268)\r\n\tat com.codeborne.selenide.Selenide.refresh(Selenide.java:173)\r\n\tat stepDefinition_prom.stepDef_prom.i_navigate(stepDef_prom.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:147)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 56 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter login \"demo\" in field having id \"#auth_user_name\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef_prom.i_enter_login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter pass \"reptilian\" in field having id \"#auth_user_password\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef_prom.i_enter_pass(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I clickbutton having class \".enter_btn\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.i_click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should get logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef_prom.should_logged_in()"
});
formatter.result({
  "status": "skipped"
});
});