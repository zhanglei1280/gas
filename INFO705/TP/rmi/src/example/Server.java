package example;

import java.rmi.registry.Registry;
import java.rmi.registry.LocateRegistry;
import java.rmi.server.UnicastRemoteObject;

public class Server implements Hello {

    public Server() {
    }

    public String sayHello() {
        return "Hello world";
    }

    public static void main(String args[]) {
        try {
            Server obj = new Server();
            // Declare le stub surlequel sera expose l’objet distribue
            Hello stub = (Hello) UnicastRemoteObject.exportObject(obj, 0);
            // Permet de lier au Registre l’objet distribue
            Registry registry = LocateRegistry.createRegistry(1099);
            registry.bind("Hello", stub);
            System.err.println("Server ready");
        } catch (Exception e) {
            System.err.println("Server exception: " + e.toString());
            e.printStackTrace();
        }
    }

}
