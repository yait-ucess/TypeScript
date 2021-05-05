"use strict";
class Score {
}
class Achieve {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('achieve--active');
    }
}
class AchieveList {
    constructor() {
        this.elements = document.querySelectorAll('.achieve');
        this._activeElements = [];
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
}
const achieveList = new AchieveList();
