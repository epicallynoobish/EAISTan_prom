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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to \"http://eaist.mos.ru/analytics/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_navigate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login \"demo\" in field having id \"#auth_user_name\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef_prom.i_enter_login(String,String)"
});
formatter.result({
  "error_message": "Element not found {#auth_user_name}\nExpected: exist\nScreenshot: file:/D:/eclipse_workspace/Cucumber_EAIST/build/reports/tests/1532437014355.0.png\nPage source: file:/D:/eclipse_workspace/Cucumber_EAIST/build/reports/tests/1532437014355.0.html\nTimeout: 4 s.\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#auth_user_name\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:116)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy13.sendKeys(Unknown Source)\r\n\tat stepDefinition_prom.stepDef_prom.i_enter_login(stepDef_prom.java:85)\r\n\tat ✽.I enter login \"demo\" in field having id \"#auth_user_name\"(src/Features/testDataExistence_prom.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#auth_user_name\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T19:05:32.194Z\u0027\nSystem info: host: \u0027PRM-WS-0159\u0027, ip: \u002710.242.4.15\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506120 (e3e53437346286..., userDataDir: C:\\Users\\starikov\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: 113ba10cec4698b5fbc26ad90412c467\n*** Element info: {Using\u003dcss selector, value\u003d#auth_user_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:465)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:90)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:63)\r\n\tat com.sun.proxy.$Proxy13.sendKeys(Unknown Source)\r\n\tat stepDefinition_prom.stepDef_prom.i_enter_login(stepDef_prom.java:85)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
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