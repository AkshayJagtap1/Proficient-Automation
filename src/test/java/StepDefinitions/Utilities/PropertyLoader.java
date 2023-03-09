package StepDefinitions.Utilities;
import java.util.HashMap;
import java.util.Properties;
import java.io.FileInputStream;


public class PropertyLoader {
	private static Properties props = new Properties();
	private static PropertyLoader propObj = null;
	
	private PropertyLoader() {}
    public static PropertyLoader getInstance()
	 {
		 if (propObj == null)
		 {
			 propObj=new PropertyLoader();
		 }
		 return propObj;
	 }
	 
  public String getProperty(String key) {
		
		return props.getProperty(key);
	}
	 public HashMap<String,String> getProprties()
	 {
	  HashMap<String,String> maps = new HashMap<>();
	 for(String key : props.stringPropertyNames())
	 {
		 String value= props.getProperty(key);
		 maps.put(key, value);
	 }
		return maps; 
	}
	 
	 public static void loadRunProperties(String filepath)
	 {
	  System.out.println("Loading application properties");
	  try
	  {
		  FileInputStream in= new FileInputStream(filepath);
		  props.load(in);
		  in.close();
		  
	  }catch(Exception e)
	  {
		  System.out.println("Exception while loading the data" + e.getMessage());
	  }
	 }
	
}

