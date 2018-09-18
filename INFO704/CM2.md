# CM2 0918

## Complexité temporelle , les bases

Le principale de base pour determiner la complexite temporelle, en notation grand-O, d'un algo:

```
Compter le nombre d'instructions elems machine effectuées
```

Instructions elementaires:

- Déclaration, affectation de variables
- Appel de fonctions auxiliare, redirection
- Tests(<, >, ==, etc.)
- Operations "constantes" elementaire (+ - * / int_to_char)

**Tout ops dont le temps ne depend pas de  la taille de l'entrée**

### Conditions

```
Si <Test> // O(T(test))
Alors <bloc1> // O(T(bloc1))
Sinon <bloc2> // O(T(bloc2))
Finsi
```

T = O(T(test) + max(T(bloc1), T(bloc2)))

### Boucle for

```
Pour i = 1 à n
Faire <bloc_i> //O(T(bloc) * n)
Finfaire
```

T = O(n * max(T(bloc_i))) 

### Boucle tq

```
Tantque <Test>
Faire <bloc>
Fintq
```

T = O(nbInteractions * (T(test) + T(boucle))

### Algo rec

```
fonction f(args)
	<bloc1> // T(bloc1)
	Si <test> // T(test)
		Alors f(argvs/* de taille p*/) //T(fp)
	Finsi
	<bloc2> // T(bloc2)
Finf
```

T = O(t(bloc1) + t(bloc2) + T(test) + T(fp))

