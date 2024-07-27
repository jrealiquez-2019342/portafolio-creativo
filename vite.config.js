import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Configura la base URL
  build: {
    outDir: 'dist', // Carpeta de salida
    rollupOptions: {
      input: {
        main: './index.html', // Asegúrate de que el archivo principal esté bien configurado
      },
    },
  },
});
