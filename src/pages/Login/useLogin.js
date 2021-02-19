import { useMutation } from "urql";
import get from 'lodash/get'
import { useHistory } from "react-router-dom";
import { LOGIN } from "graphql/mutations";
import { setToken } from "utils/tokens";

const useLogin = ({identifier, password}) => {
  const [_, login] = useMutation(LOGIN);
  
  const history = useHistory();

  const onSubmit = async () => {
    const { data } = await login({
      input: {
        identifier,
        password,
      },
    });

    if (data) {
      const token = get(data,'login.jwt','')
      setToken(token)
      history.push("/app/dashboard");
    }
  };

  return {
    onSubmit,
  };
};

export default useLogin;
