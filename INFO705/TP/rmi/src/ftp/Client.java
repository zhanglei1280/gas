package ftp;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class Client {
    private Client() {
    }

    public static void main(String args[]) {
        String host = (args.length < 1) ? null : args[0];
        try {
            Registry registry = LocateRegistry.getRegistry(host);
            FTP stub = (FTP) registry.lookup("FTP");
            String file = "3.1415926";
            stub.put("test.txt", file.getBytes());
            byte[] read = stub.get("test.txt");
            System.out.println(new String(read));
        } catch (Exception e) {
            System.err.println("Client exception: " + e.toString());
            e.printStackTrace();
        }

    }
}
