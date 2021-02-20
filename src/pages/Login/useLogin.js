import { useMutation } from "urql";
import get from "lodash/get";
import { useHistory } from "react-router-dom";
import { LOGIN } from "graphql/mutations";
import { setToken } from "utils/token";

const useLogin = ({ identifier, password , setLoad , setError}) => {
  const [_, login] = useMutation(LOGIN);

  const history = useHistory();

  const handleSubmit = async (event) => {
    setLoad(true)
    event.preventDefault();
    const { data} = await login({
      input: {
        identifier,
        password,
      },
    });

    if (data) {
      const token = get(data, "login.jwt", "");
      setToken(token);
      history.push("/");
    } else {
      setLoad(false)
      setError("Identifier or password invalid.")
    }
  };

  return {
    handleSubmit,
  };
};

export default useLogin;
