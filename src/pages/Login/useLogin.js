import { useMutation } from "urql";
import get from "lodash/get";
import { useHistory } from "react-router-dom";
import { LOGIN } from "graphql/mutations";
import { setToken } from "utils/token";

const useLogin = ({ identifier, password }) => {
  const [_, login] = useMutation(LOGIN);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await login({
      input: {
        identifier,
        password,
      },
    });

    if (data) {
      const token = get(data, "login.jwt", "");

      setToken(token);
      history.push("/");
    }
  };

  return {
    handleSubmit,
  };
};

export default useLogin;
