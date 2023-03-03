export abstract class Base<Options> {

  private _defaultOptions: Options;
  private _options: Options;

  constructor(defaultOptions: Options, options?: Partial<Options>) {
    this._defaultOptions = defaultOptions;
    this._options = { ...this._defaultOptions, ...options };
  }

  get options(): Options {
    return this._options;
  }

  set options(options: Options) {
    this._options = { ...this._options, ...options };
  }

  setOptions(options: Options): void {
    this.options = options;
  }
}

export default Base;