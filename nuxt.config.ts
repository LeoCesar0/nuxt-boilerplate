import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "./src",
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/utils.scss" as *;',
        },
      },
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  css: [
    "@/styles/global.scss",
  ],
  modules: ["@vueuse/nuxt"],
  // imports: {
  //   dirs: ["composables/*.ts", "composables/**/*.ts", "components/**/*.vue"],
  // },
  alias: {
    "@": resolve(__dirname, "./src"),
    assets: "/<rootDir>/assets",
  },
});
