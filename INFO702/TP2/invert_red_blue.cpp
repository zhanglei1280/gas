#include <iostream>
#include <fstream>
#include "Image2D.hpp"
#include "Color.hpp"
#include "Image2DReader.hpp"
#include "Image2DWriter.hpp"
using namespace std;

int main(int argc, char ** argv)
{

    typedef Image2D<Color> ColorImage2D;
    ColorImage2D imgc;
    typedef ColorImage2D::Iterator Iterator;

    ifstream input(argv[1], std::ios::binary);
    bool ok = Image2DReader<Color>::read(imgc, input);

    if ( !ok ) std::cerr << "Hum !" << std::endl; 
    input.close();  

    for (Iterator it = imgc.begin(), itE = imgc.end(); it != itE; ++it )
    {
        Color::Byte r = it -> red;
        Color::Byte g = it -> green;
        Color::Byte b = it -> blue;
        * it = Color(b, g, r);
    }

    std::ofstream output(argv[2], std::ios::binary); // ios::binary for Windows system
    bool ok1 = Image2DWriter<Color>::write( imgc, output, false );
    if ( !ok1 ) 
    {
        std::cerr << "Error writing output file." << std::endl;
        return 1;
    }
    output.close();
    return 0;
}
