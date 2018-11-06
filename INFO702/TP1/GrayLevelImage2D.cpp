#include "GrayLevelImage2D.hpp"

GrayLevelImage2D::GrayLevelImage2D()
{
    m_width = 0;
    m_height = 0;
}

GrayLevelImage2D::GrayLevelImage2D(int w, int h, GrayLevel g)
{
    m_width = w;
    m_height = h;
    int i;
    for (i = 0; i < w * h; i++)
    {
        m_data.push_back(g);
    }
}

int GrayLevelImage2D::index(int x, int y) const
{
    return m_width * y + x;
}

GrayLevelImage2D::Iterator::Iterator(GrayLevelImage2D &Image, int x, int y)
    : Container::iterator(Image.m_data.begin() + Image.index(x, y))
{
}

int GrayLevelImage2D::w() const
{
    return m_width;
}

int GrayLevelImage2D::h() const
{
    return m_height;
}

void GrayLevelImage2D::fill(GrayLevel g)
{
    int i;
    for (i = 0; i < m_width * m_height; i++)
    {
        m_data.push_back(g);
    }
}

GrayLevelImage2D::GrayLevel
GrayLevelImage2D::at(int i, int j) const
{
    return m_data[index(i,j)];
}

GrayLevelImage2D::GrayLevel &
GrayLevelImage2D::at(int i, int j)
{
    return m_data[index(i,j)];
}

GrayLevelImage2D::Iterator
GrayLevelImage2D::begin()
{
    return Iterator(*this, 0, 0);
}

GrayLevelImage2D::Iterator
GrayLevelImage2D::end()
{
    return Iterator(*this, m_width, m_height - 1);
}

GrayLevelImage2D::Iterator
GrayLevelImage2D::start(int x, int y)
{
    return Iterator(*this, x, y);
}

bool GrayLevelImage2D::importPGM(std::istream &input)
{
    // Ouvre le flux en entrée sur le fichier "toto.pgm"
    //std::ifstream input("toto.pgm", std::ios::binary); // le ios::binary est nécessaire seulement sous Windows.
    // teste si tout va bien
    if ( ! input.good() ) 
        std::cerr << "Probleme !";
    else{
        std::string str;
        /*
        ligne 1 Vérifier : il faut commencer avec "P2" ou "P5"
        */
        std::getline( input, str );
        if (( str != "P2" ) && (str != "P5")){
            return false;
        }
        /*
        Ignorer les commemtaires
        */
        std::getline( input, str );
        while(( str != "" ) && (str[0]=='#')){
            //std::cout << "C'est un commentaire ! J'ignore superbement" << std::endl;
            std::getline( input, str );
        }
        /*
        ligne 2 obtenir m_width et m_height
        */ 
        std::istringstream istr( str );
        istr >> m_width >> m_height;
        m_data.resize(m_width * m_height);
        /*
        ligne 3 max
        */
        std::getline( input, str ); 
        for( Iterator it = begin(), itE = end(); it != itE; ++it){
            input >> std::noskipws >> *it;
        }
    }
    return true;
}

bool GrayLevelImage2D::exportPGM(std::ostream &output, bool ascii)
{
    output << "P5\n";
    output << m_width << " " << m_height << "\n";
    output << "255\n";
    for ( int y = 0; y < m_height; ++y ){
       for ( int x = 0; x < m_width; ++x )
        output << at( x, y ); 
    }
    return true;
}

void GrayLevelImage2D::set(int x, int y, int pixel){
    Iterator it = start(x,y);
    *it = pixel;
}

