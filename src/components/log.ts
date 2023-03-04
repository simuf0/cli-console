import formatter from "../helpers/formatter";
import Component from "../lib/component";
import { Log } from "../index.d";

const defaultOptions: Log.Options = {
};

export class ComponentLog extends Component<Log.Options> {

  constructor(options?: Partial<Log.Options>) {
    super(defaultOptions);
    if(options) this.options = options;
  }

  write(messages: Log.Messages): void {
    if (typeof messages[0] == 'string') {
      let options = { ...this.options, ...messages[1] };
      this.buffer = formatter.formatText(messages[0], options);
    } else {
      for (const m of messages as Log.Message[]) {
        let options = { ...this.options, ...m };
        this.buffer += formatter.formatText(m.message, options);
    }}
    this._updateBuffer();
  }
}

export default ComponentLog;