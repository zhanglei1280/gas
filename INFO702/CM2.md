# CM2 0917

### Fonctions

Même principe que le C

```c++
 <type-return> <nom_fct>(<paral..>) //déclaration 

{
 ... //définition 

}
```

 ≠C : On peut ??? Les fcts:
 Même nom mais signature ≠
 Ex:

```c++
float abs(Float x) { return x >= 0? X: -x} 
Double abs(double x){
Auto x = abs(-3.5f); float g = abs(2.7);
```

### Struct et Class

Le C++ vous permet de grouper des données (attribut)et des fonctions associée(méthodes)
avec 2 mot-clé : `struct` et `class`

#### struct

Par defaut, les membres sont publiques

```c++
Struct A {
Int x; //public
private :
double m;//privé
} ;
type de nom A
```

#### Class

Par defaut, les membres sont privés

```c++
Class A {
int x; // privé
public :
double y; //public 
} ;
```



Si on peut déclarer ou définir des méthodes / fcts membres dans les struct / class.

`Voiture.hpp`

```c++

class Voiture{
     string _marque;
     string _modèle;
     int _CV const;
public:
     Voiture() = delete;
}
Void quiSuisJe() const
{
     std::cout << _modele << " "
     std::cout << _marque<< " "
     std::cout << _cv<< " "
}
Voiture(string marque: string modèle; int cv =
100);
//getter
int cv();
// destinateur
Voiture(){ std::cout << "Anary!";}
//constructeur de copie
Voiture(const Voiture & autre)
```

`voiture.cpp`

```c++
#include "Voiture.hpp"
Voiture::Voiture(String marque; string modele; int cv)
    // les constructeurs des attris sont appelés
{
    _marque = marque;
	_modele = modele;
	this -> _cv = cv;
}

int Voiture::cv()
{ return _cv; }
```

Une méthode est dite **constante** si elle ne modifie pas les attributs privés par `this`. On rajoute `const` à la signature de la méthode.
Attention : Dans une classe, on peut avoir 2 méthodes dont la signature diffèrent par juste const. On crée un objet en C++ en déclarant une variable du type voulu. 

Ex:

```c++
Voiture v1("renanlt", "5", 80); Voiture v2("Bugitte", "veyren", 950); ...
std::cout << v1.cv() << std::cout;
} //v1 et v2 sont détuite ici
```

---> création des objets dans la pile d'exécution.

```c++
 //constructeur par cequi de voiture
 Voiture::Voiture(const Voiture & autre)
 :_modele(autre._modele),
  _manque(autre._marque),
  _cv(autre.cv){}
 void Voiture::quiSuisJe()const
 { ... }
```



Une exemple avec surcharge d'opérateur : les vecteurs du plan

`Vecteur.hpp`

```c++
Class Vecteur{
      Double _x;  // double _x[2];
      Double _y;
 public:
      Vecteur();
      Vecteur(double x, double y);
      void add(Vecteur v);
      Vecteur& operateur+=(const Vecteur v);
      Vecteur operateur+(const Vecteur v) const;
}
```

`Vecteur.cpp`

```c++
Vecteur::Vecteur()
    :_x(0.0),_y(0.0){}
Vecteur::Vecteur(double x, double y)
    :_x(x),_y(y){}
void Vecteur::add(Vecteur v)
{
_x += v._x;
_y += v._y; }
Vecteur& Vecteur::operateur +=(const Vecteur& v)
{
    _x += v._x;
    _y += v._y;
    return *this;//this est un pointeur à soi-même
x = y += 2 -= a;
}
Vecteur Vecteur::operateur+(const Vecteur & v) const
{
    Vecteur u = *this;
    u += v;
    return u;
}
```

```c++
Vecteur v1(3.0, 1.0);
Vecteur v1(2.0, 2.0);
v2 += v1; // equivalant=> v2.operateur+=
(v1);
             V2 ==(5.0, 3.0)
Vecteur v3(...)
V3 += v2 += v1;
Vecteur v1, v2...
V3 = v1 + v2;
```

