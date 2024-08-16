export class Topic {

  public id:number;
  public nome:string;
  public created_at:string;
  public update_at:string;

  constructor(id:number, nome:string, created_at:string, update_at:string) {
    this.id = id;
    this.nome = nome;
    this.created_at = created_at;
    this.update_at = update_at;
  }

//  getId():number {
//    return this._id;
//  }
//
//  getNome():string {
//    return this._nome;
//  }

}
