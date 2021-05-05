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
class Achieve {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('achieve--active');
        const score = Score.getInstance();
        score.render();
    }
}
class AchieveList {
    constructor() {
        this.elements = document.querySelectorAll('.achieve');
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach(element => {
            new Achieve(element);
        });
    }
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('achieve--active')) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const achieveScore = element.querySelector('.achieve__score');
            if (achieveScore) {
                this._activeElementsScore.push(Number(achieveScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
    static getInstance() {
        if (!AchieveList.instance) {
            AchieveList.instance = new AchieveList();
        }
        return AchieveList.instance;
    }
}
const achieveList = AchieveList.getInstance();
