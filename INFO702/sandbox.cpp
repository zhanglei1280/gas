#include <iostream>
#include <string>

std::string console(std::string code)
{
    return "\033[" + code + "m";
}

// virtual : redefinable

class Affichable
{
  public:
    virtual void afficheMoi() = 0;
};

class Double : public Affichable{
    public:
    double _val;
    Double(double v) : _val(v) {}
    virtual void afficheMoi(){
        std::cout << _val;
    }
};

void affiche(Affichable* t[], int n){
    for(int i = 0; i < n; i++){
        t[i] -> afficheMoi();
        std::cout << " ";
    }
    std::cout << std::endl;
}

int main(int argc, char const *argv[])
{
    int nb = 2;
    std::string worlds[] = {"Earth", "Mars"};
    auto fg_red = console("1;31");
    auto bg_yellow = console("43");
    auto reset = console("0");
    std::cout << "Héllo world"
              << fg_red << "red"
              << bg_yellow << "yellow"
              << reset << "reset"
              << std::endl;
    return 0;
}
