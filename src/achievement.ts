interface Scoreable {
  readonly totalScore: number;
  render(): void;
}
interface Achieveable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}
interface AchieveListable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}

class Score implements Scoreable {
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

class Achieve implements Achieveable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this))
  }
  clickEventHandler() {
    this.element.classList.toggle('achieve--active');
    const score = Score.getInstance();
    score.render();
    if (score.totalScore >= 15) {
      alert('おめでとう！  今日も頑張ったね！');
    }
    this.element.classList.toggle('achieve--end');
  }
}

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

const achieveList = AchieveList.getInstance();