import type { Character, House, Quote } from '@/types';

export default class GameOfThronesAPI {
  private readonly baseURL: string;

  constructor() {
    this.baseURL = 'https://api.gameofthronesquotes.xyz/v1';
  }

  private async fetchData<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}, status: ${response.status}`);
      }

      return response.json();
    } catch (error: any) {
      throw new Error(`Failed to fetch data from ${url}: ${error.message}`);
    }
  }

  async getRandomQuotes(count: number): Promise<Quote[]> {
    const url = `${this.baseURL}/random/${count}`;
    return this.fetchData<Quote[]>(url);
  }

  async getCharacterQuotes(author: string, count: number): Promise<Quote[]> {
    const url = `${this.baseURL}/author/${author}/${count}`;
    return this.fetchData<Quote[]>(url);
  }

  async getAllHouses(): Promise<House[]> {
    const url = `${this.baseURL}/houses`;
    return this.fetchData<House[]>(url);
  }

  async getSingleHouse(house: string): Promise<House> {
    const url = `${this.baseURL}/house/${house}`;
    return this.fetchData<House>(url);
  }

  async getAllCharacters(): Promise<Character[]> {
    const url = `${this.baseURL}/characters`;
    return this.fetchData<Character[]>(url);
  }

  async getSingleCharacter(name: string): Promise<Character> {
    const url = `${this.baseURL}/character/${name}`;
    return this.fetchData<Character>(url);
  }
}
