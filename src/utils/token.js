import jwt_decode from "jwt-decode";

const setToken = (val) => localStorage.setItem("token", val);

const getToken = () => localStorage.getItem("token");

const cleanToken = () => localStorage.removeItem("token");

const decodeToken = () => {
  if (getToken()) {
    return jwt_decode(getToken());
  } else return {};
};

const validToken = () => {
  if (getToken()) {
    if (Date.now() >= decodeToken().exp * 1000) {
      return false;
    }
    return true;
  }
  return false;
};

export { getToken, setToken, decodeToken, cleanToken, validToken };
