import java.util.HashMap;

public class CarteClient {
	private String noCarte;
	private Client client;

	public boolean verifierNumeroCarte(String noCarte) {
		return false;
	}

	public Client recupereClient() {
		return client.recupereClient();
	}

	public CarteClient(String noCarte) {
		this.noCarte = noCarte;
		this.client = Seed.getClientMap().get(noCarte);
	}
}