import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

export default defineConfig({
    base: '/community-management/',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),  // ← вот это и есть @
        },
    },
})
