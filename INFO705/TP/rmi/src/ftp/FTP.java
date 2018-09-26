package ftp;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface FTP extends Remote {
    byte[] get(String filename) throws RemoteException;
    void put(String filename, byte[] file) throws RemoteException;

}
