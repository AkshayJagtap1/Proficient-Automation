@Regression @Meeting
Feature: feature to test Upload Document functionality

  Background: 
    And user launches browser "chrome"
    And user loads proprty file "./Resources/Environment.properties"


    
     @Test_Id_M01 @Meeting
    Scenario Outline: Test_Id_M01 Verify User is able to Create Meeting
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()='Meetings ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[text()='Create Meeting ']"
    And user sleep for 5000 miliseconds
    And verify user is able to Create the meeting form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |CreateMeeting|0|
    
      @Test_Id_M02 @Meeting
    Scenario Outline: Test_Id_M02 Verify User is able to View Meeting
    And user launches application "PROFICIENT"
    And user provides "approverEmail","approverPassword" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()='Meeting List']"
    And user sleep for 5000 miliseconds
    And verify user is able to View the meeting form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |AcceptMeeting|0|
    
    
    
     @Test_Id_M03 @Meeting
    Scenario Outline: Test_Id_M03 Verify User is able to Create Meeting for add meeting minutes from initiator
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()='Meetings ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[text()='Create Meeting ']"
    And user sleep for 5000 miliseconds
    And Verify User is able to Create Meeting for add meeting minutes from initiator form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |CreateMeeting|1|
    
    
    @Test_Id_M04 @Meeting
    Scenario Outline: Test_Id_M04 Verify User is able to Create Meeting Miniutes from Initiator
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()='Meeting List']"
    And user sleep for 5000 miliseconds
    And verify user is able to Create Meeting Miniutes from Initiator form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |InitiatorMinutes|0|
    
    
    
     @Test_Id_M05 @Meeting
    Scenario Outline: Test_Id_M05 Verify User is able to Create Meeting to fetch meeting from notification
    And user launches application "PROFICIENT"
    And user provides "Email","Password" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()='Meetings ']"
    And user sleep for 5000 miliseconds
    And Click on element "//*[text()='Create Meeting ']"
    And user sleep for 5000 miliseconds
    And Verify User is able to Create Meeting to fetch meeting from notification form from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |CreateMeeting|2|
    
    
     @Test_Id_M06 @Meeting
    Scenario Outline: Test_Id_M06 Verify User is able to view Meeting in Notification
    And user launches application "PROFICIENT"
    And user provides "approverEmail","approverPassword" and logs into application
    And user sleep for 10000 miliseconds
    And Click on element "//*[text()='notifications']"
    And user sleep for 5000 miliseconds
    And Click on element "(//*[text()='UatProject - Meeting : Received New Meeting Invite Regreesion Testing1 '])[1]"
    And user sleep for 5000 miliseconds
    And verify user is able to View the meeting in Notification from given sheetname "<SheetName>" and rownumber <RowNumber>
   
    
    Examples:
    |SheetName|RowNumber|
    |AcceptMeeting|0|
    