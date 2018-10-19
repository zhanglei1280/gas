import javax.jms.JMSException;
import javax.jms.Session;
import javax.jms.TextMessage;
import javax.jms.Topic;
import javax.jms.TopicConnection;
import javax.jms.TopicConnectionFactory;
import javax.jms.TopicPublisher;
import javax.jms.TopicSession;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.util.Hashtable;

public class BankPublisher {
    TopicConnection topicConnection;
    TopicSession topicSession;
    TopicPublisher topicPublisher;
    Topic topic;

    public BankPublisher(String factoryJNDI, String topicJNDI)
            throws JMSException, NamingException{
        Hashtable<String, String> env = new Hashtable<String, String>();
        env.put(Context.INITIAL_CONTEXT_FACTORY,
                "org.jnp.interfaces.NamingContextFactory");
        env.put(Context.PROVIDER_URL, "localhost:1099");
        env.put("java.naming.rmi.security.manager", "yes");
        env.put(Context.URL_PKG_PREFIXES, "org.jboss.naming");

        Context context = new InitialContext(env);

        TopicConnectionFactory topicFactory =
                (TopicConnectionFactory) context.lookup(factoryJNDI);

        topicSession = topicConnection.createTopicSession(false,
                Session.AUTO_ACKNOWLEDGE);

        topic = (Topic) context.lookup(topicJNDI);

        topicPublisher = topicSession.createPublisher(topic);

    }

    public void publish(String msg) throws JMSException {
        TextMessage message = topicSession.createTextMessage();
        message.setText(msg);
        topicPublisher.publish(topic, message);
    }

    public void close() throws JMSException {
        topicSession.close();
        topicConnection.close();
    }
}
