import java.util.ArrayList;
import java.util.List;

public class Client 
{
	private String name;
	private List<Compte> listCompte = new ArrayList<Compte>();
	private List<Compte> listCompteVirement = new ArrayList<Compte>();

	public void addCompte(Compte compte){
		listCompte.add(compte);
	}

	public void addCompteVirement(Compte compte){
		listCompteVirement.add(compte);
	}

	public List<Compte> recupereComptes() {
		return listCompte;
	}

	public List<Compte> recupereComptesVirement() {
		return listCompteVirement;
	}

	public Client recupereClient() 
	{
		return this;
	}

	List<Compte> getListCompte() {
		// Automatically generated method. Please delete this comment before entering
		// specific code.
		return this.listCompte;
	}

	void setListCompte(List<Compte> value) {
		// Automatically generated method. Please delete this comment before entering
		// specific code.
		this.listCompte = value;
	}

	public Client(String name) {
		this.name = name;
	}
}