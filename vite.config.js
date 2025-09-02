
import { defineConfig } from 'vite'

export default defineConfig(async () => {
    const vue = (await import('@vitejs/plugin-vue')).default
    return {
        plugins: [vue()],
        optimizeDeps: {
            esbuildOptions: {
                conditions: ['development', 'browser'],
                mainFields: ['module', 'jsnext:main', 'jsnext']
            }
        }
    }
})
