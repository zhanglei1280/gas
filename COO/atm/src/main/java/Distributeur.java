
import java.util.Date;
import java.util.ArrayList;

public class Distributeur 
{
	private int nbBillets10;
	private int nbBillets20;
	private int nbBillets50;
	private int nbBillets100;
	public Banque BanqueDeRattachement;
	private Carte carteInseree;
	private ArrayList<Compte> listeComptes;
	private ArrayList<Compte> listeComptesDestinaire;
	
	public Distributeur(Banque BanqueDeRattachement) 
	{
		this.BanqueDeRattachement = BanqueDeRattachement;
    }


	public void insererCarte(String noCarte, String code, int nbEssaisRestants) 
	{
		carteInseree = new Carte(noCarte, code, nbEssaisRestants);
	}

	public boolean saisirCode(String codeSaisi)
	{
		if( carteInseree.codeOK(codeSaisi) )
		{
			String noCarte = carteInseree.getNoCarte();
			return BanqueDeRattachement.estUnClient(noCarte);
		}
		return false;
	}

	public void choisirOperation(int noOp) 
	{
		
	}

	Carte getCarteInseree() {
		// Automatically generated method. Please delete this comment before entering
		// specific code.
		return this.carteInseree;
	}

	void setCarteInseree(Carte value) {
		// Automatically generated method. Please delete this comment before entering
		// specific code.
		this.carteInseree = value;
	}
	
	public ArrayList<Compte> getListeComptes(){
		return listeComptes;
	}
	public ArrayList<Compte> getListeComptesDestinaire(){
		return listeComptesDestinaire;
	}

	public void consultation()
	{
		listeComptes = BanqueDeRattachement.recupereComptesConsultation(carteInseree.getNoCarte());
	}

	public void afficheListeComptes() {
		int no = 0;
		for(int i = 0; i < listeComptes.size(); i++){
			no = i + 1;
			System.out.println("Choix : " + no);
			afficheCompte(listeComptes.get(i));
		}
	}

	public void afficheListeComptesMore() {
		int no = 0;
		for(int i = 0; i < listeComptes.size(); i++){
			no = i + 1;
			System.out.println("Choix : " + no);
			listeComptes.get(i).afficheCompte();
		}
	}



	public void afficheListeCompteDestinataire(){
		int no = 0;
		for(int i = 0; i < listeComptesDestinaire.size(); i++){
			no = i + 1;
			System.out.println("Choix : " + no);
			afficheCompteVirement(listeComptesDestinaire.get(i));
		}
	}

	private void afficheCompteVirement(Compte compte) {
		compte.afficheCompteVirement();
	}

	public Compte choisirCompte(int i) 
	{
		return listeComptes.get(i-1);
	}

	public Compte choisirCompteDestinataire(int i){
		return listeComptesDestinaire.get(i-1);
	}

	public void afficheCompte(Compte compte)
	{

		System.out.println("noCompte : " + compte.getNoCompte());
	}

	public void afficheCompteInfo(Compte compte)
	{
		compte.afficheCompte();
	}

	private void gererCompte(Compte compte) {
	}

	private void afficheListeOperationsDeGestion(Compte compte) {
	}

	public void virement() {
		listeComptes = BanqueDeRattachement.recupereComptesConsultation(carteInseree.getNoCarte());
		listeComptesDestinaire = BanqueDeRattachement.recupereComptesVirement(carteInseree.getNoCarte());
	}

	public void afficheListeComptesVirement(ArrayList<Compte> comptesPerso, ArrayList<Compte> comptesDestinataires) {
	}

	public boolean selectionneInformationsVirement(Compte compteEmission, Compte compteDestinataire, float somme,
			Date date, String message) {
				return BanqueDeRattachement.effectueVirement(
						compteEmission,
						compteDestinataire,
						somme,
						date,
						message
				);
	}

	public void retirer(){
		consultation();
	}

	public boolean infoRetrait(
			Compte compte,
			float somme
	){
		return BanqueDeRattachement.effectueRetrait(compte, somme);
	}

}