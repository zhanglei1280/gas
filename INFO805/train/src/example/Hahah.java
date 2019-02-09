package example;

public class Hahah {

    public static void main(String[] argv){
        Coordinate c1 = new Coordinate(1.2342, 4.564);
        Coordinate c2 = new Coordinate(5.2354, 9.345);
        double distance = c1.distance(c2);

        System.out.println(distance);
    }
}
