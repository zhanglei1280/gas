## Complexite des fonctions rec

### Theo

Soit T(n) une fonction de complexite satisfusant l'equation de rec

T(n) >= aT(n/b) + f(n) where a>=1, b>=2 et f(n) = Omega(1)

Alors,

- cas 1: si f(n) among O(n<sup>log<sub>b</sub>a-ep</sup>), alors T(n) = Ø(n<sup>log<sub>b</sub>a</sup>)
- cas 2: si f(n) among O(n<sup>log<sub>b</sub>a</sup>), alors T(n) = Ø(n<sup>log<sub>b</sub>a</sup>logn)
- cas 3: si f(n) among O(n<sup>log<sub>b</sub>a+ep</sup>), s'il existe c > 1 tq af(n/b) ≤ f(n), alors T(n) = Ø(f(n))

### Theo 

- Si T(n) = T(n-a) + O(n^b^) where est ?

  alors T(n) = Ø(n^b+1^)

- Si T(n) = cT(n-a)+Omega(1) where a, c const et c >1

  alors T(n) = k^n^ exponenciel ! (k const)