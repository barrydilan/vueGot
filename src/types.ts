export interface Character {
  name: string
  slug: string
  house: Pick<House, 'name' | 'slug'>
  quotes: string[]
}

export interface House {
  name: string
  slug: string
  members: Pick<Character, 'name' | 'slug'>[]
}

export interface Quote {
  sentence: string
  character: Pick<Character, 'name' | 'slug' | 'house'>
}

export type ServerResponse = Character | House | Quote

export type ServerArrayResponse<T extends ServerResponse> = T[]

export interface ApiResponse<T> {
  data: T[]
}

export type Data<T> = T extends Character
  ? Character
  : T extends House
    ? House
    : T extends Quote
      ? Quote
      : never
