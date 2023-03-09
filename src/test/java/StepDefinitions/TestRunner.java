package StepDefinitions;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features", glue= {"StepDefinitions"} ,monochrome =true, 
plugin= {"html:Reports/PROFICIENT_Detailed_Report","json:Reports/cucumber.json",
		 "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},tags="@Test_Id_D05")


public class TestRunner {
	
	
}
 