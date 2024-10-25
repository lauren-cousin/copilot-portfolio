import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: process.env.GITPOD_WORKSPACE_URL
      ? new URL(process.env.GITPOD_WORKSPACE_URL).hostname
      : 'localhost',
    port: 3000,
  },
});
