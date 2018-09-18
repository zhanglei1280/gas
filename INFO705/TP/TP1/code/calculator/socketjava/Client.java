package calculator.socketjava;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;

import calculator.generic.ExpressionInvalide;

public class Client {

	public static void main(String[] args) throws IOException, ExpressionInvalide {
	
		String host = "127.0.0.1"; 
	    int port = 3200;
	    // 
	    @SuppressWarnings("resource")
		Socket S = new Socket(host, port);
	    
	    String expression = "3+2";
	    System.out.println("<< Client : expression : " + expression);
	    //String expression2 = "(4 - 3.14) * (2 - 5)";
		
	    OutputStream OS = S.getOutputStream();
		PrintWriter PW = new PrintWriter(OS);
		PW.println(expression);
		PW.flush();
		System.out.println("<< Client : envoyer " + expression);
		
		InputStream IS = S.getInputStream();
		InputStreamReader ISR = new InputStreamReader(IS);
		BufferedReader BR = new BufferedReader(ISR);
		
		String resultat = BR.readLine();
		
		System.out.println("<< Client : resultat : " + resultat);
		
	}

}
