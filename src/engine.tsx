import { Game, Venue } from "./types";
import { findVenue } from "./Venues";

export default class Engine {
  private game: Game;
  venue: Venue;

  constructor(game: Game) {
    this.game = game;
    this.venue = findVenue(game.venueId);
  }

  fullRow(positionIdx: number): boolean {
    return this.game.result
      .flatMap((round) => round[positionIdx])
      .every(Boolean);
  }

  bonusPosition(roundIdx: number, attemptIdx: number): boolean {
    return (
      (roundIdx === 0 && attemptIdx === 0) ||
      (roundIdx === 2 && attemptIdx === 1)
    );
  }

  scoreAttempt(roundIdx: number, positionIdx: number, attemptIdx: number) {
    return this.game.result[roundIdx][positionIdx][attemptIdx]
      ? this.venue.layout[positionIdx] +
          (this.bonusPosition(roundIdx, attemptIdx)
            ? this.bonusLevel(positionIdx)
            : 0)
      : 0;
  }

  scoreGame() {
    let baseScore = this.game.result.reduce((sum, round, i) => {
      return (
        sum +
        round.reduce((roundSum, position, j) => {
          return (
            roundSum + this.scoreAttempt(i, j, 0) + this.scoreAttempt(i, j, 1)
          );
        }, 0)
      );
    }, 0);
    return (
      baseScore +
      this.venue.layout.reduce((sum, positionValue, positionIdx) => {
        return sum + (this.fullRow(positionIdx) ? positionValue : 0);
      }, 0)
    );
  }

  private bonusLevel(positionIdx: number) {
    return positionIdx <= 3 ? this.venue.defaultBonus : this.venue.longBonus;
  }
}

// const score = (grid) => {
//     const baseScore = grid.reduce((sum, row, i) => {
//       const successCount = row.filter((col) => col).length;
//       const base = successCount * POSITIONS[i];
//       const bonus = POSITIONS[i] <= 25 ? 5 : 10;
//       const firstBonus = row[0] ? bonus : 0;
//       const lastBonus = row[row.length - 1] ? bonus : 0;
//       const allBonus = successCount === row.length ? POSITIONS[i] : 0;
//       return sum + base + firstBonus + lastBonus + allBonus;
//     }, 0);
//     return baseScore;
//   }
