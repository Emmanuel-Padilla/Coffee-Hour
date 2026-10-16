import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import { allStaticPaths } from './src/routes';
const SITE_URL = 'https://coffeehourchapala.com';
export default defineConfig({
    envPrefix: ['VITE_', 'PUBLIC_'],
    plugins: [
        react(),
        sitemap({
            hostname: SITE_URL,
            dynamicRoutes: allStaticPaths,
            exclude: ['/404'],
            generateRobotsTxt: false,
        }),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    build: {
        sourcemap: false,
    },
});
