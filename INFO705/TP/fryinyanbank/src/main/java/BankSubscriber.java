import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.Session;
import javax.jms.TextMessage;
import javax.jms.Topic;
import javax.jms.TopicConnection;
import javax.jms.TopicConnectionFactory;
import javax.jms.TopicSession;
import javax.jms.TopicSubscriber;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import java.util.Hashtable;

public class BankSubscriber implements MessageListener {
    ClientEtat client1 = new ClientEtat(100);
    ClientEtat client2 = new ClientEtat(200);

    TopicConnection topicConnection;
    TopicSession topicSession;
    TopicSubscriber topicSubscriber;
    Topic topic;

    public BankSubscriber(String factoryJNDI, String topicJNDI)
            throws JMSException, NamingException {
        Hashtable<String, String> env = new Hashtable<String, String>();
        env.put(Context.INITIAL_CONTEXT_FACTORY,
                "org.jnp.interfaces.NamingContextFactory");
        env.put(Context.PROVIDER_URL, "localhost:1099");
        env.put("java.naming.rmi.security.manager", "yes");
        env.put(Context.URL_PKG_PREFIXES, "org.jboss.naming");
        Context context = new InitialContext();

        TopicConnectionFactory topicFactory =
                (TopicConnectionFactory) context.lookup(factoryJNDI);

        topicConnection = topicFactory.createTopicConnection();
        topicSession = topicConnection.createTopicSession(false,
                Session.AUTO_ACKNOWLEDGE);
        topic = (Topic) context.lookup(topicJNDI);

        topicSubscriber = topicSession.createSubscriber(topic);
        topicSubscriber.setMessageListener(this);
        System.out.println("HelloSubscriber subscribed to topic: "
                + topicJNDI);
        topicConnection.start();
    }

    public void onMessage(Message msg) {
        try {
            if (msg instanceof TextMessage) {

                String msgTxt = ((TextMessage) msg).getText();
                if(msgTxt == "solde"){
                    System.out.println(client1.getSolde());
                }else{
                    int num = Integer.parseInt(msgTxt);

                }
            }
        } catch (JMSException ex) {
            System.err.println("Could not get text message: " + ex);
            ex.printStackTrace();
        }
    }

    public void close() throws JMSException {
        topicSession.close();
        topicConnection.close();
    }

    public static void main(String[] args) throws JMSException, NamingException{
        try{
            new BankSubscriber("TopicConnectionFactory",
                    "topic/testTopic");
        }catch (Exception ex){
            ex.printStackTrace();
        }
    }
}
