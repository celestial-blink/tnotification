import { defineConfig } from 'vite';
import path from 'path';

import nested from 'postcss-nested';
import simpleVars from 'postcss-simple-vars';
import mixins from 'postcss-mixins';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/layout/script.js'),
            name: "tnotification",
            fileName: "tnotification",
            formats: ['es', 'umd', 'cjs']
        }
    },
    base: "/",
    css: {
        devSourcemap: true,
        postcss: {
            plugins: [
                mixins({ silent: true }),
                simpleVars(),
                nested({ preserveEmpty: false })
            ]
        }
    },
    server: {
        port: 1111
    },
    resolve: {
        alias: {
            "@layouts": path.resolve(__dirname, "./src/layout/"),
            "@views": path.resolve(__dirname, "./src/views/"),
            "@helpers": path.resolve(__dirname, "./src/helpers/"),
            "@styles": path.resolve(__dirname, "./src/styles/"),
        }
    }
});