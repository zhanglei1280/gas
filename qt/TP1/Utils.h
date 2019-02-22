#pragma once
#include <vector>
#include <istream>
#include <fstream>
#include <string>
#include <sstream>
#include <iostream>
#include <QGLViewer/qglviewer.h>

struct Vecteur {
  float xyz[ 3 ]; // les composantes
  Vecteur() {}
  Vecteur( float x, float y, float z ); // constructeur
  float  operator[]( int i ) const;     // accesseur en lecture
  float& operator[]( int i );           // accesseur en ecriture

  // Retourne le vecteur dont les composantes sont les minima des
  // composantes de soi-même et de other.
  Vecteur inf( const Vecteur& other ) const;
  // Retourne le vecteur dont les composantes sont les maxima des
  // composantes de soi-même et de other.
  Vecteur sup( const Vecteur& other ) const;

  Vecteur cross( const Vecteur& v ) const;

  void draw();
};


struct Triangle {
    Vecteur edges[3];
    Triangle(Vecteur a, Vecteur b, Vecteur c);
    Vecteur& operator[](int i);
    Vecteur operator[](int i ) const;

    void draw();
};

struct TriangleSoup {
  std::vector<Triangle> triangles; // les triangles
  TriangleSoup() {}
  void push(Triangle t);
  void read( std::istream& in );
  void log();
  void draw();
  void boundingBox( Vecteur& low, Vecteur& up);
};
