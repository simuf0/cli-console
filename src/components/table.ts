import CliTable3 from "cli-table3";
import Component from "../lib/component";
import { Table } from "../index.d";

const defaultOptions: Table.Options = {
  compact: false,
};

export class ComponentTable extends Component<Table.Options> {

  constructor(options?: Partial<Table.Options>) {
    super(defaultOptions);
    if(options) this.options = options;
  }

  write(rows: Table.Rows, options?: Partial<Table.Options>): void {
    options = { ...this.options, ...options };
    if (options?.compact) options = this._setCompact(options);
    const table = new CliTable3(options);
    for (const row of rows) table.push(row);
    this.buffer = table.toString();
    this._updateBuffer();
  }
  
  private _setCompact(options: Partial<Table.Options>): Partial<Table.Options> {
    options.chars = { 
      'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': '', 
      'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': '',
      'left': '' , 'left-mid': '' , 'right': '' , 'right-mid': '' ,
      'middle': ' ', 'mid': '-' , 'mid-mid': ''
    };
    options.style = {
      compact: true,
      'padding-left': 0,
      'padding-right': 0,
    };
    return options;
  }
}

export default ComponentTable;