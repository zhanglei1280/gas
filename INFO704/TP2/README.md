# INFO704 TP2

## Get Started

### Node.js version 8+

### Installation de dependency (optionnelle)

```bash
$ npm i
```

Cette etape est optionnelle lorsque les dependencies sont fournies dans la repertoire `node_modules`.

### Usage

```bash
$ node index.js path_de_graphe mode
```

- path_de_graphe : le path de fichier graphe textuelle:
  - instances/chno_vrai_1.txt
  - instances/chno_vrai_2.txt
  - instances/chno_fausse_1.txt
  - instances/chno_fausse_2.
- mode : le numero de question
  - q2 : genereEtTeste
  - q3 : solvBackTracking

#### Exemple

Lancer q2 avec chno_vrai_1.txt

```bash
$ node index.js instances/chno_vrai_1.txt q2
```
