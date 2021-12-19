import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  constructor() {
    this.listaTransferencia = [];
  }
  get transferencias() {
    return this.listaTransferencia;
  }
  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.transferencias.push(transferencia);
  }
  hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
