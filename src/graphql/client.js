import { createClient} from 'urql';
import { getToken } from 'utils/tokens';

const client = createClient({
  url: 'https://cms.trial-task.k8s.ext.fcse.io/graphql',
  fetchOptions: () => {
    const token = getToken();
    return  window.location.pathname === '/login' ?  {} : { headers: { Authorization: `Bearer ${token}` } }  ;
  },
});

export default client;
