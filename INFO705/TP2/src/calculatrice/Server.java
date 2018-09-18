package calculatrice;


  import org.apache.xmlrpc.server.PropertyHandlerMapping;
  import org.apache.xmlrpc.server.XmlRpcServer;
  import org.apache.xmlrpc.server.XmlRpcServerConfigImpl;
  import org.apache.xmlrpc.webserver.WebServer;

  public class Server 
  {


      public static void main(String[] args) throws Exception 
      {
          WebServer webServer = new WebServer(3100);
          XmlRpcServer xmlRpcServer = webServer.getXmlRpcServer();
          PropertyHandlerMapping phm = new PropertyHandlerMapping();  

          phm.addHandler("MoteurCalculSimple",
                calculator.generic.MoteurCalculSimple.class);
            
            
          xmlRpcServer.setHandlerMapping(phm);
        
          XmlRpcServerConfigImpl serverConfig =
              (XmlRpcServerConfigImpl) xmlRpcServer.getConfig();
          serverConfig.setEnabledForExtensions(true);
          serverConfig.setContentLengthOptional(false);

          webServer.start();
      }
  }
