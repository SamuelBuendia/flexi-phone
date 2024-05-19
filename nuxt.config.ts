export default defineNuxtConfig({
  // router: {
  //   middleware: 'auth'
  // },
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: '',
  },
  plugins: [
    '~/plugins/auth0'
  ],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: 0 }],
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    viewer: true,
  },
});
