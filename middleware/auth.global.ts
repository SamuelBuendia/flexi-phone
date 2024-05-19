import auth0Info from "~/composables/auth0";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAuthenticated } = auth0Info();

  if (!isAuthenticated.value && to.path !== "/") {
    return navigateTo("/");
  }
});
