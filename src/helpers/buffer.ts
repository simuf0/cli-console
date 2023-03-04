import { WriteStream } from "tty";

export class Buffer {

  private _encoding: BufferEncoding;
  private _lines: number;
  private _stdout: WriteStream;

  constructor(encoding: BufferEncoding) {
    this._encoding = encoding;
    this._lines = 0;
    this._stdout = process.stdout;
  }

  clear(nbLines: number = this._lines): void {
    this._stdout.moveCursor(0, -nbLines);
    this._stdout.cursorTo(0);
    this._stdout.clearScreenDown();
    this._lines -= nbLines;
  }

  ln() {
    this.write('\u000A');
    this._lines++;
  }

  write(buffer: string) {
    this._stdout.write(buffer, this._encoding);
  }
}

export default Buffer;