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
    out << v[ 0 ] << ", " << v[ 1 ] << ", " << v[ 2 ] << "; ";
    return out;
}

std::istream& operator>>( std::istream& in, Vecteur& v )
{
    in >> v[ 0 ] >> v[ 1 ] >> v[ 2 ];
    return in;
}

// 3.3 camera
Vecteur Vecteur::inf( const Vecteur& other ) const{
    Vecteur v (std::min(xyz[0], other[0]), std::min(xyz[1], other[1]), std::min(xyz[2], other[2]));
    return v;
}

Vecteur Vecteur::sup( const Vecteur& other ) const{
    Vecteur v (std::max(xyz[0], other[0]), std::max(xyz[1], other[1]), std::max(xyz[2], other[2]));
    return v;
}

// 3.4 produit vectoriel
Vecteur cross( const Vecteur& v ) const{
    Vecteur p (
                xyz[1]*v[2] - xyz[2]*v[1],
                xyz[2]*v[0] - xyz[0]*v[2],
                xyz[0]*v[1] - xyz[1]*v[0]
                );
    return p;
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

// 3.3 bounding box
void TriangleSoup::boundingBox( Vecteur& low, Vecteur& up){
    Vecteur first = triangles.front().edges[0];
    low = up = first;

    for(Triangle t : triangles){
        for(Vecteur v : t.edges){
            low = low.inf(v);
            up = up.sup(v);
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
std::ostream& operator<<( std::ostream& out, Triangle t ){
    for(Vecteur v : t.edges){
        out << v;
    }
    return out;
}

void TriangleSoup::log(){
    for(Triangle t : triangles){
        std::cout << t << std::endl;
    }
}
