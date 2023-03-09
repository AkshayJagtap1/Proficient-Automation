@Regression @Operation
Feature: feature to test operation functionality

  Background: 
    And user launches browser "chrome"
    And user loads proprty file "./Resources/Environment.properties"

  @Test_Id_OP01 @Operation
  Scenario Outline: Verify User is able to create operation
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()=' Operations ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[@class='mat-list-item-content' and text()='Create ']"
    And user sleep for 5000 miliseconds
    And verify user is able to fill the Operation form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    
    Examples:
    |SheetName|RowNumber|
    |Operation|0|
  
 @Test_Id_OP02 @Operation
  Scenario Outline: Verify User is able to Approve operation
    And user launches application "PROFICIENT"
    And user provides "approverEmail","approverPassword" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()=' Operations ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[@class='mat-list-item-content' and text()='Search ']"
    And user sleep for 5000 miliseconds
    And verify user is able to approve the Operation form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    
    Examples:
    |SheetName|RowNumber|
    |Operation|1|
    
    
    @Test_Id_OP03 @Operation 
  Scenario Outline: Verify User is able to create operation for reject
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()=' Operations ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[@class='mat-list-item-content' and text()='Create ']"
    And user sleep for 5000 miliseconds
    And Verify User is able to create operation for reject form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    
    Examples:
    |SheetName|RowNumber|
    |Operation|2|
    
    @Test_Id_OP04 @Operation
  Scenario Outline: Verify User is able to Reject operation
    And user launches application "PROFICIENT"
    And user provides "approverEmail","approverPassword" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()=' Operations ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[@class='mat-list-item-content' and text()='Search ']"
    And user sleep for 5000 miliseconds
    And Verify User is able to Reject operation form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    
    Examples:
    |SheetName|RowNumber|
    |Operation|3|
  
  
  
   @Test_Id_OP05 @Operation
  Scenario Outline: Verify User is able to create operation to approve from Tasklist
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()=' Operations ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[@class='mat-list-item-content' and text()='Create ']"
    And user sleep for 5000 miliseconds
    And Verify User is able to create operation to approve from Tasklist form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    
    Examples:
    |SheetName|RowNumber|
    |Operation|4|
    
     @Test_Id_OP06 @Operation
    Scenario Outline: Verify User is able to approve operation from task list
    And user launches application "PROFICIENT"
    And user provides "approverEmail","approverPassword" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Task List']"
    And user sleep for 3000 miliseconds
    And  Verify User is able to approve operation from task list form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |Operation|5|
    
    
    @Test_Id_OP07 @Operation
  Scenario Outline: Verify User is able to create operation to reject from Tasklist
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()=' Operations ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[@class='mat-list-item-content' and text()='Create ']"
    And user sleep for 5000 miliseconds
    And Verify User is able to create operation to reject from Tasklist form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    
    Examples:
    |SheetName|RowNumber|
    |Operation|6|
    
    
    @Test_Id_OP08 @Operation
    Scenario Outline: Verify User is able to reject operation from task list
    And user launches application "PROFICIENT"
    And user provides "approverEmail","approverPassword" and logs into application
    And user sleep for 15000 miliseconds
    And Click on element "//*[text()='Task List']"
    And user sleep for 3000 miliseconds
    And  Verify User is able to reject operation from task list form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |Operation|7|
    
   