import { Buffer } from 'buffer'; // Import Buffer explicitly for clarity

export function encodedCredentials(username?: string, password?: string): string {
  return Buffer.from(`${username}:${password}`).toString('base64');
}