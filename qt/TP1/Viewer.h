/// \file Viewer.h
#include <vector>
#include <QGLViewer/qglviewer.h>
#include "Utils.h"

class Viewer : public QGLViewer
{
 public:
  const TriangleSoup* ptrSoup;

  //Viewer() : QGLViewer() {}
  Viewer(TriangleSoup* aSoup = 0) : QGLViewer(), ptrSoup( aSoup ) {}
  
 protected :
  /// Called at each draw of the window
  virtual void draw();
  /// Called before the first draw
  virtual void init();
  /// Called when pressing help.
  virtual QString helpString() const;
};
