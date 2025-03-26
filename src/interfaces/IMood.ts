export default interface IMood {
  hunger?: number
  happiness?: number
  energy?: number
}

export interface IMoodAge extends IMood {
  age?: number
}
