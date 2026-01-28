
# Osoittimet C++-ohjelmoinnissa

## Johdanto
Osoittimet ovat tärkeä osa C++-ohjelmointia. 
Niiden avulla voidaan käsitellä muistia tehokkaasti sekä jakaa tietoa funktioiden välillä.

## Mikä on osoitin?
Osoitin on muuttuja, joka sisältää toisen muuttujan muistiosoitteen. Osoittimen avulla voidaan lukea ja muuttaa toisen muuttujan arvoa.

## Esimerkki
Alla on esimerkki osoittimen käytöstä C++:ssa:

```cpp
int x = 5;        // Luodaan kokonaislukumuuttuja x ja asetetaan sen arvoksi 5

int* pX = &x;    // Luodaan osoitin pX, joka tallentaa muuttujan x muistiosoitteen

*pX = 10;        // Muutetaan x:n arvoa osoittimen kautta (x:n arvoksi tulee 10)
```