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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"#auth_user_name\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T19:05:32.194Z\u0027\nSystem info: host: \u0027PRM-WS-0159\u0027, ip: \u002710.242.4.15\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\starikov\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: b32746a04b0b9b7438c32a08e32c1613\n*** Element info: {Using\u003did, value\u003d#auth_user_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat stepDefinition_prom.stepDef_prom.i_navigate(stepDef_prom.java:78)\r\n\tat ✽.I navigate to \"http://eaist.mos.ru/analytics/index.php\"(src/Features/testDataExistence_prom.feature:7)\r\n",
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