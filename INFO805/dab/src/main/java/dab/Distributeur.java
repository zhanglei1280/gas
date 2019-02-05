package dab;

import java.util.Date;
import java.util.List;
import com.modeliosoft.modelio.javadesigner.annotations.mdl;
import com.modeliosoft.modelio.javadesigner.annotations.objid;

@objid ("0d428a05-4835-4a63-9729-0f9f70f6d3f2")
public class Distrib {
    @mdl.prop
    @objid ("b071e6a9-eaa5-425d-8634-bf110f912bbf")
    private int nbBillets10;

    @mdl.prop
    @objid ("d362d19a-adb4-4ab4-b782-1a367d6e1324")
    private int nbBillets20;

    @mdl.prop
    @objid ("3e7bcb52-c809-4ea2-a8f6-09b0adbdf9d1")
    private int nbBillets50;

    @mdl.prop
    @objid ("01ca1789-5025-4d80-a224-58280a830da0")
    private int nbBillets100;

    @objid ("33fba089-53a8-4629-82ad-ac8dda4de582")
    public Banque BanqueDeRattachement;

    @objid ("5aa0a65b-d591-40fe-ba79-a6e15c776939")
    private Carte carteInseree;

    @objid ("2f3ffab7-340f-4571-b19f-fe9c6fad5d32")
    public void insererCarte(String noCarte, String code, int nbEssaisRestants) {
    }

    @objid ("4c9133e8-305b-40d1-81b9-3cdf796db78f")
    public boolean saisirCode(int codeSaisi) {
    }

    @objid ("30c69ab3-7411-479b-8506-bb13bd6de7ec")
    public void choisirOperation(int noOp) {
    }

    @objid ("37826b7b-0b51-4700-9269-233a66fba8bb")
    Carte getCarteInseree() {
        // Automatically generated method. Please delete this comment before entering specific code.
        return this.carteInseree;
    }

    @objid ("03b409f2-1d36-4950-9985-e7c9964188c5")
    void setCarteInseree(Carte value) {
        // Automatically generated method. Please delete this comment before entering specific code.
        this.carteInseree = value;
    }

    @objid ("d8fba3cd-7ea7-4e03-94f3-01957fcb52af")
    private void consultation(Client compteClient) {
    }

    @objid ("873b3c0e-6484-464f-94ab-08169a1483fc")
    private void afficheListeComptes(List<Compte> listeComptes) {
    }

    @objid ("71ba22b0-5619-44f2-9f38-a225e94ea260")
    private void choisirCompte(Compte compte) {
    }

    @objid ("cbcaf4aa-32aa-4c8e-93b0-790dc0384c6a")
    private void afficheCompte(Compte compte) {
    }

    @objid ("c6eb6391-15ac-4d8b-835c-f7f78648ac78")
    private void gererCompte(Compte compte) {
    }

    @objid ("eb540d2b-2bd3-4f7f-b05d-97aaa7ce373b")
    private void afficheListeOperationsDeGestion(Compte compte) {
    }

    @objid ("55a98ddc-d84c-491c-a1ac-698d678fd551")
    private List<Compte> choixVirement(Client compteClient, List<Compte> comptesDestinataires) {
    }

    @objid ("34287464-45e7-48a0-bbf5-e8c5015f4aaf")
    private void afficheListeComptesVirement(List<Compte> comptesPerso, List<Compte> comptesDestinataires) {
    }

    @objid ("835767cd-ec8a-4f5b-ad0f-32c8b8c972d9")
    private boolean selectionneInformationsVirement(Compte compteEmission, Compte compteDestinataire, double somme, Date date, String message) {
    }

    @objid ("485e8bea-da34-4889-9508-852ce349a3a0")
    public Distrib() {
    }

}