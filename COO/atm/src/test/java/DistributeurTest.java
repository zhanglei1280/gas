import static org.junit.Assert.*;
import org.junit.Test;

import java.util.Date;

public class DistributeurTest {
    private static Seed seed = new Seed();
    private static Banque CA = new Banque("CA", "001");

    @Test
    public void insertionCarte(){
        Distributeur ca = new Distributeur(CA);
        ca.insererCarte("00001", "1111", 3);
        assertEquals("00001", ca.getCarteInseree().getNoCarte());
        System.out.println("√ Distributeur peut recupérer une carte inserée.");
    }

    @Test
    public void consultation(){
        Distributeur ca = new Distributeur(CA);
        ca.insererCarte("00001", "1111", 3);
        ca.consultation();
        assertEquals(2, ca.getListeComptes().size());
        assertEquals("zhang1", ca.getListeComptes().get(0).getNoCompte());
        assertEquals("zhang2", ca.getListeComptes().get(1).getNoCompte());
        System.out.println("√ Distributeur peut consulter les comptes clients");
    }

    @Test
    public void retrait(){
        Distributeur ca = new Distributeur(CA);
        ca.insererCarte("00001", "1111", 3);
        ca.retirer();
        Compte compte = ca.getListeComptes().get(0);
        float soldeBefore = compte.getSolde();
        ca.infoRetrait(compte, 100);
        assertEquals(soldeBefore-100, compte.getSolde(), 0.001);
        System.out.println("√ Distributeur peut retirer l'argent.");
    }

    @Test
    public void retraitEdgy(){
        Distributeur ca = new Distributeur(CA);
        ca.insererCarte("00001", "1111", 3);
        ca.retirer();
        Compte compte = ca.getListeComptes().get(0);
        float soldeBefore = compte.getSolde();
        ca.infoRetrait(compte, 200);
        assertEquals(soldeBefore, compte.getSolde(), 0.01);
        System.out.println("√ La somme de retrait ne peut pas dépasser la plafond.");
    }

    @Test
    public void virement(){
        Distributeur ca = new Distributeur(CA);
        ca.insererCarte("00001", "1111", 3);
        ca.virement();
        Compte source = ca.getListeComptes().get(0);
        Compte dest = ca.getListeComptesDestinaire().get(0);
        float soldeSource = source.getSolde();
        float soldeDest = dest.getSolde();
        ca.selectionneInformationsVirement(
                source,
                dest,
                100,
                new Date(),
                "aaa"
        );
        assertEquals(soldeSource-100, source.getSolde(), 0.01);
        assertEquals(soldeDest+100, dest.getSolde(), 0.01);
        System.out.println("√ Le distributeur peux faire un virement.");
    }

    @Test
    public void virementEdgy(){
        Distributeur ca = new Distributeur(CA);
        ca.insererCarte("00001", "1111", 3);
        ca.virement();
        Compte source = ca.getListeComptes().get(0);
        Compte dest = ca.getListeComptesDestinaire().get(0);
        float soldeSource = source.getSolde();
        float soldeDest = dest.getSolde();
        ca.selectionneInformationsVirement(
                source,
                dest,
                2000,
                new Date(),
                "aaa"
        );
        assertEquals(soldeSource, source.getSolde(), 0.01);
        assertEquals(soldeDest, dest.getSolde(), 0.01);
        System.out.println("√ Un virement ne peux pas depasser la solde.");
    }

}
