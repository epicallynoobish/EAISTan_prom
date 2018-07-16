package stepDefinition_prom;

import static com.codeborne.selenide.Selenide.*;

import static com.codeborne.selenide.Condition.*;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class stepDef_prom 
{
	@Given("^I login as demo with password reptilian with name Иванов О\\.З\\.$")
	public void i_login_as_demo_with_password_reptilian_with_name_Иванов_О_З() throws Exception
	{
        //WebDriver driver = new ChromeDriver();
		//open("http://eaistan-dev.proitr.ru/index.php");
        Thread.sleep(10000);
        boolean flag = false;
        int f = 0;
        
        try {
			do
			if($("#auth_user_name").is(exist))
			{
				$("#auth_user_name").sendKeys("demo");
				$("#auth_user_password").sendKeys("reptilian");
				$(".enter_btn").click();
				$(".c_header").waitUntil(visible, 5000);
				$(".c_header").$(".user-name").shouldHave(text("Иванов О.З."));
				flag = true;
			}
			else 
			{
				System.out.println ("Не смог авторизоваться. Пробуем снова...");
			}
			while (flag==false || f==10);
		} 
        catch (Exception e) 
        {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
    }

	@When("^I go to \"([^\"]*)\"$")
	public void i_go_to(String table) throws Exception
	{
        open(table);
    }

	@When("^I checking the table$")
	public void i_checking_the_table() throws Exception
	{
        $("#creport-grid > div.grid-table-wrap > table").shouldBe(visible);
        $("#creport-grid > div.grid-table-wrap > div").shouldNotBe(visible);
    }
}
