import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';
import { resolve } from 'path';

function pathResolve(dir) {
    return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
        postcss: {},
    },
    resolve: {
        alias: [
            {
                find: /@\//,
                replacement: `${pathResolve('src')}/`,
            },
        ],
    },
    server: {
        port: 3000
    }
});
