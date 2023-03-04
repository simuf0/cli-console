import figlet from "figlet";
import formatter from "../helpers/formatter";
import Component from "../lib/component";
import { Title } from "../index.d";

const defaultOptions: Title.Options = {
};

export class ComponentTitle extends Component<Title.Options> {

  constructor(options?: Partial<Title.Options>) {
    super(defaultOptions);
    if(options) this.options = options;
  }

  write(value: string, options?: Partial<Title.Options>): void {
    options = { ...this.options, ...options };
    this.buffer = figlet.textSync(value, options);
    this.buffer = formatter.formatText(this.buffer, options);
    if (options?.margin) {
      this.buffer = formatter.margin(this.buffer, options.margin);
    }
    this._updateBuffer();
  }
}

export default ComponentTitle;