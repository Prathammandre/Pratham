import java.util.Scanner;
public class prime {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);       
        System.out.print("Enter a number: ");
        int number = sc.nextInt();
        boolean isPrime = true;               
        if (number <= 1) {
            isPrime = false;
        } else if (number == 2) {
            isPrime = true;
        }  
        else if (number % 2 ==0) {
            isPrime = false;
        } else if (number % number == 0) {
            isPrime = true;
        }     
        if (isPrime) {
            System.out.println(number + " is a prime number.");
        } else {
            System.out.println(number + " is not a prime number.");
        }                           
                sc.close();
            }                    
}
