package ftp;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.rmi.registry.Registry;
import java.rmi.registry.LocateRegistry;
import java.rmi.server.UnicastRemoteObject;

public class Server implements FTP {

    public Server(){

    }

    @Override
    public byte[] get(String filename) {
        Path path = Paths.get(filename);
        byte[] file = new byte[0];
        try {
            file = Files.readAllBytes(path);
        }catch(IOException e){
            System.err.println("IO exception: " + e.toString());
            e.printStackTrace();
        }

        return file;
    }

    @Override
    public void put(String filename, byte[] file) throws Exception {
        FileOutputStream stream = new FileOutputStream(filename);
        try {
            stream.write(file);
        }
        finally {
            stream.close();
        }
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
