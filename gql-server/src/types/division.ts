export const typeDef = `
  extend type Query {
    division(id: Int): Division
    divisions: [Division]
  }

  type Division {
    id: ID!
    name: String
    nameShort: String
    abbreviation: String
    conference: Conference
    active: Boolean
  }
`

export const resolvers = {
  Query: {
    division: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.getDivision(args.id),
    divisions: (parent: any, args: any, context: any) =>
      context.nhlAPI.getDivisions(),
  },
  Division: {
    conference: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.getConference(parent.conference.id),
  },
}
