import { Subject } from "rxjs";
import Base from "./base";

export abstract class Component<Options> extends Base<Options> {
  
  private _buffer: string;
  private _updateBuffer$: Subject<string>;

  constructor(options: Options) {
    super(options);
    this._buffer = '';
    this._updateBuffer$ = new Subject();
  }

  get buffer(): string {
    return this._buffer;
  }

  get updateBuffer$(): Subject<string> {
    return this._updateBuffer$;
  }

  set buffer(buffer: string) {
    this._buffer = buffer;
  }

  abstract write(...args: any): void;

  protected _updateBuffer(): void {
    this._updateBuffer$.next(this._buffer);
  }
}

export default Component;