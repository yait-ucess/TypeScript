import { Scoreable } from "./interfaces.js";
import { AchieveList } from "./achieveList.js";

export class Score implements Scoreable {
  private static instance: Score; 
  get totalScore() {
    const achieveList = AchieveList.getInstance();
    return achieveList.activeElementsScore.reduce((total, score) => total + score, 0);
  }

  render() {
    document.querySelector('.score__number')!.textContent = String(this.totalScore);
  }

  private constructor() {}
  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score();
    }
    return Score.instance;
  }
}