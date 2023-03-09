@Regression @Mail
Feature: feature to test Upload Document functionality

  Background: 
    And user launches browser "chrome"
    And user loads proprty file "./Resources/Environment.properties"


    
     @Test_Id_ML01 @Mail
    Scenario Outline: Test_Id_ML01 Verify User is able to Create Mail
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Mail']"
    And user sleep for 3000 miliseconds
    And Verify User is able to Create Mail form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |Mail|0|
    
      @Test_Id_ML02 @Mail
    Scenario Outline: Test_Id_ML01 Verify User is able to reply to the Mail
    And user launches application "PROFICIENT"
    And user provides "approverEmail","approverPassword" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Mail']"
    And user sleep for 3000 miliseconds
    And  Verify User is able to reply to the Mail form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |Mail|1|
    
    
      @Test_Id_ML03 @Mail
    Scenario Outline: Test_Id_ML01 Verify User is able to save as draft
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Mail']"
    And user sleep for 3000 miliseconds
    And  Verify User is able to save as draft form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |Mail|2|
    
    
     @Test_Id_ML04 @Mail
    Scenario Outline: Test_Id_ML04 Verify User is able to view mail in draft and send
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Mail']"
    And user sleep for 3000 miliseconds
    And  Verify User is able to view mail in draft and send form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |Mail|3|
    