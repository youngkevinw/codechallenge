export interface Logger {
  log: (message: string) => void;   // Log a message
  error: (message: string) => void; // Log an error message
}

export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message); //successful for valid updates/adds
  }

  error(message: string): void {
    console.error(message); //error logs for invalid updates/adds
    }
}