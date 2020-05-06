export interface Location {
  lat: number;
  lon: number;
}

export type Layout = [number, number, number, number, number, number];

export interface Venue {
  id: string;
  name: string;
  description: string;
  layout: Layout;
  location: Location;
  address: string;
  defaultBonus: number;
  longBonus: number;
  special: boolean;
}

export type RoundResult = [
  [boolean, boolean],
  [boolean, boolean],
  [boolean, boolean],
  [boolean, boolean],
  [boolean, boolean],
  [boolean, boolean]
];

export type Result = [RoundResult, RoundResult, RoundResult];

export interface Game {
  id: string;
  result: Result;
  venueId: string;
  startTime: Date;
  endTime?: Date;
  note: string;
  labels: Array<string>;
}

export type GameHistory = Array<Game>;

export interface Settings {
  darkMode: boolean;
  showFeet: boolean;
  showMetric: boolean;
}

export interface API {
  activeGame(): Game | null;
  createGame(venueId: string): Game;
  updateGame(game: Game): Game;
  getGame(id: string): Game;
  deleteGame(id: string): void;
  listGames(): Array<Game>;
  getSettings(): Settings;
  updateSettings(settings: Settings): Settings;
  listVenues(): Array<Venue>;
  getVenue(id: string): Venue;
}
