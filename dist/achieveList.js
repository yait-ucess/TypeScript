import { Achieve } from "./achieve.js";
export class AchieveList {
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
