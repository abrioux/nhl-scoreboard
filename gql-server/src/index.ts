import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

import { environment } from './environment'
import { NHLAPI } from './dataSources'
import { typeDefs, resolvers } from './types'

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    dataSources: () => {
      return {
        nhlAPI: new NHLAPI(),
      }
    },
    introspection: environment.apollo.introspection,
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => server.stop())
  }
}

startApolloServer()
