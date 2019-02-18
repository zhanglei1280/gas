
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Banque
{
	private String nomBanque;
	private String codeBanque;
	public ArrayList<Banque> autresBanques = new ArrayList<Banque>();
	private ArrayList<Client> listClient = new ArrayList<Client>();
	private ArrayList<CarteClient> ListCarteClient = new ArrayList<CarteClient>();
	private ArrayList<Compte> ListCompte = new ArrayList<Compte>();

	public boolean estUnClient(String noCarte) {
		return false;
	}

	private ArrayList<Compte> recupereComptes(String noCarte)
	{
		return ListCompte;
		
	}

	public ArrayList<Compte> recupereComptesVirement(String noCarte){
		CarteClient cc = new CarteClient(noCarte);
		Client client = cc.recupereClient();
		return client.recupereComptesVirement();
	}

	public boolean effectueVirement(Compte compteEmission, Compte compteDestinataire, float somme, Date date,
			String message) 
	{
		return (
				compteEmission.debiter(NatureOperation.virement, somme)
				&& compteDestinataire.debiter(NatureOperation.virement, -somme)
				);
	}

	public ArrayList<Compte> recupereComptesConsultation(String noCarte)
	{
		CarteClient cc = new CarteClient(noCarte);
		Client client = cc.recupereClient();
		return client.recupereComptes();
	}

	private void recupereComptesDestinataire(Compte compte) {

	}

	public Banque(String nomBanque, String codeBanque) {
		this.nomBanque = nomBanque;
		this.codeBanque = codeBanque;
	}

	public boolean effectueRetrait(
			Compte compte,
			float somme
	){
		return compte.debiter(NatureOperation.Retrait, somme);
	}
}