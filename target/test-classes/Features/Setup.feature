@Regression @Setup
Feature: feature to test Upload Document functionality

  Background: 
    And user launches browser "chrome"
    And user loads proprty file "./Resources/Environment.properties"


    
     @Test_Id_S01 @Setup
    Scenario Outline: Test_Id_S01 Verify User is able to Create user setup
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()=' Setup ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[text()='User Setup ']"
    And user sleep for 5000 miliseconds
    And Verify User is able to Create user setup form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |Createusersetup|0|
    
    
     @Test_Id_S02 @Setup
    Scenario Outline: Test_Id_S02 Verify User is able to Create project setup
    And user launches application "PROFICIENT"
    And user provides "AdminEmail","AdminPassword" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()=' Setup ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[text()='Project Setup ']"
    And user sleep for 5000 miliseconds
    And  Verify User is able to Create project setup form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |Createusersetup|1|