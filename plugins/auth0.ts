import { defineNuxtPlugin } from "#app";
import { createAuth0 } from "@auth0/auth0-vue";

export default defineNuxtPlugin((nuxtApp) => {
  // change for constants
  const config = {
    domain: "dev-sf8um1zm7yqlzm33.us.auth0.com",
    clientId: "CUTovtmkOKA4lS4pkvzGOSuQd4icWRGo",
    authorizationParams: {
      redirect_uri: window?.location.origin,
    },
  };
  const auth0 = createAuth0(config);
  nuxtApp.vueApp.use(auth0);
});
