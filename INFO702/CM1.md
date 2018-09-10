# CM1 20180910

## I3 Pointeurs, tableaux

Une **variable** est un nom alias que l'on donne à une zone mémoire dont la taille correspond au type souhaité.

```c++
void f(int y){
    int x = 5;
    // access x, y
    // appler autres fonctions
    char t[10]; 
    // t est une constante, il contient 10 adresses de variables, ça fait 10 variables
    // 1 adresse = 1 variable ?
    
}

void g(){
    char c;
    *(&c + 32) = 15;
    // don't do this
}
```

```c++
void set7(int* pi){
    *pi = 7
}

int main(...){
    int i = 5;
    set7(&i); // 7
    int j = i + 2; // 9
    ...
}
```

**Référence :** permet de définir un alias à une autre variable (plus précisément lvalue)

```c++
int i = 4;
int& k = i; // type reference
k += 2;
// k = 6; i = 6

int t[3];
int& t0 = t[0]
int& t1 = t[1]
int& t2 = t[2]

void set7(int& i){ i = 7; }
int k = 3;
set7(k); // 7

const int& j = k;
// j permet la lecture de la valeur de k

void f(const T& t){
    ..
    // passage par référence constante, utile quand t n'est pas une type de base
}
```

