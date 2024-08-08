public class fibonacci {
    public static void main(String[] args) {
        int n = 10; // Number of terms in the Fibonacci series
        
        // Initialize the first two Fibonacci numbers
        int a = 0, b = 1;
        
        System.out.println("Fibonacci Series up to " + n + " terms:");
        
        // Print the first two Fibonacci numbers
        System.out.print(a + " " + b + " ");
        
        // Calculate and print the rest of the Fibonacci numbers
        for (int i = 2; i < n; i++) {
            int next = a + b;
            System.out.print(next + " ");
            a = b;
            b = next;
        }
    }
}
