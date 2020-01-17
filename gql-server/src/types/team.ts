export const typeDef = `
  extend type Query {
    team(id: Int): Team
    teams: [Team]
  }

  type Team {
    id: ID!
    name: String
    venue: Venue
    abbreviation: String
    teamName: String
    locationName: String
    firstYearOfPlay: String
    division: Division
    conference: Conference
    franchise: Franchise
    shortName: String
    officialSiteUrl: String
    franchiseId: ID
    active: Boolean
  }
`

export const resolvers = {
  Query: {
    team: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.getTeam(args.id),
    teams: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.getTeams(),
  },
  Team: {
    division: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.getDivision(parent.division.id),
    conference: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.getConference(parent.conference.id),
    franchise: (parent: any, args: any, context: any) => {
      return context.dataSources.nhlAPI.getFranchise(parent.franchiseId)
    },
  },
}
