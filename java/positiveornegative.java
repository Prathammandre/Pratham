import java.util.Scanner;
public class positiveornegative {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);       
        System.out.print("Enter a number: ");
        int number = sc.nextInt();
        boolean negative = true;               
        if (number == 0) {
            negative = false; 
        } else if (number < 0) {
            negative = true;
        }
        else if (number >= 1) {
            negative = false;
        }     
        if (negative) {
            System.out.println(number + " is a negative number.");
        } else {
            System.out.println(number + " is a positive number.");
        }                           
                sc.close();
            }                    
}


