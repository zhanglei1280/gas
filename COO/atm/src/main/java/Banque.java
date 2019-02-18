
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Banque
{
	private String nomBanque;
	private String codeBanque;
	public List<Banque> autresBanques = new ArrayList<Banque>();
	private List<Client> listClient = new ArrayList<Client>();
	private List<CarteClient> ListCarteClient = new ArrayList<CarteClient>();
	private List<Compte> ListCompte = new ArrayList<Compte>();

	public boolean estUnClient(String noCarte) {
		return false;
	}

	private List<Compte> recupereComptes(String noCarte) 
	{
		return ListCompte;
		
	}

	public List<Compte> recupereComptesVirement(String noCarte){
		CarteClient cc = new CarteClient(noCarte);
		Client client = cc.recupereClient();
		return client.recupereComptesVirement();
	}

	public boolean effectueVirement(Compte compteEmission, Compte compteDestinataire, float somme, Date date,
			String message) 
	{
		return (
				compteEmission.debiter(NatureOperation.Retrait, somme)
				&& compteDestinataire.debiter(NatureOperation.Retrait, -somme)
				);
	}

	public List<Compte> recupereComptesConsultation(String noCarte) 
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
}