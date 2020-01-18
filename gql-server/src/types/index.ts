import merge from 'lodash.merge'
import {
  typeDef as Conference,
  resolvers as conferenceResolvers,
} from './conference'
import { typeDef as Date } from './date'
import { typeDef as Division, resolvers as divisionResolvers } from './division'
import {
  typeDef as Franchise,
  resolvers as franchiseResolvers,
} from './franchise'
import { typeDef as Game, resolvers as gameResolvers } from './game'
import {
  typeDef as GamedayTeamSummary,
  resolvers as gamedayTeamSummaryResolvers,
} from './gamedayTeamSummary'
import { typeDef as LeagueRecord } from './leagueRecord'
import { typeDef as Player } from './player'
import { typeDef as Position } from './position'
import { typeDef as Record, resolvers as recordResolvers } from './record'
import { typeDef as Schedule, resolvers as scheduleResolvers } from './schedule'
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
  gameResolvers,
  gamedayTeamSummaryResolvers,
  recordResolvers,
  scheduleResolvers,
  teamResolvers,
)

export const typeDefs = [
  Conference,
  Date,
  Division,
  Franchise,
  Game,
  GamedayTeamSummary,
  LeagueRecord,
  Player,
  Position,
  Query,
  Record,
  Schedule,
  Streak,
  Team,
  TeamRecord,
  Timezone,
  Venue,
]
