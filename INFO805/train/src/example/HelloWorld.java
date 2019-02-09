package example;
import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.xml.ws.Endpoint;

@WebService()
public class HelloWorld {
  public String sayHelloWorldFrom(
          @WebParam(name="from")
          String from
  ) {
    String result = "Hello, world, from " + from;
    System.out.println(result);
    return result;
  }

  @WebMethod
  @WebResult(name = "distance")
  public double getDistance(
          @WebParam(name="x1")
          double x1,
          @WebParam(name="y1")
          double y1,
          @WebParam(name="x2")
          double x2,
          @WebParam(name="y2")
          double y2
  ){
    Coordinate c1 = new Coordinate(x1, y1);
    Coordinate c2 = new Coordinate(x2, y2);
    System.out.println(x1);
    double distance = c1.distance(c2);
    return Math.round(distance * 100.0) / 100.0;
    //return distance;
  }

  public static void main(String[] argv) {
    Object implementor = new HelloWorld ();
    String address = "http://localhost:9000/Distance";
    Endpoint.publish(address, implementor);
  }
}
