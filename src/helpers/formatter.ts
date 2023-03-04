import chalk from "chalk";
import { TextOptions } from "../index.d";

export class Formatter {

  formatText(v: string, options?: TextOptions): string {
    v = (options?.color) ? chalk[options.color](v) : v;
    v = (options?.bgColor) ? chalk[options.bgColor](v) : v;
    if (options?.modifiers) {
      for (const m of options.modifiers) {
        v = chalk[m](v);
    }}
    return v;
  }

  margin(v: string, margin: number): string {
    const m = (lines: number): string => {
      let str: string = '';
      for (let i = 0; i < lines; i++) str += '\u000A';
      return str;
    };
    return m(margin) + v + m(margin);
  }
}

export const formatter = new Formatter();
export default formatter;