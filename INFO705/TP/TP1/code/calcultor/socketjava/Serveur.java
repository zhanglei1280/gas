package calcultor.socketjava;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.InputStream;

import calculator.generic.ExpressionInvalide;
import calculator.generic.MoteurCalculSimple;

public class Serveur {

	public static void main(String[] args) throws IOException, ExpressionInvalide {
		// socket server
		ServerSocket SS = new ServerSocket(3200);
		
		while(true) {
			// ecoute
			System.out.println("waiting...");
			Socket S = SS.accept();

			InputStream IS = S.getInputStream();
			InputStreamReader ISR = new InputStreamReader(IS);
			BufferedReader BR = new BufferedReader(ISR);
			String expression = BR.readLine();

			System.out.println("<< Serveur : expression : " + expression);

			MoteurCalculSimple m = new MoteurCalculSimple();
			Double resultat = m.calculer(expression);

			System.out.println("<< Serveur : resultat : " + resultat);

			OutputStream OS = S.getOutputStream();
			
			PrintWriter PW = new PrintWriter(OS);
			PW.println(resultat);
			
			PW.flush();
			//OutputStreamWriter OSR = new OutputStreamWriter(OS);
			//OSR.write(resultat.toString());
			//SS.close();
		}
		

	}

}
