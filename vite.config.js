import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/bill-split',
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      },
      includeAssets: ["vite.svg", "maskable_icon_x192.png", "maskable_icon_x512.png", "192.png", "512.png"],
      manifest: {
        name: "Bill Split",
        short_name: "Bill",
        description: "Bill",
        theme_color: "#242933",
        icons: [
          {
            "src": "vite.svg",
            "sizes": "32x32",
            "type": "image/x-icon"
          },
          {
            "src": "192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "maskable_icon_x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "maskable_icon_x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
      }
    })
  ],
})
