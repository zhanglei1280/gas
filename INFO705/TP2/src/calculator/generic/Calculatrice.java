package calculator.generic;

// pour l'interface graphique
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.TextField;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.URL;

import javax.swing.*;
import org.apache.xmlrpc.client.XmlRpcClient;
import org.apache.xmlrpc.client.XmlRpcClientConfigImpl;

/**
 * La classe <code>Calculatrice</code> est l'interface graphique d'une
 * calculatrice simple. Le calcul des r�sultats sera effectu� par un moteur de
 * calcul s�par� sp�cifi� par l'interface <code>IMoteurCalcul</code>.
 * 
 */

// fenetre qui gere elle meme ses evenements
public class Calculatrice extends JFrame implements ActionListener {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private IMoteurCalcul moteurCalcul;

	// tableau de boutons
	private JButton[] buttons;

	// ecran de la calculatrice
	private TextField ecran;

	// tableau des legendes des boutons
	private static String[] labels = { "(", ")", "EFF", "OFF", "7", "8", "9",
			"*", "4", "5", "6", "/", "1", "2", "3", "-", "0", ".", "=", "+" };

	// pour savoir s'il faut effacer l'ecran ou non
	boolean estCalcule = false;

	// constructeur
	public Calculatrice(IMoteurCalcul moteur_calcul) {
		// la fenetre a pour titre "Calculatrice"
		super("Calculatrice");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		this.moteurCalcul = moteur_calcul;

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
			try 
			{
//				Double resultat = moteurCalcul.calculer(ecran.getText());
//				// affichage du resultat
//				ecran.setText(resultat.toString());
//				 //il faudra effacer l'ecran
//				 //lors de la prochaine frappe
//				estCalcule = true;
				
				XmlRpcClientConfigImpl config = new XmlRpcClientConfigImpl();
			    config.setServerURL(new URL("http://127.0.0.1:3100/xmlrpc"));
			    XmlRpcClient client = new XmlRpcClient();
			    client.setConfig(config);
			    
			    Object[] params = new Object[]{new String(ecran.getText())};
			    Double resultat = (Double) client.execute("MoteurCalculSimple.calculer", params);
			    ecran.setText(resultat.toString());
			    estCalcule = true;
				
				
				
				
				
				
			}
			// plantage du programme
			catch (Exception ex) {
				JOptionPane.showMessageDialog(this,
						"<html>Erreur interne :<br>" + ex.getMessage()
								+ "<html>");
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
}
