#ifndef _IMAGE2D_HPP_
#define _IMAGE2D_HPP_
#include <vector>

/// Classe générique pour représenter des images 2D.
template <typename TValue>
class Image2D 
{
  	public:
		typedef Image2D<TValue>    Self;      // le type de *this
		typedef TValue             Value;     // le type pour la valeur des pixels
		typedef std::vector<Value> Container; // le type pour stocker les valeurs des pixels de l'image.
		
		struct Iterator : public Container::iterator 
        {
            Iterator( Self& Image, int x, int y )
			: Container::iterator( Image.m_data.begin() + Image.index( x, y ) )
  			{}
        };

		struct ConstIterator : public Container::const_iterator
        {
            ConstIterator( const Self& Image, int x, int y ) 
			: Container::const_iterator( Image.m_data.cbegin() + Image.index( x, y ) ) 
  			{}
        };


		ConstIterator cbegin() const
		{
			return cstart(0, 0);
		}

		ConstIterator cend() const
		{
			return cstart( 0, h() );
		}

		ConstIterator cstart(int x, int y) const
		{
			return ConstIterator(*this, x, y);
		}

		Iterator begin()
		{
			return start(0, 0);
		}

		Iterator end()
		{
			return start( 0, h() );
		}

		Iterator start(int x, int y)
		{
			return Iterator(*this, x, y);
		}

		// Constructeur par défaut
		Image2D()
		{
			m_width  = 0;
			m_height = 0;
		}

		// Constructeur avec taille w x h. Remplit tout avec la valeur g
		// (par défaut celle donnée par le constructeur par défaut).
		Image2D( int w, int h, Value g = Value())
		: m_data( w*h, g )
		{
			m_width  = w;
			m_height = h;
		}
		
		// Remplit l'image avec la valeur \a g.
		void fill( Value g );
		
		/// @return la largeur de l'image.
		int w() const
		{
			return m_width;
		}
		/// @return la hauteur de l'image.
		int h() const
		{
			return m_height;
		}
		
		void setW(int w)
		{
			m_width = w;
		}

		void setH(int h)
		{
			m_height = h;
		}
		/// Accesseur read-only à la valeur d'un pixel.
		/// @return la valeur du pixel(i,j)
		Value at( int i, int j ) const
		{
			return m_data[ index(i, j) ];
		}
		     
		/// Accesseur read-write à la valeur d'un pixel.
		/// @return une référence à la valeur du pixel(i,j)
		Value& at( int i, int j )
		{
			return m_data[ index(i, j) ];
		}
		
		Container& getData()
		{
			return m_data;
		}
  
	private:
		Container m_data; // mes données; évitera de faire les allocations dynamiques
		int m_width; // ma largeur
		int m_height; // ma hauteur
		int index( int x, int y ) const
		{
			return m_width * y + x;
		}
  
  		/// @return l'index du pixel (x,y) dans le tableau \red m_data.
  		
};
#endif 




























