import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api/v1": "https://campusdiary.onrender.com",
//       // "/api/v1": "https://campusdiary.onrender.com/",
//     },
//   },
//   plugins: [react()],
// })


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
