
import java.util.Date;
import java.util.List;

public class Distributeur 
{
	private int nbBillets10;
	private int nbBillets20;
	private int nbBillets50;
	private int nbBillets100;
	public Banque BanqueDeRattachement;
	private Carte carteInseree;
	private List<Compte> listeComptes;
	private List<Compte> listeComptesDestinaire;
	
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
	
	public List<Compte> getListeComptes(){
		return listeComptes;
	}
	public List<Compte> getListeComptesDestinaire(){
		return listeComptesDestinaire;
	}

	public void consultation()
	{
		listeComptes = BanqueDeRattachement.recupereComptesVirement(carteInseree.getNoCarte());
	}

	public void afficheListeComptes() {
		listeComptes.forEach(this::afficheCompte);
	}

	public void afficheListeCompteDestinataire(){
		listeComptesDestinaire.forEach(this::afficheCompteVirement);
	}

	private void afficheCompteVirement(Compte compte) {
		compte.afficheCompteVirement();
	}

	public Compte choisirCompte(int i) 
	{
		return listeComptes.get(i);
	}

	public Compte choisirCompteDestinataire(int i){
		return listeComptesDestinaire.get(i);
	}

	public void afficheCompte(Compte compte) 
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

	public void afficheListeComptesVirement(List<Compte> comptesPerso, List<Compte> comptesDestinataires) {
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

}