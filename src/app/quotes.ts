export class Quotes {
  public showDescription: boolean;
  constructor(
    public id: number,
    public quote: string,
    public quoteCreator: string,
    public completeDate: Date,
    public votes: number
  ) {
    this.showDescription = false;
  }
}
