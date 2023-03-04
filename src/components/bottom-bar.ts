import formatter from "../helpers/formatter";
import Component from "../lib/component";
import { BottomBar, TextOptions } from "../index.d";

const defaultOptions = {
  empty: true,
};

export class ComponentBottomBar extends Component<BottomBar.Options> {

  constructor() {
    super(defaultOptions);
  }

  get empty(): boolean {
    return this.options.empty;
  }

  set empty(value: boolean) {
    this.options.empty = value;
  }

  clear(): void {
    this.buffer = '';
    this._updateBuffer();
  }

  write(buffer: string, options?: TextOptions): void {
    this.buffer = formatter.formatText(buffer, options);
    this._updateBuffer();
  }
}

export default ComponentBottomBar;