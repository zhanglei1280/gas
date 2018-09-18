package calculator.generic;

// pour l'interface graphique
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.TextField;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;

import javax.swing.*;

/**
 * La classe <code>Calculatrice</code> est l'interface graphique d'une
 * calculatrice simple. Le calcul des r�sultats sera effectu� par un moteur de
 * calcul s�par� sp�cifi� par l'interface <code>IMoteurCalcul</code>.
 * 
 */

// fenetre qui gere elle meme ses evenements
public class SuperClient extends JFrame implements ActionListener {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	// private IMoteurCalcul moteurCalcul;

	// tableau de boutons
	private JButton[] buttons;

	// ecran de la calculatrice
	private TextField ecran;

	// tableau des legendes des boutons
	private static String[] labels = { "(", ")", "EFF", "OFF", "7", "8", "9", "*", "4", "5", "6", "/", "1", "2", "3",
			"-", "0", ".", "=", "+" };

	// pour savoir s'il faut effacer l'ecran ou non
	boolean estCalcule = false;

	private Socket S;

	// constructeur
	public SuperClient() throws IOException, ExpressionInvalide {
		// la fenetre a pour titre "Calculatrice"
		super("Calculatrice");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		// this.moteurCalcul = moteur_calcul;

		setLayout(new BorderLayout());
		// l'ecran occupe le haut de la fenetre
		ecran = new TextField("");
		add(BorderLayout.NORTH, ecran);

		// creation du clavier
		JPanel clavier = new JPanel();
		clavier.setLayout(new GridLayout(5, 4));

		// on cree chaque bouton
		buttons = new JButton[labels.length];
		for (int i = 0; i < labels.length; i++) {
			buttons[i] = new JButton(labels[i]);
			clavier.add(buttons[i]);
			buttons[i].addActionListener(this);
		}

		// ajout du clavier au centre de la fenetre
		add(BorderLayout.CENTER, clavier);
		pack();
		setVisible(true);

		S = new Socket("127.0.0.1", 3200);
	}

	// gestion des clics sur bouton
	public void actionPerformed(ActionEvent e) {
		// recuperation de la commande associee
		// (i.e. la legende du bouton)
		String s = e.getActionCommand();
		// chaque commande est identifiable par son premier caractere
		char c = s.charAt(0);
		switch (c) {
		// effacement de l'ecran
		case 'E':
			ecran.setText("");
			break;
		// on quitte
		case 'O':
			System.exit(0);
			// calcul et affichage de l'expression
		case '=':
			String expression = ecran.getText();
			System.out.println("<< Client : expression : " + expression);

			try {
				//---
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
				//---
//				Double resultat = moteurCalcul.calculer(ecran.getText());
				// affichage du resultat
				ecran.setText(resultat);
				// il faudra effacer l'ecran
				// lors de la prochaine frappe
				estCalcule = true;
			}
			// plantage du programme
			catch (Exception ex) {
				JOptionPane.showMessageDialog(this, "<html>Erreur interne :<br>" + ex.getMessage() + "<html>");
				ecran.selectAll();
			}
			break;
		// toutes les autres touches : ajout du caractere correspondant
		default:
			if (estCalcule)
				ecran.setText("");
			StringBuffer temp = new StringBuffer(ecran.getText());
			temp.append(c);
			ecran.setText(new String(temp));
			estCalcule = false;
			break;
		}
	}
	public static void main(String[] args) throws IOException, ExpressionInvalide {
		SuperClient s = new SuperClient();
	}
}
