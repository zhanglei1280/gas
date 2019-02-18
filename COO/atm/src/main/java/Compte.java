
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Compte {
	private float solde;
	private String noCompte;
	private float plafondRetrait;
	private List<Client> client = new ArrayList<Client>();
	private List<Operation> listOp = new ArrayList<Operation>();

	public void afficheCompte() {
		System.out.println("noCompte : " + noCompte + "\n" + "Solde : " + solde + "\n" + "plafondRetrait : " + plafondRetrait + "\n");
	}

	public float getSolde(){
		return solde;
	}

	public String getNoCompte(){
		return noCompte;
	}

	public Compte recupereCompte() {
		return this;
	}

	public void afficheCompteVirement() {
		System.out.println("noCompte : " + noCompte + "\n");
	}

	public boolean verifierVirementPossible(float somme) {
		return somme >= solde;
	}

	public Compte(float Solde, String noCompte, float plafondRetrait) {
		this.solde = Solde;
		this.noCompte = noCompte;
		this.plafondRetrait = plafondRetrait;
	}

	public boolean debiter(NatureOperation nature, float somme){
		if(this.solde + somme < 0) return false;
		solde -= somme;
		listOp.add(new Operation(nature, somme));
		return true;
	}
}
