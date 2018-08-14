$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Features/testDataExistence_prom.feature");
formatter.feature({
  "name": "Test data existance_prom",
  "description": "  I want to check if there is some data in all the tables",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I login with valid creds",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@old"
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
  "error_message": "java.lang.NoSuchMethodError: org.openqa.selenium.support.ui.WebDriverWait.until(Ljava/util/function/Function;)Ljava/lang/Object;\r\n\tat stepDefinition_prom.stepDef_prom.i_navigate(stepDef_prom.java:79)\r\n\tat ✽.I navigate to \"http://eaist.mos.ru/analytics/index.php\"(src/Features/testDataExistence_prom.feature:6)\r\n",
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
formatter.scenario({
  "name": "I log in with new interface",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new"
    }
  ]
});
formatter.step({
  "name": "I open \"https://eaist.mos.ru/login-new.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef_prom.i_open(String)"
});
formatter.result({
  "error_message": "java.lang.NoSuchMethodError: org.openqa.selenium.support.ui.WebDriverWait.until(Ljava/util/function/Function;)Ljava/lang/Object;\r\n\tat stepDefinition_prom.stepDef_prom.i_open(stepDef_prom.java:127)\r\n\tat ✽.I open \"https://eaist.mos.ru/login-new.html\"(src/Features/testDataExistence_prom.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Press button with xpath \"/html/body/div[2]/div/div[6]/button\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef_prom.press_btn_xpath(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter login \"\" to field having xpath \"//*[@id\u003d\u0027ngdialog1\u0027]/div[2]/div/div[2]/div/div/div[1]/div[1]/input\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef_prom.enter_login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter password \"\" to field having xpath \"//*[@id\u003d\u0027ngdialog1\u0027]/div[2]/div/div[2]/div/div/div[1]/div[2]/input\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef_prom.enter_pass(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I press button \"//*[@id\u003d\u0027ngdialog1\u0027]/div[2]/div/div[2]/div/div/div[3]/div[2]/button\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef_prom.i_press(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be login to analitics",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef_prom.i_shold_be_login()"
});
formatter.result({
  "status": "skipped"
});
});