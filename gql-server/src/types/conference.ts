export const typeDef = `
  extend type Query {
    conference(id: Int): Conference
    conferences: [Conference]
  }

  type Conference {
    id: ID!
    name: String
    abbreviation: String
    shortName: String
    active: Boolean
  }
`

export const resolvers = {
  Query: {
    conference: (
      parent: any,
      args: any,
      context: any,
    ) => context.dataSources.nhlAPI.getConference(args.id),
    conferences: (
      parent: any,
      args: any,
      context: any,
    ) => context.dataSources.nhlAPI.getConferences(),
  },
}
