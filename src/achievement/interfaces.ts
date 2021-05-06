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
