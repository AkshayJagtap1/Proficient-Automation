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
  "name": "Test_Id_D01 Verify User is able to create document",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_D01"
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
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Documents \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Upload Document \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to fill the upload document form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "0"
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
  "name": "Test_Id_D01 Verify User is able to create document",
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
      "name": "@Test_Id_D01"
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
  "name": "user sleep for 5000 miliseconds",
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
  "name": "user sleep for 5000 miliseconds",
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
  "name": "user sleep for 5000 miliseconds",
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
  "name": "verify user is able to fill the upload document form from given sheetname \"UploadDocument\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_fill_the_upload_document_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_D02 Verify User is able to approve document",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_D02"
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
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
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
  "name": "Click on element \"//*[text()\u003d\u0027Search Document \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//tbody[@role\u003d\u0027rowgroup\u0027]/tr[1]/td[1]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to approve the document form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "ApproveDocument",
        "0"
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
formatter.embedding("image/png", "embedded10.png", null);
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
formatter.embedding("image/png", "embedded11.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_D02 Verify User is able to approve document",
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
      "name": "@Test_Id_D02"
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
formatter.embedding("image/png", "embedded12.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", null);
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
formatter.embedding("image/png", "embedded14.png", null);
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
formatter.embedding("image/png", "embedded15.png", null);
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
formatter.embedding("image/png", "embedded16.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Search Document \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png", null);
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
formatter.embedding("image/png", "embedded18.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//tbody[@role\u003d\u0027rowgroup\u0027]/tr[1]/td[1]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify user is able to approve the document form from given sheetname \"ApproveDocument\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_approve_the_document_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_D03 Verify User is able to create document for reject",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_D03"
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
  "name": "user sleep for 10000 miliseconds",
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
  "name": "Verify User is able to create document for reject form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "1"
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
formatter.embedding("image/png", "embedded22.png", null);
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
formatter.embedding("image/png", "embedded23.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_D03 Verify User is able to create document for reject",
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
      "name": "@Test_Id_D03"
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
formatter.embedding("image/png", "embedded24.png", null);
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
formatter.embedding("image/png", "embedded25.png", null);
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
formatter.embedding("image/png", "embedded26.png", null);
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
formatter.embedding("image/png", "embedded27.png", null);
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
formatter.embedding("image/png", "embedded28.png", null);
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
formatter.embedding("image/png", "embedded29.png", null);
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
formatter.embedding("image/png", "embedded30.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to create document for reject form from given sheetname \"UploadDocument\" and rownumber 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_create_document_for_reject_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded31.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_D04 Verify User is able to reject document",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_D04"
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
  "name": "user provides \"rejectEmail\",\"rejectPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
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
  "name": "Click on element \"//*[text()\u003d\u0027Search Document \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//tbody[@role\u003d\u0027rowgroup\u0027]/tr[1]/td[1]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to reject the document form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "RejectDocument",
        "0"
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
formatter.embedding("image/png", "embedded32.png", null);
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
formatter.embedding("image/png", "embedded33.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_D04 Verify User is able to reject document",
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
      "name": "@Test_Id_D04"
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
formatter.embedding("image/png", "embedded34.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"rejectEmail\",\"rejectPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded35.png", null);
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
formatter.embedding("image/png", "embedded36.png", null);
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
formatter.embedding("image/png", "embedded37.png", null);
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
formatter.embedding("image/png", "embedded38.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Search Document \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded39.png", null);
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
formatter.embedding("image/png", "embedded40.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//tbody[@role\u003d\u0027rowgroup\u0027]/tr[1]/td[1]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded41.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded42.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify user is able to reject the document form from given sheetname \"RejectDocument\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_reject_the_document_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded43.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "user sleep for 10000 miliseconds",
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
formatter.embedding("image/png", "embedded44.png", null);
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
formatter.embedding("image/png", "embedded45.png", null);
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
formatter.embedding("image/png", "embedded46.png", null);
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
formatter.embedding("image/png", "embedded47.png", null);
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
formatter.embedding("image/png", "embedded48.png", null);
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
formatter.embedding("image/png", "embedded49.png", null);
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
formatter.embedding("image/png", "embedded50.png", null);
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
formatter.embedding("image/png", "embedded51.png", null);
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
formatter.embedding("image/png", "embedded52.png", null);
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
  "status": "passed"
});
formatter.embedding("image/png", "embedded53.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_D06 Verify User is able to approve document from task list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_D06"
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
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Task List\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to approve document from task list form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "3"
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
formatter.embedding("image/png", "embedded54.png", null);
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
formatter.embedding("image/png", "embedded55.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_D06 Verify User is able to approve document from task list",
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
      "name": "@Test_Id_D06"
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
formatter.embedding("image/png", "embedded56.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded57.png", null);
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
formatter.embedding("image/png", "embedded58.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Task List\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded59.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded60.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to approve document from task list form from given sheetname \"UploadDocument\" and rownumber 3",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_approve_document_from_task_list_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded61.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_D07 Verify User is able to create document to reject from Tasklist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_D07"
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
  "name": "user sleep for 10000 miliseconds",
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
  "name": "Verify User is able to create document to reject from Tasklist form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "4"
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
formatter.embedding("image/png", "embedded62.png", null);
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
formatter.embedding("image/png", "embedded63.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_D07 Verify User is able to create document to reject from Tasklist",
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
      "name": "@Test_Id_D07"
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
formatter.embedding("image/png", "embedded64.png", null);
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
formatter.embedding("image/png", "embedded65.png", null);
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
formatter.embedding("image/png", "embedded66.png", null);
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
formatter.embedding("image/png", "embedded67.png", null);
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
formatter.embedding("image/png", "embedded68.png", null);
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
formatter.embedding("image/png", "embedded69.png", null);
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
formatter.embedding("image/png", "embedded70.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to create document to reject from Tasklist form from given sheetname \"UploadDocument\" and rownumber 4",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_create_document_to_reject_from_Tasklist_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded71.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_D08 Verify User is able to reject document from task list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_D08"
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
  "name": "user provides \"rejectEmail\",\"rejectPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Task List\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to reject the document from task list form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "RejectDocument",
        "1"
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
formatter.embedding("image/png", "embedded72.png", null);
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
formatter.embedding("image/png", "embedded73.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_D08 Verify User is able to reject document from task list",
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
      "name": "@Test_Id_D08"
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
formatter.embedding("image/png", "embedded74.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"rejectEmail\",\"rejectPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded75.png", null);
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
formatter.embedding("image/png", "embedded76.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Task List\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded77.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded78.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify user is able to reject the document from task list form from given sheetname \"RejectDocument\" and rownumber 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_reject_the_document_from_task_list_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded79.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Mail.feature");
formatter.feature({
  "name": "feature to test Upload Document functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Mail"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test_Id_ML01 Verify User is able to Create Mail",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_ML01"
    },
    {
      "name": "@Mail"
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
  "name": "Click on element \"//*[text()\u003d\u0027Mail\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to Create Mail form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Mail",
        "0"
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
formatter.embedding("image/png", "embedded80.png", null);
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
formatter.embedding("image/png", "embedded81.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_ML01 Verify User is able to Create Mail",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Mail"
    },
    {
      "name": "@Test_Id_ML01"
    },
    {
      "name": "@Mail"
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
formatter.embedding("image/png", "embedded82.png", null);
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
formatter.embedding("image/png", "embedded83.png", null);
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
formatter.embedding("image/png", "embedded84.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Mail\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded85.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded86.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to Create Mail form from given sheetname \"Mail\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_Create_Mail_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded87.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_ML01 Verify User is able to reply to the Mail",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_ML02"
    },
    {
      "name": "@Mail"
    }
  ]
});
formatter.step({
  "name": "user launches application \"PROFICIENT\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 15000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Mail\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to reply to the Mail form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Mail",
        "1"
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
formatter.embedding("image/png", "embedded88.png", null);
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
formatter.embedding("image/png", "embedded89.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_ML01 Verify User is able to reply to the Mail",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Mail"
    },
    {
      "name": "@Test_Id_ML02"
    },
    {
      "name": "@Mail"
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
formatter.embedding("image/png", "embedded90.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded91.png", null);
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
formatter.embedding("image/png", "embedded92.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Mail\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded93.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded94.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to reply to the Mail form from given sheetname \"Mail\" and rownumber 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_reply_to_the_Mail_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded95.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_ML01 Verify User is able to save as draft",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_ML03"
    },
    {
      "name": "@Mail"
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
  "name": "Click on element \"//*[text()\u003d\u0027Mail\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to save as draft form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Mail",
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
formatter.embedding("image/png", "embedded96.png", null);
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
formatter.embedding("image/png", "embedded97.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_ML01 Verify User is able to save as draft",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Mail"
    },
    {
      "name": "@Test_Id_ML03"
    },
    {
      "name": "@Mail"
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
formatter.embedding("image/png", "embedded98.png", null);
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
formatter.embedding("image/png", "embedded99.png", null);
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
formatter.embedding("image/png", "embedded100.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Mail\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded101.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded102.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to save as draft form from given sheetname \"Mail\" and rownumber 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_save_as_draft_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded103.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_ML04 Verify User is able to view mail in draft and send",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_ML04"
    },
    {
      "name": "@Mail"
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
  "name": "Click on element \"//*[text()\u003d\u0027Mail\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to view mail in draft and send form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Mail",
        "3"
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
formatter.embedding("image/png", "embedded104.png", null);
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
formatter.embedding("image/png", "embedded105.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_ML04 Verify User is able to view mail in draft and send",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Mail"
    },
    {
      "name": "@Test_Id_ML04"
    },
    {
      "name": "@Mail"
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
formatter.embedding("image/png", "embedded106.png", null);
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
formatter.embedding("image/png", "embedded107.png", null);
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
formatter.embedding("image/png", "embedded108.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Mail\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded109.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded110.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to view mail in draft and send form from given sheetname \"Mail\" and rownumber 3",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_view_mail_in_draft_and_send_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded111.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Meeting.feature");
formatter.feature({
  "name": "feature to test Upload Document functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Meeting"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test_Id_M01 Verify User is able to Create Meeting",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_M01"
    },
    {
      "name": "@Meeting"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Meetings \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Create Meeting \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to Create the meeting form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "CreateMeeting",
        "0"
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
formatter.embedding("image/png", "embedded112.png", null);
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
formatter.embedding("image/png", "embedded113.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_M01 Verify User is able to Create Meeting",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Meeting"
    },
    {
      "name": "@Test_Id_M01"
    },
    {
      "name": "@Meeting"
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
formatter.embedding("image/png", "embedded114.png", null);
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
formatter.embedding("image/png", "embedded115.png", null);
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
formatter.embedding("image/png", "embedded116.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Meetings \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded117.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded118.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Create Meeting \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded119.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded120.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify user is able to Create the meeting form from given sheetname \"CreateMeeting\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_Create_the_meeting_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded121.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_M02 Verify User is able to View Meeting",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_M02"
    },
    {
      "name": "@Meeting"
    }
  ]
});
formatter.step({
  "name": "user launches application \"PROFICIENT\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Meeting List\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to View the meeting form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "AcceptMeeting",
        "0"
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
formatter.embedding("image/png", "embedded122.png", null);
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
formatter.embedding("image/png", "embedded123.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_M02 Verify User is able to View Meeting",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Meeting"
    },
    {
      "name": "@Test_Id_M02"
    },
    {
      "name": "@Meeting"
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
formatter.embedding("image/png", "embedded124.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded125.png", null);
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
formatter.embedding("image/png", "embedded126.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Meeting List\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded127.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded128.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify user is able to View the meeting form from given sheetname \"AcceptMeeting\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_View_the_meeting_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded129.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_M03 Verify User is able to Create Meeting for add meeting minutes from initiator",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_M03"
    },
    {
      "name": "@Meeting"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Meetings \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Create Meeting \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to Create Meeting for add meeting minutes from initiator form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "CreateMeeting",
        "1"
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
formatter.embedding("image/png", "embedded130.png", null);
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
formatter.embedding("image/png", "embedded131.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_M03 Verify User is able to Create Meeting for add meeting minutes from initiator",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Meeting"
    },
    {
      "name": "@Test_Id_M03"
    },
    {
      "name": "@Meeting"
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
formatter.embedding("image/png", "embedded132.png", null);
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
formatter.embedding("image/png", "embedded133.png", null);
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
formatter.embedding("image/png", "embedded134.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Meetings \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded135.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded136.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Create Meeting \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded137.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded138.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to Create Meeting for add meeting minutes from initiator form from given sheetname \"CreateMeeting\" and rownumber 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_Create_Meeting_for_add_meeting_minutes_from_initiator_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded139.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_M04 Verify User is able to Create Meeting Miniutes from Initiator",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_M04"
    },
    {
      "name": "@Meeting"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Meeting List\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to Create Meeting Miniutes from Initiator form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "InitiatorMinutes",
        "0"
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
formatter.embedding("image/png", "embedded140.png", null);
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
formatter.embedding("image/png", "embedded141.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_M04 Verify User is able to Create Meeting Miniutes from Initiator",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Meeting"
    },
    {
      "name": "@Test_Id_M04"
    },
    {
      "name": "@Meeting"
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
formatter.embedding("image/png", "embedded142.png", null);
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
formatter.embedding("image/png", "embedded143.png", null);
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
formatter.embedding("image/png", "embedded144.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Meeting List\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded145.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded146.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify user is able to Create Meeting Miniutes from Initiator form from given sheetname \"InitiatorMinutes\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_Create_Meeting_Miniutes_from_Initiator_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded147.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_M05 Verify User is able to Create Meeting to fetch meeting from notification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_M05"
    },
    {
      "name": "@Meeting"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Meetings \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Create Meeting \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to Create Meeting to fetch meeting from notification form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "CreateMeeting",
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
formatter.embedding("image/png", "embedded148.png", null);
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
formatter.embedding("image/png", "embedded149.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_M05 Verify User is able to Create Meeting to fetch meeting from notification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Meeting"
    },
    {
      "name": "@Test_Id_M05"
    },
    {
      "name": "@Meeting"
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
formatter.embedding("image/png", "embedded150.png", null);
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
formatter.embedding("image/png", "embedded151.png", null);
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
formatter.embedding("image/png", "embedded152.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Meetings \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded153.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded154.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Create Meeting \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded155.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded156.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to Create Meeting to fetch meeting from notification form from given sheetname \"CreateMeeting\" and rownumber 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_Create_Meeting_to_fetch_meeting_from_notification_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded157.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_M06 Verify User is able to view Meeting in Notification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_M06"
    },
    {
      "name": "@Meeting"
    }
  ]
});
formatter.step({
  "name": "user launches application \"PROFICIENT\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027notifications\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"(//*[text()\u003d\u0027UatProject - Meeting : Received New Meeting Invite Regreesion Testing1 \u0027])[1]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to View the meeting in Notification from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "AcceptMeeting",
        "0"
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
formatter.embedding("image/png", "embedded158.png", null);
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
formatter.embedding("image/png", "embedded159.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_M06 Verify User is able to view Meeting in Notification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Meeting"
    },
    {
      "name": "@Test_Id_M06"
    },
    {
      "name": "@Meeting"
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
formatter.embedding("image/png", "embedded160.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded161.png", null);
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
formatter.embedding("image/png", "embedded162.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027notifications\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded163.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded164.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"(//*[text()\u003d\u0027UatProject - Meeting : Received New Meeting Invite Regreesion Testing1 \u0027])[1]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded165.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded166.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify user is able to View the meeting in Notification from given sheetname \"AcceptMeeting\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_View_the_meeting_in_Notification_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded167.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Operation.feature");
formatter.feature({
  "name": "feature to test operation functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Operation"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify User is able to create operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_OP01"
    },
    {
      "name": "@Operation"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Create \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to fill the Operation form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Operation",
        "0"
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
formatter.embedding("image/png", "embedded168.png", null);
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
formatter.embedding("image/png", "embedded169.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify User is able to create operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Operation"
    },
    {
      "name": "@Test_Id_OP01"
    },
    {
      "name": "@Operation"
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
formatter.embedding("image/png", "embedded170.png", null);
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
formatter.embedding("image/png", "embedded171.png", null);
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
formatter.embedding("image/png", "embedded172.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded173.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded174.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Create \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded175.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded176.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify user is able to fill the Operation form from given sheetname \"Operation\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_fill_the_Operation_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded177.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify User is able to Approve operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_OP02"
    },
    {
      "name": "@Operation"
    }
  ]
});
formatter.step({
  "name": "user launches application \"PROFICIENT\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Search \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to approve the Operation form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Operation",
        "1"
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
formatter.embedding("image/png", "embedded178.png", null);
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
formatter.embedding("image/png", "embedded179.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify User is able to Approve operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Operation"
    },
    {
      "name": "@Test_Id_OP02"
    },
    {
      "name": "@Operation"
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
formatter.embedding("image/png", "embedded180.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded181.png", null);
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
formatter.embedding("image/png", "embedded182.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded183.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded184.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Search \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded185.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded186.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify user is able to approve the Operation form from given sheetname \"Operation\" and rownumber 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_approve_the_Operation_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded187.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify User is able to create operation for reject",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_OP03"
    },
    {
      "name": "@Operation"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Create \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to create operation for reject form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Operation",
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
formatter.embedding("image/png", "embedded188.png", null);
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
formatter.embedding("image/png", "embedded189.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify User is able to create operation for reject",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Operation"
    },
    {
      "name": "@Test_Id_OP03"
    },
    {
      "name": "@Operation"
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
formatter.embedding("image/png", "embedded190.png", null);
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
formatter.embedding("image/png", "embedded191.png", null);
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
formatter.embedding("image/png", "embedded192.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded193.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded194.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Create \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded195.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded196.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to create operation for reject form from given sheetname \"Operation\" and rownumber 2",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_create_operation_for_reject_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded197.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify User is able to Reject operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_OP04"
    },
    {
      "name": "@Operation"
    }
  ]
});
formatter.step({
  "name": "user launches application \"PROFICIENT\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Search \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to Reject operation form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Operation",
        "3"
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
formatter.embedding("image/png", "embedded198.png", null);
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
formatter.embedding("image/png", "embedded199.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify User is able to Reject operation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Operation"
    },
    {
      "name": "@Test_Id_OP04"
    },
    {
      "name": "@Operation"
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
formatter.embedding("image/png", "embedded200.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded201.png", null);
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
formatter.embedding("image/png", "embedded202.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded203.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded204.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Search \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded205.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded206.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to Reject operation form from given sheetname \"Operation\" and rownumber 3",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_Reject_operation_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded207.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify User is able to create operation to approve from Tasklist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_OP05"
    },
    {
      "name": "@Operation"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Create \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to create operation to approve from Tasklist form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Operation",
        "4"
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
formatter.embedding("image/png", "embedded208.png", null);
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
formatter.embedding("image/png", "embedded209.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify User is able to create operation to approve from Tasklist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Operation"
    },
    {
      "name": "@Test_Id_OP05"
    },
    {
      "name": "@Operation"
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
formatter.embedding("image/png", "embedded210.png", null);
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
formatter.embedding("image/png", "embedded211.png", null);
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
formatter.embedding("image/png", "embedded212.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded213.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded214.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Create \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded215.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded216.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to create operation to approve from Tasklist form from given sheetname \"Operation\" and rownumber 4",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_create_operation_to_approve_from_Tasklist_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded217.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify User is able to approve operation from task list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_OP06"
    },
    {
      "name": "@Operation"
    }
  ]
});
formatter.step({
  "name": "user launches application \"PROFICIENT\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 15000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Task List\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to approve operation from task list form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Operation",
        "5"
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
formatter.embedding("image/png", "embedded218.png", null);
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
formatter.embedding("image/png", "embedded219.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify User is able to approve operation from task list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Operation"
    },
    {
      "name": "@Test_Id_OP06"
    },
    {
      "name": "@Operation"
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
formatter.embedding("image/png", "embedded220.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded221.png", null);
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
formatter.embedding("image/png", "embedded222.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Task List\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded223.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded224.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to approve operation from task list form from given sheetname \"Operation\" and rownumber 5",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_approve_operation_from_task_list_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded225.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify User is able to create operation to reject from Tasklist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_OP07"
    },
    {
      "name": "@Operation"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Create \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to create operation to reject from Tasklist form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Operation",
        "6"
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
formatter.embedding("image/png", "embedded226.png", null);
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
formatter.embedding("image/png", "embedded227.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify User is able to create operation to reject from Tasklist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Operation"
    },
    {
      "name": "@Test_Id_OP07"
    },
    {
      "name": "@Operation"
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
formatter.embedding("image/png", "embedded228.png", null);
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
formatter.embedding("image/png", "embedded229.png", null);
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
formatter.embedding("image/png", "embedded230.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Operations \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded231.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded232.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[@class\u003d\u0027mat-list-item-content\u0027 and text()\u003d\u0027Create \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded233.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded234.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to create operation to reject from Tasklist form from given sheetname \"Operation\" and rownumber 6",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_create_operation_to_reject_from_Tasklist_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded235.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify User is able to reject operation from task list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_OP08"
    },
    {
      "name": "@Operation"
    }
  ]
});
formatter.step({
  "name": "user launches application \"PROFICIENT\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 15000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Task List\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to reject operation from task list form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Operation",
        "7"
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
formatter.embedding("image/png", "embedded236.png", null);
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
formatter.embedding("image/png", "embedded237.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify User is able to reject operation from task list",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Operation"
    },
    {
      "name": "@Test_Id_OP08"
    },
    {
      "name": "@Operation"
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
formatter.embedding("image/png", "embedded238.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"approverEmail\",\"approverPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded239.png", null);
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
formatter.embedding("image/png", "embedded240.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Task List\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded241.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 3000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded242.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to reject operation from task list form from given sheetname \"Operation\" and rownumber 7",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_reject_operation_from_task_list_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded243.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Report.feature");
formatter.feature({
  "name": "feature to test Upload Document functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Reports"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test_Id_R01 Verify User is able to Create New Report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_R01"
    },
    {
      "name": "@Reports"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Create New Report\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to Create the New Report form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "CreateReports",
        "0"
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
formatter.embedding("image/png", "embedded244.png", null);
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
formatter.embedding("image/png", "embedded245.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_R01 Verify User is able to Create New Report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Reports"
    },
    {
      "name": "@Test_Id_R01"
    },
    {
      "name": "@Reports"
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
formatter.embedding("image/png", "embedded246.png", null);
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
formatter.embedding("image/png", "embedded247.png", null);
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
formatter.embedding("image/png", "embedded248.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded249.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded250.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Create New Report\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded251.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded252.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify user is able to Create the New Report form from given sheetname \"CreateReports\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_Create_the_New_Report_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded253.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_R02 Verify User is able to Search Report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_R02"
    },
    {
      "name": "@Reports"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Search Reports\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to Search Report form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "SearchReport",
        "0"
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
formatter.embedding("image/png", "embedded254.png", null);
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
formatter.embedding("image/png", "embedded255.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_R02 Verify User is able to Search Report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Reports"
    },
    {
      "name": "@Test_Id_R02"
    },
    {
      "name": "@Reports"
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
formatter.embedding("image/png", "embedded256.png", null);
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
formatter.embedding("image/png", "embedded257.png", null);
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
formatter.embedding("image/png", "embedded258.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded259.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded260.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Search Reports\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded261.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded262.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to Search Report form from given sheetname \"SearchReport\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_Search_Report_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded263.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_R03 Verify User is able to Save the Report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_R03"
    },
    {
      "name": "@Reports"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Create New Report\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to Save the Report form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "CreateReports",
        "1"
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
formatter.embedding("image/png", "embedded264.png", null);
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
formatter.embedding("image/png", "embedded265.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_R03 Verify User is able to Save the Report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Reports"
    },
    {
      "name": "@Test_Id_R03"
    },
    {
      "name": "@Reports"
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
formatter.embedding("image/png", "embedded266.png", null);
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
formatter.embedding("image/png", "embedded267.png", null);
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
formatter.embedding("image/png", "embedded268.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded269.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded270.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Create New Report\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded271.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded272.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to Save the Report form from given sheetname \"CreateReports\" and rownumber 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_Save_the_Report_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded273.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_R04 Verify User is able to generate the draft report from the search reports",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_R04"
    },
    {
      "name": "@Reports"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Search Reports\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to generate the draft report from the search reports form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "SearchReport",
        "1"
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
formatter.embedding("image/png", "embedded274.png", null);
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
formatter.embedding("image/png", "embedded275.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_R04 Verify User is able to generate the draft report from the search reports",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Reports"
    },
    {
      "name": "@Test_Id_R04"
    },
    {
      "name": "@Reports"
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
formatter.embedding("image/png", "embedded276.png", null);
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
formatter.embedding("image/png", "embedded277.png", null);
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
formatter.embedding("image/png", "embedded278.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded279.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded280.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Search Reports\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded281.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded282.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to generate the draft report from the search reports form from given sheetname \"SearchReport\" and rownumber 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_generate_the_draft_report_from_the_search_reports_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded283.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_R05 Verify User is able to Create My DCR Report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_R05"
    },
    {
      "name": "@Reports"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//span[text()\u003d\u0027 My DCR Reports \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is able to Create the My DCR Report form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "CreateMyDCRReport",
        "0"
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
formatter.embedding("image/png", "embedded284.png", null);
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
formatter.embedding("image/png", "embedded285.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_R05 Verify User is able to Create My DCR Report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Reports"
    },
    {
      "name": "@Test_Id_R05"
    },
    {
      "name": "@Reports"
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
formatter.embedding("image/png", "embedded286.png", null);
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
formatter.embedding("image/png", "embedded287.png", null);
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
formatter.embedding("image/png", "embedded288.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded289.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded290.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//span[text()\u003d\u0027 My DCR Reports \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded291.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded292.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "verify user is able to Create the My DCR Report form from given sheetname \"CreateMyDCRReport\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_user_is_able_to_Create_the_My_DCR_Report_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@class\u003d\u0027mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today\u0027] (tried for 16 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat StepDefinitions.Steps.verify_user_is_able_to_Create_the_My_DCR_Report_form_from_given_sheetname_and_rownumber(Steps.java:1657)\r\n\tat ✽.verify user is able to Create the My DCR Report form from given sheetname \"CreateMyDCRReport\" and rownumber 0(file:src/test/resources/Features/Report.feature:89)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@class\u003d\u0027mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-8CLCIT0E\u0027, ip: \u0027192.168.1.213\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.6\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\r\n\tat java.base/java.util.Optional.orElseThrow(Optional.java:403)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:644)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat StepDefinitions.Steps.verify_user_is_able_to_Create_the_My_DCR_Report_form_from_given_sheetname_and_rownumber(Steps.java:1657)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded293.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded294.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_R06 Verify User is able to Create Site Diary",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_R06"
    },
    {
      "name": "@Reports"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Site Diary\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to Create Site Diary form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Site Diary",
        "0"
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
formatter.embedding("image/png", "embedded295.png", null);
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
formatter.embedding("image/png", "embedded296.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_R06 Verify User is able to Create Site Diary",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Reports"
    },
    {
      "name": "@Test_Id_R06"
    },
    {
      "name": "@Reports"
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
formatter.embedding("image/png", "embedded297.png", null);
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
formatter.embedding("image/png", "embedded298.png", null);
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
formatter.embedding("image/png", "embedded299.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded300.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded301.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Site Diary\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded302.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded303.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to Create Site Diary form from given sheetname \"Site Diary\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_Create_Site_Diary_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded304.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_R07 Verify User is able to Create Week Report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_R07"
    },
    {
      "name": "@Reports"
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
  "name": "user sleep for 10000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Week Report\u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to Create Week Report form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Week Report",
        "0"
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
formatter.embedding("image/png", "embedded305.png", null);
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
formatter.embedding("image/png", "embedded306.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_R07 Verify User is able to Create Week Report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Reports"
    },
    {
      "name": "@Test_Id_R07"
    },
    {
      "name": "@Reports"
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
formatter.embedding("image/png", "embedded307.png", null);
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
formatter.embedding("image/png", "embedded308.png", null);
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
formatter.embedding("image/png", "embedded309.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Reports \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded310.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded311.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Week Report\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded312.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded313.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to Create Week Report form from given sheetname \"Week Report\" and rownumber 0",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_Create_Week_Report_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded314.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Setup.feature");
formatter.feature({
  "name": "feature to test Upload Document functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Setup"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test_Id_S01 Verify User is able to Create user setup",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_S01"
    },
    {
      "name": "@Setup"
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
  "name": "Click on element \"//*[text()\u003d\u0027 Setup \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027User Setup \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to Create user setup form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Createusersetup",
        "0"
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
formatter.embedding("image/png", "embedded315.png", null);
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
formatter.embedding("image/png", "embedded316.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_S01 Verify User is able to Create user setup",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Setup"
    },
    {
      "name": "@Test_Id_S01"
    },
    {
      "name": "@Setup"
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
formatter.embedding("image/png", "embedded317.png", null);
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
formatter.embedding("image/png", "embedded318.png", null);
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
formatter.embedding("image/png", "embedded319.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Setup \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded320.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded321.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027User Setup \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded322.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded323.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to Create user setup form from given sheetname \"Createusersetup\" and rownumber 0",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.embedding("image/png", "embedded324.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test_Id_S02 Verify User is able to Create project setup",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test_Id_S02"
    },
    {
      "name": "@Setup"
    }
  ]
});
formatter.step({
  "name": "user launches application \"PROFICIENT\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides \"AdminEmail\",\"AdminPassword\" and logs into application",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 15000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Setup \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Project Setup \u0027]\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.step({
  "name": "Verify User is able to Create project setup form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
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
        "Createusersetup",
        "1"
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
formatter.embedding("image/png", "embedded325.png", null);
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
formatter.embedding("image/png", "embedded326.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Test_Id_S02 Verify User is able to Create project setup",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Setup"
    },
    {
      "name": "@Test_Id_S02"
    },
    {
      "name": "@Setup"
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
formatter.embedding("image/png", "embedded327.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user provides \"AdminEmail\",\"AdminPassword\" and logs into application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_and_logs_into_application(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded328.png", null);
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
formatter.embedding("image/png", "embedded329.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027 Setup \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded330.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded331.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Click on element \"//*[text()\u003d\u0027Project Setup \u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_element(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded332.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user sleep for 5000 miliseconds",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_sleep_for_seconds(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded333.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "Verify User is able to Create project setup form from given sheetname \"Createusersetup\" and rownumber 1",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.verify_User_is_able_to_Create_project_setup_form_from_given_sheetname_and_rownumber(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded334.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});