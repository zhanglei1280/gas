import java.util.ArrayList;
import java.util.List;

public class Client 
{
	private String name;
	private ArrayList<Compte> listCompte = new ArrayList<Compte>();
	private ArrayList<Compte> listCompteVirement = new ArrayList<Compte>();

	public void addCompte(Compte compte){
		listCompte.add(compte);
	}

	public void addCompteVirement(Compte compte){
		listCompteVirement.add(compte);
	}

	public ArrayList<Compte> recupereComptes() {
		return listCompte;
	}

	public ArrayList<Compte> recupereComptesVirement() {
		return listCompteVirement;
	}

	public Client recupereClient() 
	{
		return this;
	}


	public Client(String name) {
		this.name = name;
	}
}