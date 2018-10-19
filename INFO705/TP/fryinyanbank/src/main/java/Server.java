import javax.jms.JMSException;
import javax.naming.NamingException;

public class Server {
    ClientEtat client1 = new ClientEtat(100);
    ClientEtat client2 = new ClientEtat(200);


    public static void main(String[] args) throws JMSException, NamingException{
        try{
            BankSubscriber bankSubscriber = new BankSubscriber("TopicConnectionFactory",
                    "topic/testTopic");
        }catch(Exception ex){
            ex.printStackTrace();
        }

    }
}
