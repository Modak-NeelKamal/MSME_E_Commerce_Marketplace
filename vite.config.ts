import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MSME_E_Commerce_Marketplace",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
