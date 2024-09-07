export class Currency {

  public time: string;
  public open: number;
  public high: number;
  public low: number;
  public close: number;
  public volume: number;

  constructor(time: string, open: number, high: number, low: number, close: number, volume: number) {
    this.time = time;
    this.open = open;
    this.high = high;
    this.low = low;
    this.close = close;
    this.volume = volume;
  }
}
