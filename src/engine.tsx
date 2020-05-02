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
      this.firstBonusPosition(roundIdx, attemptIdx) ||
      this.lastBonusPosition(roundIdx, attemptIdx)
    );
  }

  firstBonusPosition(roundIdx: number, attemptIdx: number): boolean {
    return roundIdx === 0 && attemptIdx === 0;
  }

  lastBonusPosition(roundIdx: number, attemptIdx: number): boolean {
    return roundIdx === 2 && attemptIdx === 1;
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

  successPercent(): string {
    const successCount = this.countBy(
      (roundIdx, positionIdx, attemptIdx, attempt) => attempt
    );
    return ((successCount / (6 * 6)) * 100).toFixed(1);
  }

  bonusPositionPercent(): { first: string; last: string; both: string } {
    const firstPositionCount = this.countBy(
      (roundIdx, positionIdx, attemptIdx, attempt) =>
        this.firstBonusPosition(roundIdx, attemptIdx) && attempt
    );
    const lastPositionCount = this.countBy(
      (roundIdx, positionIdx, attemptIdx, attempt) =>
        this.lastBonusPosition(roundIdx, attemptIdx) && attempt
    );
    console.log(firstPositionCount, lastPositionCount);

    return {
      first: ((firstPositionCount / 6) * 100).toFixed(1),
      last: ((lastPositionCount / 6) * 100).toFixed(1),
      both: (((firstPositionCount + lastPositionCount) / 12) * 100).toFixed(1),
    };
  }

  positionPercent(): string[] {
    return [...Array<string>(6)].map((_, idx) => {
      console.log("hej");
      return (
        (this.countBy(
          (roundIdx, positionIdx, attemptIdx, attempt) =>
            positionIdx === idx && attempt
        ) /
          6) *
        100
      ).toFixed(1);
    });
  }

  roundPercent(): number[] {
    return this.game.result.map((round, idx) =>
      Math.round(
        (this.countBy(
          (roundIdx, positionIdx, attemptIdx, attempt) =>
            roundIdx === idx && attempt
        ) /
          (6 * 2)) *
          100
      )
    );
  }

  // successPercent
  // Bonus rate { first, last}
  // distance percent {pos 1,2,3,4,5,6}

  countBy(
    pred: (
      roundIdx: number,
      positionId: number,
      attemptId: number,
      attempt: boolean
    ) => boolean
  ): number {
    return this.game.result.reduce((sum, round, roundIdx) => {
      return (
        sum +
        round.reduce((roundSum, position, positionIdx) => {
          return (
            roundSum +
            position.reduce((attemptSum, attempt, attemptIdx) => {
              return (
                attemptSum +
                (pred(roundIdx, positionIdx, attemptIdx, attempt) ? 1 : 0)
              );
            }, 0)
          );
        }, 0)
      );
    }, 0);
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
