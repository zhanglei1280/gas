#include "Utils.h"

// 3.1 classes de base
Vecteur::Vecteur(float x, float y, float z){
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
}

float Vecteur::operator [](int i) const{
    return xyz[i];
}

float& Vecteur::operator [](int i){
    return xyz[i];
}

std::ostream& operator<<( std::ostream& out, Vecteur v )
{
    out << v[ 0 ] << " " << v[ 1 ] << " " << v[ 2 ];
    return out;
}

std::istream& operator>>( std::istream& in, Vecteur& v )
{
    in >> v[ 0 ] >> v[ 1 ] >> v[ 2 ];
    return in;
}

Triangle::Triangle(Vecteur a, Vecteur b, Vecteur c){
    edges[0] = a;
    edges[1] = b;
    edges[2] = c;
}

Vecteur& Triangle::operator[](int i)
{
    return edges[i];
}

Vecteur Triangle::operator[](int i ) const
{
    return edges[i];
}


void TriangleSoup::push(Triangle t){
    triangles.push_back(t);
}

void TriangleSoup::read(std::istream& in){
    std::string line;
    while(std::getline(in, line)){
        //std::cout << line << std::endl;
        if(!(line.empty())){
            if(line[0] != '#'){
                std::istringstream iss (line);
                Vecteur a, b, c;
                iss >> a;
                iss >> b;
                iss >> c;
                Triangle t (a, b, c);
                push(t);
            }
        }
    }
}

// draw
void Vecteur::draw(){
    glVertex3f(xyz[0], xyz[1], xyz[2]);
}

void Triangle::draw(){
    for(Vecteur v : edges){
        v.draw();
    }
}

void TriangleSoup::draw(){
    for(Triangle t : triangles){
        t.draw();
    }
}

// debug
using namespace std;
void Vecteur::log(){
    int i;
    for(i = 0; i < 3; i++){
        cout << xyz[i] << ", ";
    }
    cout << endl;
}

void Triangle::log(){
    int i;
    for(i = 0; i < 3; i++){
        edges[i].log();
    }
}
