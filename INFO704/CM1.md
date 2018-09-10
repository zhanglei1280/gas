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