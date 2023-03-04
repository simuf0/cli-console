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

  ln(): void {
    this.write('\u000A');
    this._lines++;
  }

  matchNewLines(buffer: string): void {
    const matchNewLines = buffer.match(/\n/g);
    this._lines += (matchNewLines?.length) ? matchNewLines.length : 0;
  }

  write(buffer: string): void {
    this._stdout.write(buffer, this._encoding);
  }
}

export default Buffer;