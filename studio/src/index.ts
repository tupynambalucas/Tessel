/**
 * Elo Organico Workspace - Entry Point
 * 
 * Re-exports strategy, brand, and content metadata to be consumed 
 * by other packages (frontend/backend).
 */

export * from './tokens.js';
export * from './icons/index.js';

export const metadata = {
  name: '@elo-organico/workspace',
  version: '0.1.0',
  updatedAt: new Date().toISOString(),
};
