export class Transaction {
  public id: number;
  public idMercadoPago: number;
  public status: string;
  public valor: number;
  public qrCodeBase64: string;
  public qrCode: string;
  public created_at: string;
  public updated_at: string;
  public dataCriacao: string;
  public id_usuario: number;

  constructor(id: number, idMercadoPago: number, status: string, valor: number, qrCodeBase64: string, qrCode: string, created_at: string, updated_at: string, dataCriacao: string, id_usuario: number) {
    this.id = id;
    this.idMercadoPago = idMercadoPago;
    this.status = status;
    this.valor = valor;
    this.qrCodeBase64 = qrCodeBase64;
    this.qrCode = qrCode;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.dataCriacao = dataCriacao;
    this.id_usuario = id_usuario;
  }
}
