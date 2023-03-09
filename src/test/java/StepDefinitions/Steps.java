package StepDefinitions;
import static org.junit.Assert.assertEquals;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;

import StepDefinitions.Utilities.ExcelReader;

import StepDefinitions.Utilities.PropertyLoader;
import cucumber.api.Scenario;
import io.cucumber.datatable.dependency.com.fasterxml.jackson.databind.JsonNode;
import io.cucumber.datatable.dependency.com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.support.Color;

public class Steps{
	
	
   private static final String SheetName = null;
public WebDriver driver;
   
	
    @Given("user launches browser {string}")
    public WebDriver user_launches_browser(String browser) {
       if(browser.equalsIgnoreCase("chrome"))
       {
    	   System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\drivers\\chromedriver.exe");
    	    driver=new ChromeDriver();
            driver.manage().window().maximize();
            
       }
       else if(browser.equalsIgnoreCase("ie"))
       {
    	   System.setProperty("webdriver.ie.driver",System.getProperty("user.dir")+"\\drivers\\chromedriver.exe");
    	   driver=new InternetExplorerDriver();
           driver.manage().window().maximize(); 
       }
       else if(browser.equalsIgnoreCase("ie"))
       {
    	   System.setProperty("webdriver.gecko.driver",System.getProperty("user.dir")+"\\drivers\\chromedriver.exe");
    	   driver=new FirefoxDriver();
           driver.manage().window().maximize(); 
       }
       
       return driver;
    }

    @AfterStep
	  public void takeScreenshot(Scenario scenario)
	  {
		  
		  final byte [] screenshots = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		  scenario.embed(screenshots, "image/png");
		
	  }
	 @After
	 public void tearDown(Scenario scenario)
	 {
		 if (scenario.isFailed()) {
		        System.out.println("Scenario is Fail to Taking ScreenShot...!!!");
		        TakesScreenshot ts = (TakesScreenshot) driver;
		        byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
		        scenario.embed(screenshot, "image/png");
		 }
		 driver.close();
		
		     
	 }
		 



	  
	@Given("user launches application {string}")
	  public void user_launches_application(String envText) throws Throwable {
		
	      String url= readJsonEnvironmentFile(envText);
	      try
	      {
	    	  driver.get(url);
	    	  System.out.println("Application Launched" +url);
	      }
	      catch(Exception e)
	      {
	    	  System.out.println("Exception" + e.getMessage());
	    	  e.printStackTrace();
	      }
	      
	  }
	
	   @Given("user loads proprty file {string}") 
	public  void user_loads_proprty_file(String filepath) throws Throwable{
		   PropertyLoader.getInstance().loadRunProperties(filepath);
	  }
	  
	   @Given("user provides {string},{string} and logs into application")
	  public void user_provides_and_logs_into_application(String user, String pass) throws Throwable {
	      try
	      {
	    	  user = readJsonEnvironmentFile(user);
	    	  pass = readJsonEnvironmentFile(pass);
	    	  WebDriverWait wt = new WebDriverWait(driver,6);
	    	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@formcontrolname='email']"))).sendKeys(user);
	    	
	    	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@formcontrolname='password']"))).sendKeys(pass);
	    	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' Login']"))).click();
	    }
	      catch(org.openqa.selenium.TimeoutException e)
	      {
	    	  System.out.println("Already logged in"); 
	      }
	  }
	  //methods to read env file
	  public static String readJsonEnvironmentFile(String token) throws Throwable
	  {
	  FileReader fileread = null;
	 
	  JsonNode jsonNode = null;
	  String data = null;
	  try
	  {
		  fileread = new FileReader("./Resources/"+PropertyLoader.getInstance().getProperty("File"));
		  jsonNode = new ObjectMapper().readTree(fileread).get(PropertyLoader.getInstance().getProperty("Environment"));
	  
	       if(token.contains("."))
	       {
	    	   String tokenArray[]=token.split("\\.");
	    	   if (tokenArray.length==3)
	    	   
	    		   data= jsonNode.get(tokenArray[0]).get(tokenArray[1]).get(tokenArray[2]).toString().replaceAll("\"", "");
	    	  
	    	   else
	    	   {
	    		   data = jsonNode.get(tokenArray[0]).get(tokenArray[1]).toString();
	    		   if(!data.contains(","))
	    			   data = data.replaceAll("\"", "");
	    	   }
	    	   
	    		   
	       }
	       else
	       {
	    	   data = jsonNode.get(token).textValue();
	       }
	       if (data == null)
	       {
	    	   System.out.println("URL is NULL");
	       }
	  }
	  catch(Exception e)
      {
    	  System.out.println("Exception" + e.getMessage());
    	  e.printStackTrace();
      }
	  finally
	  {
		  fileread.close();
	  }
	   return data;
	  }
	  
		@Then("Click on element {string}")
		public void click_on_element(String element) {
			//JavascriptExecutor js = (JavascriptExecutor) driver;
			//js.executeScript("window.scrollBy(0,-250)");
			
			  WebDriverWait wt = new WebDriverWait(this.driver,6);
	    	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath(element))).click();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			
			
		}
		 		 
		 @Given("Verify user is able to search element {string} in searchbox with {string}")
		 public void verify_user_is_able_to_search_element_in_searchbox_with(String searchElement, String ExpectedSearchElement) {
			  String ActualSearchKeyword= driver.findElement(By.xpath(searchElement)).getText();
			     
			     driver.findElement(By.xpath("//*[@data-placeholder='Search here']")).sendKeys(ActualSearchKeyword);
			     driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
			     String ExpectedSearchKeyword=driver.findElement(By.xpath(ExpectedSearchElement)).getText();
			     boolean secondRow=driver.findElement(By.xpath("//tbody[@role='rowgroup']/tr[2]")).isDisplayed();
			     Assert.assertTrue("Search functionality is not working or invalid data", secondRow);
			   assertEquals("search result is not matching with created data", ExpectedSearchKeyword, ActualSearchKeyword); 
			
		 }
		
		 
		
		 
        @Given("user is able to see created data {string} at top row {string} from given sheetname {string} and rownumber {int}")
         public void user_is_able_to_see_created_data_at_top_row_from_given_sheetname_and_rownumber(String ExcelColumn, String ActualData, String SheetName, Integer RowNumber) throws InvalidFormatException, IOException 
        {
	       ExcelReader reader = new ExcelReader();
	       List   <Map<String,String>> testData = reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
        	String ActualValue=driver.findElement(By.xpath(ActualData)).getText();
	       String ExpectedValue = testData.get(RowNumber).get(ExcelColumn);
        	Assert.assertEquals("Data is not created", ExpectedValue,ActualValue);
       }


		 @Given("selects from date from calender with date {string}")
		 public void selects_from_date_from_calender_with_date(String FromDate) throws InterruptedException {
			 WebElement TodateSelected=driver.findElements(By.xpath("//img[@src='../../../../assets/icons/calender.svg']")).get(0);
			 TodateSelected.click();
			 Thread.sleep(100);
			 List<WebElement> dates=driver.findElements(By.xpath("//tbody[@class='mat-calendar-body']//td"));
			 int total_node=dates.size();
			 for(int i=0;i<total_node;i++)
			 {
				 String date=dates.get(i).getText();
				 if(date.equals(FromDate))
				 {
					 dates.get(i).click();
					 break;
					
				 }
				 Thread.sleep(100);
			 }
		 }
		 
		 @Given("selects to date from calender with date {string}")
		 public void selects_to_date_from_calender_with_date(String ToDate) throws InterruptedException {
			 WebElement TodateSelected=driver.findElements(By.xpath("//img[@src='../../../../assets/icons/calender.svg']")).get(1);
			 TodateSelected.click();
			 Thread.sleep(100);
			 List<WebElement> dates=driver.findElements(By.xpath("//tbody[@class='mat-calendar-body']//td"));
			 int total_node=dates.size();
			 for(int i=0;i<total_node;i++)
			 {
				 String date=dates.get(i).getText();
				 if(date.equals(ToDate))
				 {
					 dates.get(i).click();
					 break;
					
				 }
				 Thread.sleep(100);
			 }
		 }

        @Given("choose the image on element {string} with image {string}")
		 public void choose_the_image_on_element_with_image(String Element, String Image) {
			 driver.findElement(By.xpath(Element)).sendKeys(System.getProperty("user.dir")+Image);
		 }

		 @Given("user refresh the page")
		 public void user_refresh_the_page() {
		     driver.navigate().refresh();
		 }
		 
		

		 @Given("user wait for {int} seconds")
		 public void user_wait_for_seconds(Integer time) {
			 driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);
		 }
		 @Given("user sleep for {int} miliseconds")
		 public void user_sleep_for_seconds(Integer int1) throws InterruptedException {
		     Thread.sleep(int1);
		 }

		 @Given("user click on edit option")
		 public void user_click_on_edit_option() {
			  WebElement EditIcon= driver.findElements(By.xpath("//*[@src='../../../../../assets/icons/more.svg']")).get(0);
			  Actions builder = new Actions(driver);
			  builder.moveToElement(EditIcon).build().perform();
			  EditIcon.click();
			  WebElement EditButton= driver.findElement(By.xpath("//button[text()=' Edit ']"));
			  builder.moveToElement(EditButton).build().perform();
			  EditButton.click();
		 }

	
		 
		 
		 @Given("verify element {string} is disabled")
		 public void verify_element_is_disabled(String element) {
			  boolean dateSelected=driver.findElement(By.xpath(element)).isEnabled();
			  Assert.assertTrue("Effective To date is Enabled", dateSelected);
		 }
   
		



@Given("user provides {string},{string} and logs into application from given sheetname {string} and rownumber {int}")
public void user_provides_and_logs_into_application_from_given_sheetname_and_rownumber(String Uname, String Password, String SheetName, Integer RowNumber) throws InvalidFormatException, IOException {
	ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
			reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	String UserName = testData.get(RowNumber).get(Uname);
	String Passwrd = testData.get(RowNumber).get(Password);
	WebDriverWait wt = new WebDriverWait(driver,6);
	  wt.until(ExpectedConditions.elementToBeClickable(By.id("mat-input-0"))).sendKeys(UserName);
	  wt.until(ExpectedConditions.elementToBeClickable(By.className("signinbtn"))).click();
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@name='password']"))).sendKeys(Passwrd);
	  wt.until(ExpectedConditions.elementToBeClickable(By.className("signinbtn"))).click();
}


//scenario 1//

@Given("verify user is able to fill the upload document form from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_fill_the_upload_document_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException 
{
	ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
			reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	
	String Title = testData.get(RowNumber).get("Column3");
	String DType = testData.get(RowNumber).get("Column4");
	String Discipline = testData.get(RowNumber).get("Column5");
	String stage = testData.get(RowNumber).get("Column6");
	String Purpose = testData.get(RowNumber).get("Column7");
	String PrimaryApprover = testData.get(RowNumber).get("Column8");
	
	
	//driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys("F:\\PROFICIENT\\PROFICIENT\\Fixture\\22.ssh config.pdf");
	//Thread.sleep(1000);
	//driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys(System.getProperty("user.dir")+"/Fixture/30. SELinux Advance.pdf");
	//Thread.sleep(2000);
	
	driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys(System.getProperty("user.dir")+"/Fixture/Simbiotik symbal.jpeg");
	Thread.sleep(1000);
	//driver.findElement(By.xpath("(//input[@class='multiplefile'])[2]")).sendKeys(System.getProperty("user.dir")+"/Fixture/30. SELinux Advance.pdf");
	//Thread.sleep(1000);
	//driver.findElement(By.xpath("//button[text()=' Link Document']")).click();

	//Thread.sleep(1000); 
    //driver.findElement(By.xpath("//*[@id='mat-checkbox-3']")).click();

	//Thread.sleep(2000);
    //driver.findElement(By.xpath("//span[contains (text(), 'attach')]")).click();
	
	
	
	WebDriverWait wt = new WebDriverWait(this.driver,6);
	Random rand = new Random();
    int DocN = rand.nextInt(1000);
    String Doc= "D"+DocN;
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='docNumber']"))).sendKeys(Doc);
	Thread.sleep(2000);
	Random rand1 = new Random();
    int RevN = rand1.nextInt(1000);
    String Rev= "R"+RevN;
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='revisionNumber']"))).sendKeys(Rev);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='title']"))).sendKeys(Title);
	Thread.sleep(2000);
	JavascriptExecutor jse1 = (JavascriptExecutor)driver;
	 WebElement element1=driver.findElement (By.xpath("(//*[@placeholder='Please select'])[1]"));
    jse1.executeScript("arguments[0].scrollIntoView()", element1);
	 element1.click();
	 Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+Discipline+ "')]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@placeholder='Please select'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+Purpose+ "')]"))).click();
	Thread.sleep(2000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	 WebElement element=driver.findElement (By.xpath("(//*[@placeholder='Please select'])[3]"));
     jse.executeScript("arguments[0].scrollIntoView()", element);
 	 element.click();
 	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+DType+ "')]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@placeholder='Please select'])[4]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+stage+ "')]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell mat-calendar-body-active ng-star-inserted']"))).click();
	Thread.sleep(2000);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(PrimaryApprover);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(Keys.ENTER);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-checkbox-inner-container'])[1]"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' CREATE']"))).click();
	Thread.sleep(15000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Search Document ']"))).click();
	Thread.sleep(10000);
	//String ActualDoc=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).getText();
	//Assert.assertEquals("Doc No is not matching", Doc, ActualDoc);
	//String ActualRev=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[6]"))).getText();
	//Assert.assertEquals("Rev No is not matching", Rev, ActualRev);
	}

//scenario2//

@Given("verify user is able to approve the document form from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_approve_the_document_form_from_given_sheetname_and_rownumber(String SheetName,Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException {

   ExcelReader reader= new ExcelReader();
   List<Map<String,String>> testData =
   reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
   String MysubmissionAction = testData.get(RowNumber).get("Column1");
   JavascriptExecutor jse = (JavascriptExecutor)driver;
   WebElement element=driver.findElement (By.xpath("//input[@placeholder='Please select']"));
   jse.executeScript("arguments[0].scrollIntoView()", element);
   element.click();
   Thread.sleep(2000);
   WebDriverWait wt = new WebDriverWait(driver,15);
   wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+MysubmissionAction+" ']"))).click();
   Thread.sleep(2000);
   //wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[contains (text(), ' approve ')]"))).click();
   //Thread.sleep(3000);
   JavascriptExecutor jse1 = (JavascriptExecutor)driver;
   WebElement element1=driver.findElement (By.xpath("//span[text()=' CREATE']"));
   jse1.executeScript("arguments[0].scrollIntoView()", element1);
   element1.click();
   Thread.sleep(2000);
   
   //scenario3//
}
   @Given("Verify User is able to create document for reject form from given sheetname {string} and rownumber {int}")
   public void verify_User_is_able_to_create_document_for_reject_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException  {
 
	   ExcelReader reader = new ExcelReader();
		List<Map<String,String>> testData = 
				reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
		
		String Title = testData.get(RowNumber).get("Column3");
		String DType = testData.get(RowNumber).get("Column4");
		String Discipline = testData.get(RowNumber).get("Column5");
		String stage = testData.get(RowNumber).get("Column6");
		String Purpose = testData.get(RowNumber).get("Column7");
		String PrimaryApprover = testData.get(RowNumber).get("Column8");
		
		
		//driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys("F:\\PROFICIENT\\PROFICIENT\\Fixture\\22.ssh config.pdf");
		//Thread.sleep(1000);
		//driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys(System.getProperty("user.dir")+"/Fixture/30. SELinux Advance.pdf");
		//Thread.sleep(2000);
		
		driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys(System.getProperty("user.dir")+"/Fixture/Snap game 01.png");
		Thread.sleep(1000);
		//driver.findElement(By.xpath("(//input[@class='multiplefile'])[2]")).sendKeys(System.getProperty("user.dir")+"/Fixture/30. SELinux Advance.pdf");
		//Thread.sleep(1000);
		//driver.findElement(By.xpath("//button[text()=' Link Document']")).click();

		//Thread.sleep(1000); 
	    //driver.findElement(By.xpath("//*[@id='mat-checkbox-3']")).click();

		//Thread.sleep(2000);
	    //driver.findElement(By.xpath("//span[contains (text(), 'attach')]")).click();
		
		
		
		WebDriverWait wt = new WebDriverWait(this.driver,6);
		Random rand = new Random();
	    int DocN = rand.nextInt(1000);
	    String Doc= "D"+DocN;
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='docNumber']"))).sendKeys(Doc);
		Thread.sleep(2000);
		Random rand1 = new Random();
	    int RevN = rand1.nextInt(1000);
	    String Rev= "R"+RevN;
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='revisionNumber']"))).sendKeys(Rev);
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[1]"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='title']"))).sendKeys(Title);
		Thread.sleep(2000);
		JavascriptExecutor jse1 = (JavascriptExecutor)driver;
		WebElement element1=driver.findElement (By.xpath("(//*[@placeholder='Please select'])[1]"));
	    jse1.executeScript("arguments[0].scrollIntoView()", element1);
		element1.click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+Discipline+ "')]"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@placeholder='Please select'])[2]"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+Purpose+ "')]"))).click();
		Thread.sleep(2000);
		JavascriptExecutor jse = (JavascriptExecutor)driver;
	    WebElement element=driver.findElement (By.xpath("(//*[@placeholder='Please select'])[3]"));
	    jse.executeScript("arguments[0].scrollIntoView()", element);
	 	element.click();
	 	Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+DType+ "')]"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@placeholder='Please select'])[4]"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+stage+ "')]"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[2]"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell mat-calendar-body-active ng-star-inserted']"))).click();
		Thread.sleep(2000);
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(PrimaryApprover);
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(Keys.ENTER);
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-checkbox-inner-container'])[1]"))).click();
		Thread.sleep(4000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' CREATE']"))).click();
		Thread.sleep(15000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Search Document ']"))).click();
		Thread.sleep(10000);
		String ActualDoc=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).getText();
		Assert.assertEquals("Doc No is not matching", Doc, ActualDoc);
		String ActualRev=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[6]"))).getText();
		Assert.assertEquals("Rev No is not matching", Rev, ActualRev);
		}
   

//scenario4//

@Given("verify user is able to reject the document form from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_reject_the_document_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)  throws InvalidFormatException, IOException, InterruptedException {
	   WebDriverWait wt = new WebDriverWait(this.driver,6);
	   ExcelReader reader= new ExcelReader();
	   List<Map<String,String>> testData =
	   reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	   String MysubmissionAction = testData.get(RowNumber).get("Column1");
	  
	  JavascriptExecutor jse = (JavascriptExecutor)driver;
	  WebElement element=driver.findElement (By.xpath("//input[@placeholder='Please select']"));
	  jse.executeScript("arguments[0].scrollIntoView()", element);
	  Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@placeholder='Please select']"))).click();
	  Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+MysubmissionAction+" ']"))).click();
	  Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' CREATE']"))).click();
	  Thread.sleep(2000);
}

//scenario5//

@Given("Verify User is able to create document approve from Tasklist form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_create_document_approve_from_Tasklist_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException 
{
	ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
			reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	
	String Title = testData.get(RowNumber).get("Column3");
	String DType = testData.get(RowNumber).get("Column4");
	String Discipline = testData.get(RowNumber).get("Column5");
	String stage = testData.get(RowNumber).get("Column6");
	String Purpose = testData.get(RowNumber).get("Column7");
	String PrimaryApprover = testData.get(RowNumber).get("Column8");
	
	
	//driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys("F:\\PROFICIENT\\PROFICIENT\\Fixture\\22.ssh config.pdf");
	//Thread.sleep(1000);
	//driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys(System.getProperty("user.dir")+"/Fixture/30. SELinux Advance.pdf");
	//Thread.sleep(2000);
	
	driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys(System.getProperty("user.dir")+"/Fixture/Snap game 06.png");
	Thread.sleep(1000);
	//driver.findElement(By.xpath("(//input[@class='multiplefile'])[2]")).sendKeys(System.getProperty("user.dir")+"/Fixture/30. SELinux Advance.pdf");
	//Thread.sleep(1000);
	//driver.findElement(By.xpath("//button[text()=' Link Document']")).click();

	//Thread.sleep(1000); 
    //driver.findElement(By.xpath("//*[@id='mat-checkbox-3']")).click();

	//Thread.sleep(2000);
    //driver.findElement(By.xpath("//span[contains (text(), 'attach')]")).click();
	
	
	
	WebDriverWait wt = new WebDriverWait(this.driver,6);
	Random rand = new Random();
    int DocN = rand.nextInt(1000);
    String Doc= "D"+DocN;
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='docNumber']"))).sendKeys(Doc);
	Thread.sleep(2000);
	Random rand1 = new Random();
    int RevN = rand1.nextInt(1000);
    String Rev= "R"+RevN;
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='revisionNumber']"))).sendKeys(Rev);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='title']"))).sendKeys(Title);
	Thread.sleep(2000);
	JavascriptExecutor jse1 = (JavascriptExecutor)driver;
	 WebElement element1=driver.findElement (By.xpath("(//*[@placeholder='Please select'])[1]"));
    jse1.executeScript("arguments[0].scrollIntoView()", element1);
	 element1.click();
	 Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+Discipline+ "')]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@placeholder='Please select'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+Purpose+ "')]"))).click();
	Thread.sleep(2000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	 WebElement element=driver.findElement (By.xpath("(//*[@placeholder='Please select'])[3]"));
     jse.executeScript("arguments[0].scrollIntoView()", element);
 	 element.click();
 	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+DType+ "')]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@placeholder='Please select'])[4]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+stage+ "')]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell mat-calendar-body-active ng-star-inserted']"))).click();
	Thread.sleep(2000);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(PrimaryApprover);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(Keys.ENTER);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-checkbox-inner-container'])[1]"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' CREATE']"))).click();
	Thread.sleep(15000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Search Document ']"))).click();
	Thread.sleep(10000);
	String ActualDoc=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).getText();
	Assert.assertEquals("Doc No is not matching", Doc, ActualDoc);
	String ActualRev=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[6]"))).getText();
	Assert.assertEquals("Rev No is not matching", Rev, ActualRev);
	}



//scenario6//

@Given("Verify User is able to approve document from task list form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_approve_document_from_task_list_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)  throws InvalidFormatException, IOException, InterruptedException  {
	  WebDriverWait wt = new WebDriverWait(this.driver,6);
	  ExcelReader reader= new ExcelReader();
	   List<Map<String,String>> testData =
	   reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	  String MysubmissionAction = testData.get(RowNumber).get("Column1");
	  
	  JavascriptExecutor jse = (JavascriptExecutor)driver;
	  WebElement element=driver.findElement (By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"));
	  jse.executeScript("arguments[0].scrollIntoView()", element);
	  element.click();
	  Thread.sleep(2000);
 	  JavascriptExecutor jse1 = (JavascriptExecutor)driver;
	  WebElement element1=driver.findElement (By.xpath("//input[@placeholder='Please select']"));
	  jse1.executeScript("arguments[0].scrollIntoView()", element1);
	  element1.click();
	  Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+MysubmissionAction+" ']"))).click();
	  Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' CREATE']"))).click();
	  Thread.sleep(2000);
		
}

//scenario7//

@Given("Verify User is able to create document to reject from Tasklist form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_create_document_to_reject_from_Tasklist_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)throws InvalidFormatException, IOException, InterruptedException
{
	ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
			reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	
	String Title = testData.get(RowNumber).get("Column3");
	String DType = testData.get(RowNumber).get("Column4");
	String Discipline = testData.get(RowNumber).get("Column5");
	String stage = testData.get(RowNumber).get("Column6");
	String Purpose = testData.get(RowNumber).get("Column7");
	String PrimaryApprover = testData.get(RowNumber).get("Column8");
	
	
	//driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys("F:\\PROFICIENT\\PROFICIENT\\Fixture\\22.ssh config.pdf");
	//Thread.sleep(1000);
	//driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys(System.getProperty("user.dir")+"/Fixture/30. SELinux Advance.pdf");
	//Thread.sleep(2000);
	
	driver.findElement(By.xpath("(//input[@class='multiplefile'])[1]")).sendKeys(System.getProperty("user.dir")+"/Fixture/Snap game -2.mp4");
	Thread.sleep(1000);
	//driver.findElement(By.xpath("(//input[@class='multiplefile'])[2]")).sendKeys(System.getProperty("user.dir")+"/Fixture/30. SELinux Advance.pdf");
	//Thread.sleep(1000);
	//driver.findElement(By.xpath("//button[text()=' Link Document']")).click();

	//Thread.sleep(1000); 
    //driver.findElement(By.xpath("//*[@id='mat-checkbox-3']")).click();

	//Thread.sleep(2000);
    //driver.findElement(By.xpath("//span[contains (text(), 'attach')]")).click();
	
	
	
	WebDriverWait wt = new WebDriverWait(this.driver,6);
	Random rand = new Random();
    int DocN = rand.nextInt(1000);
    String Doc= "D"+DocN;
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='docNumber']"))).sendKeys(Doc);
	Thread.sleep(2000);
	Random rand1 = new Random();
    int RevN = rand1.nextInt(1000);
    String Rev= "R"+RevN;
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='revisionNumber']"))).sendKeys(Rev);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='title']"))).sendKeys(Title);
	Thread.sleep(2000);
	JavascriptExecutor jse1 = (JavascriptExecutor)driver;
	 WebElement element1=driver.findElement (By.xpath("(//*[@placeholder='Please select'])[1]"));
    jse1.executeScript("arguments[0].scrollIntoView()", element1);
    element1.click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+Discipline+ "')]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@placeholder='Please select'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+Purpose+ "')]"))).click();
	Thread.sleep(2000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	 WebElement element=driver.findElement (By.xpath("(//*[@placeholder='Please select'])[3]"));
     jse.executeScript("arguments[0].scrollIntoView()", element);
 	 element.click();
 	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+DType+ "')]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@placeholder='Please select'])[4]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+stage+ "')]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell mat-calendar-body-active ng-star-inserted']"))).click();
	Thread.sleep(2000);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(PrimaryApprover);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(Keys.ENTER);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-checkbox-inner-container'])[1]"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' CREATE']"))).click();
	Thread.sleep(15000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Search Document ']"))).click();
	Thread.sleep(10000);
	String ActualDoc=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).getText();
	Assert.assertEquals("Doc No is not matching", Doc, ActualDoc);
	String ActualRev=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[6]"))).getText();
	Assert.assertEquals("Rev No is not matching", Rev, ActualRev);
	
}

//scenario8//

@Given("verify user is able to reject the document from task list form from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_reject_the_document_from_task_list_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException  {
	WebDriverWait wt = new WebDriverWait(this.driver,6);
	  ExcelReader reader= new ExcelReader();
	   List<Map<String,String>> testData =
	   reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	  String MysubmissionAction = testData.get(RowNumber).get("Column1");
	  
	  JavascriptExecutor jse = (JavascriptExecutor)driver;
	  WebElement element=driver.findElement (By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"));
	  jse.executeScript("arguments[0].scrollIntoView()", element);
	  element.click();
	  Thread.sleep(2000);
	  JavascriptExecutor jse1 = (JavascriptExecutor)driver;
	  WebElement element1=driver.findElement (By.xpath("//input[@placeholder='Please select']"));
	  jse1.executeScript("arguments[0].scrollIntoView()", element1);
	  element1.click();
	  Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+MysubmissionAction+" ']"))).click();
		 Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' CREATE']"))).click();
	  Thread.sleep(2000);
}




////Operation//////

@Given("verify user is able to fill the Operation form from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_fill_the_Operation_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException {
 
	ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
			reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	
	String OperationType = testData.get(RowNumber).get("Column1");
	String Discipline = testData.get(RowNumber).get("Column2");
	String Purpose = testData.get(RowNumber).get("Column3");
	String Location = testData.get(RowNumber).get("Column4");
	String PrimaryApprover = testData.get(RowNumber).get("Column5");
	String ODesc = testData.get(RowNumber).get("Column6");
	Random rand = new Random();
    int OTitle = rand.nextInt(1000);
    String OTitlee= "O"+OTitle;
    WebDriverWait wt = new WebDriverWait(this.driver,6);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+OperationType+" ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Discipline+" ']"))).click();
	Thread.sleep(2000);	
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='title']"))).sendKeys(OTitlee);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[3]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Purpose+" ']"))).click();
	Thread.sleep(2000);		
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[4]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Location+" ']"))).click();
	Thread.sleep(2000);		
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//td[@class='mat-calendar-body-cell ng-star-inserted'])[1]"))).click();
    Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='description']"))).sendKeys(ODesc);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(PrimaryApprover);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(Keys.ENTER);
	Thread.sleep(2000);
	
	JavascriptExecutor jse1 = (JavascriptExecutor)driver;
    WebElement element1=driver.findElement (By.xpath("//*[text()=' Submit']"));
    jse1.executeScript("arguments[0].scrollIntoView()", element1);
    element1.click();
	Thread.sleep(5000);
    
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Search ']"))).click();
	Thread.sleep(8000);
	String ActualTitle=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[2]"))).getText();
	Assert.assertEquals("Operation title is not matching", OTitlee, ActualTitle);
	
	
}

///Approve operation///
@Given("verify user is able to approve the Operation form from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_approve_the_Operation_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InterruptedException, InvalidFormatException, IOException {
   

      ExcelReader reader = new ExcelReader();
      List<Map<String,String>> testData = 
	  reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);

     String SubmissionAction = testData.get(RowNumber).get("Column1");
     //String Discipline = testData.get(RowNumber).get("Column2");
     //String PrimaryApprover = testData.get(RowNumber).get("Column5");
     //Random rand = new Random();
     //int OTitle = rand.nextInt(1000);
     //String OTitlee= "O"+OTitle;
      WebDriverWait wt = new WebDriverWait(this.driver,6);
      wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//tr[@class='mat-row cdk-row ng-star-inserted'])[1]"))).click();
      Thread.sleep(2000);
      wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@placeholder='open']"))).click();
      Thread.sleep(2000);
      wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+SubmissionAction+" ']"))).click();
      Thread.sleep(2000);
 
     WebElement element1=driver.findElement (By.xpath("//*[text()=' Save']"));
     JavascriptExecutor jse1=(JavascriptExecutor)driver;
     jse1.executeScript("arguments[0].scrollIntoView()", element1);
     element1.click();
	 Thread.sleep(5000);
	 
}
///Create opration for Reject////
@Given("Verify User is able to create operation for reject form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_create_operation_for_reject_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException  {
	ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
			reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	
	String OperationType = testData.get(RowNumber).get("Column1");
	String Discipline = testData.get(RowNumber).get("Column2");
	String Purpose = testData.get(RowNumber).get("Column3");
	String Location = testData.get(RowNumber).get("Column4");
	String PrimaryApprover = testData.get(RowNumber).get("Column5");
	String ODesc = testData.get(RowNumber).get("Column6");
	Random rand = new Random();
    int OTitle = rand.nextInt(1000);
    String OTitlee= "O"+OTitle;
    WebDriverWait wt = new WebDriverWait(this.driver,6);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+OperationType+" ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Discipline+" ']"))).click();
	Thread.sleep(2000);	
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='title']"))).sendKeys(OTitlee);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[3]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Purpose+" ']"))).click();
	Thread.sleep(2000);		
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[4]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Location+" ']"))).click();
	Thread.sleep(2000);		
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//td[@class='mat-calendar-body-cell ng-star-inserted'])[1]"))).click();
    Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='description']"))).sendKeys(ODesc);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(PrimaryApprover);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(Keys.ENTER);
	Thread.sleep(2000);
	
	JavascriptExecutor jse1 = (JavascriptExecutor)driver;
    WebElement element1=driver.findElement (By.xpath("//*[text()=' Submit']"));
    jse1.executeScript("arguments[0].scrollIntoView()", element1);
    element1.click();
	Thread.sleep(5000);
    
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Search ']"))).click();
	Thread.sleep(8000);
	String ActualTitle=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[2]"))).getText();
	Assert.assertEquals("Operation title is not matching", OTitlee, ActualTitle);
}

///Reject operation///
@Given("Verify User is able to Reject operation form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_Reject_operation_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException  {
	ExcelReader reader = new ExcelReader();
    List<Map<String,String>> testData = 
	  reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);

   String SubmissionAction = testData.get(RowNumber).get("Column1");
   //String Discipline = testData.get(RowNumber).get("Column2");
   //String PrimaryApprover = testData.get(RowNumber).get("Column5");
   //Random rand = new Random();
   //int OTitle = rand.nextInt(1000);
   //String OTitlee= "O"+OTitle;
    WebDriverWait wt = new WebDriverWait(this.driver,6);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//tr[@class='mat-row cdk-row ng-star-inserted'])[1]"))).click();
    Thread.sleep(2000);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@placeholder='open']"))).click();
    Thread.sleep(2000);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+SubmissionAction+" ']"))).click();
    Thread.sleep(2000);

   WebElement element1=driver.findElement (By.xpath("//*[text()=' Save']"));
   JavascriptExecutor jse1=(JavascriptExecutor)driver;
   jse1.executeScript("arguments[0].scrollIntoView()", element1);
   element1.click();
   Thread.sleep(5000);
}

//create oper to approve from tasklist//

@Given("Verify User is able to create operation to approve from Tasklist form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_create_operation_to_approve_from_Tasklist_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException {
	ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
	reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	
	String OperationType = testData.get(RowNumber).get("Column1");
	String Discipline = testData.get(RowNumber).get("Column2");
	String Purpose = testData.get(RowNumber).get("Column3");
	String Location = testData.get(RowNumber).get("Column4");
	String PrimaryApprover = testData.get(RowNumber).get("Column5");
	String ODesc = testData.get(RowNumber).get("Column6");
	Random rand = new Random();
    int OTitle = rand.nextInt(1000);
    String OTitlee= "O"+OTitle;
    WebDriverWait wt = new WebDriverWait(this.driver,6);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+OperationType+" ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Discipline+" ']"))).click();
	Thread.sleep(2000);	
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='title']"))).sendKeys(OTitlee);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[3]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Purpose+" ']"))).click();
	Thread.sleep(2000);		
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[4]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Location+" ']"))).click();
	Thread.sleep(2000);		
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//td[@class='mat-calendar-body-cell ng-star-inserted'])[1]"))).click();
    Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='description']"))).sendKeys(ODesc);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(PrimaryApprover);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(Keys.ENTER);
	Thread.sleep(2000);
	
	JavascriptExecutor jse1 = (JavascriptExecutor)driver;
    WebElement element1=driver.findElement (By.xpath("//*[text()=' Submit']"));
    jse1.executeScript("arguments[0].scrollIntoView()", element1);
    element1.click();
	Thread.sleep(5000);
    
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Search ']"))).click();
	Thread.sleep(8000);
	String ActualTitle=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[2]"))).getText();
	Assert.assertEquals("Operation title is not matching", OTitlee, ActualTitle);
	   
}

//Approve from tasklist//
@Given("Verify User is able to approve operation from task list form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_approve_operation_from_task_list_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException {
	WebDriverWait wt = new WebDriverWait(this.driver,6);
	  ExcelReader reader= new ExcelReader();
	   List<Map<String,String>> testData =
	   reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	  String SubmissionAction = testData.get(RowNumber).get("Column1");
	  
	  JavascriptExecutor jse = (JavascriptExecutor)driver;
	  WebElement element=driver.findElement (By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"));
	  jse.executeScript("arguments[0].scrollIntoView()", element);
	  element.click();
	  Thread.sleep(2000);
	  JavascriptExecutor jse1 = (JavascriptExecutor)driver;
	  WebElement element1=driver.findElement (By.xpath("//*[@placeholder= 'open']"));
	  jse1.executeScript("arguments[0].scrollIntoView()", element1);
	  element1.click();
	  Thread.sleep(2000);
	  //wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder= 'open']"))).click();
	  //Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class= 'mat-option-text' and text()=' "+SubmissionAction+" ']"))).click();
	  Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' Save']"))).click();
	  Thread.sleep(2000);
		
}
//create oper to reject from tasklist//

@Given("Verify User is able to create operation to reject from Tasklist form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_create_operation_to_reject_from_Tasklist_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException  {
	ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
	reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	
	String OperationType = testData.get(RowNumber).get("Column1");
	String Discipline = testData.get(RowNumber).get("Column2");
	String Purpose = testData.get(RowNumber).get("Column3");
	String Location = testData.get(RowNumber).get("Column4");
	String PrimaryApprover = testData.get(RowNumber).get("Column5");
	String ODesc = testData.get(RowNumber).get("Column6");
	Random rand = new Random();
    int OTitle = rand.nextInt(1000);
    String OTitlee= "O"+OTitle;
    WebDriverWait wt = new WebDriverWait(this.driver,6);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+OperationType+" ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Discipline+" ']"))).click();
	Thread.sleep(2000);	
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='title']"))).sendKeys(OTitlee);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[3]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Purpose+" ']"))).click();
	Thread.sleep(2000);		
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='Please select'])[4]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+Location+" ']"))).click();
	Thread.sleep(2000);		
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-datepicker-toggle-default-icon ng-star-inserted'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//td[@class='mat-calendar-body-cell ng-star-inserted'])[1]"))).click();
    Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='description']"))).sendKeys(ODesc);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(PrimaryApprover);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[5]"))).sendKeys(Keys.ENTER);
	Thread.sleep(2000);
	
	JavascriptExecutor jse1 = (JavascriptExecutor)driver;
    WebElement element1=driver.findElement (By.xpath("//*[text()=' Submit']"));
    jse1.executeScript("arguments[0].scrollIntoView()", element1);
    element1.click();
	Thread.sleep(5000);
    
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Search ']"))).click();
	Thread.sleep(8000);
	String ActualTitle=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[2]"))).getText();
	Assert.assertEquals("Operation title is not matching", OTitlee, ActualTitle);
}

//reject operation from tasklist//

@Given("Verify User is able to reject operation from task list form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_reject_operation_from_task_list_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException  {
	WebDriverWait wt = new WebDriverWait(this.driver,6);
	  ExcelReader reader= new ExcelReader();
	   List<Map<String,String>> testData =
	   reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	 // String SubmissionAction = testData.get(RowNumber).get("Column1");
	  
	  JavascriptExecutor jse = (JavascriptExecutor)driver;
	  WebElement element=driver.findElement (By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"));
	  jse.executeScript("arguments[0].scrollIntoView()", element);
	  element.click();
	  Thread.sleep(2000);
	  JavascriptExecutor jse1 = (JavascriptExecutor)driver;
	  WebElement element1=driver.findElement (By.xpath("//*[@placeholder= 'open']"));
	  jse1.executeScript("arguments[0].scrollIntoView()", element1);
	  element1.click();
	  Thread.sleep(2000);
	  //wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder= 'open']"))).click();
	  //Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//span[@class= 'mat-option-text'])[4]"))).click();
	 // wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//span[@class= 'mat-option-text'])[4]]"))).click();
	  Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' Save']"))).click();
	  Thread.sleep(2000);
		
}
//wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class= 'mat-option-text' and text()=' "+SubmissionAction+" ']"))).click();
//Thread.sleep(2000);

@Given("verify user is able to Create the meeting form from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_Create_the_meeting_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException {
    
	 WebDriverWait wt = new WebDriverWait(this.driver,6);    
    ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
    reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
    
    String Title = testData.get(RowNumber).get("Column1");
    String MYType = testData.get(RowNumber).get("Column2");
    String Location = testData.get(RowNumber).get("Column3");
    String Invitees = testData.get(RowNumber).get("Column4");
    String Agenda = testData.get(RowNumber).get("Column5");
    String MTittle = testData.get(RowNumber).get("Column6");
	
 
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='title']"))).sendKeys(Title);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Please select']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+MYType+ "')]"))).click();
	Thread.sleep(2000);
	
	//wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' Technical Meeting ']"))).click();
    //Thread.sleep(2000);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-focus-indicator mat-icon-button mat-button-base']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@placeholder='HH:MM AM/PM'][1]"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@class='ng-star-inserted' and text()=' 11 ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@class='time-picker-pm' and text()='PM']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Ok']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='HH:MM AM/PM'])[2]"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@class='ng-star-inserted' and text()=' 11 ']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@class='ng-star-inserted' and text()=' 10 ']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@class='time-picker-pm' and text()='PM']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Ok']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='Please select']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and text()='"+Location+" ']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='ng-option-label ng-star-inserted' and text()='"+Invitees+"']"))).click();
	Thread.sleep(4000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	WebElement element=driver.findElement (By.xpath("//*[text()='New']"));
	jse.executeScript("arguments[0].scrollIntoView()", element);
	element.click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//textarea[@formcontrolname='agenda']"))).sendKeys(Agenda);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='check']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' PREVIEW']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' SEND INVITE ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Meeting List']"))).click();
	Thread.sleep(5000);
	String ActualTitle=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[2]"))).getText();
	Assert.assertEquals("Meeting title is not matching", MTittle, ActualTitle);
	
}
   
@Given("verify user is able to View the meeting form from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_View_the_meeting_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException {
    WebDriverWait wt = new WebDriverWait(this.driver,6);
    ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
    reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
    
    String TaskDetails = testData.get(RowNumber).get("Column1");
    String AssignTo = testData.get(RowNumber).get("Column2");
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).click();
	Thread.sleep(6000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='purplebg btn-3hvr ng-star-inserted']"))).click();
	Thread.sleep(2000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	WebElement element=driver.findElement (By.xpath("//span[text()=' Add Meeting Minutes']"));
	jse.executeScript("arguments[0].scrollIntoView()", element);
	element.click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' Add Task ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='task_details']"))).sendKeys(TaskDetails);
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-focus-indicator mat-icon-button mat-button-base']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell mat-calendar-body-active ng-star-inserted']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='ng-option-label ng-star-inserted' and text()='"+AssignTo+"']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' CREATE']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' PREVIEW']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' ISSUE TASK ']"))).click();
	Thread.sleep(4000);
	}


@Given("Verify User is able to Create Meeting for add meeting minutes from initiator form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_Create_Meeting_for_add_meeting_minutes_from_initiator_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)   throws InvalidFormatException, IOException, InterruptedException {
	WebDriverWait wt = new WebDriverWait(this.driver,6);    
    ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
    reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
    
    String Title = testData.get(RowNumber).get("Column1");
    String MYType = testData.get(RowNumber).get("Column2");
    String Location = testData.get(RowNumber).get("Column3");
    String Invitees = testData.get(RowNumber).get("Column4");
    String Agenda = testData.get(RowNumber).get("Column5");
    String MTittle = testData.get(RowNumber).get("Column6");
	
 
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='title']"))).sendKeys(Title);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Please select']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+MYType+ "')]"))).click();
	Thread.sleep(2000);
	
	//wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' Technical Meeting ']"))).click();
    //Thread.sleep(2000);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-focus-indicator mat-icon-button mat-button-base']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@placeholder='HH:MM AM/PM'][1]"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@class='ng-star-inserted' and text()=' 11 ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@class='time-picker-pm' and text()='PM']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Ok']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='HH:MM AM/PM'])[2]"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@class='ng-star-inserted' and text()=' 11 ']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@class='ng-star-inserted' and text()=' 10 ']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@class='time-picker-pm' and text()='PM']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Ok']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='Please select']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and text()='"+Location+" ']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='ng-option-label ng-star-inserted' and text()='"+Invitees+"']"))).click();
	Thread.sleep(4000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	WebElement element=driver.findElement (By.xpath("//*[text()='New']"));
	jse.executeScript("arguments[0].scrollIntoView()", element);
	element.click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//textarea[@formcontrolname='agenda']"))).sendKeys(Agenda);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='check']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' PREVIEW']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' SEND INVITE ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Meeting List']"))).click();
	Thread.sleep(5000);
	String ActualTitle=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[2]"))).getText();
	Assert.assertEquals("Meeting title is not matching", MTittle, ActualTitle);
	
}
@Given("verify user is able to Create Meeting Miniutes from Initiator form from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_Create_Meeting_Miniutes_from_Initiator_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)  throws InvalidFormatException, IOException, InterruptedException {
    
	WebDriverWait wt = new WebDriverWait(this.driver,6);
    ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
    reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
    
    String TaskDetails = testData.get(RowNumber).get("Column1");
    String AssignTo = testData.get(RowNumber).get("Column2");
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).click();
	Thread.sleep(6000);
	//wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='purplebg btn-3hvr ng-star-inserted']"))).click();
	//Thread.sleep(2000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	WebElement element=driver.findElement (By.xpath("//span[text()=' Add Meeting Minutes']"));
	jse.executeScript("arguments[0].scrollIntoView()", element);
	element.click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' Add Task ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='task_details']"))).sendKeys(TaskDetails);
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-focus-indicator mat-icon-button mat-button-base']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell mat-calendar-body-active ng-star-inserted']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='ng-option-label ng-star-inserted' and text()='"+AssignTo+"']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' CREATE']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' PREVIEW']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' ISSUE TASK ']"))).click();
	Thread.sleep(4000);
	
}

@Given("Verify User is able to Create Meeting to fetch meeting from notification form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_Create_Meeting_to_fetch_meeting_from_notification_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)throws InvalidFormatException, IOException, InterruptedException {
	WebDriverWait wt = new WebDriverWait(this.driver,6);    
    ExcelReader reader = new ExcelReader();
	List<Map<String,String>> testData = 
    reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
    
    String Title = testData.get(RowNumber).get("Column1");
    String MYType = testData.get(RowNumber).get("Column2");
    String Location = testData.get(RowNumber).get("Column3");
    String Invitees = testData.get(RowNumber).get("Column4");
    String Agenda = testData.get(RowNumber).get("Column5");
    String MTittle = testData.get(RowNumber).get("Column6");
	
 
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='title']"))).sendKeys(Title);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Please select']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and contains(.,'"+MYType+ "')]"))).click();
	Thread.sleep(2000);
	
	//wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' Technical Meeting ']"))).click();
    //Thread.sleep(2000);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-focus-indicator mat-icon-button mat-button-base']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@placeholder='HH:MM AM/PM'][1]"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@class='ng-star-inserted' and text()=' 11 ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@class='time-picker-pm' and text()='PM']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Ok']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@placeholder='HH:MM AM/PM'])[2]"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@class='ng-star-inserted' and text()=' 11 ']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@class='ng-star-inserted' and text()=' 10 ']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@class='time-picker-pm' and text()='PM']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Ok']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='Please select']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and text()='"+Location+" ']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='ng-option-label ng-star-inserted' and text()='"+Invitees+"']"))).click();
	Thread.sleep(4000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	WebElement element=driver.findElement (By.xpath("//*[text()='New']"));
	jse.executeScript("arguments[0].scrollIntoView()", element);
	element.click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//textarea[@formcontrolname='agenda']"))).sendKeys(Agenda);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='check']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' PREVIEW']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' SEND INVITE ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Meeting List']"))).click();
	Thread.sleep(5000);
	String ActualTitle=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[2]"))).getText();
	Assert.assertEquals("Meeting title is not matching", MTittle, ActualTitle);
}


@Given("verify user is able to View the meeting in Notification from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_View_the_meeting_in_Notification_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)throws InvalidFormatException, IOException, InterruptedException { 
    
     
	    WebDriverWait wt = new WebDriverWait(this.driver,6);
	    ExcelReader reader = new ExcelReader();
		List<Map<String,String>> testData = 
	    reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	    
	    String TaskDetails = testData.get(RowNumber).get("Column1");
	    String AssignTo = testData.get(RowNumber).get("Column2");
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='purplebg btn-3hvr ng-star-inserted']"))).click();
		Thread.sleep(2000);
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		WebElement element=driver.findElement (By.xpath("//span[text()=' Add Meeting Minutes']"));
		jse.executeScript("arguments[0].scrollIntoView()", element);
		element.click();
		Thread.sleep(4000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' Add Task ']"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='task_details']"))).sendKeys(TaskDetails);
		Thread.sleep(4000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-focus-indicator mat-icon-button mat-button-base']"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell mat-calendar-body-active ng-star-inserted']"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])[2]"))).click();
		Thread.sleep(2000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='ng-option-label ng-star-inserted' and text()='"+AssignTo+"']"))).click();
		Thread.sleep(4000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' CREATE']"))).click();
		Thread.sleep(4000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' PREVIEW']"))).click();
		Thread.sleep(4000);
		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' ISSUE TASK ']"))).click();
		Thread.sleep(4000);
	

	
}

//Reports//


@Given("verify user is able to Create the New Report form from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_Create_the_New_Report_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)  throws InvalidFormatException, IOException, InterruptedException {
	 
	WebDriverWait wt = new WebDriverWait(this.driver,6);
	Random rand = new Random();
	int RepN = rand.nextInt(1000);
	String Rep ="R"+RepN;
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='reportNo']"))).sendKeys(Rep);
	Thread.sleep(2000);
    ExcelReader reader = new ExcelReader();
    List<Map<String,String>> testData = 
	reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	 
    //String ReportNo = testData.get(RowNumber).get("Column1");
    String Location = testData.get(RowNumber).get("Column2");
    String AssignTo = testData.get(RowNumber).get("Column3");
    
    //wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='reportNo']"))).sendKeys(Rep);
	//Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-focus-indicator mat-icon-button mat-button-base']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='Please select']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and text()='"+Location+" ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='ng-option-label ng-star-inserted' and text()='"+AssignTo+"']"))).click();
	Thread.sleep(2000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	WebElement element=driver.findElement (By.xpath("//span[text()=' Preview']"));
	jse.executeScript("arguments[0].scrollIntoView()", element);
	element.click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='GENERATE']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Search Reports']"))).click();
	Thread.sleep(2000);
	String ActualTitle=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[2]"))).getText();
	Assert.assertEquals("Report No is not matching", Rep, ActualTitle);
	Thread.sleep(2000);
	
}

@Given("Verify User is able to Search Report form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_Search_Report_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)  throws InvalidFormatException, IOException, InterruptedException {
	WebDriverWait wt = new WebDriverWait(this.driver,6);
    ExcelReader reader = new ExcelReader();
    List<Map<String,String>> testData = 
	reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).click();
   	Thread.sleep(2000);
    //String SearchHere = testData.get(RowNumber).get("Column1");
    //wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Search Here']"))).sendKeys(SearchHere);
	//Thread.sleep(4000);
    
}



@Given("Verify User is able to Save the Report form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_Save_the_Report_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException{
	WebDriverWait wt = new WebDriverWait(this.driver,6);
	Random rand = new Random();
	int RepN = rand.nextInt(1000);
	String Rep ="R"+RepN;
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='reportNo']"))).sendKeys(Rep);
	Thread.sleep(2000);
    ExcelReader reader = new ExcelReader();
    List<Map<String,String>> testData = 
	reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	 
    //String ReportNo = testData.get(RowNumber).get("Column1");
    String Location = testData.get(RowNumber).get("Column2");
    String AssignTo = testData.get(RowNumber).get("Column3");
    
    //wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='reportNo']"))).sendKeys(Rep);
	//Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-focus-indicator mat-icon-button mat-button-base']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='Please select']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and text()='"+Location+" ']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='ng-option-label ng-star-inserted' and text()='"+AssignTo+"']"))).click();
	Thread.sleep(2000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	WebElement element=driver.findElement (By.xpath("//span[text()=' Preview']"));
	jse.executeScript("arguments[0].scrollIntoView()", element);
	element.click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='save']"))).click();
	Thread.sleep(4000);
	String ActualRep=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[2]"))).getText();
	Assert.assertEquals("Report No is not matching", Rep, ActualRep);
	Thread.sleep(2000);
}

@Given("Verify User is able to generate the draft report from the search reports form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_generate_the_draft_report_from_the_search_reports_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)  throws InvalidFormatException, IOException, InterruptedException{
	WebDriverWait wt = new WebDriverWait(this.driver,6);
    ExcelReader reader = new ExcelReader();
    List<Map<String,String>> testData = 
	reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
   // String SearchHere = testData.get(RowNumber).get("Column1");
   // wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Search Here']"))).sendKeys(SearchHere);
	//Thread.sleep(4000);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).click();
	Thread.sleep(2000);
	Thread.sleep(2000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	WebElement element=driver.findElement (By.xpath("//span[text()=' Preview']"));
	jse.executeScript("arguments[0].scrollIntoView()", element);
	element.click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='GENERATE']"))).click();
	Thread.sleep(4000);
	
}



@Given("verify user is able to Create the My DCR Report form from given sheetname {string} and rownumber {int}")
public void verify_user_is_able_to_Create_the_My_DCR_Report_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException{
	WebDriverWait wt = new WebDriverWait(this.driver,16);
	WebElement element=driver.findElement (By.xpath("//*[@class='mat-list-item mat-focus-indicator ng-star-inserted'][4]"));
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	jse.executeScript("arguments[0].scrollIntoView()", element);
	element.click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-button-wrapper'])[2]"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	WebElement element1=driver.findElement (By.xpath("//span[text()=' Preview']"));
	JavascriptExecutor jse1 = (JavascriptExecutor)driver;
	jse.executeScript("arguments[0].scrollIntoView()", element1);
	element1.click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='GENERATE']"))).click();
	Thread.sleep(6000);
	
	
}



@Given("Verify User is able to Create Site Diary form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_Create_Site_Diary_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber ) throws InvalidFormatException, IOException, InterruptedException {
	
    ExcelReader reader = new ExcelReader();
    List<Map<String,String>> testData = 
	reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
    //String ReportNo = testData.get(RowNumber).get("Column1");
    String Location = testData.get(RowNumber).get("Column2");
    String WeatherAM = testData.get(RowNumber).get("Column3");
    String WeatherPM = testData.get(RowNumber).get("Column4");
    String AssignTo = testData.get(RowNumber).get("Column5");
    WebDriverWait wt = new WebDriverWait(this.driver,6);
    Random rand = new Random();
    int RepNo = rand.nextInt(1000);
    String ReportNo= "R"+RepNo;
   
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='reportNo']"))).sendKeys(ReportNo);
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='Please select']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and text()='"+Location+" ']"))).click();
	Thread.sleep(4000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='weatherAM']"))).sendKeys(WeatherAM);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='weatherPM']"))).sendKeys(WeatherPM);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//input[@role='combobox'])"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='ng-option-label ng-star-inserted' and text()='"+AssignTo+"']"))).click();
	Thread.sleep(2000);
	JavascriptExecutor jse = (JavascriptExecutor)driver;
	WebElement element=driver.findElement (By.xpath("//span[text()=' Preview']"));
	jse.executeScript("arguments[0].scrollIntoView()", element);
	element.click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='GENERATE']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Search Reports']"))).click();
	Thread.sleep(2000);
	String ActualRep=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).getText();
	assertEquals("Doc No is not matching",ReportNo , ActualRep);
	
}

@Given("Verify User is able to Create Week Report form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_Create_Week_Report_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException {
    
    
   
    ExcelReader reader = new ExcelReader();
    List<Map<String,String>> testData = 
	reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
    //String progressReportNo = testData.get(RowNumber).get("Column1");
    String reportName = testData.get(RowNumber).get("Column2");
    String CheckedBy = testData.get(RowNumber).get("Column3");
    String VerifiedBy = testData.get(RowNumber).get("Column4");
    WebDriverWait wt = new WebDriverWait(this.driver,6);
    Random rand = new Random();
    int RepNo = rand.nextInt(1000);
    String progressReportNo= "R"+RepNo;
    
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='progressReportNo']"))).sendKeys(progressReportNo);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='reportName']"))).sendKeys(reportName);
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//button[@class='mat-focus-indicator mat-icon-button mat-button-base'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//span[@class='mat-button-wrapper'])[3]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//span[@class='mat-button-wrapper'])[4]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//span[@class='mat-button-wrapper'])[6]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//span[@class='mat-button-wrapper'])[8]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-calendar-body-cell-content mat-focus-indicator mat-calendar-body-today']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@role='combobox'])[1]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='ng-option-label ng-star-inserted' and text()='"+CheckedBy+"']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@role='combobox'])[2]"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='ng-option-label ng-star-inserted' and text()='"+VerifiedBy+"']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' Preview']"))).click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='GENERATE']"))).click();
	Thread.sleep(2000);
	//wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Search Reports']"))).click();
	//Thread.sleep(2000);
	//String ActualRep=wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).getText();
	//Assert.assertEquals("Doc No is not matching",progressReportNo , ActualRep);
}




@Given("Verify User is able to Create Mail form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_Create_Mail_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException{
	  WebDriverWait wt = new WebDriverWait(this.driver,6);
      ExcelReader reader = new ExcelReader();
      List<Map<String,String>> testData = 
	   reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	  String Tosender = testData.get(RowNumber).get("Column1");
      String subject = testData.get(RowNumber).get("Column2");
      String EnterText = testData.get(RowNumber).get("Column3");
      wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' Compose Mail']"))).click();
      Thread.sleep(1000);
      wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@formcontrolname='toSender']"))).click();
      Thread.sleep(1000);
      wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and text()='"+Tosender+"']"))).click();
      Thread.sleep(2000);
	   wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Subject']"))).sendKeys(subject);
      Thread.sleep(2000);
	  wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='angular-editor-textarea']"))).sendKeys(EnterText);
	  Thread.sleep(2000); 
      wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' Send ']"))).click();
      Thread.sleep(2000); 
		
}

@Given("Verify User is able to reply to the Mail form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_reply_to_the_Mail_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)throws InvalidFormatException, IOException, InterruptedException {
    
	WebDriverWait wt = new WebDriverWait(this.driver,6);
    ExcelReader reader = new ExcelReader();
    List<Map<String,String>> testData = 
	   reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	
    String Replybody = testData.get(RowNumber).get("Column1");
    JavascriptExecutor jse1 = (JavascriptExecutor)driver;
    WebElement element1=driver.findElement (By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"));
    jse1.executeScript("arguments[0].scrollIntoView()", element1);
    element1.click();
	Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[text()='reply'])[1]"))).click();
	Thread.sleep(2000);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='angular-editor-textarea']"))).sendKeys(Replybody);
	Thread.sleep(2000); 
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' Send ']"))).click();
    Thread.sleep(2000); 
    
		
}
@Given("Verify User is able to save as draft form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_save_as_draft_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber)throws InvalidFormatException, IOException, InterruptedException {
	 WebDriverWait wt = new WebDriverWait(this.driver,6);
     ExcelReader reader = new ExcelReader();
     List<Map<String,String>> testData = 
	   reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	  String Tosender = testData.get(RowNumber).get("Column1");
     String subject = testData.get(RowNumber).get("Column2");
     String EnterText = testData.get(RowNumber).get("Column3");
     wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' Compose Mail']"))).click();
     Thread.sleep(1000);
     wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@formcontrolname='toSender']"))).click();
     Thread.sleep(2000); 
     wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()='"+Tosender+"']"))).click();
 	Thread.sleep(2000);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Subject']"))).sendKeys(subject);
    Thread.sleep(2000);
	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='angular-editor-textarea']"))).sendKeys(EnterText);
	Thread.sleep(2000); 
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' save As Draft ']"))).click();
    Thread.sleep(2000);   
}
    @Given("Verify User is able to view mail in draft and send form from given sheetname {string} and rownumber {int}")
    public void verify_User_is_able_to_view_mail_in_draft_and_send_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException{
      WebDriverWait wt = new WebDriverWait(this.driver,6);
      wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@class='mat-tab-label-content'])[6]"))).click();
     Thread.sleep(2000);  
     JavascriptExecutor jse1 = (JavascriptExecutor)driver;
     WebElement element=driver.findElement (By.xpath("(//*[text()='edit'])[1]"));
    jse1.executeScript("arguments[0].scrollIntoView()", element);
     element.click();
    Thread.sleep(2000);
    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' Send ']"))).click();
    Thread.sleep(2000); 
    }
    
    @Given("Verify User is able to Create user setup form from given sheetname {string} and rownumber {int}")
    public void verify_User_is_able_to_Create_user_setup_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException {
        
    	 
        WebDriverWait wt = new WebDriverWait(this.driver,6);
        ExcelReader reader = new ExcelReader();
        List<Map<String,String>> testData = 
    	reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
        String Name = testData.get(RowNumber).get("Column1");
        String OldPassword = testData.get(RowNumber).get("Column2");
        String NewPassword = testData.get(RowNumber).get("Column3");
        String ConfirmPassword = testData.get(RowNumber).get("Column4");
        String SessionTimeout = testData.get(RowNumber).get("Column5");
        
        wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='EDIT']"))).click();
    	Thread.sleep(2000);
    	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@formcontrolname='name']"))).clear();
    	Thread.sleep(4000);
    	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@formcontrolname='name']"))).sendKeys(Name);
    	Thread.sleep(4000);
    	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='SAVE']"))).click();
        Thread.sleep(2000);
        wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@role='tab'][2]"))).click();
        Thread.sleep(2000);
        wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Enter Old Password']"))).sendKeys(OldPassword);
    	Thread.sleep(2000);
    	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Enter New Password']"))).sendKeys(NewPassword);
    	Thread.sleep(2000);
    	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Confirm New Password']"))).sendKeys(ConfirmPassword);
    	Thread.sleep(2000);
    	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='SAVE']"))).click();
        Thread.sleep(2000);
        wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@role='tab'][3]"))).click();
        Thread.sleep(2000);
        wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()='Select Session Timeout']"))).click();
        Thread.sleep(2000);
        wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and text()='"+SessionTimeout+"']"))).click();
    	Thread.sleep(2000);
    	wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' SAVE']"))).click();
        Thread.sleep(2000);
    }

    @Given("Verify User is able to Create project setup form from given sheetname {string} and rownumber {int}")
    public void verify_User_is_able_to_Create_project_setup_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException {
    	 WebDriverWait wt = new WebDriverWait(this.driver,6);
    	    ExcelReader reader = new ExcelReader();
    	    List<Map<String,String>> testData = 
    		reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
    	    String enteremail = testData.get(RowNumber).get("Column1");
    	    String Selectrole = testData.get(RowNumber).get("Column2");
    	    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' Invite User ']"))).click();
    	    Thread.sleep(2000);
    	    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='enter email']"))).sendKeys(enteremail);
    		Thread.sleep(2000);
    		wt.until(ExpectedConditions.elementToBeClickable(By.xpath("(//*[@role='combobox'])[3]"))).click();
    	    Thread.sleep(2000);
    	    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='Users' and text()='"+Selectrole+"']"))).click();
    		Thread.sleep(2000);
    	    wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[text()=' Send Invitation ']"))).click();
    		Thread.sleep(2000);
    }




@Given("Verify User is able to check Task List form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_check_Task_List_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException{
	 WebDriverWait wt = new WebDriverWait(this.driver,6);
	 ExcelReader reader = new ExcelReader();
     List<Map<String,String>> testData = 
	 reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	 String FilterBy = testData.get(RowNumber).get("Column1");
	 String TaskId = testData.get(RowNumber).get("Column2");
	 String MysubmissionAction = testData.get(RowNumber).get("Column3");
     wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Filter by']"))).click();
	 Thread.sleep(2000);
	 wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and text()='"+FilterBy+"']"))).click();
     Thread.sleep(2000);
     //wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Enter Task Id']"))).sendKeys(TaskId);
     //Thread.sleep(4000);
     wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).click();
 	 Thread.sleep(6000);
 	 JavascriptExecutor jse = (JavascriptExecutor)driver;
	 WebElement element=driver.findElement (By.xpath("//input[@placeholder='Please select']"));
	 jse.executeScript("arguments[0].scrollIntoView()", element);
	 element.click();
	 Thread.sleep(2000);
 	 wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+MysubmissionAction+" ']"))).click();
	 Thread.sleep(2000);
	 wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' CREATE']"))).click();
	 Thread.sleep(2000);
		
}
@Given("Verify User is able to check Task List and Approve the document form from given sheetname {string} and rownumber {int}")
public void verify_User_is_able_to_check_Task_List_and_Approve_the_document_form_from_given_sheetname_and_rownumber(String SheetName, Integer RowNumber) throws InvalidFormatException, IOException, InterruptedException {
	 WebDriverWait wt = new WebDriverWait(this.driver,6);
	 ExcelReader reader = new ExcelReader();
     List<Map<String,String>> testData = 
	 reader.getData("./Fixture/TestDataSheet.xlsx",SheetName);
	 String FilterBy = testData.get(RowNumber).get("Column1");
	 String TaskId = testData.get(RowNumber).get("Column2");
	 String MysubmissionAction = testData.get(RowNumber).get("Column3");
     wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Filter by']"))).click();
	 Thread.sleep(2000);
	 wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@class='mat-option-text' and text()='"+FilterBy+"']"))).click();
     Thread.sleep(2000);
     //wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@placeholder='Enter Task Id']"))).sendKeys(TaskId);
     //Thread.sleep(4000);
     wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//tbody[@role='rowgroup']/tr[1]/td[1]"))).click();
 	 Thread.sleep(6000);
 	 JavascriptExecutor jse = (JavascriptExecutor)driver;
	 WebElement element=driver.findElement (By.xpath("//input[@placeholder='Please select']"));
	 jse.executeScript("arguments[0].scrollIntoView()", element);
	 element.click();
	 Thread.sleep(2000);
 	 wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='mat-option-text' and text()=' "+MysubmissionAction+" ']"))).click();
	 Thread.sleep(2000);
	 wt.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()=' CREATE']"))).click();
	 Thread.sleep(2000);
}

    
}














	  
	 

