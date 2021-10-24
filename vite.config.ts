import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [...(process.env.NODE_ENV !== 'test' ? [react()] : [])],
});
