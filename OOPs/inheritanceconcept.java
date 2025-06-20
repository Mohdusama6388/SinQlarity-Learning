class calculator {
    inta=10,b=20;
    public void add(){
        system.out.println("sum"+(a+b));
    }
}
// create a subclass by extending calculator.
public class main extends calculator
{
    public void sub (){}

system.out.println("difference"+(a-b));
}
public static void main (string [] args){
main obj = new main();
}
obj.add();
obj.sub();