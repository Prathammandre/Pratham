public class factorial {
    public static void main(String[] args) {
        int n = 10; // Calculate factorial from 1 to 10
        
        // Loop through each number from 1 to n
        for (int i = 1; i <= n; i++) {
            int factorial = 1;
            
            // Calculate factorial of i
            for (int j = 1; j <= i; j++) {
                factorial *= j;
            }
            
            // Print the factorial
            System.out.println("Factorial of " + i + " = " + factorial);
        }
    }
}
