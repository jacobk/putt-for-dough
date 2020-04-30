import { API, Game, Settings, Result, Venue } from "./types";

export default class Storage implements API {
  STORAGE_PREFIX = "dough_";
  GAMES_KEY = "games";
  SETTINGS_KEY = "settings";

  activeGame(): null | Game {
    return this.loadGames().filter((game) => !game.endTime)[0] || null;
  }

  createGame(venueId: string): Game {
    const game = {
      id: `game-${new Date().getTime()}`,
      result: this.buildInitResult(),
      venueId,
      startTime: new Date(),
      note: "",
      labels: [],
    };
    this.addGame(game);
    return game;
  }

  updateGame(game: Game): Game {
    this.writeGames(this.loadGames().map((g) => (g.id === game.id ? game : g)));
    return this.getGame(game.id);
  }

  getGame(id: string): Game {
    const game = this.loadGames().find((g) => g.id === id);
    if (game) {
      return game;
    }
    throw new Error("Game not found");
  }

  deleteGame(id: string): void {
    this.writeGames(this.loadGames().filter((g) => g.id !== id));
  }

  listGames(): Game[] {
    return this.loadGames();
  }

  getSettings(): Settings {
    return this.get(this.SETTINGS_KEY, () => ({
      darkMode: false,
    }));
  }

  updateSettings(settings: Settings): Settings {
    this.set(this.SETTINGS_KEY, settings);
    return this.getSettings();
  }

  listVenues(): Venue[] {
    throw new Error("Method not implemented.");
  }

  getVenue(id: string): Venue {
    throw new Error("Method not implemented.");
  }

  resetGame(game: Game): Game {
    game.result = this.buildInitResult();
    return this.updateGame(game);
  }

  completeGame(game: Game): Game {
    game.endTime = new Date();
    return this.updateGame(game);
  }

  private addGame(game: Game): void {
    const games = this.loadGames();
    games.push(game);
    this.writeGames(games);
  }

  private loadGames(): Game[] {
    return this.get(this.GAMES_KEY, () => []);
  }

  private writeGames(games: Game[]): void {
    this.set(this.GAMES_KEY, games);
  }

  private set<T>(key: string, value: T): T {
    localStorage.setItem(`${this.STORAGE_PREFIX}${key}`, JSON.stringify(value));
    return this.get(key, () => value);
  }

  private get<T>(key: string, producer: (k: string) => T): T {
    const data = localStorage.getItem(`${this.STORAGE_PREFIX}${key}`);
    if (data) {
      return JSON.parse(data);
    }

    return producer(key);
  }

  private decodeGame(raw: any): Game {
    raw.startTime = Date.parse(raw.startTime);
    if (raw.endTime) {
      raw.endTime = Date.parse(raw.endTime);
    }
    return raw;
  }

  private buildInitResult(): Result {
    return [
      [
        [false, false],
        [false, false],
        [false, false],
        [false, false],
        [false, false],
        [false, false],
      ],
      [
        [false, false],
        [false, false],
        [false, false],
        [false, false],
        [false, false],
        [false, false],
      ],
      [
        [false, false],
        [false, false],
        [false, false],
        [false, false],
        [false, false],
        [false, false],
      ],
    ];
  }
}
