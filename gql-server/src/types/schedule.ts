export const typeDef = `
  extend type Query {
    schedule: Schedule
  }

  type Schedule {
    totalGames: Int
    dates: [Date]
  }
`

export const resolvers = {
  Query: {
    schedule: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.schedule(),
  },
}
