@Regression @Upload_Document 
Feature: feature to test Upload Document functionality

  Background: 
    And user launches browser "chrome"
    And user loads proprty file "./Resources/Environment.properties"

  @Test_Id_D01 @Document
  Scenario Outline: Test_Id_D01 Verify User is able to create document
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Documents ']"
    And user sleep for 10000 miliseconds
    And Click on element "//*[@class='mat-list-item-content' and text()='Upload Document ']"
    And user sleep for 10000 miliseconds 
    And verify user is able to fill the upload document form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |UploadDocument|0|
  

   @Test_Id_D02 @Document
  Scenario Outline: Test_Id_D02 Verify User is able to approve document
    And user launches application "PROFICIENT"
    And user provides "approverEmail","approverPassword" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Documents ']"
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()='Search Document ']"
    And user sleep for 10000 miliseconds
    And Click on element "//tbody[@role='rowgroup']/tr[1]/td[1]"
    And user sleep for 5000 miliseconds
    And verify user is able to approve the document form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |ApproveDocument|0|
    
    
     @Test_Id_D03 @Document
  Scenario Outline: Test_Id_D03 Verify User is able to create document for reject
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Documents ']"
    And user sleep for 10000 miliseconds
    And Click on element "//*[@class='mat-list-item-content' and text()='Upload Document ']"
    And user sleep for 10000 miliseconds 
    And Verify User is able to create document for reject form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |UploadDocument|1|
    
   @Test_Id_D04 @Document
    Scenario Outline: Test_Id_D04 Verify User is able to reject document
    And user launches application "PROFICIENT"
    And user provides "rejectEmail","rejectPassword" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Documents ']"
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()='Search Document ']"
    And user sleep for 10000 miliseconds
    And Click on element "//tbody[@role='rowgroup']/tr[1]/td[1]"
    And user sleep for 5000 miliseconds
    And verify user is able to reject the document form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |RejectDocument|0| 
    
    
    @Test_Id_D05 @Document
  Scenario Outline: Test_Id_D05 Verify User is able to create document approve from Tasklist
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Documents ']"
    And user sleep for 10000 miliseconds
    And Click on element "//*[@class='mat-list-item-content' and text()='Upload Document ']"
    And user sleep for 10000 miliseconds 
    And Verify User is able to create document approve from Tasklist form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |UploadDocument|2|
    
     @Test_Id_D06 @Document
    Scenario Outline: Test_Id_D06 Verify User is able to approve document from task list
    And user launches application "PROFICIENT"
    And user provides "approverEmail","approverPassword" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Task List']"
    And user sleep for 3000 miliseconds
    And Verify User is able to approve document from task list form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |UploadDocument|3|
    
    
     @Test_Id_D07 @Document
  Scenario Outline: Test_Id_D07 Verify User is able to create document to reject from Tasklist
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Documents ']"
    And user sleep for 10000 miliseconds
    And Click on element "//*[@class='mat-list-item-content' and text()='Upload Document ']"
    And user sleep for 10000 miliseconds 
    And Verify User is able to create document to reject from Tasklist form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |UploadDocument|4|
    
    
     @Test_Id_D08 @Document
    Scenario Outline: Test_Id_D08 Verify User is able to reject document from task list
    And user launches application "PROFICIENT"
    And user provides "rejectEmail","rejectPassword" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Task List']"
    And user sleep for 3000 miliseconds
    And verify user is able to reject the document from task list form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |RejectDocument|1|
     