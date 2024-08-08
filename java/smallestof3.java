import java.util.Scanner;

public class smallestof3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        int num1 = sc.nextInt();
        System.out.print("Enter the second number: ");
        int num2 = sc.nextInt();
        System.out.print("Enter the third number: ");
        int num3 = sc.nextInt();
        int smallest = (num1 < num2) ? 
                       ((num1 < num3) ? num1 : num3) : 
                       ((num2 < num3) ? num2 : num3);
        System.out.println("The smallest number is: " + smallest);
        sc.close();
    }
}
