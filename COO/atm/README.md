# COO TP : Compte Rendu

Yin Yan : yan.yin@etu.univ-savoie.fr

Zhang Lei : lei.zhang@etu.univ-savoie.fr

## 1. Introduction

On a réalisé le projet DAB, le distributeur à la banque, avec trois fonctionnalités, retrait, consultation et virement.

Les tests unitaires sont écrits pour tester une partie des fonctionnalités.

Le programme commence par l’insertion de la carte, dans ce programme on demande l’utilisateur d’entrer le numéro et le code de la carte.  

L’Authentification est l’étape suivante, le distributeur va vérifier si la carte existe par son numéro, et si le code correspond à la carte. Si la carte est correcte, le distributeur va voir si la carte est celle de son banque d’attachement, si c’est le cas , les options de retrait, consultation et virement sont disponible, sinon il n’y aura que retrait.

Pour trouver les comptes concernés avec la carte, il faut que le distributeur communique avec la banque, dont la carte client va tout d’abord trouver la titulaire, le client de cette carte, et depuis le client, ses comptes sera obtenus.



## 2. Les Use Cases

### Retrait

Quand le client choisi de retirer de l’argent, de manière dessous, le distributeur va obtenir les comptes du client et les afficher pour que le client peut choisir un. Puis le client va entrer un somme de l’argent qu’il va retirer, le distributeur va vérifier s’il y a assez de solde, si c’est le cas, le retrait est effectué, le compte est débité, une opération de la nature retrait est créée et enregistrée.

### Consultation

En cas de la consultation, le client va choisir un de son compte, et le distributeur va faire voir ce compte et afficher les informations du compte.

### Virement

Pour effectuer un virement il faut que le client choisit aussi un compte destinataire et entre le somme à transférer , après la vérification de la possibilité de virement, le compte source sera débité, le compte destinataire sera remboursé, et les opérations de nature virement seront créés et enregistrées dans les deux comptes.

## 3. Les Diagrammes

### DC

![dc](C:\Users\uvani\Documents\GitHub\s7\COO\atm\dc.jpg)

### UC

![dab_Use_Case_diagram](C:\Users\uvani\Documents\GitHub\s7\COO\atm\dab_Use_Case_diagram.jpg)

### Seq

#### Auth

![D_Seq_-_Authent_OK](C:\Users\uvani\Documents\GitHub\s7\COO\atm\D_Seq_-_Authent_OK.jpg)

#### Consultation

![DSeq_-_Consultation](C:\Users\uvani\Documents\GitHub\s7\COO\atm\DSeq_-_Consultation.jpg)

#### VIrement

![DSeq_-_Virement](C:\Users\uvani\Documents\GitHub\s7\COO\atm\DSeq_-_Virement.jpg)

## 4. Java Programme

Le programme est dans ligne de commandes.

### Get Started

- Build le projet

```bash
$ mvn clean compile
```

- Tests unitaires

```bash
$ mvn test
```

- Lancer le programme

```bash
$ mvn exec:java
```

Point d'entrer : `./src/main/java/Main.java`

### Les Captures d'Ecran

### Page d'accueil

![1550522371383](C:\Users\uvani\AppData\Roaming\Typora\typora-user-images\1550522371383.png)

Une fois la carte est insérée, on aura la page d'accueil, y compris les 3 fonctionnalités.

### Retrait

![1550522666311](C:\Users\uvani\AppData\Roaming\Typora\typora-user-images\1550522666311.png)

L'Utilisateurs ont permet de choisir un des ses comptes, et le montant de retrait.

Si tout va bien, le retrait sera effectué, et le nouveau solde sera présenté.

Si le solde n'est pas suffisant, ou la plafond de retrait est atteinte, un erreur va se présenter.

### Consultation

![1550523026158](C:\Users\uvani\AppData\Roaming\Typora\typora-user-images\1550523026158.png)

Le distributeur va présenter les informations selon le choix de l'utilisateur.

### Virement

![1550523122837](C:\Users\uvani\AppData\Roaming\Typora\typora-user-images\1550523122837.png)

Le distributeur peut effectuer un virement entre le compte source et le compte destinataire choisis par l'utilisateur.

Si le montant est supérieur au montant de solde de compte source, le virement sera annulé. 

### Récupérer la Carte

L’État revient au début.



Voyez tout les cas de tests sur les tests unitaires `./src/test/java/DistributeurTest.java` : 

```bash
$ mvn test
```





