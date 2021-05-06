import { Score } from "./score.js";
export class Achieve {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('achieve--active');
        const score = Score.getInstance();
        score.render();
        if (score.totalScore == 15) {
            alert('おめでとう！  今日も頑張ったね！');
        }
        this.element.classList.toggle('achieve--end');
    }
}
