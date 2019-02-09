package example;

public class Coordinate {
    private double x;
    private double y;

    public Coordinate(double x, double y){
        this.x = x;
        this.y = y;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    final double rayon = 6378.137;

    public double distance(Coordinate c){
/*
double delta_lambda = longitude_B - longitude_A;
        return (Math.toRadians(Math.acos(Math.sin(latitude_A) * Math.sin(latitude_B) + Math.cos(latitude_A)
                * Math.cos(latitude_B) * Math.cos(delta_lambda))) * 6378.137);
 */
        double deltaLambda = c.getY() - y;
        double angle = Math.acos(
                Math.sin(x) * Math.sin(c.getX()) +
                        Math.cos(y) * Math.cos(c.getY()) *
                                Math.cos(deltaLambda)
        );

        return Math.toRadians(angle) * rayon;

    }
}
