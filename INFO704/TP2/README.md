# INFO704 TP2

YIN Yan

CHNO et 3-sat

## Get Started

### Node.js version 8+

### Installation de dependency

```bash
$ npm i
```

### Fichiers concernés

- src/graphParser.js : parser de graphe
- src/3SATParser.js : parser de problème 3-sat
- src/tp2.js : objectif de tp2
- src/tp3.js : objectif de tp3
- chno.js : lanceur de tp2
- sat.js : lanceur de tp3
- test/tp2.test.js : test unitaire de tp2
- test/tp3.test.js : test unitaire de tp3

### Usage

```bash
$ node chno.js path_de_graphe mode
$ node sat.js path_de_3sat mode
```

- path_de_graphe : le path de fichier graphe textuelle:
  - instances/chno_vrai_1.txt
  - instances/chno_vrai_2.txt
  - instances/chno_fausse_1.txt
  - instances/chno_fausse_2.txt
- path_de_3sat:
  - instances/3SAT_vrai.txt
  - instances/3SAT_faux.txt
- mode : le numero de question
  - q2 : genereEtTeste
  - q3 : solvBackTracking

#### Exemple

Lancer q2 avec chno_vrai_1.txt

```bash
$ node chno.js instances/chno_vrai_1.txt q2
```

Lancer 3sat avec 3SAT_vrai.txt

```bash
$ node sat.js instances/3SAT_vrai.txt
```

#### shortcut

```bash
$ npm run q2
$ npm run q3
$ npm run sat
```

### test unitaire avec timer
```bash
$ npm test
```

