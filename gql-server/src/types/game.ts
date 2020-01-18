export const typeDef = `
  type Game {
    gamePk: Int!
    season: String
    gameDate: String
    venue: Venue
    homeTeam: GamedayTeamSummary
    awayTeam: GamedayTeamSummary
  }
  `

export const resolvers = {
  Game: {
    homeTeam: (parent: any, args: any, context: any) => parent.teams.home,
    awayTeam: (parent: any, args: any, context: any) => parent.teams.away,
  },
}
