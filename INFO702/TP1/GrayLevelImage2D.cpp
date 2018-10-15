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
    return x * (m_height - 1) + m_width - 1;
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
    if (!input.good())
        return false;
    std::string str;
    input >> str;
    while(!input.eof()){
        std::getline(input, str);
        if (!((str != "") && (str[0] == '#')))
            std::cout << str << std::endl;
    }
    return true;
}

bool GrayLevelImage2D::exportPGM(std::ostream &output, bool ascii)
{
    return true;
}
