package ftp;

import java.io.IOException;
import java.rmi.Remote;
import java.rmi.RemoteException;

public interface FTP extends Remote {
    byte[] get(String filename) throws RemoteException;
    void put(String filename, byte[] file) throws Exception, RemoteException;
    void cd(String path) throws RemoteException;
    String[] ls() throws RemoteException;
    String pwd() throws RemoteException;
}
