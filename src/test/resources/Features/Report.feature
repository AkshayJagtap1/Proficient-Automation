@Regression @Reports
Feature: feature to test Upload Document functionality

  Background: 
    And user launches browser "chrome"
    And user loads proprty file "./Resources/Environment.properties"


    
     @Test_Id_R01 @Reports
    Scenario Outline: Test_Id_R01 Verify User is able to Create New Report
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Reports ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[text()='Create New Report']"
    And user sleep for 5000 miliseconds
    And verify user is able to Create the New Report form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |CreateReports|0|
    
    
     @Test_Id_R02 @Reports
    Scenario Outline: Test_Id_R02 Verify User is able to Search Report
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Reports ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[text()='Search Reports']"
    And user sleep for 5000 miliseconds
    And Verify User is able to Search Report form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |SearchReport|0|
   
    
    
      @Test_Id_R03 @Reports
    Scenario Outline: Test_Id_R03 Verify User is able to Save the Report
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Reports ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[text()='Create New Report']"
    And user sleep for 5000 miliseconds
    And Verify User is able to Save the Report form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |CreateReports|1|
    
   
    
      @Test_Id_R04 @Reports
    Scenario Outline: Test_Id_R04 Verify User is able to generate the draft report from the search reports
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Reports ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[text()='Search Reports']"
    And user sleep for 5000 miliseconds
    And Verify User is able to generate the draft report from the search reports form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |SearchReport|1|
    
    
    @Test_Id_R05 @Reports
    Scenario Outline: Test_Id_R05 Verify User is able to Create My DCR Report
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Reports ']"
    And user sleep for 5000 miliseconds
    And Click on element "//span[text()=' My DCR Reports ']"
    And user sleep for 5000 miliseconds
    And verify user is able to Create the My DCR Report form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |CreateMyDCRReport|0|
    
    
    
     @Test_Id_R06 @Reports
    Scenario Outline: Test_Id_R06 Verify User is able to Create Site Diary
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Reports ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[text()='Site Diary']"
    And user sleep for 5000 miliseconds
    And Verify User is able to Create Site Diary form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |Site Diary|0|
    
     @Test_Id_R07 @Reports
    Scenario Outline: Test_Id_R07 Verify User is able to Create Week Report
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Reports ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[text()='Week Report']"
    And user sleep for 5000 miliseconds
    And  Verify User is able to Create Week Report form from given sheetname "<SheetName>" and rownumber <RowNumber>
    
    Examples:
    |SheetName|RowNumber|
    |Week Report|0|
    
    
   
    
    
   
    