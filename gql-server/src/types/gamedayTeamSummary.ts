export const typeDef = `
  type GamedayTeamSummary {
    leagueRecord: LeagueRecord
    score: Int
    team: Team
  }
`

export const resolvers = {
  GamedayTeamSummary: {
    team: (parent: any, args: any, context: any) =>
      context.dataSources.nhlAPI.getTeam(parent.team.id),
  },
}
