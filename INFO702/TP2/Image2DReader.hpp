#ifndef _IMAGE2DREADER_HPP_
#define _IMAGE2DREADER_HPP_
#include <iostream>
#include <string>
#include <sstream>
#include "Color.hpp"
#include "Image2D.hpp"
using namespace std;
template <typename TValue>
class Image2DReader 
{
    public:
    typedef TValue Value;
    typedef Image2D<Value> Image;
    static bool write(std::ostream & output)
    {
        std::cerr << "[Image2DWriter<TValue>::write] NOT IMPLEMENTED." << std::endl;
        return false;
    }
};

/// Specialization for gray-level images.
template <>
class Image2DReader<unsigned char> 
{
    public:
    typedef unsigned char Value;
    typedef Image2D<Value> Image;
    static bool read( Image & img , std::istream & input )
    {
        typedef Image::Iterator Iterator;
        std::string str;
        if (!input.good()) 
        {
            std::cerr << "Probleme !";
        }
        else
        {
            for(int i = 0; i < 4; i++)
            {
                std::getline( input, str);
                if(i == 2)
                {
                    // std::cout << "str = " << str << std::endl;
                    typedef std::vector<std::string>  StringList;
                    StringList li;
                    std::string subStr;
                    for(size_t i = 0; i < str.length(); i++)
                    {
                        if(str[i] == ' ')
                        {
                            if(!subStr.empty())
                            {
                                li.push_back(subStr);
                                subStr.clear();
                            }
                        }
                        else
                        {
                            subStr.push_back(str[i]);
                        }
                    }
                    if(!subStr.empty())
                    {
                        li.push_back(subStr);
                    }

                    img.setW(atoi(li[0].c_str()));
                    img.setH(atoi(li[1].c_str()));
                }
            }
            cout<<img.w() << "  " << img.h() << endl;
            img.getData().resize(img.w()*img.h());
            for (Iterator it = img.begin(), itE = img.end(); it != itE; ++it )
            {
                input >> std::noskipws >> * it;
            }
        }
        return true;
    }
};

/// Specialization for color images.
template <>
class Image2DReader<Color> 
{
    public:
    typedef Color Value;
    typedef Image2D<Value> Image;
    static bool read( Image & img, std::istream & input)
    {
        typedef Image::Iterator Iterator;
        std::string str;
        if (!input.good()) 
        {
            std::cerr << "Probleme !";
        }
        else
        {
            for(int i = 0; i < 4; i++)
            {
                std::getline( input, str);
                if(i == 2)
                {
                    typedef std::vector<std::string>  StringList;
                    StringList li;
                    std::string subStr;
                    for(size_t i = 0; i < str.length(); i++)
                    {
                        if(str[i] == ' ')
                        {
                            if(!subStr.empty())
                            {
                                li.push_back(subStr);
                                subStr.clear();
                            }
                        }
                        else
                        {
                            subStr.push_back(str[i]);
                        }
                    }
                    if(!subStr.empty())
                    {
                        li.push_back(subStr);
                    }

                    img.setW(atoi(li[0].c_str()));
                    img.setH(atoi(li[1].c_str()));
                }
            }
            cout<<img.w() << "  " << img.h() << endl;
            img.getData().resize(img.w()*img.h());
            input >> std::noskipws;
            for (Iterator it = img.begin(), itE = img.end(); it != itE; ++it )
            {
                char r, g, b;
                input >> r >> g >> b;
                * it = Color(r, g, b);
            }
        }
       
        return true;
    }
};
#endif // _IMAGE2DWRITER_HPP_