export const typeDef = `
  type Record {
    standingsType: String
    division: Division
    conference: Conference
    teamRecord: [TeamRecord]
  }
`
//     league: League

export const resolvers = {
  Record: {
    division: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.getDivision(parent.division.id),
    conference: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.getConference(parent.conference.id),
  },
}
