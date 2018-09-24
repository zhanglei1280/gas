## Dernier cours

f une fonction "reguliere", a et b const

- Si T(n) = aT(n/b) + f(n), on calcul N = n<sup>log<sub>b</sub>a</sup>
  - si f(n) = O(N/n<sub>ep</sub>) alors T(n) = N
  - si f(n) = Omega(Nn<sup>ep</sup>) alors T(n) = f(n)
  - si f(n) = Theta(N) alors T(n) = Nlogn
- Si T(n) = T(n-a) + n<sup>b</sup>, alors T(n) = Theta(n<sup>b+1</sup>)
- Si T(n) = bT(n-a) + Omega(1) `where b >= 2`, alors T(n) = Omega(2<sup>n</sup>)

## Initialisation de preuve

T(n) = aT(n/b) + f(n)

​	= T(n/b) + T(n/b) + ... + T(n/b) + f(n)

On sait que T(n/b) = aT(n/b^2^) + f(n/b)

On obtient une arbre