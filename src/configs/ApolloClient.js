import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';
import CONST from '../utils/constants';

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${CONST.REACT_APP_BASE_URL_WSS}`,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': `${CONST.REACT_APP_BASE_KEY}`,
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: `${CONST.REACT_APP_BASE_URL_HTTP}`,
  headers: {
    'x-hasura-admin-secret': `${CONST.REACT_APP_BASE_KEY}`,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
