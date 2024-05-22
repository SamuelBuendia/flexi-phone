import { useAuth0 } from "@auth0/auth0-vue";

const auth0Info = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  } = useAuth0();
  return {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  };
};

export default auth0Info;
