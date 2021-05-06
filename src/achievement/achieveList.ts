class AchieveList implements AchieveListable {
  private static instance: AchieveList;
  elements = document.querySelectorAll<HTMLDivElement>('.achieve');
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach(element => {
      if (element.classList.contains('achieve--active')) {
        this._activeElements.push(element);
      }
    })
    return this._activeElements;
  }

  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach(element => {
      const achieveScore = element.querySelector('.achieve__score');
      if (achieveScore) {
        this._activeElementsScore.push(Number(achieveScore.textContent));
      }
    })
    return this._activeElementsScore;
  }

  private constructor() {
    this.elements.forEach(element => {
      new Achieve(element);
    })
  }
  static getInstance() {
    if (!AchieveList.instance) {
      AchieveList.instance = new AchieveList();
    }
    return AchieveList.instance;
  }
}