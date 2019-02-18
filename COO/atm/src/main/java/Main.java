import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Date;
import java.util.List;

@SuppressWarnings("ALL")
public class Main
{
	private static Banque CA = new Banque("CA", "001");
	private static Banque LCL = new Banque("LCL", "002");
	private static Distributeur distributeurCA = new Distributeur(CA);
	private static Seed seed = new Seed();
	private static String noCarte;
	private static boolean fini = false;

	public static void seed(){

	}

	public static void main(String[] args) throws IOException
	{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		System.out.print("Saisissez votre numero de carte: ");
		noCarte = br.readLine();

		distributeurCA.insererCarte(
				noCarte,
				"1111",
				3
		);

		String choix;

		while(!fini) 
		{
			afficherMenu();
			System.out.print("faire votre choix: ");
			choix = br.readLine();  
			traiterChoix(choix);
		}
	
	}
	
	
	public static void traiterChoix(String choix) throws IOException
	{
		if(choix.equals("1"))
		{
			System.out.println("1. retrait");
		}
		else if(choix.equals("2"))
		{
			System.out.println("2. consultation");
			distributeurCA.consultation();
			
			distributeurCA.afficheListeComptes();
			
			System.out.println("Choisissez votre compte: ");
			String choixCompte;
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));  
			choixCompte = br.readLine();
			distributeurCA.afficheCompte(distributeurCA.choisirCompte(Integer.parseInt(choixCompte)));
		}
		else if(choix.equals("3"))
		{
			System.out.println("3. virement");
			distributeurCA.virement();

			distributeurCA.afficheListeComptes();
			System.out.println("Choisissez votre compte source: ");
			String choixCompte;
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			choixCompte = br.readLine();
			Compte compteSource = distributeurCA.getListeComptes().get(Integer.parseInt(choixCompte));

			distributeurCA.afficheListeCompteDestinataire();
			System.out.println("Choisissez votre compte destinaire: ");
			String choixCompteDest;
			choixCompteDest = br.readLine();
			Compte compteDest = distributeurCA.getListeComptesDestinaire().get(Integer.parseInt(choixCompte));


			System.out.println("Saisissez le montant: ");
			String montant = br.readLine();

			Boolean vire = distributeurCA.selectionneInformationsVirement(
					compteSource,
					compteDest,
					Float.parseFloat(montant),
					new Date(),
					"aaa"
			);

			if(vire){
				System.out.println("Virement done");
			}else{
				System.out.println("Virement error");
			}
		}
		else
		{
			System.out.println("Bye bye ");
			fini = true;
		}

	}
	
	public static void afficherMenu()
	{
		System.out.println("----------- Welcome to our bank---------------");
		System.out.println("1. Retirer de l'a");
		System.out.println("2. Consulster votre compte");
		System.out.println("3. virement");
		System.out.println("Entrer other numbers to exit.");
	}
}
