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
GrayLevelImage2D::Iterator::Iterator(GrayLevelImage2D &Image, int x, int y)
{
    Image.m_data.begin() += (x * (Image.m_height - 1) + y - 1);
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
    return m_data[i * (m_height - 1) + j - 1];
}

GrayLevelImage2D::GrayLevel &
GrayLevelImage2D::at(int i, int j)
{
    return m_data[i * (m_height - 1) + j - 1];
}

GrayLevelImage2D::Iterator
GrayLevelImage2D::begin()
{
    return Iterator(*this, 0, 0);
}

GrayLevelImage2D::Iterator
GrayLevelImage2D::end()
{
    return Iterator(*this, 0, m_height);
}

GrayLevelImage2D::Iterator
GrayLevelImage2D::start(int x, int y)
{
    return Iterator(*this, x, y);
}

bool GrayLevelImage2D::importPGM(std::istream &input)
{
    // Ouvre le flux en entrée sur le fichier "toto.pgm"
    ifstream input("toto.pgm", std::ios::binary); // le ios::binary est nécessaire seulement sous Windows.
    // teste si tout va bien
    if (!input.good())
        std::cerr << "Probleme !";
    // par exemple, lit un entier:
    int i;
    input >> i;
    // par exemple, lit un mot (s'arrête à un caractères de séparation.
    std::string s;
    input >> s;
    // par exemple, lit toute une ligne dans une chaîne de caractères.
    std::getline(input, str);
    if ((str != "") && (str[0] == '#'))
        std::cout << "C'est un commentaire ! J'ignore superbement";
}