export const typeDef = `
  type Player {
    id: ID!
    fullName: String
    firstName: String
    lastName: String
    primaryNumber: String
    birthDate: String
    currentAge: Int
    birthCity: String
    birthStateProvince: String
    birthCountry: String
    nationality: String
    height: String
    weight: Float
    active: Boolean
    alternateCaptain: Boolean
    captain: Boolean
    rookie: Boolean
    shootsCatches: String
    rosterStatus: String
    currentTeam: Team
    primaryPosition: Position
  }
`
