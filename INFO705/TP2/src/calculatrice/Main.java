package calculatrice;

import calculator.generic.Calculatrice;
import calculator.generic.MoteurCalculSimple;

public class Main {
	public static void main(String[] args) {
		MoteurCalculSimple m = new MoteurCalculSimple();
		Calculatrice c = new Calculatrice(m);

	}

}
