import { Logger } from "../../../src/utils/logger";

export class LoggerMock implements Logger {
    public logs: string[] = [];
    public errors: string[] = [];

  log(message: string): void {
    this.logs.push(message); // Mock implementation for logging
  }

  error(message: string): void {
    this.errors.push(message); // Mock implementation for error logging
  }
}