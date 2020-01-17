import merge from 'lodash.merge'
import {
  typeDef as Conference,
  resolvers as conferenceResolvers,
} from './conference'
import { typeDef as Division, resolvers as divisionResolvers } from './division'
import {
  typeDef as Franchise,
  resolvers as franchiseResolvers,
} from './franchise'
import { typeDef as LeagueRecord } from './leagueRecord'
import { typeDef as Player } from './player'
import { typeDef as Position } from './position'
import { typeDef as Record, resolvers as recordResolvers } from './team'
import { typeDef as Streak } from './streak'
import { typeDef as Team, resolvers as teamResolvers } from './team'
import { typeDef as TeamRecord } from './teamRecord'
import { typeDef as Timezone } from './timezone'
import { typeDef as Venue } from './venue'

const Query = `
  type Query {
    _empty: String
  }
`

export const resolvers = merge(
  {},
  conferenceResolvers,
  divisionResolvers,
  franchiseResolvers,
  recordResolvers,
  teamResolvers,
)

export const typeDefs = [
  Conference,
  Division,
  Franchise,
  LeagueRecord,
  Player,
  Position,
  Query,
  Record,
  Streak,
  Team,
  TeamRecord,
  Timezone,
  Venue,
]
