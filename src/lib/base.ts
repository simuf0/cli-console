export abstract class Base<Options> {

  private _options: Options;

  constructor(options: Options) {
    this._options = options;
  }

  get options(): Options {
    return this._options;
  }

  set options(options: Options|Partial<Options>) {
    this._options = { ...this._options, ...options };
  }

  setOptions(options: Options|Partial<Options>): void {
    this.options = options;
  }
}

export default Base;