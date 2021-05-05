class Score {

}

class Achieve {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this))
  }
  clickEventHandler() {
    this.element.classList.toggle('achieve--active')
  }
}

class AchieveList {
  elements = document.querySelectorAll<HTMLDivElement>('.achieve');
  private _activeElements: HTMLDivElement[] = [];
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach(element => {
      if (element.classList.contains('achieve--active')) {
        this._activeElements.push(element);
      }
    })
    return this._activeElements;
  }
  constructor() {
    this.elements.forEach(element => {
      new Achieve(element);
    })
  }
}

const achieveList = new AchieveList();