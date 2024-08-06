export default class Score {
  playerOneScore: number;
  playerTwoScore: number;

  constructor() {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
  }

  // When player one scores
  playerOneScores() {
    this.playerOneScore += 1;
  }

  // When player twoe scores
  playerTwoScores() {
    this.playerTwoScore += 1;
  }

  // Reset all scores
  reset() {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
  }
}