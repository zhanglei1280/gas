LD=g++
CXX=g++ -g -c

EXEC_SRC=\
	testGrayLevelImage2D.cpp \
	testColorImage2D.cpp \
	invert_red_blue.cpp

MODULE_SRC=\

MODULE_OBJ=${MODULE_SRC:.cpp=.o}
EXEC_OBJ=${EXEC_SRC:.cpp=.o}

EXEC_PRG=${EXEC_SRC:.cpp=}

all: ${EXEC_PRG} ${MODULE_OBJ} ${EXEC_OBJ}

testGrayLevelImage2D: testGrayLevelImage2D.o ${MODULE_OBJ} Image2DWriter.hpp
	${LD} ${MODULE_OBJ} $< -o $@
	
testColorImage2D: testColorImage2D.o ${MODULE_OBJ} Image2DWriter.hpp
	${LD} ${MODULE_OBJ} $< -o $@

invert_red_blue: invert_red_blue.o ${MODULE_OBJ} Image2DReader.hpp Image2DWriter.hpp
	${LD} ${MODULE_OBJ} $< -o $@


.cpp.o: %.cpp %.hpp
	${CXX} $<

clean:
	rm -f ${EXEC_PRG} ${MODULE_OBJ} ${EXEC_OBJ}
