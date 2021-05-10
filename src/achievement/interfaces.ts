export default interface Scoreable {
  readonly totalScore: number;
  render(): void;
}
export interface Achieveable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}
export interface AchieveListable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}
