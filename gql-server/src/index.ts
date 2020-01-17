import { ApolloServer } from 'apollo-server'
import { environment } from './environment'
import { NHLAPI } from './dataSources'
import { typeDefs, resolvers } from './types'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      nhlAPI: new NHLAPI(),
    }
  },
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
})

server
  .listen(environment.port)
  .then(({ url }) => console.log(`Server ready at ${url}. `))

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => server.stop())
}
