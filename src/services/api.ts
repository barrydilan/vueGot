import type { Character, House, Quote } from '@/types'

export default class GameOfThronesAPI {
  private baseURL: string

  constructor() {
    this.baseURL = 'https://api.gameofthronesquotes.xyz/v1'
  }

  private async fetchData(url: string): Promise<any> {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}, status: ${response.status}`)
    }

    return response.json()
  }

  async getRandomQuotes(count: number): Promise<Quote[]> {
    const url = `${this.baseURL}/random/${count}`
    return this.fetchData(url)
  }

  async getCharacterQuotes(author: string, count: number): Promise<any> {
    const url = `${this.baseURL}/author/${author}/${count}`
    return this.fetchData(url)
  }

  async getAllHouses(): Promise<House[]> {
    const url = `${this.baseURL}/houses`
    return this.fetchData(url)
  }

  async getSingleHouse(house: string): Promise<any> {
    const url = `${this.baseURL}/house/${house}`
    return this.fetchData(url)
  }

  async getAllCharacters(): Promise<Character[]> {
    const url = `${this.baseURL}/characters`
    return this.fetchData(url)
  }

  async getSingleCharacter(name: string): Promise<any> {
    const url = `${this.baseURL}/character/${name}`
    return this.fetchData(url)
  }
}
