import config from "@/adapters/config";
import Cookies, { CookieSetOptions } from "universal-cookie";

const useToken = () => {
  const getLocalAccessToken = () => {
    const accessToken = new Cookies().get(config.constants.ACCESS_TOKEN);
    return accessToken;
  };

  const getLocalRefreshToken = () => {
    const refreshToken = new Cookies().get(config.constants.REFRESH_TOKEN);
    return refreshToken;
  };

  const updateLocalToken = (
    key: string,
    value: string,
    options?: CookieSetOptions
  ) => {
    const cookies = new Cookies();
    cookies.set(key, value, options);
  };

  const removeLocalToken = (key: string, options?: CookieSetOptions) => {
    new Cookies().remove(key, options);
  };

  return [
    {
      accessToken: getLocalAccessToken(),
      refreshToken: getLocalRefreshToken(),
    },
    {
      updateLocalToken,
      removeLocalToken,
    },
  ];
};

export default useToken;
