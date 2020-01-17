export const typeDef = `
  extend type Query {
    franchise(id: Int): Franchise
    franchises: [Franchise]
  }

  type Franchise {
    franchiseId: ID!
    teamName: String
    firstSeasonId: Int
    mostRecentTeamId: Int
    locationName: String
  }
`

export const resolvers = {
  Query: {
    franchise: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.getFranchise(args.id),
    franchises: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.getFranchises(),
  }
}
