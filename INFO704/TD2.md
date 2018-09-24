## Q1

**T(n) = aT(n/b) + f(n)**

### a)

T(n) = T(n/2) + O(√n)

n<sup>log<sub>b</sub>a</sup> = n^0^ = 1

Donc T(n) = O(√n)

### b)

T(n) = 4T(n/2) + O(1)

n<sup>log<sub>b</sub>a</sup> = n^2^

Donc T(n) = O(n^2^)

## Q2

quadratique = n^2^

### a)

T(n) = 2T(n/2) + O(n^2^)

n<sup>log<sub>b</sub>a</sup> = n^1^ = n

Donc T(n) = O(n^2^)

### b)

T(n) = 4T(n/2) + O(√n)

n<sup>log<sub>b</sub>a</sup> = n^2^

Donc T(n) = Theta(n^2^)