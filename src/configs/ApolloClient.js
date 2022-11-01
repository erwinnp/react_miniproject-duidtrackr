import { ApolloClient, InMemoryCache } from '@apollo/client';
import CONST from '../utils/constants';

export const client = new ApolloClient({
  uri: `${CONST.REACT_APP_BASE_URL}`,
  headers: {
    'x-hasura-admin-secret': `${CONST.REACT_APP_BASE_KEY}`,
  },
  cache: new InMemoryCache(),
});
