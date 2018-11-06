// double-brightness.cpp
#include <iostream>
#include <fstream>
#include "GrayLevelImage2D.hpp"
#include <algorithm>
#include <string>
using namespace std;
int main( int argc, char** argv )
{
    typedef GrayLevelImage2D::GrayLevel GrayLevel;
    typedef GrayLevelImage2D::Iterator  Iterator;
    if ( argc < 4 ) 
    { 
        std::cerr << "Usage: filtrage-median <input.pgm> <output.pgm> <output.pgm> <taille voisinage>" << std::endl;
        return 0;
    }
    GrayLevelImage2D img;
    ifstream input( argv[1] );
    bool ok = img.importPGM( input );
    if ( !ok )
    {
        std::cerr << "Error reading input file." << std::endl;
        return 1;
    }
    input.close();

    std::string::size_type sz;
    int taille_voisinage = std::stoi (argv[3],&sz);
    std::cout << "taille voisinage : " << taille_voisinage << " * " << taille_voisinage << std::endl;
    //parcourir tous des pixel
    for ( int y = 0; y < img.h(); ++y ){
        for ( int x = 0; x < img.w(); ++x ){
            //s'il est bruit
            if( (int) img.at(x, y) == 0 || (int) img.at(x, y) == 255){
                // pour stocker les pixel de point autour de 'ce bruité'
                int list[taille_voisinage * taille_voisinage]; 
                // nombre des elements du tableau
                int indice = 0; 
                // insérer ce bruité
                list[indice++] = (int)(img.at(x, y)); 
                //on récupére les autre piexl autour de lui
                for(int a = -1; a < taille_voisinage - 1 ; a++){
                    for(int b = -1; b < taille_voisinage - 1 ; b++){
                        int pixel_x = a + x;
                        int pixel_y = b + y;
                        //s'il existe
                        if( pixel_x >= 0 && pixel_x < img.w()
                         && pixel_y >= 0 && pixel_y < img.h() ){
                            //récupérer le pixel
                            int tmp = (int) img.at(pixel_x, pixel_y);
                            //s'il n'est pas un bruité, on l'ajoute.
                            if(tmp >0 && tmp < 255)
                                list[indice++] = (int) img.at(pixel_x, pixel_y);
                        }
                    }
                }
                sort(list, list+indice); 
                img.set(x, y, list[indice/2]); 
            }
        }
    }
    ofstream output( argv[2] );
    ok = img.exportPGM( output, false );
    if ( !ok )
    {
        std::cerr << "Error writing output file." << std::endl;
        return 1;
    }
    output.close();
    return 0;
}
