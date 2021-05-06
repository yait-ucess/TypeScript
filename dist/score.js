"use strict";
class Score {
    constructor() { }
    get totalScore() {
        const achieveList = AchieveList.getInstance();
        return achieveList.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}
