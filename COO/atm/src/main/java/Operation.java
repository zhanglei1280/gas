import java.util.Date;

public class Operation 
{
	private NatureOperation nature;
	private float montant;
	private Date dateOperation;

	public String afficheOperation()
	{
		return "NatureOperation : " + nature + "\n" + "Montant : " + montant + "\n" + "dateOperation : "
				+ dateOperation.toString() + "\n";
	}

	public Operation(NatureOperation nature, float montant)
	{
		this.nature = nature;
		this.montant = montant;
		dateOperation = new Date();
		
	}
}
