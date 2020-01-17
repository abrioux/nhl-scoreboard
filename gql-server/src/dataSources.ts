import { RESTDataSource } from 'apollo-datasource-rest'

export class NHLAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = `https://statsapi.web.nhl.com/api/v1/`
  }

  async getConference(id: number) {
    const response = await this.get(`conferences/${id}`)
    const [conference] = response.conferences
    return conference
  }

  async getConferences() {
    const response = await this.get(`conferences`)
    return response.conferences
  }

  async getDivision(id: number) {
    const response = await this.get(`divisions/${id}`)
    const [division] = response.divisions
    return division
  }

  async getDivisions() {
    const response = await this.get(`divisions`)
    return response.divisions
  }

  async getFranchise(id: number) {
    const response = await this.get(`franchises/${id}`)
    const [franchise] = response.franchises
    return franchise
  }

  async getFranchises() {
    const response = await this.get(`franchises`)
    return response.franchises
  }

  async getTeam(id: number) {
    const response = await this.get(`teams/${id}`)
    const [team] = response.teams
    return team
  }

  async getTeams() {
    const response = await this.get(`teams`)
    return response.teams
  }
}
