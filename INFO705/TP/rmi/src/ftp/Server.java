package ftp;

import java.rmi.registry.Registry;
import java.rmi.registry.LocateRegistry;
import java.rmi.server.UnicastRemoteObject;

public class Server implements FTP {

    public Server(){

    }

    @Override
    public byte[] get(String filename) {
        return new byte[0];
    }

    @Override
    public void put(String filename, byte[] file) {

    }

    public static void main(String args[]){
        try {
            Server obj = new Server();
            FTP stub = (FTP) UnicastRemoteObject.exportObject(obj, 0);
            Registry registry = LocateRegistry.createRegistry(1099);
            registry.bind("FTP", stub);
            System.err.println("Server ready");
        }catch(Exception e){
            System.err.println("Server exception: " + e.toString());
            e.printStackTrace();
        }
    }
}
