export class Negociacao {
  // O símbolo "#" é do Javascript
  // #data;
  // #quantidade;
  // #valor;

  // No Typescript utilizamos "private"
  private _data: Date;
  private _quantidade: number;
  private _valor: number;

  constructor(data: Date, quantidade: number, valor: number) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }
}
