public class Carte 
{
	private String noCarte;
	private String code;
	private int nbEssaisRestant;

	public boolean codeOK(String codeS) {
		return this.code.equals(codeS);
	}

	public String getNoCarte() 
	{
		return noCarte;
	}

	public Carte(String noCarte, String code, int nbEssaisRestant) 
	{
		this.noCarte =noCarte;
		this.code = code;
		this.nbEssaisRestant = nbEssaisRestant;
	}

	
	void setNoCarte(String value) {
		// Automatically generated method. Please delete this comment before entering
		// specific code.
		this.noCarte = value;
	}
}