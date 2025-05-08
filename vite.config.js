import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ask-a-rad-trad/', 
  plugins: [react()],
});
