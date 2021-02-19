import { createClient} from 'urql';
import { getToken } from 'utils/tokens';

const client = createClient({
  url: 'https://cms.trial-task.k8s.ext.fcse.io/graphql',
  fetchOptions: (a) => {
    console.log("a",a)
    const token = getToken();
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  },
});

export default client;
