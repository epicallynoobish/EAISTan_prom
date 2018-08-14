Feature: Test data existance_prom
  I want to check if there is some data in all the tables
  @old
  Scenario: I login with valid creds
    #Given I login as demo with password reptilian with name Иванов О.З.
    Given I navigate to "http://eaist.mos.ru/analytics/index.php"
    And I enter login "demo" in field having id "#auth_user_name"
    And I enter pass "reptilian" in field having id "#auth_user_password"
    When I clickbutton having class ".enter_btn"
    Then I should get logged in
    
    @new
    Scenario: I log in with new interface
    Given I open "https://eaist.mos.ru/login-new.html"
    And Press button with xpath "/html/body/div[2]/div/div[6]/button"
    When I enter login "" to field having xpath "//*[@id='ngdialog1']/div[2]/div/div[2]/div/div/div[1]/div[1]/input"
    And I enter password "" to field having xpath "//*[@id='ngdialog1']/div[2]/div/div[2]/div/div/div[1]/div[2]/input"
    And I press button "//*[@id='ngdialog1']/div[2]/div/div[2]/div/div/div[3]/div[2]/button"
    Then I should be login to analitics

  #Scenario: I test data existence
   # When I go to <table>
    #When I checking the table

    #Examples:
     # | table                                                                             		  	|
     # | "http://eaist.mos.ru/analytics/index.php?show=rating&menu_id=21"                  		   	|
     # | "http://eaist.mos.ru/analytics/index.php?show=ExpertNMC&menu_id=1500&report_id=56" 			  |
     # | "http://eaist.mos.ru/analytics/index.php?show=ExpertNMC&menu_id=1500&report_id=1501"		 	|
     # | "http://eaist.mos.ru/analytics/index.php?show=ExpertNMC&menu_id=1500&report_id=1505"		 	|
     # | "http://eaist.mos.ru/analytics/index.php?show=ExpertNMC&menu_id=1500&report_id=1506"		 	|
		#	| "http://eaist.mos.ru/analytics/index.php?show=KpgzSpgz&menu_id=1503&report_id=1504"				|
		#	| "http://eaist.mos.ru/analytics/index.php?show=KpgzSpgz&menu_id=1503&report_id=1507"				|
	#		| "http://eaist.mos.ru/analytics/index.php?show=KpgzSpgz&menu_id=1503&report_id=1509"				|
	#		| "http://eaist.mos.ru/analytics/index.php?show=Administration&menu_id=1700&report_id=1701"	|
	#		| "http://eaist.mos.ru/analytics/index.php?show=Administration&menu_id=1700&report_id=1702"	|
	#		| "http://eaist.mos.ru/analytics/index.php?show=Administration&menu_id=1700&report_id=1703"	|
	#		| "http://eaist.mos.ru/analytics/index.php?show=Administration&menu_id=1700&report_id=1704"	|
	#		| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=49"			|
	#		| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=47"			|
	#		| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=46"			|
	#		| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=57"			|
	#		| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=44"			|
	#		| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=48"			|
	#		| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=50"			|
	#		| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=51"			|
	#		| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=52"			|
	#		| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=53"			|
	#		| "http://eaist.mos.ru/analytics/index.php?show=new_reports&menu_id=1096&report_id=67"			|
	#		| "http://eaist.mos.ru/analytics/index.php?show=Mrg&menu_id=1800&report_id=1801"						|
	#		| "http://eaist.mos.ru/analytics/index.php?show=Mrg&menu_id=1800&report_id=1802"						|
	#		| "http://eaist.mos.ru/analytics/index.php?show=Mrg&menu_id=1800&report_id=1803"						|
	#		| "http://eaist.mos.ru/analytics/index.php?show=Mrg&menu_id=1800&report_id=1804"						|
	#		| "http://eaist.mos.ru/analytics/index.php?show=Mrg&menu_id=1800&report_id=1805"						|
	#		| "http://eaist.mos.ru/analytics/index.php?show=TreeContract&menu_id=1600"									|