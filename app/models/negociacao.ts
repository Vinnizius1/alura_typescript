export class Negociacao {
  // O símbolo "#" é do Javascript
  // #data;
  // #quantidade;
  // #valor;

  // No Typescript utilizamos "private"
  private _data;
  private _quantidade;
  private _valor;

  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }
}
