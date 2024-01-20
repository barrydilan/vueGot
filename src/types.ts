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
