import java.util.ArrayList;
import java.util.HashMap;

public class Seed {
    private static HashMap<String, Client> clientMap = new HashMap<String, Client>();
    private static ArrayList<Client> clients = new ArrayList<Client>();
    private static ArrayList<Compte> comptes = new ArrayList<Compte>();

    public static HashMap<String, Client> getClientMap() {
        return clientMap;
    }

    public static ArrayList<Client> getClients(){
        return clients;
    }

    public static ArrayList<Compte> getComptes(){
        return comptes;
    }

    public Seed(){
        Client zhang = new Client("Zhang");
        Client yin = new Client("yin");
        clients.add(zhang);
        clients.add(yin);

        clientMap.put("00001", zhang);
        clientMap.put("00002", yin);

        Compte zhang1 = new Compte(1000, "zhang1", 100);
        Compte zhang2 = new Compte(10000, "zhang2", 1000);
        Compte yin1 = new Compte(100, "yin1", 10);
        Compte yin2 = new Compte(10000, "yin2", 1000);

        zhang.addCompte(zhang1);
        zhang.addCompte(zhang2);
        zhang.addCompteVirement(yin1);
        zhang.addCompteVirement(yin2);

        yin.addCompte(yin1);
        yin.addCompte(yin2);
        yin.addCompteVirement(zhang1);
        yin.addCompteVirement(zhang2);

        comptes.add(zhang1);
        comptes.add(zhang2);
        comptes.add(yin1);
        comptes.add(yin2);

    }
}
