import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the built app works from a sub-path such as
// https://<user>.github.io/pdf-studio/ (GitHub Pages) as well as from a domain root.
export default defineConfig({ base: './', plugins: [react()] });
