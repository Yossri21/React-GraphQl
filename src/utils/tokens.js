const setToken = (val) => localStorage.setItem("token", val);

const getToken = () => localStorage.getItem("token");

export { getToken, setToken };
