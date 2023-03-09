$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Document.feature");
formatter.feature({
  "name": "feature to test Upload Document functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Upload_Document"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test_Id_D05 Verify User is able to create document approve from Tasklist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_D05"
    },
    {
      "name": "@Document"
    }
  ]
});
formatter.step({
  "name": "user launches application \"PROFICIENT\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides \"Email\",\"Password\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 15000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Documents \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Upload Document \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to create document approve from Tasklist form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ]
    },
    {
      "cells": [
        "UploadDocument",
        "2"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches browser \"chrome\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launches_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user loads proprty file \"./Resources/Environment.properties\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_loads_proprty_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_D05 Verify User is able to create document approve from Tasklist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Upload_Document"
    },
    {
      "name": "@Test_Id_D05"
    },
    {
      "name": "@Document"
    }
  ]
});
formatter.step({
  "name": "user launches application \"PROFICIENT\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launches_application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"Email\",\"Password\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 15000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Documents \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Upload Document \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to create document approve from Tasklist form from given sheetname \"UploadDocument\" and rownumber 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_create_document_approve_from_Tasklist_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Doc No is not matching expected:\u003c[D427]\u003e but was:\u003c[-]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat StepDefinitions.Steps.verify_User_is_able_to_create_document_approve_from_Tasklist_form_from_given_sheetname_and_rownumber(Steps.java:662)\r\n\tat ✽.Verify User is able to create document approve from Tasklist form from given sheetname \"UploadDocument\" and rownumber 2(file:src/test/resources/Features/Document.feature:88)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
});