import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.jms.QueueConnectionFactory;
import javax.jms.QueueConnection;
import javax.jms.QueueSession;
import javax.jms.QueueSender;
import javax.jms.Queue;
import javax.jms.TextMessage;
import javax.jms.Session;
import javax.jms.JMSException;

import java.util.Hashtable;

public class BankQueue {
    QueueConnection queueConnection;
    QueueSession queueSession;
    QueueSender queueSender;
    Queue queue;

    public BankQueue(String factoryJNDI, String topicJNDI)
            throws JMSException, NamingException {
        Hashtable<String, String> props = new Hashtable<String, String>();
        props.put(Context.INITIAL_CONTEXT_FACTORY,
                "org.jnp.interfaces.NamingContextFactory");

        props.put(Context.PROVIDER_URL, "localhost:1099");
        props.put("java.naming.rmi.security.manager", "yes");
        props.put(Context.URL_PKG_PREFIXES, "org.jboss.naming");
        Context context = new InitialContext(props);

        QueueConnectionFactory queueFactory =
                (QueueConnectionFactory) context.lookup(factoryJNDI);
        queueConnection = queueFactory.createQueueConnection();
        queueSession = queueConnection.createQueueSession(false,
                Session.AUTO_ACKNOWLEDGE);

        queue = (Queue) context.lookup(topicJNDI);

        queueSender = queueSession.createSender(queue);

    }

    public void send(String msg) throws JMSException {
        TextMessage message = queueSession.createTextMessage();
        message.setText(msg);
        queueSender.send(queue, message);
    }

    public void close() throws JMSException {
        queueSession.close();
        queueConnection.close();
    }
}
