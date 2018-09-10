# CM1 20180910

### Notation de complexité 

- complexité en temps <- concerne 
- complexité en espace 
- complexité de communication 

```
Complexité algorithmique - why?
Grosse distinction du temps entre 2 algos pour le même problème.
```

### différentes mesures de complexité 

- complexité dans meilleur cas `x`
- complexité en cas moyen `ça `
- complexité dans le pire cas

### mesurer une complexité 

#### approche expérimental :

- implémenter l'algo
- tester l'algo
  - dépendant de l'environnement 
  - quelles instances
  - temps d'implémentation 

#### approche théorique :

- estimer préalablement  le temps d'examen 
  - calcul au lieu de l'implémentation

Plus précisément, on va chercher un <u>ordre de grandeur</u>.

*Ideé* : compter le nombre d'opérations élémentaires effectuées

- affection 
- calcul arithmétique en logique 
- comparaison 
- appel en mémoire 

ainsi, moins de l'algo fait de tels opérations élémentaires, plus il est rapide.

### complexité des algos de tri

| algo      | pire             | moyen            |
| --------- | ---------------- | ---------------- |
| Insertion | O(n<sup>2</sup>) | O(n<sup>2</sup>) |
| Selection | O(n<sup>2</sup>) | O(n<sup>2</sup>) |
| QS        | O(n<sup>2</sup>) | O(nlogn)         |
| Fusion    | O(nlogn)         | O(nlogn)         |
| random    | ∞                | O(2<sup>n</sup>) |

### formalisation 

un **problème** est une fonction reliant son entrée dont la valeur n'est pas spécifiée à sa sortie.

```
Ex: Pb de tri
entrée : la tableau d'entiers
```

une **instance** d'un problème est une spécification des valeurs d'entrée.

```
Ex: [1, 3, 2, 7, 5] est une instance 
```

la **complexité  temporelle d'un algo** est la fonction que `à un entier n`, retourne grand nombre d'étapes  (opérations élémentaires) nécessaire pour résoudre une `instance de taille n`. (pire des cas)

le calcul exact et d'une telle fonction est difficile : 

- il dépend des opérations élémentaires
- il dépend du choix d'encodage / structure de donnée
- utilisation d'approximation : si n est petit ? si n est grand ?

Ex :

- n<sup>3</sup> + 8
- 25 + 8n<sup>2</sup>

### quelques outils mathématiques 

Dans ce cours, on utilise 3 types de fonctions

- fonction exponentielle : 指数
- fonction polynomiale : 多项式
- fonction logarithme : 对数

