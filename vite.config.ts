import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    SvelteKitPWA({
      injectRegister: 'script-defer',
      useCredentials: true,
      scope: '/',
      base: '/',
      manifest: {
        start_url: '/',
        name: 'Whippit! by @pongstr',
        short_name: 'whippit',
        description: 'a Github Gist + Stackblitz + Obsidian in one.',
        theme_color: '#c6a0f6',
        display: 'standalone',
        icons: [
          {
            src: '/pwa/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '/pwa/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa/maskable-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        screenshots: [
          {
            src: '/pwa/screenshot-desktop.png',
            sizes: '1092x746',
            type: 'image/png',
            form_factor: 'wide',
            label: 'whippit!',
          },
          {
            src: '/pwa/screenshot-mobile.png',
            sizes: '510x931',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'whippit!',
          },
        ],
      },
      workbox: { cleanupOutdatedCaches: true },
    }),
    devtoolsJson(),
  ],
})
