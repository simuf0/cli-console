import formatter from "../helpers/formatter";
import Component from "../lib/component";
import { Notice } from "../index.d";

const defaultOptions: Notice.Options = {
  explicitNotices: true,
};

export class ComponentNotice extends Component<Notice.Options> {

  constructor(options?: Partial<Notice.Options>) {
    super(defaultOptions);
    if(options) this.options = options;
  }

  write(buffer: string, options?: Partial<Notice.Options>): void {
    options = { ...this.options, ...options };
    if (options?.icon) {
      this.buffer += formatter.formatText(options.icon, options);
      this.buffer += String.whitespace();
    }
    this.buffer += (options.explicitNotices)
      ? formatter.formatText(buffer, options)
      : buffer;
    this._updateBuffer();
  }
}

export default ComponentNotice;