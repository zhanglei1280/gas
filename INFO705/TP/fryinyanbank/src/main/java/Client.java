import java.util.Scanner;
import javax.jms.JMSException;
import javax.naming.NamingException;

public class Client {

    public static void main(String[] args) throws JMSException, NamingException{
        BankPublisher bankPublisher = new BankPublisher("ConnectionFactory", "topic/testTopic");

        Scanner scanner = new Scanner(System.in);
        System.out.println("input");
        String msg = scanner.nextLine();
        bankPublisher.publish(msg);
    }

}
