#include <qapplication.h>
#include <fstream>
#include <exception>
#include <iostream>
#include "Viewer.h"

using namespace std;
int main(int argc, char** argv)
{
  // Read command lines arguments.
  QApplication application(argc,argv);
  // Instantiate the viewer.
  Viewer viewer;
  // Give a name
  TriangleSoup iSoup;
//  ifstream input;
//  try{
//      input.open("nothing");
//  }
//  catch(std::system_error& e){
//      std::cerr << e.what() << e.code().message() << std::endl;
//  }

  ifstream input("/home/yan/Documents/github/s7/qt/TP1/tref.tri");
  if ( ! input.good() ) std::cerr << "ERROR" << std::endl;

  iSoup.read( input );
  input.close();
  viewer.ptrSoup = &iSoup;
  viewer.setWindowTitle("Viewer triangle soup");
  // Make the viewer window visible on screen.
  viewer.show();
  // Run main loop.
  application.exec();
  return 0;
}
